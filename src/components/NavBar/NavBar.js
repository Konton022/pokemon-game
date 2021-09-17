import cn from "classnames";
import s from "./style.module.css";

const NavBar = ({ isActive, bgActive = false, onClickButton }) => {
  const handleClick = () => {
    // console.log("###NavBar ", "###isActive: ", isActive);
    onClickButton && onClickButton();
  };
  return (
    <nav className={cn(s.root, s.navbar, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, { [s.active]: isActive })}
          onClick={handleClick}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
