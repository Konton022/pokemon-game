import { useState } from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
// import s from "./style.module.css";

const MenuHeader = ({ bgActive }) => {
  const [active, setActive] = useState(null);

  const handleClickButton = () => {
    setActive(prevState => !prevState);
    // console.log("### active: ", active);
  };
  return (
    <div>
      <Menu isActive={active} />
      <NavBar isActive={active} bgActive={bgActive} onClickButton={handleClickButton} />
    </div>
  );
};

export default MenuHeader;
