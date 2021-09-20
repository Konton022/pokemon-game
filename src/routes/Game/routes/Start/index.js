import { useState, useEffect } from "react";
import localPokemons from "../../../../pokemons";
import database from "../../../../service/firebase";
import Button from "../../../../components/Button";
import PokemonCard from "../../../../components/PokemonCard/PokemonCard";

import s from "./style.module.css";

function StartPage() {
  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      //   console.log(snapshot.val());
      setPokemons(snapshot.val());
    });
  }, []);
  console.log("###pokemons from FB  ", pokemons);
  const handleChangeActive = (id, active, objID) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
    console.log("###game id active :", id, active, objID);
    console.log("pokemons[objID]", pokemons[objID]);
    database.ref("pokemons/" + objID).update({
      ...pokemons[objID],
      active: active,
    });
  };

  const addNewPokemon = () => {
    const randomPok =
      localPokemons[Math.floor(Math.random() * localPokemons.length)];
    console.log(randomPok);
    const newKey = database.ref().child("pokemons").push().key;
    database.ref("pokemons/" + newKey).set(randomPok);
  };

  return (
    <>
      <div className={s.flex}>
        <Button title="ADD NEW POKEMON" handleClickButton={addNewPokemon} />
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, type, id, img, values, active }]) => (
            <PokemonCard
              key={key}
              objID={key}
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
    </>
  );
}

export default StartPage;
