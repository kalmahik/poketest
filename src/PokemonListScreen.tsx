import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from "react-native";
import {PokemonListItem} from './PokemonListItem';
import {Pokemon} from "./types";
import {StackParams} from "./Navigator";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import styled from 'styled-components/native';
import {useLoadPokemonList} from "./useLoadPokemonList";

type Props = NativeStackScreenProps<StackParams, 'PokemonList'>;

export const PokemonListScreen: FC<Props> = () => {
    const {isLoading, pokemons, loadData} = useLoadPokemonList();
    const renderItem = useCallback(
        ({item}: ListRenderItemInfo<Pokemon>) => (
            <PokemonListItem
                pokemon={item}
            />
        ),
        [],
    );

    return (
        <Root>
            <FlatList
                data={pokemons}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <Separator/>}
                keyExtractor={(item) => item.id}
                refreshing={isLoading}
                onRefresh={loadData}
                onEndReached={loadData}
                onEndReachedThreshold={0.5}
            />
        </Root>);
}

const Root = styled.View`
  flex: 1;
`;

const Separator = styled.View`
  background: black;
  height: 1px;
  width: 100%;
`;
