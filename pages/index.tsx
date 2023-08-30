import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex fle-col-items-center justify-center min-h-screen py-2">
      <Head>
        <title>AB2R</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>

      <h1>Airbnb</h1>
    </div>

  )
}
