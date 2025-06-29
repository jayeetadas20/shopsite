import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  // const { removeFromCart } = useContext(ShopContext);
  return (
    <div className="ProductDisplay">
      <div className="productdisplay_info">
        <div className="productdisplay_left">
          <div className="product_img_list">
            <div className="p_img_list_thumb">
              <img src={product.img} alt="" />
            </div>
            <div className="p_img_list_thumb">
              <img src={product.img} alt="" />
            </div>
            <div className="p_img_list_thumb">
              <img src={product.img} alt="" />
            </div>
            <div className="p_img_list_thumb">
              <img src={product.img} alt="" />
            </div>
          </div>
          <div className="product_main_img">
            <img src={product.img} alt="" />
          </div>
        </div>
        <div className="productdisplay_right">
          <h1>{product.name}</h1>
          <div className="product_rating">
            <div className="rating-star">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
            <span>(122)</span>
          </div>
          <div className="product_price">
            <p className="new_price">
              <i className="fa fa-inr" aria-hidden="true"></i>
              {product.newPrice}
            </p>
            <p className="old_price">
              <i className="fa fa-inr" aria-hidden="true"></i>
              {product.oldPrice}
            </p>
          </div>
          <div className="product_size">
            <h5>Select Size</h5>
            <div className="product_size_list">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
            </div>
          </div>
          <button
            className="btn"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
