import { useState, useEffect } from "react";

import database from "../../service/firebase";

import PokemonCard from "../../components/PokemonCard/PokemonCard";

import s from "./style.module.css";

function GamePage() {
  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      // console.log(snapshot.val());
      setPokemons(snapshot.val());
    });
  }, []);
  const handleChangeActive = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
        console.log("###pokemon.id", pokemon, pokemon.active);
        acc[item[0]] = pokemon;
        // console.log("###acc[item[0]] ", acc[item[0]]);
        // database.ref("pokemons" + acc[item[0]]).set({ pokemon });
        return acc;
      }, {});
    });
  };

  return (
    <div className={s.flex}>
      {Object.entries(pokemons).map(
        ([key, { name, type, id, img, values, active }]) => (
          <PokemonCard
            key={key}
            name={name}
            type={type}
            id={id}
            img={img}
            values={values}
            active={active}
            handleId={handleChangeActive}
          />
        )
      )}
    </div>
  );
}

export default GamePage;
