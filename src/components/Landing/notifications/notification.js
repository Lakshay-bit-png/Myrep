import React, { useState } from "react";
import MyProfile from "../myprof";
import user from "../../images/user.png";
import "./notification.css";
import NotifyBar from "./notifybar";
import Box from "./notify box/box";

// function Notify({ userData }) {
const Notification = ({setProgress}) => {
  // Sample data, replace with actual data
  const userData = { _id: "123", firstname: "John", lastname: "Doe" };
  const isMyProfile = true; // Or false
  const myUser = { _id: "12345" };

  const [selectedButton, setSelectedButton] = useState("All"); // Initial selected button

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <>
      <div className="profile-notify">
        <div className="notify">
          <div className="heading">
          <h1>Notifications</h1>
          </div>
          <div className="notify-btns">
            <button
              className={selectedButton === "All" ? "selected" : ""}
              onClick={() => handleButtonClick("All")}
            >
              All
            </button>
            <button
              className={selectedButton === "New" ? "selected" : ""}
              onClick={() => handleButtonClick("New")}
            >
              New
            </button>
            <button
              className={selectedButton === "Read" ? "selected" : ""}
              onClick={() => handleButtonClick("Read")}
            >
              Read
            </button>
            <button
              className={selectedButton === "Primary" ? "selected" : ""}
              onClick={() => handleButtonClick("Primary")}
            >
              Primary
            </button>
          </div>
          <Box/>
        </div>
        {/* <div className="profile2">
          {userData && (
            <MyProfile isMyProfile={true} userData={userData} myUser={userData} />
          )}
        </div> */}
      </div>      
      {/* <NotifyBar/> */}
    </>
  );
};
// }

export default Notification;
