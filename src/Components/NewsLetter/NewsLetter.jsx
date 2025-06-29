import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <div className="banner-overlay"></div>
      <div className="newsleter-info">
        <div className="news_left">
          <h3>Get Exclusive offers on your mail</h3>
          <p>Subcribe to our newsletter and stay updated.</p>
        </div>
        <div className="news_right">
          <form>
            <input type="email" placeholder="Your Email here" />
            <button type="submit" className="subscribe_btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
