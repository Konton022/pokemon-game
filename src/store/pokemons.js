import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoading: false,
        data: {},
        error: null,
    },
    reducers: {

    }

})

export const { } = slice.actions;
export const selectPokemonLoading = state => state.pokemons.isLoading;
export const selectPokemonsData = state => state.pokemons.data;
export default slice.reducer;

