import React from "react";
import s from "./style.module.css";

const Input = (value, label, type = "text", name, onChange, required) => {
  const handleInputChange = () => {
    console.log("input keyboard");
  };
  return (
    <div className={s.root} onChange={handleInputChange}>
      <input name={name} type={type} className={s.input} required />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>Email</label>
    </div>
  );
};

export default Input;
