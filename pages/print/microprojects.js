import BigCopyButton from "../../components/buttons/big-copy-button";
import styles from '../../styles/Home.module.css'
import { getActions, getEvents, getProjects, getMicroprojects, getShoots } from '../../utils/get-weekly-data';
import Stringify from '../../components/utilities/stringify';
import Spacer from '../../components/utilities/spacer';
import generateWeeklyMarkdown from '../../utils/generate-weekly-markdown'
import Draggable from "react-draggable";

const generateMicroprojects = async (records) => {

}

const TheMarkdownCode = (props) => {
    return (
        <><div>the markdown if you want to see it</div>
        <div><pre>{props.markdown}</pre></div></>
        
    )
}

export default function Microprojects(props){
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    the menu
                </h1>
                <Spacer height="50" />
                <Draggable>
                    <div>
                        <BigCopyButton text={props.markdown} />
                    </div>
                </Draggable>
                <div>
                    {props.microprojects.map((e, i) => {
                    return (
                        <ActionCard 
                        key={i}
                        name={userData.fields.ActionsToDo_Name[i]}
                        notes={userData.fields.ActionsToDo_Notes[i]}
                        temporalStatus={userData.fields.ActionsToDo_TemporalStatus[i]}
                        assignedTo={userData.fields.Name}
                        />
                    )
                    })}
                </div>
            </main>
            <TheMarkdownCode markdown={props.markdown}></TheMarkdownCode>
        </div>
    )
}

export async function getStaticProps() {
    const allMicroprojects = await getMicroprojects();
    const theMicroprojects = await generateMicroprojects(allMicroprojects)
    return {
        props: {
            microprojects: theMicroprojects,
        },
        revalidate: 10
    };
}
