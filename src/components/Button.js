import React from 'react';
import './Button.css';

export default function Button({ children, handleClick }) {

    const isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }
    return (
        <div className={`button ${isOperator(children) ? "" : "operator"}`} onClick={() => handleClick(children)}>
            {children}
        </div>
    )
}
