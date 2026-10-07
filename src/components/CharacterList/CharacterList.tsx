'use client'
import CharacterCard from '~/components/CharacterCard/CharacterCard'
import type { Character, CharacterFilters } from '~/types/api'
import styles from './CharacterList.module.css'
import {getCharacters} from '~/lib/api'
import useLoadMore from '~/hooks/useLoadMore'

type CharacterListProps = {
	initialCharacters: Character[]
    hasNextPage: boolean
    filters: CharacterFilters
}

const CharacterList = ({ initialCharacters, hasNextPage, filters }: CharacterListProps) => {

    const {items: characters, hasMore, isLoading, loadMore} = useLoadMore({
        initialItems: initialCharacters,
        initialHasMore: hasNextPage,
        fetchPage: (page) => getCharacters(page, filters),
    })

    return (
        <>
            <ul className={styles.list}>
                {characters.map((character) => (
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