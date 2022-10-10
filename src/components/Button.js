import React from "react";

export default function Button({ children, color, changeColor, openModal }) {
    const onClickButton = () => {
        changeColor(color)
        openModal(true)
    }
  return (
    <button class="button is-primary" onClick={() => onClickButton()} style={{background: color}}>
      {children}
    </button>
  );
}
