import logo from '../assets/picofme.png'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-9 w-10 rounded-full" src={logo} alt="logo" /> {/* Added rounded-full */}
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/ashish-singh-281807252/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
</a>
<a href="https://www.instagram.com/ashxsh.1/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
</a>
<a href="https://github.com/Ashxsh-1" target="_blank" rel="noopener noreferrer">
    <FaGithub />
</a>
<a href="https://x.com/AshxshSingh" target="_blank" rel="noopener noreferrer">
    <FaSquareXTwitter />
</a>
    </div>
</nav>

  )
}

export default Navbar