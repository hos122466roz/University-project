import React from "react";
import Title from "../../../common/title/Title";
import "./interview.scss";
import { BsCheckCircleFill } from "react-icons/bs";

const Interview = () => {
  return (
    <>
      <section className="section-p1 interview">
        <Title
          title="مصاحبه دوستانه"
          dec="مصاحیه با اساتید ، دانشجویان داشنگاه و فارغ تحصیلان"
        />
        <div className="continer flex">
          <div className="img">
            <img loading="lazy" src="../image/interview/[fpdl.in]_asian-scientist_173387-3086_full.jpg" alt="" />
          </div>
          <div className="details">
           

              <h2> جواب سوالات شما </h2>
              <p>
                مصاحبه با افراد مختلف در خصوص جزِیات و کلیات گیاهپزشکی و پاسخ به
                سوالات داشنجویان و خانواده های دانشجویان و راهنمایی اساتید قبل ورود به این رشته
              </p>
              <div>
                <div>
                  <ul className="grid2">
                    <li>
                      <BsCheckCircleFill />
                      <span>اینده گیاهپزشکی</span>
                    </li>
                    <li>
                      <BsCheckCircleFill />
                      <span>آشنایی با اساتید </span>
                    </li>  <li>
                      <BsCheckCircleFill />
                      <span>فرصت های شغلی</span>
                    </li>
                    <li>
                      <BsCheckCircleFill />
                      <span>انگیزه دانشجویان </span>
                    </li>
                    <li>
                      <BsCheckCircleFill />
                      <span>استفاده از تجربیات دیگران </span>
                    </li>
                    <li>
                      <BsCheckCircleFill />
                      <span>موفقیت در این رشته</span>
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

export default Interview;
