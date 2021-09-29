import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "enemyPokemons",
  initialState: {
    isSelected: false,
    data: [],
    error: null,
  },

  reducers: {
    setEnemyPokemons: (state, action) => ({
      ...state,
      isSelected: true,
      data: action.payload,
    }),
    clearEnemyRedux: (state) => ({
      ...state,
      data: [],
      isSelected: false,
    }),
  },
});

export const { setEnemyPokemons, clearEnemyRedux } = slice.actions;

export const setEnemyPokemonsData = (state) => state.enemyPokemons.data;
export const setClearEnemyData = (state) => state.chosenPokemons;

export default slice.reducer;
