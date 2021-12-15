import {Navigation} from 'react-native-navigation';
import {PokemonListScreen} from './feature/pokemon/screens/PokemonListScreen';
import {PokemonDetailScreen} from './feature/pokemon/screens/PokemonDetailScreen';
import {SettingsScreen} from './feature/pokemon/screens/SettingsScreen';

const mainRoot = {
  root: {
    bottomTabs: {
      id: 'BottomTabs',
      children: [
        {
          stack: {
            id: 'HomeStack',
            children: [
              {
                component: {
                  name: 'HomeScreen',
                },
              },
            ],
            options: {
              bottomTab: {},
            },
          },
        },
        {
          stack: {
            id: 'SettingsStack',
            children: [
              {
                component: {
                  name: 'SettingsScreen',
                },
              },
            ],
            options: {
              bottomTab: {},
            },
          },
        },
      ],
    },
  },
};

export const App = () => {
  Navigation.registerComponent('HomeScreen', () => PokemonListScreen);
  Navigation.registerComponent('PokemonList', () => PokemonListScreen);
  Navigation.registerComponent('PokemonDetail', () => PokemonDetailScreen);
  Navigation.registerComponent('SettingsScreen', () => SettingsScreen);
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: '#4d089a',
    },
    topBar: {
      title: {
        color: 'white',
      },
      backButton: {
        color: 'white',
      },
      background: {
        color: '#4d089a',
      },
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
    },
  });
  PokemonListScreen.options = {
    topBar: {
      title: {
        text: 'Home',
      },
    },
    bottomTab: {
      text: 'Home',
    },
  };
  SettingsScreen.options = {
    topBar: {
      title: {
        text: 'Settings',
      },
    },
    bottomTab: {
      text: 'Settings',
    },
  };
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    Navigation.setRoot(mainRoot);
  });
};
