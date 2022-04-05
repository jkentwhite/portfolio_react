
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Games from "./components/games/Games";
import Connect from "./components/connect/Connect";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar/>
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
