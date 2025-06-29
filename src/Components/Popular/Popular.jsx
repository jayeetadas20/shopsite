import React from "react";
import "./Popular.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product_data from "../Assets/Popular_product_data";
import Item from "../Items/Item";

const Popular = () => {
  const popolerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="Popular">
      <h2 className="title">Popular Items</h2>
      <div className="pp_items">
        <Slider {...popolerSettings}>
          {product_data.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              img={item.img}
              name={item.name}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
