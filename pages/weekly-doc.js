import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Print.module.css'
import { getActions, getEvents, getProjects, getMicroprojects } from '../utils/get-weekly-data';
// import WeeklyDoc from '../components/weekly-doc';
import ActionList from '../components/action-list';
import ProjectList from '../components/project-list';
import MicroprojectList from '../components/microproject-list';
import EventList from '../components/event-list';

const CodeBlock = ({code}) => {
    return (
        <div style={{width: "70%", margin: "auto", color: "white"}}>
            <pre>
                {code}
            </pre>
        </div>
    )
}

export async function getStaticProps() {
    const allActions = await getActions();
    const allEvents = await getEvents();
    const allProjects = await getProjects();
    const allMicroprojects = await getMicroprojects();
    const theActions = allActions.map(e => {
        return {
            id: e.id,
            linkText: e.fields.Name,
            assignedTo: e.fields.AssignedTo_Name,
            slug: `/actions/${e.id}`,
        }
    })
    const theProjects = JSON.parse(JSON.stringify(allProjects))
    return {
        props: {
            actions: theActions,
            events: JSON.stringify(allEvents, null, 4),
            microprojects: JSON.stringify(allMicroprojects, null, 4),
            projects: theProjects
        },
    };
}


export default function Week(props) {
    // console.log(JSON.stringify(props.actions))
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    The Week
                </h1>
                <p>all the things happening this week</p>
                <ProjectList projects={props.projects} />
                <h2>Microprojects</h2>
                <h2>Events</h2>
                <ActionList actions={props.actions} />
                <CodeBlock code={props.events} />
                <CodeBlock code={props.microprojects} />
                
                

            </main>
        </div>
    )
}
