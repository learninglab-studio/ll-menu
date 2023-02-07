import Layout from '../../components/layout/layout';
import getUserRecordFromSlug from '../../utils/get-user-record-from-slug';
import getUsers from '../../utils/get-users';
import Stringify from '../../components/utilities/stringify'
import llog from '../../utils/ll-loggers'
import ActionCard from '../../components/airtable-records/action-card';

const getAllUserPaths = async function() {
  llog.magenta(`starting getAllUserPaths`)
  const records = await getUsers()
  llog.blue(records.map(r=>r.fields.Slug))
  // llog.magenta(records.slice(0,2))
  let usersWithSlugs = records.filter(r=>{return (r.fields.Slug)})
  let thePaths = usersWithSlugs.map(e => {
    return(
      {
        params: {
          user: e.fields.Slug,
          // airtableId: e.id
        }
      }
    )
  })
  llog.yellow(thePaths)
  return thePaths
}


export default function Post({ userData }) {
  if (userData.fields.ActionsToDo && userData.fields.ActionsToDo.length > 0) {
    return <Layout>
      <h1>{userData.fields.ActionsToDo.length} actions for {userData.fields.Name}.</h1>
      <ul>
        {userData.fields.ActionsToDo.map((e, i)=>{return (
          <li key={i}><strong>{userData.fields.ActionsToDo_Name[i]}:</strong> {userData.fields.ActionsToDo_Name[i]}. (<i>{userData.fields.ActionsToDo_TemporalStatus[i]}</i>)</li>
        )})}
      </ul>
      <div>
        {userData.fields.ActionsToDo.map((e, i) => {
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
      <Stringify object={userData} />
  </Layout>;
  } else {
    return <Layout>
      <h1>No actions for {userData.fields.Name}.</h1>
    </Layout>
  }
  
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllUserPaths();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  llog.yellow(llog.divider)
  llog.red(params.user)
  const userData = await getUserRecordFromSlug(params.user)
  llog.cyan(userData)
  return {
    props: {
      userData: JSON.parse(JSON.stringify(userData))
    },
    revalidate: 10
  }
  // Fetc h necessary data for the blog post using params.id
}