import React, { useEffect, useState, useRef } from "react";

import Common from "../common";
import MyProfile from "../myprof";
import Postlist from "../Postlist";
import SideNav from "../../SideNav/SideNav";

import Profileandevents from "../Profileandevents";
function Post({ userData, setProgress }) {
  // Function to handle input changes

  // useEffect(()=>{
  //   window.location.reload();
  // },[])

  return (
    <>
      {/* <Common setProgress={setProgress}/> */}
      <SideNav/>
      <div className="main-content-landing">
        {userData && (
          <Postlist
            setProgress={setProgress}
            displaycreatepost={true}
            userData={userData}
          />
        )}
        
        <Profileandevents/>
      </div>
    </>
  );
}
export default Post;
