import styles from "./action-card.module.css"
import Image from "next/image";

export default function MicroprojectCard({ mp }) {
    return (
        <div className={styles.microprojectCard}>
            {mp.fields.MainImageURL &&  <img src={mp.fields.MainImageURL} style={{width: "100%", height: "auto"}}/>}
           
            <h2>{mp.fields.Title}</h2>
            <p>{mp.fields.Description}</p>
        </div>   
    )
         
}

