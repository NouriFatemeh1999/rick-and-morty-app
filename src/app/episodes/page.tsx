import InfoCard from "~/components/InfoCard/InfoCard"
import { getEpisodes } from "~/lib/api"
import styles from './page.module.css'
import Image from "next/image"

const EpisodePage= async () =>{
    const data = await getEpisodes(1)

    return(
       <main className={styles.main}>
            <Image src="/locationsHero.svg" alt="Rick and Morty portal"width={218.65} height={136} priority className={styles.hero} />
            <ul className={styles.list}>
                {data.results.map((Episode) =>(
                    <li key={Episode.id}>
                        <InfoCard
                            href={`/episodes/${Episode.id}`}
							title={Episode.name}
							subtitle={Episode.air_date}
                            caption={Episode.episode}
                        />
                    </li>
                ))}
            </ul>
       </main>
    )
}

export default EpisodePage