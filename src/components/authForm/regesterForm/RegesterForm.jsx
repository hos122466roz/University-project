import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AUTH } from "../../../store/actions/auth";
import ClipLoader  from "react-spinners/ClipLoader";

const RegesterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.authReducer.loading);

  function regesteer(ev) {
    ev.preventDefault();
    const data = { email, username, password };

    dispatch(AUTH(data));
    // await axios.post("/register", { email, username, password }).then(result=>console.log(result))
  }
  return (
    <>
      <div className="login-form">
        <h1>ثبت‌نام</h1>
        <form action="" onSubmit={regesteer}>
          <div className="inputBox">
            <label htmlFor="email ">ایمیل</label>
            <input
              type="email"
              placeholder="مثلا : example@gmail.com  "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputBox">
            <label htmlFor="username">نام کاربری</label>
            <input
              type="text"
              placeholder=" مثلا : hosein1380"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="username">رمز عبور </label>
            <input
              type="text"
              placeholder=" مثلا : hosein122466R@ "
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button>{loader ? <ClipLoader color="#fff"   size={20} /> : "ثبت‌نام"}</button>
        </form>
        <div className="text-regesteer">
          <h3>
            آیا حساب کاربری دارید ؟<Link to={"/auth-form/login"}> ورود </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default RegesterForm;
