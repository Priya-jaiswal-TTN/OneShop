import "../Cart/CartHeader.css";

const CartHearder = () => {
  return (
    <section class="section-shopping-head">
      <div class="container">
        <div class="row">
          <div class="col col-lg-4">
            <h3 class="active">
              <a href="#">Shopping Cart</a>
            </h3>
          </div>
          <div class="col col-lg-4">
            <h3>
              <a href="#">Shopping Details</a>
            </h3>
          </div>
          <div class="col col-lg-4">
            <h3>
              <a href="#">Payment Options</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartHearder;
