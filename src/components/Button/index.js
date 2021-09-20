import s from "./style.module.css";
import cn from "classnames";

const Button = ({ className, title, handleClickButton }) => {
  return (
    <button className={cn(s.button, className)} onClick={handleClickButton}>
      {title}
    </button>
  );
};

export default Button;
