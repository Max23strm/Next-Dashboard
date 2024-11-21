import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {

    return (next: Dispatch ) => (action: Action) => {

        next(action);
    

        if(action.type === 'favouritePokemons/toogleFavourite') {
            const { pokemons: { favourites } } = state.getState() as RootState;
            localStorage.setItem('favorite-pokemon', JSON.stringify(favourites))
            return
        }
    }

}