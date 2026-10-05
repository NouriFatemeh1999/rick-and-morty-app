import type { Character, CharacterFilters, Episode, Location, PaginatedResponse } from '~/types/api'


export async function getCharacters(page: number, filters?: CharacterFilters): Promise<PaginatedResponse<Character>> {
	let url = `https://rickandmortyapi.com/api/character?page=${page}`
	if (filters) {
		const queryParams = new URLSearchParams(filters as Record<string, string>).toString()
		url += `&${queryParams}`
	}
	const response = await fetch(url)
	if (response.status === 404) {
	return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] }
	}
	if (!response.ok) {
		throw new Error(`Failed to fetch characters: ${response.statusText}`)
	}
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