'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import styles from './CharacterFilterBox.module.css'

const CharacterFilterBox = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
	const [name, setName] = useState(searchParams.get('name')??'')

    const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const trimmedName = name.trim()
        router.push(trimmedName ? `/?name=${encodeURIComponent(trimmedName)}`:`/`)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input placeholder='Filter by name...' 
                   aria-label="Filter by name" 
                   type='search'
                   value={name} 
                   className={styles.input}
                   onChange={(e) => setName(e.target.value)}/>
        </form>
    )

}

export default CharacterFilterBox