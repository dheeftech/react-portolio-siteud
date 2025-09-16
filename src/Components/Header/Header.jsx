import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profileImg.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-content">
          <h1>Hy! Am</h1>
          <h2 className="fullname">Abbas Walaal</h2>
          <h2>
            I'm A
            <Typical
              steps={[
                " Full Stack Developer 🚀",
                1000,
                " Frontend Developer 💻",
                1000,
                " Backend Developer 🔧",
                1000,
                " React Developer 🔄",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            inventore in quia. Sint doloremque assumenda natus nisi! A rem ab
            recusandae similique iure, cupiditate nobis consectetur numquam
            obcaecati. Praesentium quos unde ex inventore, id ratione aliquid
            architecto accusamus ipsum magnam ut, enim esse est non saepe
            voluptate? Veniam, aliquid dolor?
          </p>
          {/*  payment links */}

          <div className="header-payment-container">
            <button>Hire Me</button>
            <i className="fa-brands fa-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
          </div>
        </div>
        {/* positioned absolute */}
        <div className="profile-img-container">
          <img src={profileImg} alt="profile image" />
          {/* positioned relative */}
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
