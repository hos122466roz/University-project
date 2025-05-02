import React from "react";
import "./team.scss";
import Title from "../../../common/title/Title";
import { AiOutlinePhone, AiFillStar, AiOutlineMail } from "react-icons/ai";
import { RiHomeOfficeLine } from "react-icons/ri";
import { team } from "./data/data";

const Team = () => {
  return (
    <>
      <section className="section-p1">
       
        <Title title="اعضای علمی" dec="اعضای هیت علمی و اساتید " />
        <div>
        
        </div>
        <div className="team ">
          {team.map((val, index) => (
            <div className="box" key={index}>
              {val.manager ? (
                <div className="manager">
                  <button className="normal">
                    <AiFillStar />
                    <span>مدیر گروه</span>
                  </button>
                </div>
              ) : null}
             
              <div className="img">
                <img loading="lazy"
                  src={val.cover}
                  alt=""
                />
              </div>

              <div className="details">
                <h1> {val.name}  </h1>
                <h4> {val.title} </h4>
                <div className="icon">

                  <a href={val.icons.phone}>
                    <AiOutlinePhone />
                  </a>
                  <a href={val.icons.email}>
                    <AiOutlineMail />
                  </a>
                  <a href={val.icons.office}>
                    <RiHomeOfficeLine />
                  </a>
                </div>
              </div>
            </div>
          ))}
     
        </div>
      </section>
    </>
  );
};

export default Team;
