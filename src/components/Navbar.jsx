import logo from "../assets/ayman-khattaby-high-resolution-logo.png"
import { FaLinkedin, FaGithub } from "react-icons/fa"


const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-60" src={logo} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl ">
        <a href="https://github.com/khattaby" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ayman-khattaby" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
