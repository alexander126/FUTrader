import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import HomeScreen from '../screens/HomeScreen';
import ToolsScreen from '../screens/ToolsScreen';
import TipsTricksScreen from '../screens/TipsTricksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { navigateTo } from '../utils/navigation';

const headerOptions = {
  headerStyle: {
    height: 60,
    backgroundColor: '#202020'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
};

const tabBarOptions = {
  activeTintColor: '#232423',
  inactiveTintColor: '#979797',
  showLabel: false
};

export const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Tools: ToolsScreen,
    Tips: TipsTricksScreen,
    Settings: SettingsScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'game-controller';
        } else if (routeName === 'Tools') {
          iconName = 'energy';
        } else if (routeName === 'Tips') {
          iconName = 'star';
        } else if (routeName === 'Settings') {
          iconName = 'settings';
        }

        return <SimpleLineIcons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      ...tabBarOptions
    }
  }
);
