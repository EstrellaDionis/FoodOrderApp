import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

//state and action are automatically given to us by React
//we also create this reducer outside of the CartProvider function because we do not want it to re-evaluate every time the component re-renders
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //useReducer returns an array with exactly 2 elements so we destructure to pull those two elements out and use them as we choose
  //The first array element is always the state snapshot, the second function is the function...okay so this is just state but this is a good reminder that it's all about the POSITION and NOT the name
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    //the first item is the name and we're assigning it the value of the variable (item)...I know you know, just want to make sure you remember later :)
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //   these are the concrete context values that will be updated over time
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
