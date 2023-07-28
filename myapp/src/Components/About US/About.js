import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <h2>About</h2>
      <p>
        Welcome to my website! I am a passionate developer and designer
        dedicated to creating exceptional web experiences. My goal is to build
        innovative and user-friendly applications that cater to my users' needs
        and preferences.
      </p>
      <div className="contact-us-section">
        <h3>Contact Me</h3>
        <label htmlFor="name">Name</label>
        <input
          className="inputs"
          type="text"
          id="name"
          value="Mohsan Ali"
          disabled
        />
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="Mohsanali1132@gmail.com"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="Role">Role</label>
          <input
            className="inputs"
            type="email"
            id="email"
            value="Developement & Designing"
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default About;
