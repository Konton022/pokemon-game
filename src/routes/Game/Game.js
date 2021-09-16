import { useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import Layout from "../../components/Layout/Layout";
import POKEMONS from "../../pokemons";
import s from "./style.module.css";
import pokemons from "../../pokemons";
function GamePage() {
  const [pokemonArr, setArr] = useState(POKEMONS);

  const setNewId = (id) => {
    // console.log("###Game", id, "### pokemonArr ", pokemonArr);
    setArr((prevState) =>
      prevState.map((item) => {
        if (item.id == id) {
          item.active = !item.active;
        }
        return item;
      })
    );
  };

  return (
    <>
      <Layout title="POKEMON CARD GAME" colorBg="#8c999d">
        <div className={s.flex}>
          {POKEMONS.map((item) => (
            <PokemonCard
              key={item.id}
              name={item.name}
              type={item.type}
              id={item.id}
              img={item.img}
              values={item.values}
              active={item.active}
              handleId={setNewId}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default GamePage;
