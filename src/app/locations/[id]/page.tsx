import { getCharactersByIds, getLocation } from "~/lib/api"
import CharacterCard from "~/components/CharacterCard/CharacterCard"
import styles from './page.module.css'
import BackButton from '~/components/BackButton/BackButton'


type LocationDetailPageProps ={
    params: Promise<{id:string}>
}

const LocationDetailPage = async ({params}: LocationDetailPageProps) =>{
    const {id} = await params
    const location = await getLocation(id)
    const residentIds = location.residents.map((url) => url.split('/').pop() ?? '')
    const residents = await getCharactersByIds(residentIds)

    return(
        <main className={styles.main}>
            <BackButton/>
            <section>
                <h1 className={styles.name}>{location.name}</h1>

                <div className={styles.details}>
                    <div>
                        <h2 className={styles.label}>Type</h2>
                        <p className={styles.value}>{location.type}</p>
                    </div>
                    <div>
                        <h2 className={styles.label}>Dimension</h2>
                        <p className={styles.value}>{location.dimension}</p>
                    </div>
                </div>
            </section>

            <section>
                <ul className={styles.list}>
                    {residents.map((character) =>(
                        <li key={character.id}>
                            <CharacterCard character={character} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>        
        )
}

export default LocationDetailPage