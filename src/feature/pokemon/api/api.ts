import {axiosInstance} from "../../../api/api";
import {PokemonDetail, PokemonListResponse, PokemonResponse} from "../../../types";

export const fetchPokemonList = async (offset: number, limit = 20): Promise<PokemonResponse[]> => {
    try {
        const response = await axiosInstance.get<PokemonListResponse>('pokemon', {params: {offset, limit}});
        return response.data.results;
    }
    catch (error) {
        console.warn(error);
        return [];
    }
}

export const fetchPokemonDetail = async (pokemonID: string): Promise<PokemonDetail | null> => {
    try {
        const response = await axiosInstance.get<PokemonDetail>(`pokemon/${pokemonID}`);
        return response.data;
    }
    catch (error) {
        console.warn(error);
        return null;
    }
}
