import { useState, useEffect, useContext } from "react";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";
import s from "./style.module.css";
// import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonsAsync,
  selectPokemonsData,
  selectPokemonsLoading,
} from "../../../../store/pokemons";

function StartPage() {
  // const firebase = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext);

  const isLoading = useSelector(selectPokemonsLoading);
  const pokemonsRedux = useSelector(selectPokemonsData);

  const dispatch = useDispatch();
  const history = useHistory();
  // console.log("###pokemonRedux", pokemonsRedux);
  const [pokemons, setPokemons] = useState({});

  //   console.log("###firebase", firebase);

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, []);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux]);

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonsContext.onSelectedPokemons(key, pokemon);

    // console.log(key);
    setPokemons((prevState) => ({
      ...prevState,
      [key]: { ...prevState[key], selected: !prevState[key].selected },
    }));
  };

  const handleStartGameClick = () => {
    history.push("/game/board");
  };
  return (
    <>
      <div className={s.flex}>
        <button
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}
        >
          START GAME
        </button>
        {/* <Button title="START GAME" handleClickButton={handleStartGameClick} /> */}
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, type, id, img, values, selected }]) => (
            <PokemonCard
              key={key}
              className={s.card}
              name={name}
              type={type}
              id={id}
              img={img}
              values={values}
              active={true}
              isSelected={selected}
              handleId={() => {
                if (
                  Object.keys(pokemonsContext.pokemons).length < 5 ||
                  selected
                ) {
                  handleChangeSelected(key);
                }
              }}
            />
          )
        )}
      </div>
    </>
  );
}

export default StartPage;
