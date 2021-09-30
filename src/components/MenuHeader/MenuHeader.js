import { useState } from "react";
import Menu from "../Menu/Menu";
import Modal from "../Modal";
import NavBar from "../NavBar/NavBar";
// import s from "./style.module.css";

const MenuHeader = ({ bgActive }) => {
  const [active, setActive] = useState(null);
  const [isOpenModal, setOpenModal] = useState(false);

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

      <Modal
        isOpen={isOpenModal}
        title="Log in...."
        onCloseModal={handleClickLogin}
      >
        Some text
      </Modal>
    </div>
  );
};

export default MenuHeader;
