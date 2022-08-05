import { getStaticProps } from "../pages/weekly-doc";
import styles from "./action-card.module.css"

export default function ActionCard({text}) {
    return (
        <div className={styles.actionCard}>
            {text}
        </div>   
    )
         
}

