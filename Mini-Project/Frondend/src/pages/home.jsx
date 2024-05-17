import React, { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './home.css';

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => el.classList.add('visible'));
  }, []);

  return (
    <div>
      <div className="row1">
        <div className="content fade-in">
          <div className="column1_left">
            <h1>
              Manage Your Ride with <span id="yeezee" style={{ color: '#fb8500' }}>TRAVELO</span>
            </h1>
            <p>
              Revolutionizing urban transport with seamless, real-time management for businesses and commuters. Optimize routes, reduce emissions, and navigate your city smarter with TRAVELO's cutting-edge solutions
            </p>
            <div className="ico" style={{ display: "flex" }}>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="column1_right">
            <img src="public/Images/Home_hero.png" className="content fade-in" alt="Hero" />
          </div>
        </div>
      </div>
      <div className="row2">
        <div className="one_stop">
          <h1>
            What We Do
          </h1>
        </div>
        <div className="column2_right">
          <h2>
            Digital Pass
          </h2>
          <p>
            Unlock the city with TRAVELO's Digital Pass, your key to seamless urban exploration. With a simple scan of the QR code, access transportation networks, attractions, and exclusive perks, all in the palm of your hand.
          </p>
          <button className="orange-button"> Apply Pass</button>
        </div>
        <div className="column2_left">
          <img src="public/Images/Home_pass.png" className="content fade-in" alt="Vision" />
        </div>
      </div>
      <div className="row3">
        <div className="column3_left">
          <h2>
            Location Tracking
          </h2>
          <p>
            Experience unprecedented control over your journeys with TRAVELO's Transport Tracking System. Seamlessly monitor the location of buses, trains, and more in real-time, ensuring timely arrivals and effortless navigation.
          </p>
          <button className="orange-button">Track Transports</button>
        </div>
        <div className="column3_right">
          <img src="public/Images/Hom_Tracking.png" alt="Logo" />
        </div>
      </div>
      <div className="column2_right">
        <h2>
          Cashless Payments
        </h2>
        <p>
          Simplify your transactions with TRAVELO's Cashless Payment System, redefining convenience in urban mobility. Say farewell to fumbling for cash and hello to seamless transactions at your fingertips.
        </p>
        <button className="orange-button"> Create Account</button>
      </div>
      <div className="column2_left">
        <img src="public/Images/Home_Payment.jpg" className="content fade-in" alt="Vision" />
      </div>
    </div>

  );
}


export default Home;