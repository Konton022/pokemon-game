import cn from "classnames";
import s from "./style.module.css";
import { ReactComponent as LoginSVG } from "../../assets/login.svg";

const NavBar = ({
  isActive,
  bgActive = false,
  onClickButton,
  onClickLogin,
}) => {
  const handleClick = () => {
    // console.log("###NavBar ", "###isActive: ", isActive);
    onClickButton && onClickButton();
  };
  return (
    <nav className={cn(s.root, s.navbar, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div className={s.loginAndMenu}>
          <div className={s.loginWrap} onClick={onClickLogin}>
            <LoginSVG />
          </div>
          <div
            className={cn(s.menuButton, { [s.active]: isActive })}
            onClick={handleClick}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
