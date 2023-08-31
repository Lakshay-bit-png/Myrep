import React from 'react';
import './SideNav.css';
import logo from '../images/logo.png';
import home from '../images/home.png'
import search from '../images/search.png'
import chat from '../images/chat.png'
import notification from '../images/notification.png'
import slots from '../images/slots.png'
import bookings from '../images/booking.png'
import earnings from '../images/earning.pmg'
import account from '../images/user.png'
import myprofile from '../images/account.png'
import { useNavigate } from 'react-router-dom';

const SideNav = ({setProgress}) => {
  const navigate = useNavigate();

  return (
    <ul className='side-nav-container'>
      <li onClick={() => navigate('/homepage')} style={{ marginBottom: "70px" }}>
        <img className='logo' src={logo} alt="SKILLOP Logo" />
        <span style={{ fontWeight: 700,fontSize: "1.7rem"}}>
          SKILLOP
        </span>
      </li>

      <li onClick={() => navigate('/homepage')}>
        <img src={home} alt="Home" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Home
        </span>
      
      </li>
      <li onClick={() => navigate('/')}>
        <img src={search} alt="Search" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Search
        </span>
      </li>
      <li onClick={() => navigate('/chat')}>
        <img src={chat} alt="Chat" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Chat
        </span>
      </li>
      <li onClick={() => navigate('/notifications')}>
        <img src={notification} alt="Notifications" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Notifications
        </span>
      </li>
      <li onClick={() => navigate('/mySlots')}>
        <img src={slots} alt="Slots" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Slots
        </span>
      </li>
      <li onClick={() => navigate('/mybookings')}>
        <img src={bookings} alt="Booking" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Booking
        </span>
      </li>
      <li onClick={() => navigate('/myearnings')}>
        <img src={earnings} alt="Earning" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Earning
        </span>
      </li>
      <li onClick={() => navigate('/myaccount')}>
        <img src={account} alt="Account" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          Account
        </span>
      </li>
      <li onClick={() => navigate('/myaccount')}>
        <img src={myprofile} alt="My profile" />
        <span style={{ fontWeight: 600, fontSize: "1.15rem" }}>
          My profile
        </span>
      </li>
    </ul>
  )
}

export default SideNav;