import React from "react";
import "./ImageGenerator.css";
import default_image from "../assets/default_image.svg";

function ImageGenerator() {
  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>{" "}
      <div className="img-loading">
        <div className="image">
            <img src={default_image} alt="" />
        </div>
        <div className="searchbox">
            <input type="text"  className="searchinput" placeholder="Describe What do you want to see"/>
            <div className="generate-btn">
                Generate
            </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default ImageGenerator;
