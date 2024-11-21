'use client'
import { useEffect, useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store'
import { FiHeart } from "react-icons/fi";

export const FavouritePokemons = () => {
    
    const pokemonList = useAppSelector(state => Object.values(state.pokemons.favourites))
    const [foundPokemons, setFoundPokemons] = useState(pokemonList)
    
    return (
        <>
            {
                Boolean(pokemonList.length) ?
                    <PokemonGrid pokemons={pokemonList}/> :
                    <NoFavourites/>
            }
        </>
    )
    
}

export const NoFavourites = () => {

    return <div className='flex flex-row h-[100px] w-2/4 mx-auto items-center justify-center gap-2 border rounded border-red-200 bg-red-50 mt-20'>
        <FiHeart size={50} color='red'/>
        <span>No hay pokémos guardados</span>
    </div>
}