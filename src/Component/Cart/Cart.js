import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartHearder from "./CartHeader";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import CartDetailsForm from "./CartDetailsForm";
import PaymentMethod from "./PaymentMethod";
import { connect } from "react-redux";
import "./Cart.css";
import cartEmptyImage from "../../Assets/cartEmpty.jpg";

const Cart = (props) => {
  const [page, setPage] = useState(0);
  let navigate = useNavigate();

  const cartUpdateComponent = [
    <CartItem items={props.state.item} />,
    <CartDetailsForm />,
    <PaymentMethod />,
  ];

  const nextPageHandler = () => {
    let index = page;
    setPage(index + 1);
  };
  const backPageHandler = () => {
    let index = page;
    setPage(index - 1);
  };

  const cancelButtonHandler = () => {
    navigate("/home");
  };
  return (
    <Fragment>
      {props.state.item.length > 0 ? (
        <div>
          <CartHearder />
          <section class="shopping-cart">
            <div class="container">
              <div class="row">
                <div class="col col-lg-8 cartItem">
                  <h2>Shopping Cart</h2>
                  {cartUpdateComponent[page]}
                  <div class="actions">
                    <button class="btn btn-dark" onClick={nextPageHandler}>
                      {/* Next */ page === 2 ? "Pay Now" : "Next"}
                    </button>
                    <button
                      class="btn btn-outline-dark"
                      onClick={
                        page === 0 ? cancelButtonHandler : backPageHandler
                      }
                    >
                      {/* Cancel */ page === 0 ? "Cancel" : "Back"}
                    </button>
                  </div>
                </div>
                <div class="col col-lg-4 CartSummary">
                  <h2>Summary</h2>
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="ENTER COUPON CODE"
                  />
                  <CartSummary />
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div class="cartEmpty">
          <img src={cartEmptyImage} />
        </div>
      )}
    </Fragment>
  );
};

function mapStateToProps(state) {
  console.log("state== from cart>", state);
  return { state };
}

// export default Cart;
export default connect(mapStateToProps)(Cart);
