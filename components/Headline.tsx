type AppProps = {
  title: string;
  subheading: string;
}

const Headline = ({title, subheading}: AppProps) => {
  return (
    <>
      <div id="headline" className="flex flex-col justify-center items-center gap-3 w-[213px] lg:items-start lg:w-full">
        <h2 className="font-bold text-5xl -tracking-[.5%] text-center lg:text-left lg:text-5xl">{title}</h2>
        <h3 className="font-normal text-base text-[#3B3E44] text-center lg:text-left lg:text-2xl">{subheading}</h3>
      </div>
    </>
  )
}

export default Headline