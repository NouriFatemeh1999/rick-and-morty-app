import { afterEach, expect, it, vi } from 'vitest'
import { getCharacters } from './api'

afterEach(() => vi.unstubAllGlobals())

it('returns an empty list when nothing is found (404)', async () => {
	vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 404 }))

	const data = await getCharacters(1, { name: 'xyzxyz' })

	expect(data.results).toEqual([])
})