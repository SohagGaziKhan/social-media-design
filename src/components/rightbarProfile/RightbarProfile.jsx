import React from "react";
import "./rightbarProfile.scss";
const RightbarProfile = () => {
  return (
    <>
      <div className="RightbarProfile">
        <div className="userInfo">
          <span className="userTitel">User Information</span>
          <div className="userInfoCity">
            <span className="quention">City:</span>
            <span className="value">Dhaka </span>
          </div>
          <div className="userInfoCity">
            <span className="quention">From:</span>
            <span className="value">Bangladesh </span>
          </div>
          <div className="userInfoCity">
            <span className="quention">Relationship:</span>
            <span className="value">Single </span>
          </div>
          <div className="userInfoCity">
            <span className="quention">Phone:</span>
            <span className="value">0123456789 </span>
          </div>
          <div className="userInfoCity">
            <span className="quention">Nike Name:</span>
            <span className="value">Sohag </span>
          </div>
        </div>
        <span className="userTitel">Friends </span>

        <div className="userFriends">
          <div className="rightbarFollowing">
            <img
              src="https://img.freepik.com/free-photo/displeased-young-caucasian-man-frowns-face-discontent-has-angry-expression-being-dissatisfied_273609-16934.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakib Al Hsasan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLswYyhP0YkbnaGedOUqh2Izb2u3GwE41or4LqX7vIIhwnG50m49tM850ddeICG-1PQ-U&usqp=CAU"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakib Al Hsasan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://img.freepik.com/premium-photo/feeling-romantic-happy-love-smiling-cheerfully-holding-hands-close-heart_1194-432649.jpg?size=626&ext=jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakib Al Hsasan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://img.freepik.com/premium-photo/young-handsome-man-feeling-proud-arrogant-confident-looking-satisfied-successful-pointing-self_1194-172250.jpg?w=360"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakib Al Hsasan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://img.freepik.com/premium-psd/young-handsome-man-smiling-pointing-side-with-both-hands_1194-13406.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakib Al Hsasan</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="https://img.freepik.com/premium-photo/smiling-cheerfully-casually-with-positive-happy-confident-relaxed-expression_1194-56558.jpg?size=626&ext=jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakib Al Hsasan</span>
          </div>
        </div>
        <button className="showMoreFridens">Show More Friends</button>
      </div>
    </>
  );
};

export default RightbarProfile;
