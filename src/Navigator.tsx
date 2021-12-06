import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PokemonListScreen } from './feature/pokemon/screens/PokemonListScreen';
import {PokemonDetailScreen} from "./feature/pokemon/screens/PokemonDetailScreen";
import {Pokemon} from "./types";

export type StackParams = {
    PokemonList: undefined;
    PokemonDetail: {pokemon: Pokemon};
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
                component={PokemonDetailScreen}
            />
        </Stack.Navigator>
    );
};
