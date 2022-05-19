import Head from "next/head"
import SearchHeader from "../components/SearchHeader"
import Response from "../Response"
import { useRouter } from "next/router"
import SearchResults from "../components/SearchResults"

export default function Search({results}) {
  console.log(results)
  const router = useRouter()

  return (
    <div>
        <Head>
            <title>{router.query.term} - Google search</title>
        </Head>
        
        <SearchHeader />
        
        <SearchResults results={results} />
    </div>
  )
}

// Server Side Rendering
export async function getServerSideProps(context) {
    const useDummyData = false
    const startIndex = context.query.start || '0'

    const data = useDummyData ? Response : await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json())

    // After the Server has rendered, pass the results to the client
    return {
      props: {
        results: data
      }
    }
}
