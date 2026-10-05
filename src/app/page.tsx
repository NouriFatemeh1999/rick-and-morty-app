import {getCharacters} from '~/lib/api'

const HomePage = async () =>{
	const data = await getCharacters(1)

	return(
		<main>
			<h1>Characters</h1>
			<ul>
				{data.results.map((character) => (
					<li key={character.id}>{character.name}</li>
				))}
			</ul>

		</main>
	)
}
export default HomePage