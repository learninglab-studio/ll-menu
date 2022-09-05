import styles from "./project-card.module.css"

export default function ProjectCard({project}) {
    return (
        <div className={styles.projectCard}>
            <h1 className={styles.projectTitle}>{project.fields.Name}</h1>
            <p>{project.fields.TemporalFocusStatus}</p>
            <pre>{JSON.stringify(project, null, 4)}</pre>
        </div>   
    )
         
}

