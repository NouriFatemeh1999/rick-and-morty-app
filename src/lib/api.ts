import type {Character, PaginatedResponse, Location, Episode} from '~/types/api'

export async function getCharacters(page:number): Promise<PaginatedResponse<Character>> {
	const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
	const data = await response.json()
	return data
}

export async function getCharacter(id:string):Promise<Character> {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
	const data = await response.json()
	return data
}

export async function getLocations(page:number): Promise<PaginatedResponse<Location>> {
	const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
	const data = await response.json()
	return data
}

export async function getLocation(id:string): Promise<Location> {
	const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
	const data = await response.json()
	return data
}

export async function getEpisodes(page:number): Promise<PaginatedResponse<Episode>> {
	const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
	const data = await response.json()
	return data
}

export async function getEpisode(id:string): Promise<Episode> {
	const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
	const data = await response.json()
	return data
}