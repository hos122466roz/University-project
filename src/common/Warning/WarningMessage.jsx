import React from "react";
import "./WarningMessage.css";
import { CiWarning } from "react-icons/ci";
const WarningMessage = ({ clicked }) => {
  return (
    <>
      <div className="warning" onClick={() => clicked(false)}>
        <div className="box-warning">
          <div className="icone-warning">
            <div>
              <CiWarning />
            </div>
          </div>
          <div className="warning-text">
            <h1>!توجه </h1>
            <p>این سایت در حال حاضر به صورت رسمی اجرا نشده و شخصی میباشد</p>
            <h4>از صبر و شکیبایی شما متشکریم</h4>
            <button onClick={() => clicked(false)}>بستن</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WarningMessage;
