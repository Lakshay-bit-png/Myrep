import React, { useEffect, useState } from "react";
import { findUser } from "../api/userRequest";

import { addMessage, getMessages } from "../api/messageRequest";
import { format } from "timeago.js";
import { AiOutlineSend } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import { BsEmojiSmile } from "react-icons/bs";
import user from './images/user.png'
const Chatbox = ({ chat, currentUser, setSendMessage, recieveMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  
  // const [ text, setText ] = useState('')

  //     function handleOnEnter (text) {
  //       console.log('enter', text)
  //       handleChange()
  //     }


  

      useEffect(() => {
    const otherUserId = chat?.members?.find((id) => id !== currentUser);

    // console.log(otherUserId);

    const getUserData = async () => {
      try {
        const { data } = await findUser(otherUserId);
        setUserData(data.result);
      } catch (e) {
        console.log(e);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage]);

  const handleChange = (event) => {
    const newMessageValue = event.target.value;
    setNewMessage(newMessageValue);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    

    if(newMessage){
      const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
      // chatId: "64db7e1e8bb983fa766a79a5",
    };

    // send message to database

    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (e) {
      console.log(e);
    }

    // send message to socket server
    const receiverId = chat.members.find((id) => id !== currentUser);

    setSendMessage({ ...message, receiverId });}
    else{
      window.alert(" Message can't be empty")
    }
    var chats= document.querySelector('.chatbox-messages')
    chats.scrollTop = chats.scrollHeight;
  
  };

  //fetching data for messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        console.log(data);
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
    if (chat !== null) fetchMessages();
  }, [chat]);
  
  
  return (
    <div className="chatting">
      <div className="chat-user-details">
        {chat ? <img src={user} className="chat-user-img"></img> : <div></div>}
        {userData && (
          <div className="chat-user-name">
            {" "}
            {userData.firstname} <span>{userData.lastname}</span>
          </div>
        )}
      </div>
      {chat ? (
        <div className="chatbox-messages">
          {" "}
          {messages ? (
            messages.map((message) => (
              <div
                className={`${
                  message.senderId === currentUser
                    ? "message-right"
                    : "message-left"
                }`}
              >
                <p
                  style={{
                   
                    
                    
                  }}
                >
                  {message.text}
                </p>

                <span style={{ fontSize: "12px", color: "gray" }}>
                  {format(message.createdAt)}
                </span>
              </div>
            ))
          ) : (
            <span>Start Typing</span>
          )}
        </div>
      ) : (
        <div
          className="chatbox-messages"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          <p>Click on chat to start conversation </p>
        </div>
      )}
      <div className="message-send-bar">
        {chat && (
          <input
            placeholder="Type Your Message Here...."
            value={newMessage}
            onChange={handleChange}
            className="message-tobe-sent"
          />
        //   <InputEmoji
        //   value={text}
        //   onChange={setText}
        //   cleanOnEnter
        //   onEnter={handleOnEnter}
        //   placeholder="Type a message"
        // />
        )}
         
        {chat ? (
          <>
          <div className="emoji"><BsEmojiSmile/></div>
          <button className="send-btn" onClick={handleSend}>
           <BsFillSendFill/>
          </button>
          </>
        ) 
        
        : (
          <div>Please Select a User to Chat with!!</div>
        )}
       
      </div>
    </div>
  );
};

export default Chatbox;
