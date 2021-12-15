export interface PokemonResponse {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResponse[];
}

export interface Pokemon {
  id: string;
  name: string;
  url: string;
  image: string;
}

export interface PokemonDetail extends Pokemon {
  types: Type[];
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
