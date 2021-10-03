import { useState, useEffect } from "react";

import { NotificationManager } from "react-notifications";
import LoginForm from "../LoginForm";
import Menu from "../Menu/Menu";
import Modal from "../Modal";
import NavBar from "../NavBar/NavBar";
// import s from "./style.module.css";

const loginSingupUser = async ({ email, password, type }) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  };
  switch (type) {
    case "singup":
      return await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQW9QFQydo9JtMPkVxxAt55ImBDXyNUsQ",
        requestOptions
      ).then((res) => res.json());
    case "login":
      return await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDQW9QFQydo9JtMPkVxxAt55ImBDXyNUsQ",
        requestOptions
      ).then((res) => res.json());
    default:
      return "I can not do this";
  }
};

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

  const handleSubmitLoginForm = async (props) => {
    // // console.log("values", values);
    // const requestOptions = {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email,
    //     password,
    //     returnSecureToken: true,
    //   }),
    // };
    const response = await loginSingupUser(props);
    // const response = await fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQW9QFQydo9JtMPkVxxAt55ImBDXyNUsQ",
    //   requestOptions
    // ).then((res) => res.json());
    console.log("response", response);
    if (response.hasOwnProperty("error")) {
      NotificationManager.error(response.error.message, "Wrong!");
    } else {
      localStorage.setItem("idToken", response.idToken);
      NotificationManager.success("Successe message!");
      handleClickLogin();
    }
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
        <LoginForm
          isResetField={!isOpenModal}
          onSubmit={handleSubmitLoginForm}
        />
      </Modal>
    </div>
  );
};

export default MenuHeader;
