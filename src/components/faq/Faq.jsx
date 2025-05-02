import React, { useEffect, useState } from "react";
import Head from "../../common/head/Head";
import Title from "../../common/title/Title";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./faq.scss";
import { faq } from "./data/data";
const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const toggleShow = (id) => {
    if (show === id) {
      return setShow(null);
    }
    setShow(id);
  };
  
  return (
    <>
      <div>
        <Head
          cover="../image/faq/[fpdl.in]_biotechnology-scientist-working-lab_85869-8122_full.jpg"
          title="سوالات"
          dec=" نمونه سوال های پر تکرار دانشجویان   "
        />
        <section className="section-p1">
          <Title
            title="بخش سولات "
            dec="پاسخ به سوالات پر تکرار دانشجویان و اولیا محترم "
          />
          <div className="contener">
            <div className="faq-accordion-content">
              <ul>
                {faq.map((val, index) => (
                  <li key={index}>
                    <h1
                      className={
                        show === val.id
                          ? "accordion-title active"
                          : "accordion-title"
                      }
                      onClick={() => toggleShow(val.id)}
                    >
                      {show === val.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
                      {val.question}
                    </h1>
                    <p
                      className={
                        show === val.id
                          ? "accordion-content active"
                          : "accordion-content"
                      }
                    >
                      {val.response}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
