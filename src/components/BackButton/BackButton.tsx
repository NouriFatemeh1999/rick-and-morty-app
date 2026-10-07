'use client'
import { useRouter } from "next/navigation"
import styles from "./BackButton.module.css"


const ReturnBut = ()=>{
    const router = useRouter();
    return(
        <button onClick={()=> router.back()} className={styles.backBut}>  <span aria-hidden="true">←</span> Go back</button>
    )
}

export default ReturnBut