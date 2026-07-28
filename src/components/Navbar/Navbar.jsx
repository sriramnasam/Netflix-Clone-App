import React from 'react';
import './Navbar.css';

import netflixLogo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg';
import profileImg from '../../assets/profile_img.png';
import caretIcon from '../../assets/caret_icon.svg';

const Navbar = () => {
  return (
    <nav className="netflix-navbar">
      <div className="nav-left">
        <img src={netflixLogo} alt="Netflix Logo" className="netflix-logo-img" />
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="nav-right">
        <img src={searchIcon} alt="Search" className="nav-custom-icon" />
        <span className="nav-text">Children</span>
        <img src={bellIcon} alt="Notifications" className="nav-custom-icon" />

        <div className="profile-box">
          <img src={profileImg} alt="Profile" className="profile-avatar-img" />
          <img src={caretIcon} alt="Dropdown" className="nav-caret-img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;