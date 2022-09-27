import Link from "next/link"
import Button from "./Button"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-white relative px-4">
      <div className="flex flex-col justify-center items-center">

      <div id="cta" className="flex flex-col justify-center items-start p-4  gap-3 rounded-2xl  right-[9.38%] left-[9.38%] top-0 bottom-[64.47%] bg-primaryBtn text-white ">
        <div className="flex flex-col justify-center items-center py-15 px-0 gap-3 rounded-3xl">
          <div className="flex flex-row justify-between items-center p-0 ">
            <div className="flex flex-col justify-between items-start">
              <h2>Get our pro offers</h2>
              <p>Create a visual identity for your company and an overall brand</p>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group flex flex-col items-center py-2 px-3 rounded bg-white">
            <div className="flex flex-row justify-between items-center gap-16">
              <input type="email" name="email" id="email" placeholder="Type your email here" required/>
              <Button>Subscribe</Button>
            </div>
          </div>
        </form>
      </div>
      </div>
      <div id="footer-links" className="flex flex-row items-center  px-7 py-10 gap-3">
        <div className="link-wrapper flex flex-col justify-center items-start gap-6 mt-32" >
          <div className="links flex flex-col justify-center items-start gap-4">
            <h3>Business</h3>
            <ul>
              <li>
                <Link href='/'>
                  <a>Success</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Information</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a>Travel Guide</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Logo />
        <div className="toggle"></div>
      </div>
    </footer>
  )
}

export default Footer