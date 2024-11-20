import { SimplePokemon, PokemonCard } from "../index"

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons} :Props) => {
    return (
        <div className='flex flex-wrap gap-10 items-center justify-center'>
            { pokemons.map( p =>   <PokemonCard {...p} key={p.id}/> ) }
        </div>
    )
}
