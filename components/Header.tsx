import Image from 'next/image'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Header