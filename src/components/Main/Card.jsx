
import React, { useState } from "react";
import "./Card.css";
import { RWebShare } from "react-web-share";

const Card = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="blog-card rounded-3xl">
      <img src="blogImg.jpg" alt="Blog" className="blog-image" />
      <div className="blog-content">
        <div className="blog-icon flex justify-between">
          <div className="content-type text-lg">Technology</div>
          <div className="icon flex justify-center">
            <div>
              <RWebShare
                data={{
                  text: "Mian Blog",
                  url: "http://localhost:5173/mainBlog",
                  title: "Main Blog",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="share">
                  <img src="share.png" alt="Share" className="iconImg" />
                </button>
                    
              </RWebShare>
            </div>

            <button className="save">
              <img src="save.png" alt="Save" className="iconImg" />
            </button>
          </div>
        </div>
        <h3 className="blog-title">Technology Trends in 2024</h3>
        <p className="blog-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="blog-footer flex justify-between">
          <div className="profile flex">
            <img src="Profile.jpg" alt="Author" className="author-avatar" />
            <div>
              <span className="author-name">Rahul Saxena</span>
              <p className="post-date">Yesterday</p>
            </div>
          </div>
          <div className="blog-actions flex justify-center">
            <button
              className="follow-button transition-all duration-300 ease-in-out"
              onClick={handleFollowClick}
            >
              {isFollowing ? "Following" : "+ FOLLOW"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
