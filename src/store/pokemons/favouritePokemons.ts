import { SimplePokemon } from '@/app/dashboard/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsFavState {
    favourites: {[key: string] : SimplePokemon}
}
const localPokemons = () =>  JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}')

const initialState: PokemonsFavState = {
    favourites: {}
}

const pokemonsSlice = createSlice({
    name: 'favouritePokemons',
    initialState,
    reducers: {

        setFavouritePokemons (state, action : PayloadAction<{[key: string] : SimplePokemon}>) {
            state.favourites = action.payload
        },

        toogleFavourite (state, action : PayloadAction<SimplePokemon>) {
            const pokemon = action.payload

            if(Boolean(state.favourites[pokemon.id])){
                delete state.favourites[pokemon.id]

                return
            }

            state.favourites[pokemon.id] = pokemon

        },

    }
});

export const { toogleFavourite, setFavouritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer