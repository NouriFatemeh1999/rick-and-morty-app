import { getLocations } from "~/lib/api"
import styles from './page.module.css'
import Image from "next/image"
import LocationList from "~/components/LocationList/LocationList"

const LocationPage= async () =>{
    const data = await getLocations(1)
    return(
       <main className={styles.main}>
            <Image src="/locationsHero.svg" alt="Rick and Morty portal"width={218.65} height={136} priority className={styles.hero} />
            <LocationList initialLocations={data.results} hasNextPage={data.info.next !== null} />
       </main>
    )
}

export default LocationPage