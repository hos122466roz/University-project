import React, { useEffect } from "react";
import Head from "../../common/head/Head";
import "./labs.scss";
import Title from "../../common/title/Title";
import { FiCheckCircle } from "react-icons/fi";
import { labs } from "./data/data";

const Labs = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Head
        cover="../image/labs/[fpdl.in]_bright-ultra-modern-high-tech-laboratory-full-advanced-technological_795881-1551_full.jpg"
        title="آزمایشگاها"
        dec="آشنایی با آزمایشگاه و ویژگی های آنها"
      />
      <section className="section-p1 bg">
        <Title
          title=" ویژگی ها"
          dec="معرفی بخش مختلف آزمایشگاه های موجود در زمینه گیاه پزشکی"
        />
        <div className="cantiener">
          {labs.map((val, index) => (
            <div className="Property " key={index}>
              {val.icon}
              <h1>{val.title}</h1>
              <p>{val.dec}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section-p1">
        <Title
          title="آزمایشگاه ها"
          dec="معرفی بخش مختلف آزمایشگاه های موجود در زمینه گیاه پزشکی"
        />
        <div className="contianer">
          <div className="about-box">
            <div className="img">
              <img loading="lazy"
                src="../image/labs/[fpdl.in]_entomology_45756-239_full.jpg"
                alt=""
              />
              <img loading="lazy"
                src="../image/labs/women-experiment-sprout-close-up.jpg"
                className="position"
                alt=""
              />
            </div>
            <div className="details">
              <div className="sec-title">
                <h6>معرفی آزمایشگاه</h6>
                <h2>جامع و کامل بودن برای تحصلیل تا مقطع دکترا</h2>
              </div>
              <div className="text">
                <p>
                  در دانشکده کشاورزی دانشگاه شهرکرد بیش ازهفت آزمایشگاه وجود
                  دارد اعم ااز آزمایشگاه ژنتیک ، باغبانی ، ابیاری وخاک شناسی و
                  ... .
                </p>
                <p>
                  دو ازمایشگاه بسیار کاربردی و متناسب با رشته گیاهپزشکی وجود
                  دارد که عمده دروس و عملیات های دروس گیاهپزشکی در این دو
                  آزمایشگاه تدریس میشوند . آزمایشگاه بیماری شنسای گیاهی و
                  آزمایشگاه حشره شناسی ، دو آزمایشگاه فوق العاده مجهز میباشند که
                  در زمینه شناسایی آفات و بیماری ها کمک به درک بهتر مطالب آموزشی
                  میکند .
                </p>
                <ul>
                  <li>
                    <FiCheckCircle />

                    <span>داشتن میکروسکوپ های مجهز</span>
                  </li>
                  <li>
                    <FiCheckCircle />
                    <span>انجام آزمایش های باکتریایی</span>
                  </li>
                  <li>
                    <FiCheckCircle />
                    <span>داشتن دتسگاه های بهروز دنیا</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Labs;
