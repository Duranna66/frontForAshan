import React from 'react';
import classes from './MyInp.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.myinput} {...props}></input>
    );
});

export default MyInput;