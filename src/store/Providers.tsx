'use client'
import { Provider } from "react-redux"
import { store } from "."
import { setFavouritePokemons } from "./pokemons/favouritePokemons"
import { useEffect } from "react"

interface Props {
    children: React.ReactNode
}

const Providers = ( {children}: Props) => {

    useEffect(()=>{
        
        const favourites = JSON.parse(localStorage.getItem('favorite-pokemon') ?? '{}')
        store.dispatch( setFavouritePokemons(favourites) ) 
 
    },[])


    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers