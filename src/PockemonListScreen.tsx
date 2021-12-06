import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItemInfo} from "react-native";
import {PockemonListItem} from './PockemonListItem';
import {Pockemon} from "./types/types";
import {StackParams} from "./Navigator";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import styled from 'styled-components/native';

type Props = NativeStackScreenProps<StackParams, 'PockemonList'>;

export const PockemonListScreen: FC<Props> = ({navigation}) => {

    const renderItem = useCallback(
        ({item}: ListRenderItemInfo<Pockemon>) => (
            <PockemonListItem
                pockemon={item}
            />
        ),
        [],
    );

    return (
        <Root>
            <FlatList
                data={[]}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <Separator/>}
                keyExtractor={(item) => item.id}
                refreshing={false}
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
