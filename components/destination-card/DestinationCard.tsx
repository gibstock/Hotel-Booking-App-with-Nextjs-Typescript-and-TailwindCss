import CardTemplate from "./CardTemplate"

export default function DestinationCard() {
  return (
    <div className="mt-[7rem]">
      <h1 className="font-bold text-5xl text-center">Search a best place in the world</h1>
      <p className="mt-6 text-center text-gray-400">Whether you’re looking for places for a vacation. We are here to Guide you
      about the details you need to check in and ease your trips in advance</p>
      <div className="px-[9rem] mt-[6rem] text-center grid grid-cols-4 gap-7 w-full">
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Batu, East Java'/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Kuta' classes="bg-white-500 shadow-xl border-[0px]"/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Surabaya, East Java'/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Malang, East Java'/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Doemg, Central Java'/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Nusa Dua, Lombok'/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Bandung, West Java'/>
        <CardTemplate img='/beach-palm-blue-sky-infinity.png' name='Watatobi, Sumatera'/>
      </div>
    </div>
  )

}