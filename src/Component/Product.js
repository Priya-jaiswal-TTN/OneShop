import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
// import ProductData from "../storage/product.json";

const Product = (props) => {
  // const [productData, setProductData] = useState(ProductData);
  // if (props.product.trim().length !== 0) {
  //   const newProductData = productData.filter((prod) => {
  //     if (prod.name.includes(props.product)) {
  //       return prod;
  //     }
  //   });
  //   console.log("newdata", newProductData);
  //   setProductData(newProductData);
  // }

  // console.log("from Product page===>", props.product);
  return (
    <section class="product-section">
      <div class="container">
        <div class="row">
          {props.product.map((item) => {
            // console.log("item id==>", item.id);
            return (
              <div class="col col-lg-4">
                <div class="product-box">
                  <div class="product-img">
                    <img src={item.images[0]} alt="product image" />
                    <button class="btn btn-dark btn-hover">ADD TO CART</button>
                  </div>
                  <div class="product-dec">
                    <Link to={`/product/${item.id}`}>
                      {/* <Link to={`/users/${user.id}`} activeClassName="current">{user.name}</Link> */}
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                      <strong>${item.price}</strong>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
