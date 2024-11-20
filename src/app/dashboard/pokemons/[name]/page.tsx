import Image from "next/image";
import { CompletePokemonResponse, PokemonsResponse } from "../index";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ name: string }>;
}

const getPokemonsByName = async (
  name: string
): Promise<CompletePokemonResponse> => {
  try {
    const data: CompletePokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    ).then((res) => res.json());

    return data;
  } catch {
    notFound();
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name: nameSlug } = await params;

  const { id, name } = await getPokemonsByName(nameSlug);

  return {
    title: `#${id} ${name}`,
  };
}

export async function generateStaticParams(): Promise<any>  {

  try {
    const posts :PokemonsResponse =  await fetch (`https://pokeapi.co/api/v2/pokemon?limit=235&offset=151`).then((res) => res.json()).catch(console.log)
  
    const  pokemons :Promise<any>[] =  (posts.results.map( pokemon => new Promise(()=>({ id:pokemon.url.split('/').at(-2)!})) ))
  
    return pokemons;

  } catch  {
    return []
  }
}

const PokemonDetail = async ({
  params,
}: {
  params: Promise<{ name: string }>
}) => {
  const { name: nameId } = await params;

  const pokemon = await getPokemonsByName(nameId);

  const image =
    pokemon.sprites.other?.dream_world.front_default ||
    pokemon.sprites.front_default;

  return (
    <div className="flex mt-5 flex-col items-center text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="mt-2 mb-8 w-full">
          <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={image}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap gap-2">
              {pokemon.moves.map((move) => (
                <p
                  key={move.move.name}
                  className="capitalize border px-1 rounded cursor-default"
                >
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="text-base font-medium text-navy-700 flex">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="text-base font-medium text-navy-700 flex">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;