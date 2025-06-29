import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import ProductDescription from "../Components/ProductDespriction/ProductDescription";
import "./css/Product.css";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { AllProduct_data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllProduct_data.find((e) => e.id === productId);
  return (
    <div className="Product">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      {/* <ProductDescription /> */}
      <RelatedProduct
        currentProductId={product.id}
        currentCategory={product.category}
      />
    </div>
  );
};

export default Product;
