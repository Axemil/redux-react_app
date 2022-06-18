import React from 'react';
import classes from "./Button.module.scss"

const Button = ({children, error, ...props}) => {
    const buttonClasses = [classes.button]
    if(error) {
        buttonClasses.push(classes.error)
    }
    return (
        <button className={buttonClasses.join(" ")} {...props}>{children}</button>
    );
};

export default Button;