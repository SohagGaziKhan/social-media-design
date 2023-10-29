import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./post.scss";
const Post = () => {
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
                alt=""
              />
              <span className="postTopLeftText">Sohag Gazi</span>
              <span className="postTopLeftDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="postCenter">
            <span className="postCenterText">Hey! This is My First Post</span>
            <div className="postCenterImg">
              <img
                src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="postBottom ">
            <div className="postBottomLeft">
              <img
                className="postBottomIcons"
                src="data:image/png;base64,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"
                alt=""
              />
              <img
                className="postBottomIcons"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">10 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
