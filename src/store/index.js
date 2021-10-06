import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.js";
import pokemonsReducer from "./pokemons";
import choicePokemonsReducer from "./selectPokemons";

export default configureStore({
  reducer: {
    user: userReducer,
    pokemons: pokemonsReducer,
    choicePokemons: choicePokemonsReducer,
  },
});
