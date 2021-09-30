import { useState } from "react";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
// import s from "./style.module.css";

const MenuHeader = ({ bgActive }) => {
  const [active, setActive] = useState(null);
  const [isOpenModal, setOpenModal] = useState(null);

  const handleClickButton = () => {
    setActive((prevState) => !prevState);
    // console.log("### active: ", active);
  };
  const handleClickLogin = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <div>
      <Menu isActive={active} />
      <NavBar
        isActive={active}
        bgActive={bgActive}
        onClickButton={handleClickButton}
        onClickLogin={handleClickLogin}
      />
    </div>
  );
};

export default MenuHeader;
