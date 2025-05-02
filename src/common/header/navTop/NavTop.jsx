import React from "react";
import { icons, navTop } from "./data/dataTop";

const NavTop = () => {
  return (
    <>
      <div className="nav-top">
        <nav>
          <ul>
            {navTop.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="icon">
          <ul className="pagination">
            {icons.map((val, index) => (
              <li key={index}>
                <a href={val.path} className="link-icon">
                  <i>{val.icon}</i>
                </a>
                {val.title ? <span className="title">{val.title}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavTop;
