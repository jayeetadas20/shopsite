import React from "react";
import "./NewCollection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewCollection_data from "../Assets/NewCollection_data";
import Item from "../Items/Item";

const NewCollection = () => {
  const settings = {
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
    <div className="NewCollection">
      <h2 className="title">New Collection</h2>
      <div className="pp_items">
        <Slider {...settings}>
          {NewCollection_data.map((item) => (
            <Item
              key={item.id}
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

export default NewCollection;
