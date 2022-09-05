import styles from "./event-card.module.css"

export default function EventCard({event}) {
    return (
        <div className={styles.EventCard}>
            <pre>{JSON.stringify(event, null, 4)}</pre>
            
        </div>   
    )
         
}

