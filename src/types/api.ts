export type CharacterStatus = 'Alive' | 'Dead' | 'unknown'

export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown'

export type ResourceLink = {
	name: string
	url: string
}

export type Character = {
	id: number
	name: string
	status: CharacterStatus
	species: string
	type: string
	gender: CharacterGender
	origin: ResourceLink
	location: ResourceLink
	image: string
	episode: string[] 
	url: string
	created: string
}

export type Location = {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}

export type Episode = {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string
}

export type PaginatedResponse<T> = {
	info: {
		count: number
		pages: number
		next: string | null
		prev: string | null
	}
	results: T[]
}

export type CharacterFilters = {
	name?: string
	status?: string
	species?: string
	type?: string
	gender?: string
}