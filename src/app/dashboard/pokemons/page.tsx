import React from 'react'
import { SimplePokemon, PokemonsResponse, PokemonGrid } from './index'

const getPokemons = async ( limit = 20, offset = 151) : Promise<SimplePokemon[]> => {
    const data : PokemonsResponse = await fetch (`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then( res => res.json())

    const  pokemons = data.results.map( pokemon => ({id:pokemon.url.split('/').at(-2)!, name: pokemon.name}))
    // throw notFound();
    return pokemons
}

const PokemonPages = async () => {

    const pokemons = await getPokemons(250 - 15)

    return (
        <div className='flex flex-col gap-2'>

            <span className='text-5xl'>Listado de Pókemons <small>estático</small></span>

            <PokemonGrid pokemons={pokemons}/>
        </div>
    )
}

export default PokemonPages