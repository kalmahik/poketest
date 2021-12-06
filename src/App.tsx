import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from "./Navigator";

export const App = () => {
  return (
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
  );
};
