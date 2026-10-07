'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { type FormEvent, useState } from 'react'
import styles from './FilterBox.module.css'

export type SelectFilter = {
	name: string
	label: string
	options: string[]
}

type FilterBoxProps = {
	basePath: string
	searchPlaceholder: string
	selects?: SelectFilter[]
}

const FilterBox = ({ basePath, searchPlaceholder, selects = [] }: FilterBoxProps) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [name, setName] = useState(searchParams.get('name') ?? '')
	const [values, setValues] = useState<Record<string, string>>(() =>
		Object.fromEntries(selects.map((select) => [select.name, searchParams.get(select.name) ?? ''])),
	)
	const [isOpen, setIsOpen] = useState(false)

	const applyFilters = () => {
		const params = new URLSearchParams()
		if (name.trim()) params.set('name', name.trim())
		Object.entries(values).forEach(([key, value]) => {
			if (value) params.set(key, value)
		})
		router.push(`${basePath}?${params.toString()}`)
		setIsOpen(false)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		applyFilters()
	}

	return (
		<div className={styles.filters}>
			<form onSubmit={handleSubmit}>
				<input
					type="search"
					className={styles.input}
					placeholder={searchPlaceholder}
					aria-label={searchPlaceholder}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</form>

			{selects.length > 0 && (
				<button onClick={() => setIsOpen(true)} className={styles.filterButton}>
					<svg
						className={styles.filterIcon}
						viewBox="0 0 24 24"
						width="24"
						height="24"
						aria-hidden="true"
					>
						<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" fill="currentColor" />
					</svg>
					Advanced filters
				</button>
			)}

			{isOpen && (
				<div className={styles.overlay}>
					<div className={styles.modal} role="dialog" aria-modal="true">
						<div className={styles.modalHeader}>
							<h2>Filters</h2>
							<button
								onClick={() => setIsOpen(false)}
								aria-label="Close filters"
								className={styles.closeButton}
							>
								✕
							</button>
						</div>

						{selects.map((select) => (
							<select
								key={select.name}
								value={values[select.name]}
								onChange={(e) => setValues({ ...values, [select.name]: e.target.value })}
								aria-label={select.label}
								className={styles.select}
							>
								<option value="">{select.label}</option>
								{select.options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						))}

						<button onClick={applyFilters} className={styles.applyButton}>
							Apply
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default FilterBox
