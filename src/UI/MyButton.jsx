import React from 'react';
import classes from './MyBtn.css'
function MyButton({children, ...props}) {
    return (
        <button {...props} className="Up">
            {children}
        </button>
    );
}

export default MyButton;