import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Entypo';
import colors from './assets/themes/Colors';

import ExploreScreen from './pages/Explore';
import LoginScreen from './pages/Login';
import OpeningScreen from './pages/Opening';
import SignupScreen from './pages/Signup';
import RewardsScreen from './pages/Rewards';
import ProfileScreen from './pages/Profile';
import HomeScreen from './pages/Home';
import VentureCategoryPage from './pages/VentureCategory';
import VenturePage from './pages/Venture';
import ProductPage from './pages/Product';

import Stack from './pages/components/Navigation';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'map';
          } else if (route.name === 'Rewards') {
            iconName = 'trophy';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.secondary,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening">
        <Stack.Screen name="Opening" component={OpeningScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="VentureCategory" component={VentureCategoryPage} options={{ headerShown: false }} />
        <Stack.Screen name="Venture" component={VenturePage} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
