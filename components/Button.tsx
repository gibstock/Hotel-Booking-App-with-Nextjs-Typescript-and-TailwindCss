type Props = {
  children: React.ReactNode;
}

const Button = ({children}: Props) => {
  return (
    <button className="bg-primaryBtn text-white px-7 py-3 rounded-[10px] font-medium text-[20px_26px]">{children}</button>
  )
}

export default Button