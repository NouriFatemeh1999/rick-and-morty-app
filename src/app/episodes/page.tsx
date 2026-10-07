import InfoCard from "~/components/InfoCard/InfoCard"
import { getEpisodes } from "~/lib/api"
import styles from './page.module.css'
import Image from "next/image"
import EpisodeList from "~/components/EpisodeList/EpisodeList"

const EpisodePage= async () =>{
    const data = await getEpisodes(1)

    return(
       <main className={styles.main}>
            <Image src="/locationsHero.svg" alt="Rick and Morty portal"width={218.65} height={136} priority className={styles.hero} />
            <EpisodeList initialepisodes={data.results} hasNextPage={data.info.next !== null} />
       </main>
    )
}

export default EpisodePage