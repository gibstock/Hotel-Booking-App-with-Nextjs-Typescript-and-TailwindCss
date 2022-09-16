const FeaturedDestinations = () => {
  return (
    <div id="featured-destinations" className="flex flex-col justify-center items-center py-10 px-[135px] gap-12">

      {/* Headline  */}
      <div id="headline" className="flex flex-col justify-center items-start gap-3">
        <h2 className="font-bold text-[48px_70px] -tracking-[.5%]">Featured Destination</h2>
        <h3 className="font-normal text-base text-[#3B3E44]">Popular destinations open to visitors from Indonesia</h3>
      </div>

      {/* Card Content  */}
      <div className="grid grid-cols-12 grid-rows-12 gap-8 outline-black w-full h-[718px]">
        <div className="grid grid-cols-12 gap-y-8 gap-x-14 col-span-9 row-span-12">
          <div className="col-span-12 rounded-3xl bg-gray-200"></div>
          <div className="col-start-1 col-end-7 rounded-3xl bg-gray-200"></div>
          <div className="col-start-7 col-end-13 rounded-3xl bg-gray-200"></div>
        </div>
        <div className="flex flex-col gap-6 col-span-3 row-span-12">
          <div className="flex-1 rounded-3xl bg-gray-200"></div>
          <div className="flex-1 rounded-3xl bg-gray-200"></div>
          <div className="flex-1 rounded-3xl bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedDestinations