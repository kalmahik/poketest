import React from 'react';
import styled from 'styled-components/native';
import {useLoadPokemonDetail} from '../hooks/useLoadPokemonDetail';
import {PokemonDetailItem} from '../ui/PokemonDetailItem';
import {Pokemon} from '../../../types';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  pokemon: Pokemon;
}

export const PokemonDetailScreen: NavigationFunctionComponent<Props> = ({
  pokemon,
}) => {
  const {isLoading, pokemonDetail} = useLoadPokemonDetail(pokemon?.id);

  return (
    <Root>
      <PokemonDetailItem pokemon={pokemon} pokemonDetail={pokemonDetail} />
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
`;
