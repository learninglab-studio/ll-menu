import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Print.module.css'
import { getActions, getEvents, getProjects, getMicroprojects } from '../utils/get-weekly-data';
// import WeeklyDoc from '../components/weekly-doc';
import ActionList from '../components/action-list';
import ProjectList from '../components/project-list';
import MicroprojectList from '../components/microproject-list';
import EventList from '../components/event-list';
import Stringify from '../components/stringify';

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
    console.log(`getting events`)
    console.log(JSON.stringify(allEvents))
    return {
        props: {
            actions: theActions,
            events: JSON.parse(JSON.stringify(allEvents)),
            microprojects: JSON.parse(JSON.stringify(allMicroprojects)),
            projects: JSON.parse(JSON.stringify(allProjects))
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
                <MicroprojectList microprojects={props.microprojects} />
                <EventList events={props.events} />
                <ActionList actions={props.actions} />
                <Stringify object={props.events} />
                <Stringify object={props.microprojects} />
                
            </main>
        </div>
    )
}
