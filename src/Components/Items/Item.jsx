import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item_img">
        <Link to={`/product/${props.id}`} onClick={window.scrollTo(0, 0)}>
          <img src={props.img} alt="item_img" />
        </Link>
      </div>
      <h4>
        <Link to={`/product/${props.id}`}>{props.name}</Link>
      </h4>
      <div className="item_price">
        <div className="item_new_price">
          <i className="fa fa-inr" aria-hidden="true"></i>
          {props.newPrice}
        </div>
        <div className="item_old_price">
          <i className="fa fa-inr" aria-hidden="true"></i>
          {props.oldPrice}
        </div>
      </div>
    </div>
  );
};

export default Item;
