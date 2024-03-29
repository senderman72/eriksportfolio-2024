// MainContent.js

import "./MainContent.css";
import Work from "../assets/Work.jpg";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <img className="work-pic" src={Work} />

      <div className="balls">
        <div className="ball-a">Learn</div>
        <div className="ball-b">Grow</div>
        <div className="ball-c">Dedication</div>
      </div>
      <header>
        <h1>Erik Persson</h1>
        <p>Webdeveloper</p>
      </header>
    </div>
  );
};

export default MainContent;
