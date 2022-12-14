import {useSession} from 'next-auth/react'


const Hero = () => {

  const { data: session, status } = useSession()

  return (
    <div className="hero bg-[url('/beach-palm-blue-sky-infinity.png')] bg-center bg-cover bg-no-repeat h-[619px]">
      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#cff1ffd9] h-full  md:pl-36 md:items-start">
        {!session && status === 'unauthenticated' && (
          <h1 className="font-bold text-4xl md:text-6xl">
            Book With Us<br /> And Enjoy your<br /> Journey!
          </h1>
        )}
        {session && status === 'authenticated' && (
          <h1 className="font-bold text-4xl md:text-6xl">
          Book With Us Again!<br /> And Enjoy your<br />Next Journey!
        </h1>
        )}
      </div>
    </div>
  )
}

export default Hero