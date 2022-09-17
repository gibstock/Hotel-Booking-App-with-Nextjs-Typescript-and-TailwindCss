import Headline from "./Headline"
import DetailedCard from "./DetailedCard"


const ExploreTheWolrd = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-32 gap-12 bg-[#FAFAFA]">
      <Headline
        title="Explore The World"
        subheading="10,788 beautiful places to go"
      />
      <div className="slider flex flex-row justify-space-between items-center gap-10">
        <DetailedCard
          price={210}
          location='Turkey, Mamaris'
          rooms={375}
          reviews={4.91}
          reviewAmount={147}
          imgPath='/beach-palm-blue-sky-infinity.png'
          hotelName="Comfort Space"
          distanceToTownCenter={1.2}
        />
        <DetailedCard
          price={210}
          location='Turkey, Mamaris'
          rooms={375}
          reviews={4.91}
          reviewAmount={147}
          imgPath='/beach-palm-blue-sky-infinity.png'
          hotelName="Comfort Space"
          distanceToTownCenter={1.2}
        />
        <DetailedCard
          price={210}
          location='Turkey, Mamaris'
          rooms={375}
          reviews={4.91}
          reviewAmount={147}
          imgPath='/beach-palm-blue-sky-infinity.png'
          hotelName="Comfort Space"
          distanceToTownCenter={1.2}
        />
        <DetailedCard
          price={210}
          location='Turkey, Mamaris'
          rooms={375}
          reviews={4.91}
          reviewAmount={147}
          imgPath='/beach-palm-blue-sky-infinity.png'
          hotelName="Comfort Space"
          distanceToTownCenter={1.2}
        />
      </div>
    </div>
  )
}

export default ExploreTheWolrd