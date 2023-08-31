import React from 'react'
import "./profile.css"
import MyProfile from "../myprof";

// function Profile ({userData}) {}

const profile = () => {
    // Sample data, replace with actual data
  const userData = { _id: "123", firstname: "John", lastname: "Doe" };
  const isMyProfile = true; // Or false
  const myUser = { _id: "12345" };
  return (
    <>
        <MyProfile
        userData={userData}
        isMyProfile={isMyProfile}
        myUser={myUser}
      />
    </>
  )
}

export default profile