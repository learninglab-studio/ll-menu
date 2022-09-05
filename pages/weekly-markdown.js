import BigCopyButton from "../components/buttons/big-copy-button";
import styles from '../styles/Home.module.css'
import { getActions, getEvents, getProjects, getMicroprojects, getShoots } from '../utils/get-weekly-data';
import Stringify from '../components/utilities/stringify';
import Spacer from '../components/utilities/spacer';
import generateWeeklyMarkdown from '../utils/generate-weekly-markdown'
import Draggable from "react-draggable";

const TheMarkdownCode = (props) => {
    return (
        <><div>the markdown if you want to see it</div>
        <div><pre>{props.markdown}</pre></div></>
        
    )
}

export default function WeeklyMarkdown(props){
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    weekly markdown
                </h1>
                <Spacer height="50" />
                <Draggable>
                    <div>
                        <BigCopyButton text={props.markdown} />
                    </div>
                </Draggable>
            </main>
            <TheMarkdownCode markdown={props.markdown}></TheMarkdownCode>
        </div>
    )
}

export async function getStaticProps() {
    const allActions = await getActions();
    const allEvents = await getEvents();
    const allProjects = await getProjects();
    const allMicroprojects = await getMicroprojects();
    const allShoots = await getShoots();
    const TheMarkdown = await generateWeeklyMarkdown({
        actions: allActions,
        events: allEvents,
        shoots: allShoots,
        microprojects: allMicroprojects,
        projects: allProjects
    })
    
    return {
        props: {
            markdown: TheMarkdown,
        },
    };
}
