import React from "react";
import "./button.css";
import classNames from "classnames";

const ButtonCustom = ({text, onClick, newClass, color,...props}) => {
    return (
      <button
        className={classNames(["align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"], [newClass])}
        onClick={onClick}
        style={{backgroundColor : `${color}`}}
        disabled={props.disabled}
      >
        {text}
      </button>
    );
}
 
export default ButtonCustom;