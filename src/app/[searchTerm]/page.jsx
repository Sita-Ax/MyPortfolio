import getWikiResults from '/lib/getWikiResults'
import SerachItem from '../components/SerachItem'

export async function generateMetadata ({ params: { searchTerm } }) {
  const wikiData = getWikiResults(searchTerm)
  const data = await wikiData
  const displayTerm = searchTerm.replace(/%20/g, ' ')

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`
  }
}

export default async function SearchResults ({ params: { searchTerm } }) {
  const wikiData = getWikiResults(searchTerm)
  const data = await wikiData
  const results = data?.query?.pages

  const content = (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results ? (
        Object.values(results).map(result => {
          return <SerachItem key={result.pageid} result={result} />
        })
      ) : (
        <h2 className='p-2 text-xl'>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  )

  return content
}
