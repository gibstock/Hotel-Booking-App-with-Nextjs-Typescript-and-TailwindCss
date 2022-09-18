import Headline from "./Headline"

const TrendingCities = () => {
  return (
    <div className='flex flex-col items-center p-2 gap-2 bg-[#F5F5F5]'>
      <Headline 
        title='Trending Cities'
        subheading="The most searched for cities on TripGuide"
      />
    </div>
  )
}

export default TrendingCities