import React from 'react';
import './activity.css';

//imported icons=========>
import { BsArrowRightShort } from 'react-icons/bs';

//imported images ========>
import me from '../../../../Assets/me (2).jpg';
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={me} alt="customer" />
          <div className="customerDetails">
            <span className="name">Olisa okereke</span>
            <small>Ordered a new sneaker</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={me} alt="customer" />
          <div className="customerDetails">
            <span className="name">Cynthia Ejiofor</span>
            <small>Ordered a new sneaker</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={me} alt="customer" />
          <div className="customerDetails">
            <span className="name">Constance Nwaeze</span>
            <small>Ordered a new sneaker</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={me} alt="customer" />
          <div className="customerDetails">
            <span className="name">Emeka Calistus</span>
            <small>Ordered a new sneaker</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={me} alt="customer" />
          <div className="customerDetails">
            <span className="name">Jacob Onuoha</span>
            <small>Ordered a new sneaker</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
}

export default Activity;