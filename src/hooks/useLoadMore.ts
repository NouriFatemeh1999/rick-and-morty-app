import { useState } from 'react'
import type { PaginatedResponse } from '~/types/api'

type UseLoadMoreOptions<T> = {
	initialItems: T[]
	initialHasMore: boolean
	fetchPage: (page: number) => Promise<PaginatedResponse<T>>
}

const useLoadMore = <T>({ initialItems, initialHasMore, fetchPage }: UseLoadMoreOptions<T>) => {
	const [items, setItems] = useState(initialItems)
	const [page, setPage] = useState(1)
	const [hasMore, setHasMore] = useState(initialHasMore)
	const [isLoading, setIsLoading] = useState(false)

	const loadMore = async () => {
		setIsLoading(true)
		const nextPage = page + 1
		const data = await fetchPage(nextPage)

		setItems((prev) => [...prev, ...data.results])
		setPage(nextPage)
		setHasMore(data.info.next !== null)
		setIsLoading(false)
	}

	return { items, hasMore, isLoading, loadMore }
}
/**
 * Shared "Load more" pagination logic, reused by the character, location and episode lists.
 * The list passes `fetchPage`, so this hook doesn't depend on any specific API.
 */
export default useLoadMore
