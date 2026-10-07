import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '../styles/globals.css'
import Header from '../components/Header/Header'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

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
		<body className={roboto.className}>
			<Header />
			<main>{children}</main>
		</body>
	</html>
)

export default RootLayout
