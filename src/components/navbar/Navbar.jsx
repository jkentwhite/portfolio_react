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
          <a href="#intro" className="logo">jkentwhite</a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <GitHubIcon className="icon"/>
            <WebIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
