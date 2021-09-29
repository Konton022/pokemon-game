import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "chosenPokemons",
  initialState: {
    isWin: false,
    isSelected: false,
    data: [],
    error: null,
  },

  reducers: {
    setChosenPokemons: (state, action) => ({
      ...state,
      isSelected: true,
      data: action.payload,
    }),
    setWin: (state) => ({
      ...state,
      isWin: true,
    }),
    clearRedux: (state) => ({
      ...state,
      data: [],
      isWin: false,
      isSelected: false,
    }),
  },
});

export const { setChosenPokemons, setWin, clearRedux } = slice.actions;

export const setPokemonsData = (state) => state.chosenPokemons.data;
export const setPlayerOneWin = (state) => state.chosenPokemons.isWin;
export const setClearPlayerData = (state) => state.chosenPokemons;

export default slice.reducer;
