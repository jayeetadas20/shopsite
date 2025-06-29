import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItem = () => {
  const { getTotalCartAmount, AllProduct_data, cartItem, removeFromCart } =
    useContext(ShopContext);

  return (
    <div>
      <div className="CartItem">
        <div className="cart_header">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {AllProduct_data.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div className="cartiten_div" key={e.id}>
                <div className="prod_img">
                  <img src={e.img} alt="" />
                </div>
                <div className="pro_title">
                  <h4>{e.name}</h4>
                </div>
                <div>
                  <h5>
                    <i className="fa fa-inr" aria-hidden="true"></i>
                    {e.newPrice}
                  </h5>
                </div>
                <div>
                  <button className="pro_quantity">{cartItem[e.id]}</button>
                </div>
                <div>
                  <h5>
                    <i className="fa fa-inr" aria-hidden="true"></i>
                    {e.newPrice * cartItem[e.id]}
                  </h5>
                </div>
                <div>
                  <p onClick={() => removeFromCart(e.id)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart_bottom">
        <div className="cart_bottom_left">
          <h3>Cart Total</h3>

          <div className="total_count_div">
            <h6>Sub Total</h6>
            <p className="total_amount">
              <i className="fa fa-inr" aria-hidden="true"></i>
              {getTotalCartAmount()}
            </p>
          </div>

          <div className="total_count_div">
            <h6>Shipping Charge</h6>
            <p>Free</p>
          </div>

          <div className="total_count_div">
            <h6>
              <b>Total</b>
            </h6>
            <p className="total_amount">
              <i className="fa fa-inr" aria-hidden="true"></i>
              <b>{getTotalCartAmount()}</b>
            </p>
          </div>

          <button
            className="checkout_btn"
            onClick={() => (window.location.href = "/checkout")}
          >
            Proceed To Checkout
          </button>
        </div>
        <div className="cart_bottom_right"></div>
      </div>
    </div>
  );
};

export default CartItem;
