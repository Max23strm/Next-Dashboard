import React from 'react'
import { PokemonGrid } from '../pokemons'

export const metadata = {
    title: 'Favoritos',
    description:'Favoritos guardados'
}

const PokemonPages = async () => {


    return (
        <div className='flex flex-col gap-2'>

            <span className='text-5xl'>Pokemons favoritos <small>Global state</small></span>

            <PokemonGrid pokemons={[]}/>
        </div>
    )
}

export default PokemonPages