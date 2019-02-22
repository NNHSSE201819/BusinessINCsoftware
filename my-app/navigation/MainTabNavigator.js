import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StartSwapScreen from '../screens/StartSwapScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};

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

const BrowsePrevStack = createStackNavigator({
  BrowsePrev: SettingsScreen,
});

BrowsePrevStack.navigationOptions = {
  tabBarLabel: 'Previous',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-return-left' : 'md-return-left'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  StartSwapStack,
  InventoryStack,
  BrowsePrevStack,
});
