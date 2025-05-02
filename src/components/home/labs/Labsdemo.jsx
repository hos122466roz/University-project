import React from "react";
import Title from "../../../common/title/Title";
import { labs } from "../../labs/data/data";
import "./Labsdemo.scss"

const Labsdemo = () => {
  return (
    <>
      <section className="section-p1 bg demo">
        <img loading="lazy" className="right" src="./image/team/shape-4.png" alt="" />
        <img loading="lazy" className="left" src="./image/team/shape-3.png" alt="" />
        <Title
          title="  آزمایشگاه"
          dec="معرفی بخش مختلف آزمایشگاه های موجود در زمینه گیاه پزشکی"
        />
        <div className="cantiener">
          {labs&& labs.slice(0,4).map((val, index) => (
            <div className="Property " key={index}>
              {val.icon}
              <h1>{val.title}</h1>
              <p>{val.dec}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Labsdemo;
