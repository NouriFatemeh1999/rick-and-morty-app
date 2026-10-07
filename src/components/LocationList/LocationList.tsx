'use client'
import useLoadMore from "~/hooks/useLoadMore"
import { getLocations } from "~/lib/api"
import InfoCard from "../InfoCard/InfoCard"
import styles from "./LocationList.module.css"
import type { Location } from "~/types/api"

type LocationListProps ={
    initialLocations: Location[]
    hasNextPage: boolean
}

const LocationList = ({initialLocations, hasNextPage}: LocationListProps) =>{
        const {items: locations, hasMore, isLoading, loadMore} = useLoadMore({
        initialItems: initialLocations,
        initialHasMore: hasNextPage,
        fetchPage:  getLocations,
    })

    return(
        <>
          <ul className={styles.list}>
            {locations.map((location) =>(
                <li key={location.id}>
                    <InfoCard
                        href={`/locations/${location.id}`}
						title={location.name}
						subtitle={location.type}
                    />
                </li>
            ))}
        </ul>
        {hasMore && (
			<button className={styles.loadMore} onClick={loadMore} disabled={isLoading}>
				{isLoading ? 'Loading...' : 'Load more'}
			</button>
		    )}
		</>
    )
}

export default LocationList