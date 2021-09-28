import { useHistory } from "react-router";
import Button from "../Button";
import s from "./style.module.css";

const Header = ({ title, descr, onClickButton }) => {
  const history = useHistory();
  const handleClick = () => {
    //console.log("###, <Header />");
    //history.push("/game");
    onClickButton && onClickButton()
  };
  return (
    <header className={s.root}>
      <>
        <div className={s.forest}></div>
        <div className={s.silhouette}></div>
        <div className={s.moon}></div>
        <div className={s.container}></div>
      </>
      <div className={s.descr}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <Button title="Start NEW GAME" handleClickButton={handleClick} />
      </div>
    </header>
  );
};

export default Header;
