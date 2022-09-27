import type { NextPage } from 'next'
import Head from 'next/head'
import ExploreTheWorld from '../components/ExploreTheWorld'
import FeaturedDestinations from '../components/featured-destination/FeaturedDestinations'
import Header from '../components/Header'
import TrendingCities from '../components/trending-cities/TrendingCities'
import Footer from '../components/Footer'
import DestinationCard from '../components/destination-card/DestinationCard'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <DestinationCard />
      <FeaturedDestinations />
      <ExploreTheWorld />
      <TrendingCities />
      <Footer />
    </div>
  )
}

export default Home
