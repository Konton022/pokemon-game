import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import pokemonsReducer from "./pokemons";
import choicePokemonsReducer from "./selectPokemons";

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
    choicePokemons: choicePokemonsReducer,
  },
});
