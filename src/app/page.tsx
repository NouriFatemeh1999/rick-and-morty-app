import CharacterCard from '~/components/CharacterCard/CharacterCard'
import {getCharacters} from '~/lib/api'
import styles from './page.module.css'
import Image from 'next/image'


const HomePage = async () =>{
	const data = await getCharacters(1)

	return(
		<main>
			<Image src="/RickMorty.svg" alt="Rick and Morty" className={styles.hero} width={312} height={104} priority />
			<ul className={styles.list}>
				{data.results.map((character) => (
					<li key={character.id}>
						<CharacterCard character={character} />
					</li>
				))}
			</ul>

		</main>
	)
}
export default HomePage