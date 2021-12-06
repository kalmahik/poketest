import {useEffect, useState} from 'react';
import {PokemonDetail} from "../../../types";
import {fetchPokemonDetail} from "../api/api";

export const useLoadPokemonDetail = (pokemonID: string) => {
    const [isLoading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

    const loadData = async () => {
        setLoading(true);
        const data = await fetchPokemonDetail(pokemonID);
        setPokemon(data);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, [])

    return {
        isLoading,
        pokemonDetail: pokemon,
    }

}
