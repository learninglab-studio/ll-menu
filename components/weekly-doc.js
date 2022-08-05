import styles from './weekly-doc.module.css'
import ActionCard from './action-card'

export default function WeeklyDoc(props) {
    console.log(JSON.stringify(props, null, 4))
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    The Week
                </h1>
                <p>all the things happening this week</p>
                <h2>Projects</h2>

                <h2>Microprojects</h2>
                <h2>Events</h2>
                

            </main>
        </div>
    )
}
