import { getStaticProps } from "../pages/weekly-doc";
import styles from "./action-card.module.css"
import Stringify from "./stringify"

export default function ActionCard({action}) {
    return (
        <div className={styles.actionCard}>
            <h1 className={styles.title}>{action.fields.Name}</h1>
            <p>Assigned to <span className={styles.assignedTo}>{action.fields.AssignedTo_Name.toString()}</span></p>
            <p>{action.fields.Notes || "no notes" }</p>
            <h3 className={styles.assignedTo}>{action.fields.TemporalStatus}</h3>
           
        </div>   
    )
         
}
