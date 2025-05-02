import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
          <div className="img">
            <img loading="lazy" src="./image/logo/Picsart_24-02-22_13-08-04-798.png" alt="" />
          </div>
          <ul>
            <li>
              <a href="https://www.sku.ac.ir/"> سایت دانشگاه </a>
            </li>

            <li>
              <Link to="/about-us">درباره ما</Link>
            </li>
          </ul>
        </div>
      <div className="col"> 
        <h4>   ساخته شده توسط  &hearts;  Hosein Roozdar 	</h4>
      </div>
      </footer>
    </>
  );
};

export default Footer;
