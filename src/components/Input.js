import React, { Component } from "react";
import "./Input.css";

export default function Input({ children }) {
    return (
        <div className="input">
            {children}
        </div>
    )
}