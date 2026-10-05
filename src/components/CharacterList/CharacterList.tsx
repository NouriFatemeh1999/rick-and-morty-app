'use client'
import CharacterCard from '~/components/CharacterCard/CharacterCard'
import type { Character } from '~/types/api'
import styles from './CharacterList.module.css'
import {useState} from 'react'
import {getCharacters} from '~/lib/api'

type CharacterListProps = {
	initialCharacters: Character[]
    hasNextPage: boolean
}

const CharacterList = ({ initialCharacters, hasNextPage }: CharacterListProps) => {
    const [characters, setCharacters] = useState(initialCharacters)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(hasNextPage)
	const [isLoading, setIsLoading] = useState(false)

    const loadMore = async () => {
		setIsLoading(true)

		const nextPage = page + 1
		const data = await getCharacters(nextPage)

		setCharacters((prev) => [...prev, ...data.results])
		setPage(nextPage)
		setHasMore(data.info.next !== null)
		setIsLoading(false)
	}
    return (
        <>
            <ul className={styles.list}>
                {initialCharacters.map((character) => (
                    <li key={character.id}>
                        <CharacterCard character={character} />
                    </li>
                ))}
            </ul>
            {hasMore && (
                <button className={styles.loadMore} onClick={loadMore} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Load more'}
                </button>
            )}
        </>
    )
}
export default CharacterList;