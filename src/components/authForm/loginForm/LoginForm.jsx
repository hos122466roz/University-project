import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authLogin } from "../../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { MdErrorOutline } from "react-icons/md";
const LoginForm = () => {
  const disptch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [err, setErr] = useState("");
  const [password, setPassword] = useState("");
  const loader = useSelector((state) => state.authReducer.loading);
  const success = useSelector((state) => state.authReducer.success);
  // const erorr = useSelector((state) => state.authReducer.erorr);

  // console.log(erorr);

  function login(ev) {
    ev.preventDefault();
    const data = { username, password };
    disptch(authLogin(data));
  }
  useEffect(() => {
    if (success) return navigate(-1);
    console.log("redoud");
  }, [success]);
  return (
    <div className="login-form">
      <h1>ورود</h1>
      <form action="" onSubmit={login}>
        <div className="inputBox">
          <label htmlFor="username">نام کاربری</label>
          <input
            type="text"
            placeholder=" مثلا : hosein1380   "
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          {/* <span> <MdErrorOutline /> رمزتون درست نیست  </span> */}
        </div>
        <div className="inputBox">
          <label htmlFor="username">رمز عبور </label>
          <input
            type="text"
            placeholder=" مثلا : hosein122466R@ "
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <span> <MdErrorOutline /> رمزتون درست نیست  </span> */}
        </div>
        <button>
          {loader ? <ClipLoader color="#fff" size={20} /> : "ورود"}
        </button>
      </form>
      <div className="text-regesteer">
        <h3>
          آیا حساب کاربری ندارید ؟
          <Link to={"/auth-form/regester"}> ثبت‌نام </Link>
        </h3>
      </div>
    </div>
  );
};

export default LoginForm;
