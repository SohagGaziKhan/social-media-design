import React from "react";
import "./rightbar.scss";
const Rightbar = () => {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <img
            className="imgs"
            src="https://media.istockphoto.com/id/1256869305/vector/congrats-poster-with-open-gift-box-ribbons-and-confetti-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=St3xCt1AzcjwDqyUbnFxqyTIHtooiq5P8MkcnRUBS3c="
            alt=""
          />
          <span className="birthday">
            <b>Pola Foster</b> and <b>other 10 friend </b> have a brithday
            todays
          </span>
        </div>
        <div className="img">
          <img
            className="rightbarAd"
            src="https://i.pinimg.com/736x/cf/70/ce/cf70ce32f1981d64ed82875772e33dfa.jpg"
            alt=""
          />
        </div>
        
          <h1 className="rightbarTitle">
            Cold,
            <br />
            Smooth <br />
            Tasty
          </h1>
      
        <div className="OnlinesFriend">
          <h2>Online Friends</h2>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <img
                className="rightbarProfileImg"
                src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                alt=""
              />
              <span className="rightbarProfileName">Rana Dev</span>
            </li>
            <li className="rightbarFriend">
              <img
                className="rightbarProfileImg"
                src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                alt=""
              />
              <span className="rightbarProfileName">Rana Dev</span>
            </li>
            <li className="rightbarFriend">
              <img
                className="rightbarProfileImg"
                src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                alt=""
              />
              <span className="rightbarProfileName">Rana Dev</span>
            </li>
            <li className="rightbarFriend">
              <img
                className="rightbarProfileImg"
                src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                alt=""
              />
              <span className="rightbarProfileName">Rana Dev</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
