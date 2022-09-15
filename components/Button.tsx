type Props = {
  children: React.ReactNode;
}

const Button = ({children}: Props) => {
  return (
    <button className="bg-primaryBtn text-white px-7 py-3 rounded-[10px]">{children}</button>
  )
}

export default Button