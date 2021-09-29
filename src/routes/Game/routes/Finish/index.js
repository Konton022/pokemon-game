import { useContext, useState } from "react";
import { useHistory } from "react-router";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
// import { PlayersContext } from "../../../../context/playersContext";

import { FireBaseContext } from "../../../../context/firebaseContext";

import { useSelector, useDispatch } from "react-redux";
import {
  clearRedux,
  setClearPlayerData,
  setPlayerOneWin,
  setPokemonsData,
} from "../../../../store/chosenPokemons";
import {
  setClearEnemyData,
  setEnemyPokemonsData,
  clearEnemyRedux,
} from "../../../../store/enemyPokemons";

import s from "./style.module.css";
import cn from "classnames";

const FinishPage = () => {
  const dispatch = useDispatch();
  const player1Redux = useSelector(setPokemonsData);
  const player1ReduxWin = useSelector(setPlayerOneWin);
  const player2Redux = useSelector(setEnemyPokemonsData);

  console.log("player1redux", player1Redux);
  console.log("player2redux", player2Redux);
  console.log("player1ReduxWin", player1ReduxWin);

  const firebase = useContext(FireBaseContext);
  const [chosenCard, setChosenCard] = useState(null);
  // const playersContext = useContext(PlayersContext);
  const history = useHistory();
  // const { player1, player2, isWin } = useContext(PlayersContext);
  // console.log("Finish pok", isWin);

  const handleClickButton = () => {
    if (player1ReduxWin === true) {
      if (chosenCard) {
        const newKey = firebase.database.ref().child("pokemons").push().key;

        firebase.postPokemon(newKey, chosenCard);
        // playersContext.clearContext([], [], false);
        dispatch(clearRedux([], setClearPlayerData));
        dispatch(clearEnemyRedux([], setClearEnemyData));
        history.replace("/game");
      } else {
        alert("choice NEW POKEMON CARD!");
      }
    } else {
      // playersContext.clearContext([], [], false);
      dispatch(clearRedux([], setClearPlayerData));
      dispatch(clearEnemyRedux([], setClearEnemyData));
      history.replace("/game");
    }
  };

  const handleClickDiv = (item) => {
    // console.log("click ---", item);
    setChosenCard((prevState) => (prevState = item));
  };
  console.log("chosenCard", chosenCard);
  return (
    <>
      <div className={s.flex}>
        {player1Redux.map((item) => {
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
      <div className={cn({ [s.win]: player1ReduxWin })}>
        Choice your new POKEMON and click the BUTTON !!!
      </div>
      <button onClick={handleClickButton}>END GAME</button>
      <div className={s.flex}>
        {player2Redux.map((item) => {
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
