import React, { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

//the reason 'main-image' is done this way is because the class is done with a dash
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food" />
        </div>
    </Fragment>
}

export default Header;