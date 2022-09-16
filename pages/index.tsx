import type { NextPage } from 'next'
import Head from 'next/head'
import FeaturedDestinations from '../components/FeaturedDestinations'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <FeaturedDestinations />
    </div>
  )
}

export default Home
