import {getCharacters} from '~/lib/api'
import styles from './page.module.css'
import Image from 'next/image'
import CharacterList from '~/components/CharacterList/CharacterList'
import type { CharacterFilters } from '~/types/api'
import CharacterFilterBox from '~/components/CharacterFilterBox/CharacterFilterBox'

type HomePageProps = {
	searchParams: Promise<CharacterFilters>
}

const HomePage = async ({ searchParams }: HomePageProps) => {
	const filters = (await searchParams)
	const data = await getCharacters(1, filters)

	return(
		<main>
			<Image src="/RickMorty.svg" alt="Rick and Morty" className={styles.hero} width={312} height={104} priority />
			<CharacterFilterBox/>
			<CharacterList initialCharacters={data.results} hasNextPage={data.info.next !== null} />
		</main>
	)
}
export default HomePage