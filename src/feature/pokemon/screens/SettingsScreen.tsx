import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {}

export const SettingsScreen: NavigationFunctionComponent<Props> = () => {
  return (
    <Root>
      <Text>Settings</Text>
    </Root>
  );
};

const Root = styled.View`
  flex: 1;
`;
