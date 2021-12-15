import {useEffect, useRef, useState} from 'react';
import {Pokemon} from '../../../types';
import {fetchPokemonList} from '../api/api';
import {normalizePokemon} from '../utils/utils';

export const useLoadPokemonList = () => {
  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const offset = useRef(0);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchPokemonList(offset.current);
    const normalizedData = data.map(el => normalizePokemon(el));
    setPokemons([...pokemons, ...normalizedData]);
    offset.current = offset.current + 20;
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
    pokemons,
    loadData,
  };
};
