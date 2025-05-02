import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_LOGOUT } from "../../../store/actions/auth";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { useNavigate } from "react-router";
const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const success = useSelector((state) => state.authReducer.success);

  const logoutFun = () => {
    dispatch(AUTH_LOGOUT());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!data) {
      axios
        .get("/profile")
        .then((res) => {
          setTimeout(() => {
            setData(res.data);
          }, 3000);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  if (!success) {
    return navigate("/");
  }
  if (data === null) {
    return (
      <>
        <div className="informetion">
          <div className="table">
            <SkeletonTheme
              baseColor="#eee"
              direction="rtl"
              highlightColor="#afafaf"
            >
              <Skeleton width={100} height={20} />
              <Skeleton height={100} containerClassName="flex-2" />
              <Skeleton height={50} />
            </SkeletonTheme>
          </div>
        </div>
        {/* <div style={{ display: 'flex',justifyContent:'center' , flexDirection:'column'}}>

        <SkeletonTheme baseColor="#eee" direction='rtl' highlightColor="#afafaf">
        <Skeleton width={100}/>
        <Skeleton height={200}containerClassName="flex-2"  width={400}/> 
        </SkeletonTheme>
</div> */}
      </>
    );
  }

  return (
    <>
      <div className="informetion">
        <div className="table">
          <h3>اطلاعات شما</h3>
          <table>
            <tbody>
              <tr>
                <td>نام کاربری</td>
                <td>
                  <strong>{data.username && data.username}</strong>
                </td>
              </tr>
              
              <tr>
                <td>ایمیل</td>
                <td>
                  <strong>{data.email && data.email}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={logoutFun}>خروج از حساب کاربری</button>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
