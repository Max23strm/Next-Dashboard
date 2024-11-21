import React from 'react'
import { FavouritePokemons, PokemonGrid } from '../pokemons'

export const metadata = {
    title: 'Favoritos',
    description:'Favoritos guardados'
}

const PokemonPages = async () => {


    return (
        <div className='flex flex-col gap-2'>

            <span className='text-5xl'>Pokemons favoritos <small>Global state</small></span>

            <FavouritePokemons/>
        </div>
    )
}

export default PokemonPages