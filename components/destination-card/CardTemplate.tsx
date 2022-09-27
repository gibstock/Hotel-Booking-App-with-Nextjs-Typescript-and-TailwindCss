import Image from 'next/image'

type AppProps = {
  img: string,
  name: string,
  classes?: string
}

export default function CardTemplate({img, name, classes = ''} : AppProps) {

  return (
    <div className={`flex flex-col justify-start items-start space-y-5 border border-gray-300 rounded-2xl p-[2rem] ${classes}`}>
      <Image className='rounded-2xl' src={`${img}`} alt={`${name}`} width='70px' height='70px'></Image>
      <p className='font-bold text-2xl'>{name}</p>
      <p className='text-gray-400'>86 Destinations</p>
    </div>
  )
}
