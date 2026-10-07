import { getCharacter, getEpisodesByIds } from '~/lib/api'
import Image from 'next/image'
import styles from '../[id]/page.module.css'
import Link from 'next/link'
import BackButton from '~/components/BackButton/BackButton'

type CharacterPageProps = {
	params: Promise<{ id: string }>
}

const CharacterPage = async ({ params }: CharacterPageProps) => {
	const { id } = await params
	const character = await getCharacter(id)
    const episodeIds = character.episode.map((url) => url.split('/').pop() ?? '')
    const episodes = await getEpisodesByIds(episodeIds)
    const infoItems = [
        { label: 'Gender', value: character.gender },
        { label: 'Status', value: character.status },
        { label: 'Specie', value: character.species },
        { label: 'Origin', value: character.origin.name },
        { label: 'Type', value: character.type || 'Unknown' },
    ]

    return (
        <main className={styles.main}>
            <BackButton/>
            <Image
                src={character.image}
                alt={character.name}
                width={146}
                height={146}
                className={styles.profile}
            />
            <h1 className={styles.name}>{character.name}</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Informations</h2>
                <ul className={styles.infoList}>
                    {infoItems.map((item) => (
                        <li key={item.label} className={styles.infoItem}>
                            <div>
                                <h3 className={styles.label}>{item.label}</h3>
                                <p className={styles.value}>{item.value}</p>
                            </div>
                        </li>
                    ))}
                    <li>
                        <Link
                            href={`/locations/${character.location.url.split('/').pop()}`}
                            className={`${styles.infoItem} ${styles.infoLink}`}
                        >
                            <div>
                                <h3 className={styles.label}>Location</h3>
                                <p className={styles.value}>{character.location.name}</p>
                            </div>
                            <span className={styles.chevron} aria-hidden="true">›</span>
                        </Link>
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Episodes</h2>
                <ul className={styles.infoList}>
                    {episodes.map((episode) => (
                        <li key={episode.id}>
                            <Link href={`/episodes/${episode.id}`} className={`${styles.infoItem} ${styles.infoLink}`}>
                                <div>
                                    <h3 className={styles.label}>{episode.episode}</h3>
                                    <p className={styles.value}>{episode.name}</p>
                                    <p className={styles.value}>{episode.air_date}</p>
                                </div>
                                <span className={styles.chevron} aria-hidden="true">›</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>       
            </main>
        )
}

export default CharacterPage