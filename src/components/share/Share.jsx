import React from 'react'
import "./share.scss"
import {ImLocation} from "react-icons/im"
import {BiSolidPhotoAlbum,BiSolidTagAlt} from "react-icons/bi"
import {BsFillEmojiLaughingFill} from "react-icons/bs"
const Share = () => {
  return (
    <>
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
            <img
              src="https://imgv3.fotor.com/images/gallery/a-man-profile-picture-with-blue-and-green-background-made-by-LinkedIn-Profile-Picture-Maker.jpg"
              alt=""
            />
            <input className="shareTopText" type="text" placeholder="what's in your mind Sohag?" />
            </div>
            <hr className='shareTopHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <BiSolidPhotoAlbum className="shareIcons tomato"/>
                        <span className="shareText">Photo & Video</span>
                    </div>
                    <div className="shareOption">
                        <BiSolidTagAlt className="shareIcons blue"/>
                        <span className="shareText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <ImLocation className="shareIcons green"/>
                        <span className="shareText">Location</span>
                    </div>
                    <div className="shareOption">
                        <BsFillEmojiLaughingFill className="shareIcons goldenrod"/>
                        <span className="shareText">Feelings</span>
                    </div>
                   

                </div>
                <div className="shareButton">
                        Share
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Share