import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PokemonListScreen } from './PokemonListScreen';

export type StackParams = {
    PokemonList: undefined;
    PokemonDetail: undefined;
};

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'PokemonList'}>
            <Stack.Screen
                name={'PokemonList'}
                component={PokemonListScreen}
            />
            <Stack.Screen
                name={'PokemonDetail'}
                component={() => null}
            />
        </Stack.Navigator>
    );
};
