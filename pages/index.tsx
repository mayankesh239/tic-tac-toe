import type { NextPage } from 'next'
import Head from 'next/head'
import Board from '../containers/Board'
const Home: NextPage = () => {
  return (
    <div className='game'>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Board />
      </main>
    </div>
  )
}

export default Home
