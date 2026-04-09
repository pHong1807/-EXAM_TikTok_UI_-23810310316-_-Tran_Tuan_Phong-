import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import HomeTopTabs from './screens/HomeTopTabs';
import CommentsScreen from './screens/CommentsScreen';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const tabs = [
    { name: 'Home', icon: 'home', iconOutline: 'home-outline', label: 'Home' },
    { name: 'Discover', icon: 'search', iconOutline: 'search-outline', label: 'Discover' },
    { name: 'Add', icon: 'add', iconOutline: 'add', label: '' },
    { name: 'Comments', icon: 'chatbubble-ellipses', iconOutline: 'chatbubble-ellipses-outline', label: 'Inbox' },
    { name: 'Profile', icon: 'person', iconOutline: 'person-outline', label: 'Me' },
  ];

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const tab = tabs[index];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (tab.name === 'Add') {
          return (
            <TouchableOpacity key={route.key} style={styles.tabItem} onPress={onPress}>
              <Image
                source={require('./assets/Btn.png')} 
                style={styles.addImage}
                resizeMode="contain"
      />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={onPress}
          >
            {tab.name === 'Profile' ? (
              <Image
                source={require('./assets/Avatar3.jpg')}
                style={[
                  styles.tabAvatar,
                  isFocused && styles.tabAvatarFocused,
                ]}
              />
            ) : (
              <Ionicons
                name={isFocused ? tab.icon : tab.iconOutline}
                size={24}
                color={isFocused ? '#fff' : '#888'}
              />
            )}
            <Text style={[styles.tabLabel, { color: isFocused ? '#fff' : '#888' }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Tab.Screen name="Home" component={HomeTopTabs} />
          <Tab.Screen name="Discover" component={DiscoverPlaceholder} />
          <Tab.Screen name="Add" component={DiscoverPlaceholder} />
          <Tab.Screen name="Comments" component={CommentsScreen} />
          <Tab.Screen name="Profile" component={DiscoverPlaceholder} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function DiscoverPlaceholder() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 18 }}>Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderTopWidth: 0.5,
    borderTopColor: '#333',
    paddingTop: 8,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  tabAvatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#888',
  },
  tabAvatarFocused: {
    borderColor: '#fff',
    borderWidth: 2,
  },
  addButton: {
    width: 48,
    height: 32,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonRed: {
    position: 'absolute',
    right: 0,
    width: 36,
    height: 32,
    backgroundColor: '#fe2c55',
    borderRadius: 8,
  },
  addButtonBlue: {
    position: 'absolute',
    left: 0,
    width: 36,
    height: 32,
    backgroundColor: '#25f4ee',
    borderRadius: 8,
  },
  addButtonWhite: {
    position: 'absolute',
    width: 36,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
});

