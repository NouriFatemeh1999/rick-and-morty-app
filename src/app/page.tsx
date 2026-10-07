import { getCharacters } from '~/lib/api'
import styles from './page.module.css'
import Image from 'next/image'
import CharacterList from '~/components/CharacterList/CharacterList'
import type { CharacterFilters } from '~/types/api'
import FilterBox, { type SelectFilter } from '~/components/FilterBox/FilterBox'

type HomePageProps = {
	searchParams: Promise<CharacterFilters>
}

const HomePage = async ({ searchParams }: HomePageProps) => {
	const filters = await searchParams
	const data = await getCharacters(1, filters)
	const CHARACTER_SELECTS: SelectFilter[] = [
		{
			name: 'species',
			label: 'Species',
			options: [
				'Human',
				'Alien',
				'Humanoid',
				'Animal',
				'Robot',
				'Cronenberg',
				'Mythological Creature',
				'Poopybutthole',
				'Disease',
				'unknown',
			],
		},
		{ name: 'gender', label: 'Gender', options: ['Female', 'Male', 'Genderless', 'unknown'] },
		{ name: 'status', label: 'Status', options: ['Alive', 'Dead', 'unknown'] },
	]

	return (
		<main className={styles.main}>
			<Image
				src="/RickMorty.svg"
				alt="Rick and Morty"
				className={styles.hero}
				width={312}
				height={104}
				priority
			/>
			<FilterBox basePath="/" searchPlaceholder="Filter by name..." selects={CHARACTER_SELECTS} />
			<CharacterList
				key={JSON.stringify(filters)}
				initialCharacters={data.results}
				hasNextPage={data.info.next !== null}
				filters={filters}
			/>
		</main>
	)
}
export default HomePage
