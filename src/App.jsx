
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Games from "./components/games/Games";
import Connect from "./components/connect/Connect";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Skills/>
        <Games/>
        <Connect/>
      </div>
    </div>
  );
}

export default App;
