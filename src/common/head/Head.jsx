import React from "react";
import "./head.scss"
const Head = ({ cover, title, dec }) => {
  return (
    <>
      <section className="head">
        <img loading="lazy" src={cover} alt="" />
        <h1>{title}</h1>
        <p>{dec}</p>
      </section>
    </>
  ); 
};

export default Head;
