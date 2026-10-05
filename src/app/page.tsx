import CharacterCard from '~/components/CharacterCard/CharacterCard'
import {getCharacters} from '~/lib/api'
import styles from './page.module.css'
import Image from 'next/image'
import CharacterList from '~/components/CharacterList/CharacterList'


const HomePage = async () =>{
	const data = await getCharacters(1)

	return(
		<main>
			<Image src="/RickMorty.svg" alt="Rick and Morty" className={styles.hero} width={312} height={104} priority />
			<CharacterList initialCharacters={data.results} hasNextPage={data.info.next !== null} />
		</main>
	)
}
export default HomePage