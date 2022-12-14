import classes from './Input.module.css'


//lesson 136
//input will hold an object with configuration data for the input, like for example: the i.d 
//in addition we pass all other configuration that we might get for the input with the spread operator. 
//This ensures that all the key value pairs in the input object (which we receive on props.input) are added as props TO input. 
//For example: if we receive an object {type: 'text'}, the code {...props.input}, is making sure that type="text" is being added
//again, this is all JUST INCASE, this is what's being added because this is receiving PROPS
const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} />
    </div>
};

export default Input;