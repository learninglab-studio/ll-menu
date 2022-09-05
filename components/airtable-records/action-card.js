import styles from "./action-card.module.css"
import Stringify from "../utilities/stringify"

export default function ActionCard({name, notes, assignedTo, temporalStatus}) {
    return (
        <div className={styles.actionCard}>
            <h1 className={styles.title}>{name}</h1>
            <p>Assigned to <span className={styles.assignedTo}>{assignedTo}</span></p>
            <p>{notes || "no notes" }</p>
            <h3 className={styles.assignedTo}>{temporalStatus}</h3>      
        </div>   
    )
         
}
