import "./navbar.scss"
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <a href="#intro" className="logo">jkwhite</a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a href="https://github.com/jkentwhite" target="_blank"><GitHubIcon className="icon"/></a>
            <a href="https://jkentwhite.com" target="_blank"><WebIcon className="icon"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
