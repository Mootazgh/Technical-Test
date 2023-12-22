import React from "react";
import { Link } from "react-router-dom";
import img1pg1 from "../assets/images.png";
import "../App.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="Title">
        <h1>Technical Test Project : </h1>
        <h2>Dynamic Form Generator with MERN</h2>
      </div>
      <div className="Buttons">
        <button className="button1">
          <Link to="/newForm">Create new form</Link>
        </button>
        <button className="button2">
          <Link to="FormsIcreated">Forms I created</Link>
        </button>
      </div>

      <img
        className="img1"
        src={img1pg1}
        alt="Description of the image"
        width="150px"
      />
      <img
        className="img2"
        src={img1pg1}
        alt="Description of the image"
        width="150px"
      />
    </div>
  );
};

export default Home;
