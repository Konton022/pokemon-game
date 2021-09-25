import { useContext } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { PlayersContext } from "../../../../context/playersContext";

import s from "./style.module.css";

const FinishPage = () => {
  const history = useHistory();
  const { player1, player2, isWin } = useContext(PlayersContext);
  console.log("Finish pok", isWin);

  const handleClickButton = () => {
    history.replace("/");
  };

  const handleClickCard = () => {
    console.log("click ");
  };

  return (
    <>
      <div className={s.flex}>
        {player1.map((item) => {
          console.log("item ", item);
          return (
            <PokemonCard
              className={s.card}
              key={item.id}
              name={item.name}
              type={item.type}
              id={item.id}
              img={item.img}
              values={item.values}
              active
              minimize
            />
          );
        })}
      </div>
      <button onClick={handleClickButton}>END GAME</button>
      <div className={s.flex}>
        {player2.map((item) => {
          console.log("item ", item);
          return (
            <PokemonCard
              className={s.card}
              key={item.id}
              name={item.name}
              type={item.type}
              id={item.id}
              img={item.img}
              values={item.values}
              active
              minimize
              isSelected={false}
              handleId={handleClickCard}
            />
          );
        })}
      </div>
    </>
  );
};

export default FinishPage;
