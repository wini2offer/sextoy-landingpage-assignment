
import React, { useState } from "react";
import "../style/main.css";

import PopupInfo from "./PopupInfo.jsx";

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="mainHero">
      <section className="hero">
        <h2>Enhance Your Pleasure</h2>
        <p>Explore our wide range of high-quality sex toys</p>

       
        <button className="cta-button" onClick={togglePopup}>
          Shop Now
        </button>

       {/* popupinfo here */}
        {showPopup && <PopupInfo />}

       
        {showPopup && (
          <div className="popup">
            
            <button className="closebtn" onClick={togglePopup}>Close</button>
          </div>
        )}
      </section>
      <div className="image">

        {/* images here */}
        <div>
          <img src="./assets/vib1.jpg" alt="" />
          <h2>Sucking and Licking Vibrator</h2>
          <p>Price: &#8358;48,000</p> <span> OldPrice: &#8358;160,000</span>
        </div>
        <div>
          <img src="./assets/vib2.jpg" alt="" />
          <h2>Blossom Mouth Rose Vibrator</h2>
          <p>Price: &#8358;51,000</p> <span> OldPrice: &#8358;170,000</span>
        </div>
        <div>
          <img src="./assets/vib3.jpg" alt="" />
          <h2>Rose Clitoris Sucking Vibrator</h2>
          <p>Price: &#8358;51,000</p> <span> OldPrice: &#8358;170,000</span>
        </div>
        <div>
          <img src="./assets/vib4.jpg" alt="" />
          <h2>Double Licking Tongue and Thrusting Vibrator</h2>
          <p>Price: &#8358;55,500</p><span> OldPrice: &#8358;170,000</span>
        </div>
        <div>
          <img src="./assets/pantyvib.jpg" alt="" />
          <h2>Panty Vibrator </h2>
          <p>Price: &#8358;48,000</p> <span> OldPrice: &#8358;160,000</span>
        </div>
        <div>
          <img src="./assets/blindfold.jpg" alt="" />
          <h2>Red Diamond BlindFold</h2>
          <p>Price: &#8358;49,500</p> <span> OldPrice: &#8358;165,000</span>
        </div>
        
      </div>
    </div>
  );
};

export default Main;