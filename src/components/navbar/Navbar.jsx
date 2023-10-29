import React from "react";
import { BsMessenger } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import "./navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">
          <p className="logo">Sohag</p>
        </div>
        <div className="navbarCenter">
          <div className="searchbar">
            <AiOutlineSearch className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>

        <div className="navbaRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="navbarIcons">
            <div className="navbarIconsItem">
              <SlPeople className="people" />
              <span className="navbarIconsText">1</span>
            </div>

            <div className="navbarIconsItem">
              <BsMessenger className="message" />
              <span className="navbarIconsText">2</span>
            </div>
            <div className="navbarIconsItem">
              <MdNotificationsNone className="notiefacation" />
              <span className="navbarIconsText">2</span>
            </div>
          </div>
          <div className="navbarRright">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
