import React from "react";
import img1 from "../images/canvas-image-3.png";
import img2 from "../images/canvas-image-2.png";

export default function HomeTopGallery() {
  return (
    <div class="container top-gallery">
      <div class="left-vector"></div>
      <div class="right-vector"></div>
      <div class="left-vector-content">
        <div class="left-vector-heading">
          Transform your space with our custom furniture solutions at Canvas
          Custom Furniture.
        </div>
        <div className="left-vector-links">
          <div className="connect-with-us">Connect With Us</div>
          <div className="learn-more">Learn More</div>
        </div>
      </div>
      <img class="image-1" src={img1} />
      <img class="image-2" src={img2} />
    </div>
  );
}
