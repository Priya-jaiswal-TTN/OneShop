export const addItem = (product) => {
  return {
    type: "ADD",
    product,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE",
    id,
  };
};
