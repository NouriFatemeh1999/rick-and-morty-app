import Link from 'next/link'
import Image from 'next/image'
import type { Character } from '~/types/api'
import styles from './CharacterCard.module.css'

type CharacterCardProps = {
	character: Character
}
const CharacterCard = ({ character }: CharacterCardProps) => (
	<Link href={`/characters/${character.id}`} className={styles.card}>
		<Image
			src={character.image}
			alt={character.name}
			width={312}
			height={308}
			className={styles.image}
		/>
		<div className={styles.info}>
			<h2 className={styles.name}>{character.name}</h2>
			<p className={styles.species}>{character.species}</p>
		</div>
	</Link>
)

export default CharacterCard
