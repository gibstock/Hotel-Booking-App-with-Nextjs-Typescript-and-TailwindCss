import CardContent from "./CardContent"

const FeaturedDestinations = () => {
  return (
    <div id="featured-destinations" className="flex flex-col justify-center items-start py-10 px-[135px] gap-12">

      {/* Headline  */}
      <div id="headline" className="flex flex-col justify-center items-start gap-3">
        <h2 className="font-bold text-5xl -tracking-[.5%]">Featured Destination</h2>
        <h3 className="font-normal text-base text-[#3B3E44]">Popular destinations open to visitors from Indonesia</h3>
      </div>

      {/* Card Content  */}
      <div className="grid grid-cols-12 grid-rows-12 gap-8 outline-black w-full h-[718px]">
        <div className="grid grid-cols-12 gap-y-8 gap-x-14 col-span-9 row-span-12">
          <div className="col-span-12 rounded-3xl bg-gray-200 p-7">
            <CardContent 
              rating={3.5} 
              location='Barcelona, Spain' 
              titleSize="text-4xl" 
              activities={196}
            />
          </div>
          <div className="col-start-1 col-end-7 rounded-3xl bg-gray-200 py-3 px-7">
            <CardContent 
              rating={3.5} 
              location='London, UK' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
          <div className="col-start-7 col-end-13 rounded-3xl bg-gray-200 py-3 p-7">
          <CardContent 
              rating={3.5} 
              location='Paris, France' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 col-span-3 row-span-12">
          <div className="flex-1 rounded-3xl bg-gray-200 py-4 px-5">
          <CardContent 
              rating={3.5} 
              location='Sydney, Australia' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
          <div className="flex-1 rounded-3xl bg-gray-200 py-4 px-5">
          <CardContent 
              rating={3.5} 
              location='Tokyo, Japan' 
              titleSize='text-2xl' 
              activities={25} 
            />
          </div>
          <div className="flex-1 rounded-3xl bg-gray-200 py-4 px-5">
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