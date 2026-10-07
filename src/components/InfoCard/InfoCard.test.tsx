import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InfoCard from './InfoCard'

describe('InfoCard', () => {
	it('shows the title and subtitle', () => {
		render(<InfoCard href="/locations/1" title="Earth (C-137)" subtitle="Planet" />)

		expect(screen.getByText('Earth (C-137)')).toBeInTheDocument()
		expect(screen.getByText('Planet')).toBeInTheDocument()
	})

	it('links to the given address', () => {
		render(<InfoCard href="/locations/1" title="Earth (C-137)" subtitle="Planet" />)

		expect(screen.getByRole('link')).toHaveAttribute('href', '/locations/1')
	})
})