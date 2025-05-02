import React, { useEffect } from "react";
import "./about.scss";
import { Typewriter } from "react-simple-typewriter";
import { BsWhatsapp } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="about-us section-p1">
        <div className="details">
          <h1>
            {" "}
            من <span>حسین روزدار </span>هستم{" "}
          </h1>
          <h2>
            {" "}
            یک{" "}
            <span>
              <Typewriter
                words={[
                  " توسعه دهنده با انگیزه",
                  "طراح سایت ",
                  "کارشناس گیاهپزشکی",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            در زمینه طراحی سایت فعالیت دارم و با بهره بگیری از به روزترین
            تکنولوژی های طراحی و توسعه سایت ، تلاش میکنیم تا در سطح بالا سایت را
            اجرا کنم . سایتی که در حال حاضر تماشا میکنید یک سایت برای معرفی گروه
            و رشته گیاه پزشکی میباشد این سایت به درخواست مدیر گروه بخش گیاهپزشکی
            دانشکده کشاورزی دانشگاه دولتی شهرکرد اجرا شده است . قدردانی میکنم از
            نگاه پر مهر شما
          </p>
          <div className="icon">
            <h4>ارتباط با من</h4>
            <ul>
              <li>
                <a href="https://api.whatsapp.com/send?phone=989139587385&text= سلام. وقت بخیر! من از طریق سایت گیاهپزشکی  با شما ارتباط میگیرم!">
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/hosein.rouzdar?igsh=YjcwOXlpNGE5dGcz">
                  <CiInstagram />
                </a>
              </li>
              <li>
                <a href="https://t.me/hoesin122466">
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a href="tel:09139587385">
                  <IoCallOutline />
                </a>
              </li>
              <li>
                <a href="mailto:hoesin122466@gamil.com">
                  <MdOutlineMailOutline />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="img">
          <img
            loading="lazy"
            src="../image/about/PicsArt_10-06-01.06.24.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
