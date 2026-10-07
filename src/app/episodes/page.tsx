import { getEpisodes } from '~/lib/api'
import styles from './page.module.css'
import Image from 'next/image'
import EpisodeList from '~/components/EpisodeList/EpisodeList'
import { EpisodeFilters } from '~/types/api'
import FilterBox from '~/components/FilterBox/FilterBox'

type EpisodePageProps = {
	searchParams: Promise<EpisodeFilters>
}
const EpisodePage = async ({ searchParams }: EpisodePageProps) => {
	const filters = await searchParams
	const data = await getEpisodes(1, filters)

	return (
		<main className={styles.main}>
			<Image
				src="/locationsHero.svg"
				alt="Rick and Morty portal"
				width={218.65}
				height={136}
				priority
				className={styles.hero}
			/>
			<FilterBox basePath="/episodes" searchPlaceholder="Name or episode (ex.S01E01)..." />
			<EpisodeList initialepisodes={data.results} hasNextPage={data.info.next !== null} />
		</main>
	)
}

export default EpisodePage
