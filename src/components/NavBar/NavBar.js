import cn from "classnames";
import s from "./style.module.css";
import { ReactComponent as LoginSVG } from "../../assets/login.svg";
import { ReactComponent as UserSVG } from "../../assets/user.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLocalId, selectUserLoading } from "../../store/user";

const NavBar = ({
  isActive,
  bgActive = false,
  onClickButton,
  onClickLogin,
}) => {
  const isLoadingUser = useSelector(selectUserLoading);
  const localId = useSelector(selectLocalId);
  console.log(isLoadingUser, localId);

  const handleClick = () => {
    // console.log("###NavBar ", "###isActive: ", isActive);
    onClickButton && onClickButton();
  };
  return (
    <nav className={cn(s.root, s.navbar, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div className={s.loginAndMenu}>
          {!isLoadingUser && !localId && (
            <div className={s.loginWrap} onClick={onClickLogin}>
              <LoginSVG />
            </div>
          )}
          {!isLoadingUser && localId && (
            <Link className={s.loginWrap} to="./login">
              <UserSVG />
            </Link>
          )}
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
