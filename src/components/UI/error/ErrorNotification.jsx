import React from 'react';
import classes from './ErrorNotification.module.scss'
import {useSelector} from "react-redux";

const ErrorNotification = () => {
    const errorObj = useSelector(state => state.error.value)
    return errorObj.flag &&
        <div className={classes.error}>
            {errorObj.errorText}
        </div>
};

export default ErrorNotification;