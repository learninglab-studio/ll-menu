import Layout from '../../components/layout';
import { getActions } from '../../utils/get-weekly-data';

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const actions = await getActions()
  return actions.map((action) => {
    return {
        
    }
  })
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}