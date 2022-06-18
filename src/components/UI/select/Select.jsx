import React from 'react';
import classes from './Select.module.scss'

const Select = ({changeHandler, options}) => {
    return (
        <select onChange={event => changeHandler(event.target.value)} className={classes.select}>
            <option disabled>Сортировать по</option>
            {options.map((item, index) => <option key={index} value={item.value}>{item.text}</option>)}
        </select>
    );
};

export default Select;