import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import type { Character } from '~/types/api'
import CharacterCard from './CharacterCard'

const rick: Character = {
	id: 1,
	name: 'Rick Sanchez',
	status: 'Alive',
	species: 'Human',
	type: '',
	gender: 'Male',
	origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
	location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
	image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	episode: [],
	url: 'https://rickandmortyapi.com/api/character/1',
	created: '2017-11-04T18:48:46.250Z',
}

describe('CharacterCard', () => {
	it('shows the image, name and species', () => {
		render(<CharacterCard character={rick} />)

		expect(screen.getByRole('img', { name: 'Rick Sanchez' })).toBeInTheDocument()
		expect(screen.getByText('Rick Sanchez')).toBeInTheDocument()
		expect(screen.getByText('Human')).toBeInTheDocument()
	})

	it('links to the character detail page', () => {
		render(<CharacterCard character={rick} />)

		expect(screen.getByRole('link')).toHaveAttribute('href', '/characters/1')
	})
})