import "./menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#skills">skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#connect">connect</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu