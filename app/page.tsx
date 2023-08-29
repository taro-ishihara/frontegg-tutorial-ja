import { PosterCard } from '@/components/poster-card'
import { KVNamespace } from '@cloudflare/workers-types'

export const runtime = 'edge'

async function getPosters() {
  const { POSTERS } = process.env as unknown as {
    POSTERS: KVNamespace
  }
  return Promise.all(
    Array.from({ length: 8 }, (_, index) => (index + 1).toString()).map(
      async (key) => {
        const emptyPoster = {
          index: key,
          title: `Empty poster ${key}`,
          owner: 'Stick your poster here.',
          used: false,
        }
        const owner = await POSTERS.get(key)
        if (!owner) {
          return emptyPoster
        }
        const latestKey = await POSTERS.get(owner)
        return key === latestKey
          ? { index: key, title: `${key} is taken`, owner: owner, used: true }
          : emptyPoster
      },
    ),
  )
}

export default async function Home() {
  const posters = await getPosters()
  return (
    <main className="m-8">
      <h2 className="mb-4 pl-2 leading-7 border-b-2 border-slate-300 dark:border-slate-700 text-3xl font-semibold">
        Posters
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {posters.map((poster) => (
          <PosterCard key={poster.index} {...poster} />
        ))}
      </div>
    </main>
  )
}
