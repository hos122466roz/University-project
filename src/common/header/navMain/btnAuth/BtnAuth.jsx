import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineLogin } from "react-icons/hi";

const BtnAuth = () => {
  const id = useSelector((state) => state.authReducer.id);

  return (
    <>
      <div className="rejester">
        {id ? (
          <button>
            <Link to="/profile">
              <span className="img">
                <img src="../image/team/User-Profile-PNG-Image.png" />
              </span>
              <h4> پروفایل</h4>
            </Link>
          </button>
        ) : (
          <button>
            <Link to="/auth-form">
              <span>
                <HiOutlineLogin />
              </span>
              <h4>ورود | ثبت‌نام</h4>
            </Link>
          </button>
        )}
      </div>
    </>
  );
};

export default BtnAuth;
