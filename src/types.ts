export interface Pokemon {
    id: string;
    name: string;
    url: string;
}

export interface PokemonResponse {
    count:    number;
    next:     string;
    results:  Pokemon[];
}
