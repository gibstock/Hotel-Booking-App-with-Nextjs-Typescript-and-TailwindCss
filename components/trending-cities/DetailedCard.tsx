import Button from '../PriceButton'

type AppProps = {
  price: number;
  location: string;
  reviews: number;
  reviewAmount: number;
  imgPath: string;
}

const DetailedCard = ({price, location, reviews, reviewAmount, imgPath}: AppProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-between p-4 bg-white rounded-3xl w-full lg:items-start">
        <div className="content-wrapper flex flex-row items-center p-0 gap-4">
          <div className="image rounded-2xl w-44 h-48 bg-cover" style={{backgroundImage: `url(${imgPath})`}}></div>
          <div className="content flex flex-col items-start gap-6">
            <div className="top-content flex flex-col justify-between items-start gap-6">
              <h2 className="font-bold text-2xl text-[#222529]">{location}</h2>
              <div className="flex flex-row items-center gap-2">
                <span className="star-icon">
                  <img src="/star.png" alt="star" />
                </span>
                <span className="rating">{reviews}</span>
                <span className="review-amount">({reviewAmount})</span>
              </div>
              <span className="font-medium text-base">{price}/night</span>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailedCard