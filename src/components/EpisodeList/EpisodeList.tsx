'use client'
import useLoadMore from "~/hooks/useLoadMore"
import { getEpisodes } from "~/lib/api"
import InfoCard from "../InfoCard/InfoCard"
import styles from "./EpisodeList.module.css"
import type { Episode } from "~/types/api"

type EpisodeListProps ={
    initialepisodes: Episode[]
    hasNextPage: boolean
}

const EpisodeList = ({initialepisodes, hasNextPage}: EpisodeListProps) =>{
        const {items: episodes, hasMore, isLoading, loadMore} = useLoadMore({
        initialItems: initialepisodes,
        initialHasMore: hasNextPage,
        fetchPage:  getEpisodes,
    })

    return(
        <>
          <ul className={styles.list}>
            {episodes.map((Episode) =>(
                <li key={Episode.id}>
                    <InfoCard
                        href={`/episodes/${Episode.id}`}
						title={Episode.name}
						subtitle={Episode.air_date}
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

export default EpisodeList