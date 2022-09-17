import CardContent from "./CardContent"
import Headline from "../Headline"

const FeaturedDestinations = () => {
  return (
    <div id="featured-destinations" className="flex flex-col justify-center items-start py-10 px-[135px] gap-12">

      {/* Headline  */}
      <Headline 
        title="Featured Destination"
        subheading="Popular destinations open to visitors from Indonesia"
      />
      {/* Card Content  */}
      <div className="lg:grid lg:grid-cols-12 lg:grid-rows-12 gap-8 w-full flex flex-col items-center">

        {/* Left Group  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-14 col-span-9 row-span-12">
          <div className="lg:col-span-12 rounded-3xl bg-gray-200 p-7 h-[280px]">
            <CardContent 
              rating={3.5} 
              location='Barcelona, Spain' 
              titleSize="text-2xl md:text-4xl" 
              activities={196}
            />
          </div>
          <div className="lg:col-start-1 lg:col-end-7 rounded-3xl bg-gray-200 py-3 px-7 h-96">
            <CardContent 
              rating={3.5} 
              location='London, UK' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
          <div className="lg:col-start-7 lg:col-end-13 rounded-3xl bg-gray-200 py-3 p-7 h-96">
          <CardContent 
              rating={3.5} 
              location='Paris, France' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
        </div>

        {/* Right Group  */}
        <div className="flex flex-col gap-6 col-span-3 row-span-12 h-full">
          <div className="rounded-3xl bg-gray-200 py-4 px-5 h-60">
          <CardContent 
              rating={3.5} 
              location='Sydney, Australia' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
          <div className="rounded-3xl bg-gray-200 py-4 px-5 h-56">
          <CardContent 
              rating={3.5} 
              location='Tokyo, Japan' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
          <div className="rounded-3xl bg-gray-200 py-4 px-5 h-56">
          <CardContent 
              rating={3.5} 
              location='Hanoi, Vietnam' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDestinations