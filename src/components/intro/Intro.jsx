import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"


const Intro = () => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["artist", "storyteller", "game designer","developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/randomlines-4980.jpg" alt="a gus cat in a hat"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>what up? i'm</h2>
          <h1>j white</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down_arrow.png" alt=""/>
        </a>
      </div>
    </div>
  )
}

export default Intro;