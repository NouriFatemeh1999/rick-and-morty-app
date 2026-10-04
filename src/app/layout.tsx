import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../styles/globals.css'
import Header from '../components/Header/Header'

export const metadata: Metadata = {
	title: 'Rick and Morty',
	description: 'Browse Rick and Morty characters, locations and episodes',
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
}

type RootLayoutProps = {
	children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang="en">
		<body>
			<Header />
			<main>{children}</main>
		</body>
	</html>
)

export default RootLayout