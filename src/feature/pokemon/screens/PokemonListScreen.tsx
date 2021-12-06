import React, {FC, useCallback} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from "react-native";
import {PokemonListItem} from '../ui/PokemonListItem';
import {Pokemon} from "../../../types";
import {StackParams} from "../../../Navigator";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import styled from 'styled-components/native';
import {useLoadPokemonList} from "../hooks/useLoadPokemonList";

type Props = NativeStackScreenProps<StackParams, 'PokemonList'>;

export const PokemonListScreen: FC<Props> = ({navigation}) => {
    const {isLoading, pokemons, loadData} = useLoadPokemonList();

    const renderItem = useCallback(
        ({item}: ListRenderItemInfo<Pokemon>) => {
            const openDetail = () => navigation.navigate('PokemonDetail', {pokemon: item})
            return (
                <PokemonListItem
                    pokemon={item}
                    onPress={openDetail}
                />
            )}, [],
    );

    const renderFooter = useCallback(
        () => (
            <ActivityIndicator size="large"/>
        ),
        [],
    );

    return (
        <Root>
            <FlatList
                data={pokemons}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <Separator/>}
                keyExtractor={(item) => item.name}
                refreshing={isLoading}
                onRefresh={loadData}
                onEndReached={loadData}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
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
