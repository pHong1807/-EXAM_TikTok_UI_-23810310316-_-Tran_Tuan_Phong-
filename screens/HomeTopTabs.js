import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import FollowingScreen from './FollowingScreen';
import ForYouScreen from './ForYouScreen';

const TopTab = createMaterialTopTabNavigator();

export default function HomeTopTabs() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TopTab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.tabIndicator,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
          tabBarPressColor: 'transparent',
          swipeEnabled: true,
        }}
        initialRouteName="ForYou"
      >
        <TopTab.Screen
          name="Following"
          component={FollowingScreen}
          options={{ title: 'Following' }}
        />
        <TopTab.Screen
          name="ForYou"
          component={ForYouScreen}
          options={{ title: 'For You' }}
        />
      </TopTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    position: 'absolute',
    top: 30,
    left: 80,
    right: 80,
    zIndex: 10,
   
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'none',
    letterSpacing: 0.3,
  },
  tabIndicator: {
    backgroundColor: 'transparent',
    height: 2,
    borderRadius: 1,
    width: '30%',
    marginLeft: '10%',
  },
});
