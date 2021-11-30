import React, { useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import NoDataFound from "./NoDataFound";
// import { addItem } from "../Action";
// import { connect } from "react-redux";
import AddToCartButton from "./Cart/AddToCartButton";

const Product = (props) => {
  // const addToCartHandler = (item) => {
  //   console.log("item===>", item);
  //   item = { ...item, quantity: 1 };
  //   props.addItem(item);
  // };

  return (
    <section class="product-section">
      <div class="container">
        <div class="row">
          {props.product.length > 0 ? (
            props.product.map((item) => {
              return (
                <div class="col col-lg-4">
                  <div class="product-box">
                    <div class="product-img">
                      <img src={item.images[0]} alt="product image" />
                      <AddToCartButton
                        class="btn btn-dark btn-hover"
                        // cartHandler={addToCartHandler}
                        item={item}
                      />
                      {/* <button
                        class="btn btn-dark btn-hover"
                        onClick={() => {
                          addToCartHandler(item);
                        }}
                      >
                        ADD TO CART
                      </button> */}
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

// const mapDispatchtoProps = {
//   addItem,
// };
// export default connect(null, mapDispatchtoProps)(Product);

export default Product;
