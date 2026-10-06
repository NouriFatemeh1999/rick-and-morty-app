'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import styles from './CharacterFilterBox.module.css'

const CharacterFilterBox = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
	const [name, setName] = useState(searchParams.get('name')??'');
    const [status,setStatus] = useState (searchParams.get('status')??'');
    const [gender,setGender] = useState (searchParams.get('gender')??'');
    const [species,setSpecies] = useState (searchParams.get('species')??'');
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        applyFilters()
    }

    const applyFilters = () => {
        const params = new URLSearchParams();
        if (name.trim()) params.set('name', name.trim())
        if(status) params.set('status', status)
        if(gender) params.set('gender',gender)
        if(species) params.set('species',species)
        router.push(`/?${params.toString()}`)
        setIsOpen(false)
    }

    return (
        <div className={styles.filters}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <input placeholder='Filter by name...' 
                   aria-label="Filter by name" 
                   type='search'
                   value={name} 
                   className={styles.input}
                   onChange={(e) => setName(e.target.value)}/>
        </form>
        <button onClick={()=> setIsOpen(true)} className={styles.filterButton}>
                Advanced filters
        </button>
        {isOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal} role='dialog' aria-modal= "true">
                   <div className={styles.modalHeader}>
                        <h2>Filters</h2>
                        <button onClick={()=>setIsOpen(false)} aria-label="Close filters" className={styles.closeButton}>✕</button>
                    </div>

                    <select value={species} onChange={(e)=> setSpecies(e.target.value)} aria-label="Species" className={styles.topDown}>
                        <option value="">Species</option>
                        <option value="Human">Human</option>
                        <option value="Alien">Alien</option>
                        <option value="Humanoid">Humanoid</option>
                        <option value="Animal">Animal</option>
                        <option value="Robot">Robot</option>
                        <option value="Cronenberg">Cronenberg</option>
                        <option value="Mythological Creature">Mythological Creature</option>
                        <option value="Poopybutthole">Poopybutthole</option>
                        <option value="Disease">Disease</option>
                        <option value="unknown">unknown</option>       
                    </select>

                    <select value={gender} onChange={(e)=> setGender(e.target.value)} aria-label="Gender" className={styles.topDown}>
                        <option value="">Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>

                    <select value={status} onChange={(e)=> setStatus(e.target.value)} aria-label='Status' className={styles.topDown}>
                        <option value="">Status</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">unknown</option>
                    </select>



                    <button onClick={applyFilters} className={styles.applyButton}>Apply</button>
                </div>
            </div>
        )}
        </div>
    )

}

export default CharacterFilterBox