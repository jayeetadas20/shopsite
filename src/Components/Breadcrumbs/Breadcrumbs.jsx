import React from "react";
import "./Breadcrumb.css";

const Breadcrumbs = (props) => {
  const { product } = props;
  return (
    <div className="Breadcrumbs">
      Home <i className="fa fa-angle-double-right" aria-hidden="true"></i> Shop
      <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      {product.category}
      <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      <b>{product.name}</b>
    </div>
  );
};

export default Breadcrumbs;
