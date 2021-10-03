import React from "react";
import s from "./style.module.css";

const Input = ({ value, label, type = "text", name, required, setChange }) => {
  const handleInputChange = (event) => {
    setChange && setChange(event.target.value);
  };
  return (
    <div className={s.root}>
      <input
        value={value}
        name={name}
        type={type}
        className={s.input}
        required
        onChange={handleInputChange}
      />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>{label}</label>
    </div>
  );
};

export default Input;
