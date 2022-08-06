import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getActions, getEvents, getProjects, getMicroprojects } from '../utils/get-weekly-data';


export async function getStaticProps() {
  const allActions = await getActions();
  const allActionsString = JSON.stringify(allActions, null, 4)
  const theActions = allActions.map(e=>{
    return {
      id: e.id,
      linkText: e.fields.Name,
      assignedTo: e.fields.AssignedTo_Name, 
      slug: `/actions/${e.id}`,
    }
  })
  console.log(allActionsString)
  return {
    props: {
      actions: theActions, 
      allActionsString
    },
  };
}


export default function Home(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          the menu
        </h1>
        {props.actions.map((action, i)=>{return(
          <div key={i} style={{
            width: "300px",
            padding: "20px",
            borderStyle: "solid",
            borderWidth: ".5px",
            // borderColor: "white",
            borderRadius: "5px",
            // margin: "8px",
            textAlign: "center"
          }}
          >{action.linkText}</div>
        )})}
        

        <div></div>
        <h3>done</h3>
      </main>
    </div>
  )
}
