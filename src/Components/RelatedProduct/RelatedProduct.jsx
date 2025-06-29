import React from "react";
import "./RelatedProduct.css";
import AllProduct_data from "../Assets/AllProductsData";
import Item from "../Items/Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedProduct = ({ currentProductId, currentCategory }) => {
  const relatedItems = AllProduct_data.filter(
    (item) => item.category === currentCategory && item.id !== currentProductId
  );
  const relatedSettings = {
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
    <div className="RelatedProduct">
      <h2 className="title">Related Product</h2>
      <div className="relatedProduct_item">
        <Slider {...relatedSettings}>
          {relatedItems.map((item) => (
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

export default RelatedProduct;
