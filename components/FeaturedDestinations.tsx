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
          <div className="flex flex-col justify-between col-span-12 rounded-3xl bg-gray-200 p-7">
            <div className="rating-container flex">
              <div className="card-rating text-red-700 font-bold text-lg bg-white rounded-2xl py-[2px] px-5 ">3.5</div>
            </div>
            <div className="card-title">
              <span className="font-bold text-white text-4xl">Barcelona, Spain</span>
              <div className="avatar-group flex flex-row justify-start items-center gap-x-3">
                <div className="avatar-image bg-gray-300 rounded-full w-7 h-7">
                  <img src="" alt="" />
                </div>
                <span className="text-white font-normal text-xl">196 Activites</span>
              </div>
            </div>
          </div>
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