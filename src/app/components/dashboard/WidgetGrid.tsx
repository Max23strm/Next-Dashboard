'use client'
import React, { useEffect, useState } from 'react'
import { SimpleWidget } from '../index'
import { FiCoffee, FiDivide, FiHeart } from "react-icons/fi";
import { useAppSelector } from '@/store';


export const WidgetGrid = () => {
    const [amoutPokemon, setAmoutPokemon] = useState(0)

    const count = useAppSelector( state => state.counter.count);
    const pokemonList = useAppSelector(state => state.pokemons.favourites)


    useEffect(()=>{
        const pokeKeys = Object.keys(pokemonList)
        setAmoutPokemon(pokeKeys.length)
    },[pokemonList])


    return (
        <div className="flex flex-wrap p-2 intems-center justify-center gap-2">
            <SimpleWidget label='Contador' subTitle='Cuenta actual' title={`${count}`} icon={<FiDivide size={30} />}/>
            <SimpleWidget label='Favoritos' subTitle='Pokémons guardados' title={`${amoutPokemon}`} icon={<FiHeart size={30}/>}/>
            <SimpleWidget title='20' />
        </div>
    )
}
