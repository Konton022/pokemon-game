import { useContext, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { PlayersContext } from "../../../../context/playersContext";
import { useSelector } from "react-redux";
import { selectLocalId } from "../../../../store/user";

import s from "./style.module.css";
import cn from "classnames";

const FinishPage = () => {
  const [chosenCard, setChosenCard] = useState(null);
  const playersContext = useContext(PlayersContext);
  const history = useHistory();
  const { player1, player2, isWin } = useContext(PlayersContext);

  const localId = useSelector(selectLocalId);

  const idToken = localStorage.getItem("idToken");

  const handleClickButton = () => {
    if (isWin === true) {
      if (chosenCard) {
        fetch(
          `https://pokemon-game-fd5db-default-rtdb.firebaseio.com/${localId}/pokemons.json?auth=${idToken}`,
          { method: "POST", body: JSON.stringify(chosenCard) }
        );

        playersContext.clearContext([], [], false);
        history.replace("/game");
      } else {
        alert("choice NEW POKEMON CARD!");
      }
    } else {
      playersContext.clearContext([], [], false);
      history.replace("/game");
    }
  };

  const handleClickDiv = (item) => {
    setChosenCard((prevState) => (prevState = item));
  };
  console.log("chosenCard", chosenCard);
  return (
    <>
      <div className={s.flex}>
        {player1.map((item) => {
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
      <div className={cn({ [s.win]: isWin })}>
        Choice your new POKEMON and click the BUTTON !!!
      </div>
      <button onClick={handleClickButton}>END GAME</button>
      <div className={s.flex}>
        {player2.map((item) => {
          return (
            <div onClick={() => handleClickDiv(item)}>
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
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FinishPage;
