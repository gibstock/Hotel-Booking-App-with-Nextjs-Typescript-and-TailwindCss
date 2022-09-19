import Link from "next/link"
import Button from "./Button"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="bg-white">
      <div id="cta" className="bg-primaryBtn text-white">
        <h2>Get our pro offers</h2>
        <p>Create a visual identity for your company and an overall brand</p>
        <form action="">
          <div className="form-group">
            <input type="email" name="email" id="email" placeholder="Enter email..." required/>
            <Button>Subscribe</Button>
          </div>
        </form>
      </div>
      <div id="footer-links" className="flex flex-row items-center px-7 py-10 gap-3">
        <div className="link-wrapper flex flex-col justify-center items-start gap-6">
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