import {Pokemon, PokemonResponse} from '../../../types';

export const normalizePokemon = (pokemon: PokemonResponse): Pokemon => {
  const url = pokemon.url.substring(0, pokemon.url.length - 1); //remove last symbol '/'
  const id = url.substring(url.lastIndexOf('/') + 1);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return {...pokemon, id, image};
};
