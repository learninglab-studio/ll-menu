// import Head from 'next/head'
// import Image from 'next/image'
// // import styles from '../styles/Home.module.css'
// import getAirtableActions from '../utils/get-airtable-actions'

// export async function getStaticProps() {
//   const allActions = await getAirtableActions();
//   const allActionsString = JSON.stringify(allActions, null, 4)
//   const theActions = allActions.map(e=>{
//     return {
//       id: e.id,
//       linkText: e.fields.Name,
//       assignedTo: e.fields.AssignedTo_Name, 
//       slug: `/actions/${e.id}`,
//     }
//   })
//   console.log(allActionsString)
//   return {
//     props: {
//       actions: theActions, 
//       allActionsString
//     },
//   };
// }


// export default function Home(props) {
//   return (
//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           The Menu
//         </h1>
//         {props.actions.map((action, i)=>{return(
//           <div key={i} style={{
//             width: "300px",
//             padding: "20px",
//             borderStyle: "solid",
//             borderWidth: "1px",
//             borderColor: "white",
//             borderRadius: "10px",
//             margin: "8px",
//             textAlign: "center"
//           }}
//           >{action.linkText}</div>
//         )})}
        

//         <div></div>
//         <h3>done</h3>
//       </main>
//     </div>
//   )
// }
