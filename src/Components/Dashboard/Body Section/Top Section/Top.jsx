import React from "react";
import "./top.css";

//imported icons ================>
import { BiSearchAlt } from "react-icons/bi";
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";

//imported image =================>
import img from "../../../../Assets/zubby.jpg";
import img2 from "../../../../Assets/item8.png";

import video from "../../../../Assets/nature.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Crest Store.</h1>
          <p>Hello isaac, Welcome back!</p>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="search dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="admin" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>
          <div className="buttons flex">
            <div className="btn">Explore More</div>
            <div className="btn transparent">Top Sellers</div>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My stat</h1>
              <div className="flex">
                <span>
                  today <br /> <small>4 orders</small>
                </span>
                <span>
                  This month <br /> <small>127 orders</small>
                </span>
              </div>
                
              <span className="flex link">
                Go to my orders <BsArrowRightShort />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="me" />
            </div>
            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help center</h3>
                <p>
                  Having trouble in crest, please contact us from for more
                  questions.
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
