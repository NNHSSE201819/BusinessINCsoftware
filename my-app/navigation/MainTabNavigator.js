import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StartSwapScreen from '../screens/StartSwapScreen';

const ProfileStack = createStackNavigator({
  Profile: LinksScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const StartSwapStack = createStackNavigator({
  StartSwap: StartSwapScreen,
});

StartSwapStack.navigationOptions = {
  tabBarLabel: 'Start Swap',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'}
    />
  ),
};

const InventoryStack = createStackNavigator({
  Inventory: HomeScreen,
});

InventoryStack.navigationOptions = {
  tabBarLabel: 'Inventory',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-archive`
          : 'md-archive'
      }
    />
  ),
};

export default createBottomTabNavigator({
  ProfileStack,
  StartSwapStack,
  InventoryStack,
});
