import React from "react";
import "./Nav.css";
import Image from "../Images/chatbot_Img.png";

const Navigation = ({
  onChangeAboutUs,
  onChangeChatBot,
  onChangeHome,
  onChangeGuide,
}) => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <img
            src={Image} // Replace with the path to your image
            alt="Logo"
            className="logo"
          />
        </li>
        <li>
          <a href="#home" onClick={onChangeHome}>
            Home
          </a>
        </li>
        <li>
          <a href="#Chatbot" onClick={onChangeChatBot}>
            VocalVortex
          </a>
        </li>
        <li>
          <a href="#guide" onClick={onChangeGuide}>
            Guide
          </a>
        </li>
        <li>
          <a href="#about" onClick={onChangeAboutUs}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
