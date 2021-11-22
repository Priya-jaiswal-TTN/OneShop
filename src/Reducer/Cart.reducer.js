const initialState = {
  item: [],
  totalAmount: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.product];
    }
    default:
      return state;
  }
};

export default CartReducer;
