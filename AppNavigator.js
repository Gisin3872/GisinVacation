import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryHomeScreen from './GalleryHomeScreen';
import PictureViewingScreen from './PictureViewingScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GalleryHome" component={GalleryHomeScreen} />
        <Stack.Screen name="PictureViewing" component={PictureViewingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
