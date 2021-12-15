import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import {PokemonListItem} from '../ui/PokemonListItem';
import {Pokemon} from '../../../types';
import styled from 'styled-components/native';
import {useLoadPokemonList} from '../hooks/useLoadPokemonList';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

interface Props {}

export const PokemonListScreen: NavigationFunctionComponent<Props> = props => {
  const {isLoading, pokemons, loadData} = useLoadPokemonList();

  const renderItem = useCallback(({item}: ListRenderItemInfo<Pokemon>) => {
    const openDetail = () => {
      Navigation.push(props.componentId, {
        component: {
          name: 'PokemonDetail',
          passProps: {
            pokemon: item,
          },
          options: {
            topBar: {
              title: {
                text: item.name,
              },
            },
          },
        },
      });
    };
    return <PokemonListItem pokemon={item} onPress={openDetail} />;
  }, []);

  const renderFooter = useCallback(
    () => <ActivityIndicator size="large" />,
    [],
  );

  return (
    <Root>
      <FlatList
        data={pokemons}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={item => item.name}
        refreshing={isLoading}
        onRefresh={loadData}
        onEndReached={loadData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
`;

const Separator = styled.View`
  background: black;
  height: 1px;
  width: 100%;
`;
