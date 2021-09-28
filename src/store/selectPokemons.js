import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "chosenPokemons",
  initialState: {
    isSelected: false,
    data: {},
    error: null,
  },
  reducers: {
    setChosenPokemons: (state, action) => ({
      ...state,
      isLoading: true,
      data: action.payload,
    }),
  },
});

export const { setChosenPokemons } = slice.actions;

export const setPokemonsSelected = (state) => state.chosenPokemons.isSelected;
export const setPokemonsData = (state) => state.chosenPokemons.data;

export const getchosenPokemons = () => (dispatch) => {
  dispatch(setChosenPokemons);
};

export default slice.reducer;
