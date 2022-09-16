type AppProps = {
  rating: number;
  location: string;
  titleSize: string;
  activities: number;
}

const CardContent = ({rating, location, titleSize, activities}: AppProps) => {
  return (
    // <div className="flex flex-col justify-between col-span-12 rounded-3xl bg-gray-200 p-7">
    <div className="flex flex-col justify-between h-full">
      <div className="rating-container flex">
        <div className="card-rating text-red-700 font-bold text-lg bg-white rounded-2xl py-[2px] px-5 ">{rating}</div>
      </div>
      <div className="card-title">
        <span className={`font-bold text-white ${titleSize}`}>{location}</span>
        <div className="avatar-group flex flex-row justify-start items-center gap-x-3">
          <div className="avatar-image bg-gray-300 rounded-full w-7 h-7">
            <img src="" alt="" />
          </div>
          <span className="text-white font-normal text-xl">{activities} Activites</span>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default CardContent