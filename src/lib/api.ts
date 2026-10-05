export async function getCharacters(page:number) {
	const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
	const data = await response.json()
	return data
}

export async function getCharacter(id:string) {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
	const data = await response.json()
	return data
}

export async function getLocations(page:number) {
	const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
	const data = await response.json()
	return data
}

export async function getLocation(id:string) {
	const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
	const data = await response.json()
	return data
}

export async function getEpisodes(page:number) {
	const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
	const data = await response.json()
	return data
}

export async function getEpisode(id:string) {
	const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
	const data = await response.json()
	return data
}