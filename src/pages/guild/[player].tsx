import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  return (
    <main className="player">
      {router.query.player}
    </main>
  )
}
