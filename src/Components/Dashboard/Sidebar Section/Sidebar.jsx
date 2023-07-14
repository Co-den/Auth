import React from "react";
import { useDispatch } from "react-redux";
import "./sidebar.css";
import logo from "../../../Assets/ava-1.jpg";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsCreditCard2Front, BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { AiOutlineLogout, AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { authActions } from "../../Store/ui-slice";


const Sidebar = () => {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(authActions.logOut())
  }
  return (
    <div className="sideBar  grid">
      <div className="logoDiv flex">
        <img src={logo} alt="img" />
        <h2>CREST.</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dash board</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My orders</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists  grid">
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Chart</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#1" className="menuLink flex">
              <AiOutlineLogout className="icon" onClick={signOutHandler } />
              <span className="smallText" onClick={signOutHandler}>Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help center</h3>
          <p>
            Having trouble in crest, please contact us from for more questions.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
