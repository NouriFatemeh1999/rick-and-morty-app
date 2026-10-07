import { getLocations } from "~/lib/api"
import styles from './page.module.css'
import Image from "next/image"
import LocationList from "~/components/LocationList/LocationList"
import { LocationFilters } from "~/types/api"
import FilterBox, {type SelectFilter} from '~/components/FilterBox/FilterBox'


type LocationPageProps = {
    searchParams: Promise<LocationFilters>
}

const LocationPage= async ({searchParams}: LocationPageProps) =>{
    const filters = (await searchParams)
    const data = await getLocations(1,filters)
	const  LOCATION_SELECTS: SelectFilter[] = [
	{ name: 'type', label: 'Type', options: [
    'Planet',
	'Space station',
	'Microverse',
	'TV',
	'Resort',
	'Fantasy town',
	'Dream',
	'Dimension',
	'Cluster',
	'Spaceship',
	'Game',
	'Menagerie',
	'Arcade',
	'Daycare',
	'Customs',
	'Box',
	'Miniverse',
	'Teenyverse',
	'Artificially generated world',
	'unknown',] },
	{ name: 'dimension', label: 'Dimension', options: ['Dimension C-137',
	'Replacement Dimension',
	'Cronenberg Dimension',
	'Post-Apocalyptic Dimension',
	'Fantasy Dimension',
	'Dimension 5-126',
	'Testicle Monster Dimension',
	'Cromulon Dimension',
	'Dimension C-500A',
	'Dimension K-83',
	'Dimension J19ζ7',
	'Chair Dimension',
	'Pizza Dimension',
	'Phone Dimension',
	'Wasp Dimension',
	'Magic Dimension',
	'unknown',]},
]

    return(
       <main className={styles.main}>
            <Image src="/locationsHero.svg" alt="Rick and Morty portal"width={218.65} height={136} priority className={styles.hero} />
			<FilterBox basePath="/locations" searchPlaceholder="Filter by name..." selects={LOCATION_SELECTS} />			
            <LocationList key={JSON.stringify(filters)} initialLocations={data.results} hasNextPage={data.info.next !== null} filters={filters} />
   </main>
    )
}

export default LocationPage