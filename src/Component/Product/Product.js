import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import NoDataFound from "./NoDataFound";
import AddToCartButton from "../Cart/AddToCartButton";

const Product = (props) => {
  return (
    <section class="product-section">
      <div class="container">
        <div class="row">
          {props.product.length > 0 ? (
            props.product.map((item) => {
              return (
                <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="product-box">
                    <div class="product-img">
                      <img src={item.images[0]} alt="product image" />
                      <AddToCartButton
                        class="btn btn-dark btn-hover"
                        item={item}
                      />
                    </div>
                    <div class="product-dec">
                      <Link to={`/product/${item.id}`}>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <strong>${item.price}</strong>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NoDataFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
