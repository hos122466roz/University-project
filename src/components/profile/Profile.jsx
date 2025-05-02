import React from "react";
import Head from "../../common/head/Head";
import "./profile.scss";

import { CgProfile } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import UserInfo from "./user-info/UserInfo";

const Profile = () => {
  let { action } = useParams();
  if (action === undefined) {
    action = "user-info";
  }

  function LinkClasses(type = null) {
    let classes;
    if (type === action || (action === undefined && type === "user-info")) {
      classes = "active";
    }
    return classes;
  }

  return (
    <>
      <div>
        <Head
          cover="../image/profile/3004132.jpg"
          title="پروفایل"
        />
      </div>
      <section className="section-p1 proflie">
        <div className="menu-proflie">
          <nav>
            <Link
              to={"/profile/user-info"}
              className={LinkClasses("user-info")}
            >
              <CgProfile />
              <span>مشخصات</span>
            </Link>
            <Link to={"/profile/new"} className={LinkClasses("new")}>
              <CgProfile />
              <span>مشخصات</span>
            </Link>
            <Link href="">
              <CgProfile />
              <span>مشخصات</span>
            </Link>
          </nav>
        </div>
        {action === "user-info" && <UserInfo />}
      </section>
    </>
  );
};

export default Profile;
