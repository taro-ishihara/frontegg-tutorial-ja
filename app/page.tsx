import { PosterCard } from '@/components/poster-card'

export const runtime = 'edge'

async function getNumPosterSlots() {
  return 8
}

async function getPosters() {
  return [
    {
      index: '3',
      title: 'Super Great!',
      owner: 'taro@example.com',
    },
  ]
}

export default async function Home() {
  const numPosterSlots = await getNumPosterSlots()
  const posters = await getPosters()
  const posterCards = Array.from({ length: numPosterSlots }, (_, index) =>
    (index + 1).toString(),
  ).map((key) => {
    const emptyPoster = {
      index: key,
      title: `Empty poster ${key}`,
      owner: 'Stick your poster here.',
      used: false,
    }
    const poster = posters.find((poster) => poster.index === key)
    return (poster && { ...poster, used: true }) ?? emptyPoster
  })
  return (
    <main className="m-8">
      <h2 className="mb-4 pl-2 leading-7 border-b-2 border-slate-300 dark:border-slate-700 text-3xl font-semibold">
        Posters
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {posterCards.map((poster) => (
          <PosterCard {...poster} />
        ))}
      </div>
    </main>
  )
}
