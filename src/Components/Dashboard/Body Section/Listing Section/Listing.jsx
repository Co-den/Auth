import React from 'react';
import './listing.css';

//imported icons=========>
import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

//imported images=========>
import img1 from '../../../../Assets/item6.png';
import img2 from "../../../../Assets/item7.png";
import img3 from "../../../../Assets/item8.png";
import img4 from "../../../../Assets/item9.png";
import me from '../../../../Assets/me (2).jpg';


const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img1} alt="img1" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="img1" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="img1" />
          <h3>Annual Vince</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="img1" />
          <h3>Air Force</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={me} alt="" />
              <img src={me} alt="" />
              <img src={me} alt="" />
              <img src={me} alt="" />
            </div>
            <div className="cardText">
              <span>
                14.556 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All
              <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={me} alt="" />
              <img src={me} alt="" />
              <img src={me} alt="" />
              <img src={me} alt="" />
            </div>
            <div className="cardText">
              <span>
                1,338 Sneakers sold <br />
                <small>
                  26 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing