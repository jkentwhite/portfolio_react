import "./navbar.scss"
import AnchorIcon from '@mui/icons-material/Anchor';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">jkentwhite</a>
          <div className="itemContainer">
            <AnchorIcon/>
            <span>123456789</span>
          </div>
        </div>
        <div className="right">
         
        </div>
      </div>
    </div>
  )
}

export default Navbar;
