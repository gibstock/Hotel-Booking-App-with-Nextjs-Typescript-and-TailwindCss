import Image from "next/image"

const Logo = () => {
  return (
    <div className='logo flex flex-row justify-center items-center space-x-2'>
        <Image 
          src='/Subtract.png' 
          alt='Tripguide Logo'
          width={40}
          height={38}
        />
        <a href="/" className='font-bold text-[20px_27px] text-[#222529]'>TripGuide</a>
      </div>
  )
}

export default Logo