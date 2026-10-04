import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

function Header() {
	return (
		<header className={styles.headerContainer}>
                <Link href="/" aria-label="Go to home page">
                    <Image src="/logo.svg" alt="Rick and Morty" width={46} height={49} priority />
                </Link>
                <button className={styles.menuButton} aria-label="Open menu">
                    ☰
                </button>
		</header>
	)
}

export default Header