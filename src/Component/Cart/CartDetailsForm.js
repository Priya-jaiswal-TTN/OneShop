import { useState } from "react";
import "./CartDetailsForm.css";

const CartDetailsForm = () => {
  // const [enterName, setEnteredName] = useState("");

  return (
    <form action="#">
      <div class="user-name">
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last Name"
        />
      </div>
      <div class="address">
        <input type="text" name="address" id="address" placeholder="Address" />
        <input
          type="text"
          name="address-2"
          id="address-2"
          placeholder="Address 2"
        />
      </div>
      <div class="country">
        <select name="country" id="country">
          <option value="Country">Country</option>
          <option value="India">India</option>
        </select>
        <input type="text" name="city" id="city" placeholder="City" />
        <input type="text" name="zip" id="zip" placeholder="Zip Code" />
        <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
      </div>
      <div class="row shipping">
        <div class="col-lg-5 col-md-5 free">
          <input type="radio" name="shipping" id="free-shipping" />
          <label for="free-shipping">Free Shipping</label>
          <span>Between 2-5 working days</span>
        </div>
        <div class="col-lg-5 col-md-5 paid">
          <input type="radio" name="shipping" id="paid-shipping" />
          <label for="paid-shipping">Next Day Delivery-$20</label>
          <span>24 hours from checkout</span>
        </div>
      </div>
    </form>
  );
};

export default CartDetailsForm;
