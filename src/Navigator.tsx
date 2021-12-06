import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { PockemonListScreen } from './PockemonListScreen';

export type StackParams = {
    PockemonList: undefined;
    PockemonDetail: undefined;
};

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={'PockemonList'}>
            <Stack.Screen
                name={'PockemonList'}
                component={PockemonListScreen}
            />
            <Stack.Screen
                name={'PockemonDetail'}
                component={() => null}
            />
        </Stack.Navigator>
    );
};
