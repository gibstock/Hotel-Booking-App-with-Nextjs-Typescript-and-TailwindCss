type Props = {
  children: React.ReactNode;
}

const PriceButton = ({children}: Props) => {
  return (
    <button className="bg-primaryBtn text-white rounded-md font-bold text-base py-1 px-3 ">{children}</button>
  )
}

export default PriceButton