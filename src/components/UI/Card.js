import classes from './Card.module.css';

//props.children = whatever's passed between the div while be used
const Card = props => {
    return <div className={classes.card}>{props.children}</div>
};

export default Card;