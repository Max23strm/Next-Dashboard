'use client'
import Link from 'next/link'
import { FiHeart } from "react-icons/fi";
import { SimplePokemon } from '../index'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/store';
import { toogleFavourite } from '@/store/pokemons/favouritePokemons';


export const PokemonCard = ( { id, name } : SimplePokemon ) => {
    
    const pokemonList = useAppSelector(state => state.pokemons.favourites)
    
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(toogleFavourite({id, name}))
    }

    const defineIfFavourite = () => {
        if(Boolean(pokemonList[id])) return true

        return false
    }
    
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-stone-900 border-b flex flex-col items-center justify-center">
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={70}
                        height={70}
                        alt={name}
                        priority={false}
                    />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                    <div className="mt-5">
                        <Link
                            href={`pokemons/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:bg-stone-800 transition-all"
                            prefetch={true}
                        >
                            Ver información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <button onClick={handleClick} className="px-4 py-2 hover:bg-gray-100 flex items-center w-full" >
                        <div className="text-green-600 transition-colors">
                            <FiHeart color={defineIfFavourite() ? 'red' : 'black'}/>
                        </div>
                        <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">
                            Agregar a favoritos
                        </p>
                        <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
