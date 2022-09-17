type AppProps = {
  title: string;
  subheading: string;
}

const Headline = ({title, subheading}: AppProps) => {
  return (
    <>
      <div id="headline" className="flex flex-col justify-center items-start gap-3 w-full">
        <h2 className="font-bold text-5xl -tracking-[.5%]">{title}</h2>
        <h3 className="font-normal text-base text-[#3B3E44]">{subheading}</h3>
      </div>
    </>
  )
}

export default Headline