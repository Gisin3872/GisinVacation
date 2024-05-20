import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryHomeScreen from './GalleryHomeScreen';
import PictureViewingScreen from './PictureViewingScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const GalleryStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const GalleryStackScreen = () => (
  <GalleryStack.Navigator>
    <GalleryStack.Screen name="My Trips" component={GalleryHomeScreen} />
    <GalleryStack.Screen name="PictureViewing" component={PictureViewingScreen} />
  </GalleryStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gallery" component={GalleryStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

