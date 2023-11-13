import React from 'react';
import './index.css';
import './rotate.scss';
import ani1 from "../../assets/animal1.png";
import ani2 from "../../assets/animal2.png";
import ani3 from "../../assets/animal3.png";
import ani4 from "../../assets/animal4.png";
import ani5 from "../../assets/animal5.png";
import ani6 from "../../assets/animal6.png";
import ani7 from "../../assets/animal7.png";
import ani8 from "../../assets/animal8.png";
import ani9 from "../../assets/animal9.png";
import ani10 from "../../assets/animal10.png";
import ani11 from "../../assets/animal11.png";

const Rotate = () => {
    return (
      <div>
        <div class="orbit">
          <ul>
            <li class="inner-path">
              <div>
                <img src={ani1} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani2} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani3} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani4} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani5} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani6} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani7} alt="" />
              </div>
            </li>
            <li class="inner-path">
              <div>
                <img src={ani8} alt="" />
              </div>
            </li>
          {/* </ul> */}

          
            <li class="outer-path">
              <div>
                <img src={ani1} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani2} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani3} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani4} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani5} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani6} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani7} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani8} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani9} alt="" />
              </div>
            </li>
            <li class="outer-path">
              <div>
                <img src={ani10} alt="" />
              </div>
            </li>
            </ul>
        </div>
      </div>
    );
}

export default Rotate
