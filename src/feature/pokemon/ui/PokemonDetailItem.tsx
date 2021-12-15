import styled from 'styled-components/native';
import React, {FC} from 'react';
import {Pokemon, PokemonDetail} from '../../../types';

type Props = {
  pokemon: Pokemon;
  pokemonDetail: PokemonDetail | null;
};

export const PokemonDetailItem: FC<Props> = ({pokemon, pokemonDetail}) => {
  return (
    <Root>
      <Image source={{uri: pokemon.image}} />
      <Title numberOfLines={1}>{pokemon.name}</Title>
      <Subtitle numberOfLines={1}>{pokemonDetail?.types[0].type.name}</Subtitle>
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  height: 250px;
  width: 250px;
  border-radius: 25px;
  margin-horizontal: 16px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

const Subtitle = styled.Text``;
