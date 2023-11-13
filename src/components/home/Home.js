import React from "react";
import bubimg1 from "../../assets/img1.webp";
import bubimg2 from "../../assets/img2.webp";
import bubimg3 from "../../assets/img3.webp";
import bubimg4 from "../../assets/img4.webp";
import bubimg5 from "../../assets/img5.webp";
import bubimg6 from "../../assets/img6.webp";
import bubimg7 from "../../assets/img7.webp";
import bubimg8 from "../../assets/img8.webp";
import bubimg9 from "../../assets/img9.webp";
import bubimg10 from "../../assets/img10.webp";
import bubimg11 from "../../assets/img11.webp";
import bubimg12 from "../../assets/img12.webp";
import bubimg13 from "../../assets/img13.webp";
import bubimg14 from "../../assets/img14.webp";
import bubimg15 from "../../assets/img15.webp";
import bubimg16 from "../../assets/img16.webp";
import "./index.css";

const Home = () => {
  return (
    <div className="bg-layout">
      <div className="img-row1">
        <img src={bubimg1} className="animateImg imgPosition1" />
        <img src={bubimg2} className="animateImg imgPosition2" />
        <img src={bubimg3} className="animateImg imgPosition3" />
        <img src={bubimg4} className="animateImg imgPosition4" />
        <img src={bubimg5} className="animateImg imgPosition5" />
        <img src={bubimg8} className="animateImg imgPosition7" />
      </div>
      <div className="img-row2">
        <img src={bubimg6} className="animateImg imgPosition6" />
        <img src={bubimg7} className="animateImg imgPosition7" />
        <img src={bubimg8} className="animateImg imgPosition8" />
        <img src={bubimg9} className="animateImg imgPosition9" />
        <img src={bubimg10} className="animateImg imgPosition10" />
      </div>
      <div className="img-row3">
        <img src={bubimg11} className="animateImg imgPosition11" />
        <img src={bubimg12} className="animateImg imgPosition12" />
        <img src={bubimg13} className="animateImg imgPosition13" />
        <img src={bubimg14} className="animateImg imgPosition14" />
        <img src={bubimg15} className="animateImg imgPosition15" />
        <img src={bubimg16} className="animateImg imgPosition16" />
      </div>
    </div>
  );
};

export default Home;
