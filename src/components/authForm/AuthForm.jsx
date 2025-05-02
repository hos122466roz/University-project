import React, { useState } from "react";
import "./authForm.scss";
import { useNavigate, useParams } from "react-router";
import LoginForm from "./loginForm/LoginForm";
import RegesterForm from "./regesterForm/RegesterForm";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const AuthForm = () => {
  const [page, setPage] = useState("login");
  let { subpage } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);

    if (subpage === undefined) {
      setPage("login");
    } else {
      setPage(subpage);
    }
  }, [subpage]);

  return (
    <>
      <section className="section-p1 auth">
        <div className="auth-form">
          {page === "login" && <LoginForm />}
          {page === "regester" && <RegesterForm />}
        </div>
      </section>
    </>
  );
};

export default AuthForm;
