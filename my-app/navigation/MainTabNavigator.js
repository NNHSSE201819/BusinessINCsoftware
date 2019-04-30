import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StartSwapScreen from '../screens/StartSwapScreen';
import SwapProgressScreen from '../screens/SwapProgressScreen';
import CustomizeOne from '../screens/CustomizeOne';
import CustomizeClothes from '../screens/CustomizeClothes';
import CustomizeOccasion from '../screens/CustomizeOccasion';
import PaymentInfo from '../screens/PaymentInfo';
import SwapFinish from '../screens/SwapFinish';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
  visible: true,
};

const StartSwapStack = createStackNavigator({
  StartSwap: StartSwapScreen,
  SwapProgress: SwapProgressScreen,
  CustomizeOne: CustomizeOne,
  CustomizeClothes: CustomizeClothes,
  CustomizeOccasion: CustomizeOccasion,
  PaymentInfo: PaymentInfo,
  SwapFinish: SwapFinish,
});

StartSwapStack.navigationOptions = {
  tabBarLabel: 'Start Swap',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-gift' : 'md-gift'}
    />
  ),
  visible: true,
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
  visible: true,
};

const PointsStack = createStackNavigator({
  GetPoints: HomeScreen,
});

PointsStack.navigationOptions = {
  tabBarLabel: 'Get Points',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-camera`
          : 'md-camera'
      }
    />
  ),
  visible: true,
};

export default createBottomTabNavigator({
  ProfileStack,
  StartSwapStack,
  InventoryStack,
  PointsStack,
});
