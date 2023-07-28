import React from "react";
import "./Home.css";
import Image from "../Images/mobile image.jpeg";
function Home({ onChangeChatBot }) {
  return (
    <div className="home-container">
      <img src={Image} alt="background" className="background-image" />
      <div className="content">
        <p>
          VocalVortex - Your Multilingual Reading Odyssey! Dive into vast texts,
          receive concise summaries, switch languages effortlessly, and immerse
          in lifelike spoken responses. Embrace a new era of interactive reading
          and communication with ease and delight!{" "}
          <a href="#ancor" onClick={onChangeChatBot}>
            VocalVortex
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;
