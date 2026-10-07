'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import { useState } from 'react'

const NavLinks = [
	{ href: '/', label: 'Characters' },
	{ href: '/locations', label: 'Locations' },
	{ href: '/episodes', label: 'Episodes' },
]

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			<header className={styles.headerContainer}>
				<Link href="/" aria-label="Go to home page">
					<Image src="/logo.svg" alt="Rick and Morty" width={46} height={49} priority />
				</Link>
				<button
					className={styles.menuButton}
					aria-expanded={isMenuOpen}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? '✕' : '☰'}
				</button>
			</header>

			{isMenuOpen && (
				<nav className={styles.navMenu}>
					<ul className={styles.navList}>
						{NavLinks.map((link) => (
							<li key={link.href}>
								<Link
									className={styles.navLink}
									href={link.href}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	)
}

export default Header
