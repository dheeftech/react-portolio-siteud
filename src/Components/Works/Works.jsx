import React from "react";
import "./works.css";
import w1 from "../../assets/w1.jpg";
import w2 from "../../assets/w2.jpg";
import w3 from "../../assets/w3.jpg";
import w4 from "../../assets/w4.jpg";
import w5 from "../../assets/w5.jpg";
import w6 from "../../assets/w6.jpg";

function Works() {
  return (
    <div>
      <div className="works-container">
        <div className="works-list-container">
          <div className="works-item">
            <img src={w1} alt="" className="works-img" />
          </div>
          <div className="works-item">
            <img src={w2} alt="" className="works-img" />
          </div>
          <div className="works-item">
            <img src={w3} alt="" className="works-img" />
          </div>
          <div className="works-item">
            <img src={w4} alt="" className="works-img" />
          </div>
          <div className="works-item">
            <img src={w5} alt="" className="works-img" />
          </div>
          <div className="works-item">
            <img src={w6} alt="" className="works-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
