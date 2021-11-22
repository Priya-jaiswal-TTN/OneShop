import "./Product.css";
import { Link } from "react-router-dom";
import ProductData from "../storage/product.json";

const Product = () => {
  return (
    <section class="product-section">
      <div class="container">
        <div class="row">
          {ProductData.map((item) => {
            return (
              <div class="col col-lg-4">
                <div class="product-box">
                  <div class="product-img">
                    <img src={item.images[0]} alt="product image" />
                    <button class="btn btn-dark btn-hover">ADD TO CART</button>
                  </div>
                  <div class="product-dec">
                    <Link to="/product/:productId">
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
