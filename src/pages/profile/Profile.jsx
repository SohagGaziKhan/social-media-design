import React from 'react'
import "./profile.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import RightbarProfile from '../../components/rightbarProfile/RightbarProfile'
const Profile = () => {
  return (
    <>
    <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileRightTopCoverImg">
              <img className="coverImg" src="https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/ultra-hd-space-facebook-cover.jpg" alt="" />
              <img className="usersImg" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="profileInfo">
              <span className="name">Sohag Ali</span>
              <span className="decs">This is A VIP Account</span>
            </div>
          </div>
          <div className="profileRightBottom">
          <Feed />
         <RightbarProfile/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Profile