import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {Pokemon, PokemonResponse} from "./types";

export const useLoadPokemonList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const next = useRef('https://pokeapi.co/api/v2/pokemon?limit=20');

    const loadData = async () => {
        setIsLoading(true);
        const response = await axios.create().get<PokemonResponse>(next.current);
        next.current = response.data.next;
        setPokemons([...pokemons, ...response.data.results]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadData();
    }, [])

    return {
        isLoading,
        pokemons,
        loadData
    }

}
