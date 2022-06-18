import React from 'react';
import classes from './ErrorNotification.module.scss'
import {useSelector} from "react-redux";

const ErrorNotification = () => {
    // есть ряд либ для вывода ошибок
    const errorObj = useSelector(state => state.error.value)
    return errorObj.flag &&
        <div className={classes.error}>
            {errorObj.errorText}
        </div>
};

export default ErrorNotification;
