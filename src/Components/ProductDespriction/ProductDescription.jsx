import React from "react";
import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="ProductDescription">
      <ul className="tabs">
        <li className="tab-link current" data-tab="tab-1">
          Description
        </li>
        <li className="tab-link" data-tab="tab-2">
          View
        </li>
      </ul>

      <div id="tab-1" className="tab-content current">
        tab content1
      </div>
      <div id="tab-2" className="tab-content">
        tab content2
      </div>
    </div>
  );
};

export default ProductDescription;
