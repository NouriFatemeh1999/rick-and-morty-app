import InfoCard from "~/components/InfoCard/InfoCard"
import { getLocations } from "~/lib/api"
import styles from './page.module.css'
import Image from "next/image"

const LocationPage= async () =>{
    const data = await getLocations(1)

    return(
       <main className={styles.main}>
            <Image src="/locationsHero.svg" alt="Rick and Morty portal"width={218.65} height={136} priority className={styles.hero} />
            <ul className={styles.list}>
                {data.results.map((location) =>(
                    <li key={location.id}>
                        <InfoCard
                            href={`/locations/${location.id}`}
							title={location.name}
							subtitle={location.type}
                        />
                    </li>
                ))}
            </ul>
       </main>
    )
}

export default LocationPage