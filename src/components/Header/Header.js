import { useHistory } from "react-router";
import s from "./style.module.css";

const Header = ({ title, descr, onClickButton }) => {

  const history = useHistory()
  const handleClick = () => {
    //console.log("###, <Header />");
    history.push('/game')
  };
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}></div>
      <h1>{title}</h1>
      <p>{descr}</p>
      <button onClick={handleClick}>Start Game</button>

    </header >
  );
};

export default Header;
