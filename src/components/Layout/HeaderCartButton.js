import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

//OnClick is receiving props from the Header.js which, Header is receiving it from App.js
const HeaderCartButton = (props) => {
  // the provider is like a 'master prop' that any child component can tap into using useContext,
  // that's why the provider is needed only once at the top of the component tree, and any child that needs access just taps into it via useContext.

  const cartCtx = useContext(CartContext);

  //   // reduce method which allows us to transform an array of data into a single value (a single number in this case)
  //   // reduce takes two arguments. First argument is a function that is called for you, second argument is a starting number ( the 0 in this case )
  //   // the function receives two arguments itself (by javascript) for every item in the array that you are calling reduce
  //   // currentNumber is initially 0 (what we stated it to be) but then it is changed to the return
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
