import cn from "classnames";
import s from "./style.module.css";

const NavBar = ({ isActive, onClickButton }) => {
  const handleClick = () => {
    // console.log("###NavBar ", "###isActive: ", isActive);
    onClickButton && onClickButton();
  };
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={cn(s.menuButton, { [s.active]: isActive })}
          onClick={handleClick}
        >
          <span />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
