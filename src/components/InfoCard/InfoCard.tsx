import Link from "next/link"
import styles from "./InfoCard.module.css"

type InfoCardProps = {
    href: string;
    title: string;
    subtitle: string;
}

const InfoCard = ({href,title,subtitle}: InfoCardProps)=>{
    return(
        <Link className={styles.card} href={href}>
            <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </Link>
    )
}

export default InfoCard