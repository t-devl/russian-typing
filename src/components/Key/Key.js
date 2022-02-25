import React from "react";
import "./Key.css";

export default function Key({ value, isLetter, isActive }) {
  return (
    <div
      className={`key ${
        isLetter ? (isActive ? "key--active" : "") : "key--faded"
      }`}
    >
      {value}
    </div>
  );
}
