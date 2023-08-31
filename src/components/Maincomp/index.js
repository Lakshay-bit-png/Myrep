import React from "react";
import Page1 from "../Page1/index";
import Auth2Component from "../Page2";
import Auth3Component from "../Page3";
import Auth4Component from "../Page4";
import Auth5Component from "../Page5";
import Auth6Component from "../Page6";
import Auth7Component from "../Page7";
import Uploadpic from "../Page8"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CommonLanding from "../Landing/Post";
import Chat from "../Landing/chatroom";
import Dashboard from "../dashboard/Slots";
import Account from "../dashboard/account";
import Bookings from "../dashboard/bookings";
import Earning from "../dashboard/earnings";
import Post from "../Landing/Post";
import CheckProfile from "../CheckProfile";
import Notification from '../Landing/notifications/notification';

// import PostAll from "../Landing/PostAll";

import { DisplayPosts } from "../Landing/DisplayPosts";
import Otherpost from "../Landing/Otherpost";
import Anotherprofile from "../Landing/anotherprofile";
import SideNav from "../SideNav/SideNav";


function AuthPage({ userData, setProgress }) {
  // console.log(userData);
  return (
    <Router>
      {/* <SideNav /> */}
      <Routes>
        <Route path="/" element={<Page1 setProgress={setProgress} />} />
        <Route path="/continue" element={<Auth2Component setProgress={setProgress}/>} />
        <Route path="/skills" element={<Auth3Component setProgress={setProgress} />} />
        <Route path="/jobtitles" element={<Auth4Component setProgress={setProgress}/>} />
        <Route path="/collegedetails" element={<Auth5Component setProgress={setProgress}/>} />
        <Route path="/slots" element={<Auth6Component setProgress={setProgress} />} />
        <Route path="/laststep" element={<Auth7Component  setProgress={setProgress}/>} />
        <Route path="/homepage" element={<Post userData={userData} setProgress={setProgress} />} />
       <Route path='/pic' element={<Uploadpic userData={userData} setProgress={setProgress}/>}/>
        <Route path="/userprof" element={<CheckProfile />} />
        <Route
          path="/chat"
          element={userData && <Chat userData={userData} setProgress={setProgress} />}
        />
        <Route
          path="/myaccount"
          element={userData && <Account userData={userData} setProgress={setProgress} />}
        />
        <Route path="/myposts" element={<DisplayPosts />} />
        <Route path="/mybookings" element={userData && <Bookings userData={userData} setProgress={setProgress} />} />
        <Route
          path="/mySlots"
          element={userData && <Dashboard userData={userData} setProgress={setProgress} />}
        />
        <Route path="/myearnings" element={userData && <Earning userData={userData} setProgress={setProgress} />} />
        <Route
          path="/postsection/:postId"
          element={userData && <Otherpost setProgress={setProgress} userData={userData} />}
        />
        <Route path='/profile/:userId' element={<Anotherprofile isMentor={false} isMyProfile={false} userData={userData}/>}/> 
        <Route path='/books' element={<CheckProfile/>}/>

        <Route path='/notifications' element={<Notification setProgress={setProgress}/>} />
        {/* <Route path='/side' element={<SideNav/>}/> */}
        
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default AuthPage;
