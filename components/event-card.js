import { getStaticProps } from "../pages/weekly-doc";
import styles from "./event-card.module.css"

export default function EventCard({text}) {
    return (
        <div className={styles.EventCard}>
            {text}
        </div>   
    )
         
}

