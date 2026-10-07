import type {
	Character,
	CharacterFilters,
	LocationFilters,
	EpisodeFilters,
	Episode,
	Location,
	PaginatedResponse,
} from '~/types/api'

export async function getCharacters(
	page: number,
	filters?: CharacterFilters,
): Promise<PaginatedResponse<Character>> {
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

export async function getCharacter(id: string): Promise<Character> {
	const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
	const data = await response.json()
	return data
}

export async function getLocations(
	page: number,
	filters?: LocationFilters,
): Promise<PaginatedResponse<Location>> {
	let url = `https://rickandmortyapi.com/api/location?page=${page}`
	if (filters) {
		const queryParams = new URLSearchParams(filters as Record<string, string>).toString()
		url += `&${queryParams}`
	}
	const response = await fetch(url)
	if (response.status === 404) {
		return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] }
	}
	if (!response.ok) {
		throw new Error(`Failed to fetch Locations: ${response.statusText}`)
	}
	const data = await response.json()
	return data
}

export async function getLocation(id: string): Promise<Location> {
	const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
	const data = await response.json()
	return data
}

export async function getEpisodes(
	page: number,
	filters?: EpisodeFilters,
): Promise<PaginatedResponse<Episode>> {
	let url = `https://rickandmortyapi.com/api/episode?page=${page}`
	if (filters) {
		const queryParams = new URLSearchParams(filters as Record<string, string>).toString()
		url += `&${queryParams}`
	}
	const response = await fetch(url)
	if (response.status === 404) {
		return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] }
	}
	if (!response.ok) {
		throw new Error(`Failed to fetch Episode: ${response.statusText}`)
	}
	const data = await response.json()
	return data
}

export async function getEpisode(id: string): Promise<Episode> {
	const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
	const data = await response.json()
	return data
}

export async function getEpisodesByIds(ids: string[]): Promise<Episode[]> {
	const response = await fetch(`https://rickandmortyapi.com/api/episode/${ids.join(',')}`)
	const data = await response.json()
	return Array.isArray(data) ? data : [data]
}

export async function getCharactersByIds(ids: string[]): Promise<Character[]> {
	if (ids.length === 0) return []
	const response = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(',')}`)
	const data = await response.json()
	return Array.isArray(data) ? data : [data]
}
