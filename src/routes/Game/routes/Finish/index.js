import { useContext, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import { PlayersContext } from "../../../../context/playersContext";

import { FireBaseContext } from "../../../../context/firebaseContext";

import s from "./style.module.css";

const FinishPage = () => {
  const firebase = useContext(FireBaseContext);
  const [chosenCard, setChosenCard] = useState(null);
  const playersContext = useContext(PlayersContext);
  const history = useHistory();
  const { player1, player2, isWin } = useContext(PlayersContext);
  // console.log("Finish pok", isWin);

  const handleClickButton = () => {
    if (isWin === true) {
      const newKey = firebase.database.ref().child("pokemons").push().key;
      firebase.postPokemon(newKey, chosenCard);
      // database.ref("pokemons/" + newKey).set(chosenCard);
    }
    playersContext.selectedPlayer1([]);
    playersContext.selectedPlayer2([]);
    playersContext.getWinStatus(false);
    history.replace("/game");
  };

  const handleClickDiv = (item) => {
    console.log("click ---", item);
    setChosenCard((prevState) => (prevState = item));
  };
  console.log("chosenCard", chosenCard);
  return (
    <>
      <div className={s.flex}>
        {player1.map((item) => {
          // console.log("item ", item);
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
          // console.log("item ", item);
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
                // handleId={() => handleClickCard}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FinishPage;
