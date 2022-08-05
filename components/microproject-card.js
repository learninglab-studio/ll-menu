import { getStaticProps } from "../pages/weekly-doc";
import styles from "./action-card.module.css"

export default function MicroprojectCard({text}) {
    return (
        <div className={styles.microprojectCard}>
            {text}
        </div>   
    )
         
}

