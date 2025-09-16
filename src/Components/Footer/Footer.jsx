import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer-copy-right">
          <p>Copyright &copy; 2025. All rights reserved.</p>
        </div>
        <ul className="footer-social-media">
          <li>
            <a href="#">
              <i className="fa-brands facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
