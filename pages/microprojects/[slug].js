import Layout from '../../components/layout/layout';
import { getAllMicroprojects, getOneMicroprojectBySlug } from '../../utils/menu-microproject-utils'
import Stringify from '../../components/utilities/stringify'
import llog from '../../utils/ll-loggers'
import ActionCard from '../../components/airtable-records/action-card';
import Image from 'next/image';

const getAllMicroprojectPaths = async function() {
  llog.magenta(`starting getAllMicroprojectPaths`)
  const records = await getAllMicroprojects()
  llog.blue(records.map(r=>r.fields.Slug))
  // llog.magenta(records.slice(0,2))
  let microprojectsWithSlugs = records.filter(r=>{return (r.fields.Slug)})
  let thePaths = microprojectsWithSlugs.map(e => {
    return(
      {
        params: {
          slug: e.fields.Slug,
          // airtableId: e.id
        }
      }
    )
  })
  llog.yellow(thePaths)
  return thePaths
}


export default function TheMicroprojects({ microprojectData }) {
  if (microprojectData.fields.Title) {
    return <Layout>
      <h1>{microprojectData.fields.Title}.</h1>
      testing
      <div>
      <Stringify object={ microprojectData } />
      </div>
      <Image href={microprojectData.fields.MainImageURL || ""} />
  </Layout>;
  } else {
    return <Layout>
      <h1>No info on {microprojectData.id}.</h1>
    </Layout>
  }
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllMicroprojectPaths();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  llog.yellow(llog.divider)
  llog.red(params.slug)
  const microprojectData = await getOneMicroprojectBySlug(params.slug)
  llog.cyan(microprojectData)
  return {
    props: {
        microprojectData: JSON.parse(JSON.stringify(microprojectData))
    },
    revalidate: 10
  }
  // Fetc h necessary data for the blog post using params.id
}