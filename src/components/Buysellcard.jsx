import React from 'react'
import "../components/Buysellcard.css";
import {BiSolidDollarCircle} from "react-icons/bi"

const Buysellcard = ({title, color }) => {
  return (
    <div className="horizontal-card">
      <div className="circle" style={{ backgroundColor: color }}>$</div>
      <div className="text">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Buysellcard