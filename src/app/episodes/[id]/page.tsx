import { getCharactersByIds, getEpisode } from "~/lib/api"
import CharacterCard from "~/components/CharacterCard/CharacterCard"
import styles from './page.module.css'

type EpisodeDetailPageProps ={
    params: Promise<{id:string}>
}

const EpisodeDetailPage = async ({params}: EpisodeDetailPageProps) =>{
    const {id} = await params
    const episode = await getEpisode(id)
    const castIds = episode.characters.map((url) => url.split('/').pop() ?? '')
    const cast = await getCharactersByIds(castIds)

    return(
        <main className={styles.main}>
            <section>
                <h1 className={styles.name}>{episode.name}</h1>

                <div className={styles.details}>
                    <div>
                        <h2 className={styles.label}>Episode</h2>
                        <p className={styles.value}>{episode.episode}</p>
                    </div>
                    <div>
                        <h2 className={styles.label}>Date</h2>
                        <p className={styles.value}>{episode.air_date}</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className={styles.sectionTitle}>Cast</h2>
                <ul className={styles.list}>
                    {cast.map((character) =>(
                        <li key={character.id}>
                            <CharacterCard character={character} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>        
        )
}

export default EpisodeDetailPage