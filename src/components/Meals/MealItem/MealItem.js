import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

//.toFixed make sure to render two decimal places
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  //lesson 137
  //MealItemForm is receiving id props to ensure that each meal created in the form is receiving their own i.d
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
