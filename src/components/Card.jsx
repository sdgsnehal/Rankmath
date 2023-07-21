import React, { useState } from 'react';
import './Card.css'; // You can create this CSS file to style the card.
import {SiBitcoinsv} from 'react-icons/si';
import {BsChevronCompactDown} from 'react-icons/bs'

//write a function that on click of down icon it should show navbar



const Card = ({ title, imageUrl, description }) => {
  
  return (
    <div className="card">
      <div className="card-content">
        <div className="left-content">
          {/* Replace the placeholder with your icon */}
         
         <div className="Bitcoinicon" >₿</div>
          <h2 className="title-placeholder">Bitcoin</h2>
         
        </div>
        <div className="right-content">
          <p className="short-form-placeholder">BTC</p>
        </div>
        
      </div>
      <div><h1>3.529020 BTC</h1></div>
      <div className='price'><h2>$19.53 USD</h2>
      <h3>-2.32%</h3></div>
      <div className="dowm-icon-container">
      <BsChevronCompactDown className='down-icon'/>

      </div>
     
      
    </div>
  );
};

export default Card;
