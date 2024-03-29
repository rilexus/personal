// v1.0.0
import type { NextPage } from 'next'
import Head from 'next/head'
import { Home as HomePage } from '../page-components/home'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Stanislav Panchenko</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main >
          <HomePage />
      </main>
    </div>
  )
}

export default Home
