import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

//all props on the input are default props that can be used in an input and do not need to be interpreted. Lesson 136
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
