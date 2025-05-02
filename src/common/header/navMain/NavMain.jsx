import React, { useState } from "react";
import { list } from "./data/data";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../../modal/Modal";
import Search from "./search/Search";
import { Link } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";
import BtnAuth from "./btnAuth/BtnAuth";

const NavMain = () => {
  const [show, setShow] = useState(false);
  const [mobaile, setMobaile] = useState(false);
  const [active, setActive] = useState(false);



  const toggleSearch = () => {
    setShow(!show);
  };
  const toggleMobaile = () => {
    setMobaile(!mobaile);
  };

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".nav-main");

    header.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      {mobaile ? <Modal cklicked={toggleMobaile} /> : null}

      <nav className={mobaile ? "mobaile active" : "mobaile"}>
        <div className="close">
          <button>
            <AiOutlineClose onClick={toggleMobaile} />
          </button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index} onClick={toggleMobaile}>
              <Link
                onClick={() => setActive(!active)}
                to={item.path}
                className={active ? "menu active" : "menu"}
              >
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-main">
        <div className="logo">
          <Link to="/">
            <img src="../image/logo/WebBanner1.jpg" alt="" />
          </Link>
        </div>
        <nav className="menu_ul">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="menu">
                  <span>{item.name} </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="saerch">
            <Link to="/auth-form">
          <button className="login">

            <HiOutlineLogin />
          </button>
            </Link>
          <button onClick={toggleSearch}>
            <FiSearch />
          </button>

          <button onClick={toggleMobaile} className="bar">
            <FaBars />
          </button>
        </div>
        <BtnAuth/>
       
      </div>

      {show ? <Search search={toggleSearch} /> : null}
    </>
  );
};

export default NavMain;
