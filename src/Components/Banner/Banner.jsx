import React from "react";
import "./Banner.css";
import bannerImg1 from "../Assets/banner-img.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-info">
        <div className="banner_left">
          <h1>
            Welcome to the
          </h1>
          <h2>
            <span><span>ShopeSite!</span><span>ShopeSite!</span></span>
          </h2>
          <p>Have grate exprience of shopping.</p>
          <a href="#" className="btn">
            Ltest Collection
          </a>
        </div>
        <div className="banner_right">
          <img src={bannerImg1} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
