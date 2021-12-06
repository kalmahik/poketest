import React, {FC} from 'react';
import {StackParams} from "../../../Navigator";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import styled from 'styled-components/native';
import {useLoadPokemonDetail} from "../hooks/useLoadPokemonDetail";
import {PokemonDetailItem} from "../ui/PokemonDetailItem";

type Props = NativeStackScreenProps<StackParams, 'PokemonDetail'>;

export const PokemonDetailScreen: FC<Props> = ({route}) => {
    const {pokemon} = route.params;
    const {isLoading, pokemonDetail} = useLoadPokemonDetail(pokemon.id);

    return (
        <Root>
            <PokemonDetailItem pokemon={pokemon} pokemonDetail={pokemonDetail} />
        </Root>);
}

const Root = styled.View`
  flex: 1;
`;
