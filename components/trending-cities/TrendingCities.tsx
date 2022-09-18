import Headline from "../Headline"
import DetailedCard from "./DetailedCard"

const TrendingCities = () => {
  return (
    <div className='flex flex-col items-center p-2 gap-2 py-10 px-5 md:px-[135px] bg-[#F5F5F5]'>
      <Headline 
        title='Trending Cities'
        subheading="The most searched for cities on TripGuide"
      />
      <div className="cards flex flex-col justify-center items-center gap-8 w-full">
          <DetailedCard
            price={250.00}
            location='Manila'
            reviews={4.91}
            reviewAmount={147}
            imgPath='/beach-palm-blue-sky-infinity.png'
          />
          <DetailedCard
            price={250.00}
            location='Francisco'
            reviews={4.91}
            reviewAmount={147}
            imgPath='/beach-palm-blue-sky-infinity.png'
          />
          <DetailedCard
            price={250.00}
            location='Frankfurt'
            reviews={4.91}
            reviewAmount={147}
            imgPath='/beach-palm-blue-sky-infinity.png'
          />
          <DetailedCard
            price={250.00}
            location='Washington'
            reviews={4.91}
            reviewAmount={147}
            imgPath='/beach-palm-blue-sky-infinity.png'
          />
          <DetailedCard
            price={250.00}
            location='Stockholm'
            reviews={4.91}
            reviewAmount={147}
            imgPath='/beach-palm-blue-sky-infinity.png'
          />
          <DetailedCard
            price={250.00}
            location='Seattle'
            reviews={4.91}
            reviewAmount={147}
            imgPath='/beach-palm-blue-sky-infinity.png'
          />
      </div>
    </div>
  )
}

export default TrendingCities