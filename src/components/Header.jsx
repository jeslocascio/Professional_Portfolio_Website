
import Logo from '../assets/Jesse_LoCascio_Logo.png';
import "../styles/index.css";
import "../styles/Header.css";

function Header() {
  return (
    <div>
      <header>
      <a href="#">
        <img src={Logo} className="brandLogo" alt="Jesse LoCascio Logo" />
      </a>
      <div>
        <ul className='headerNav'>
          <li>
            <a href="#">Home</a>
          </li>
            <li>
              <a href="#About_Me">About Me</a>
            </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Contact_Me">Contact Me</a>
          </li>
        </ul>
      </div>
    </header>
    </div>
  )
}

export default Header
