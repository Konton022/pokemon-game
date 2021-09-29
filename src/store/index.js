import { configureStore } from "@reduxjs/toolkit";

import pokemonsReducer from "./pokemons";
import choicePokemonsReducer from "./chosenPokemons";
import enemyPokemonReducer from "./enemyPokemons";

export default configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    chosenPokemons: choicePokemonsReducer,
    enemyPokemons: enemyPokemonReducer,
  },
});
