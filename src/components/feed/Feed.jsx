import React from "react";
import "./feed.scss";
import Share from "../share/Share";
import Post from "../post/Post";
const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share/>
          <Post/> 
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    </>
  );
};

export default Feed;
