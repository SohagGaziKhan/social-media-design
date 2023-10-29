import React from 'react'
import {MdOutlineRssFeed,MdGroups2} from "react-icons/md"
import {BsFillBookmarkFill,BsQuestionOctagon,BsCalendar2EventFill,BsFillFileEarmarkSlidesFill} from "react-icons/bs"
import {BiChat} from "react-icons/bi"
import {PiBagSimpleFill} from "react-icons/pi"
import {TbVideo} from "react-icons/tb"
import "./sidebar.scss"
const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MdOutlineRssFeed className="sidebarIcons" />
                    <span className="sidebarText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <BiChat className="sidebarIcons" />
                    <span className="sidebarText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <TbVideo className="sidebarIcons" />
                    <span className="sidebarText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <MdGroups2 className="sidebarIcons" />
                    <span className="sidebarText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BsFillBookmarkFill className="sidebarIcons" />
                    <span className="sidebarText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <BsQuestionOctagon className="sidebarIcons" />
                    <span className="sidebarText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <PiBagSimpleFill className="sidebarIcons" />
                    <span className="sidebarText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <BsCalendar2EventFill className="sidebarIcons" />
                    <span className="sidebarText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <BsFillFileEarmarkSlidesFill className="sidebarIcons" />
                    <span className="sidebarText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li>
          <li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li><li className="sidebarProfile">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
             <span className='sidebarProfileText'>Sohag</span>
          </li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar