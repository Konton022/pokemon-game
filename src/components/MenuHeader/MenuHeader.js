import { useState } from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
// import s from "./style.module.css";

const MenuHeader = () => {
  const [active, setActive] = useState(false);

  const handleClickButton = () => {
    setActive(!active);
    // console.log("### active: ", active);
  };
  return (
    <div>
      <Menu isActive={active} />
      <NavBar isActive={active} onClickButton={handleClickButton} />
    </div>
  );
};

export default MenuHeader;
