import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './pages/Home';
import LoginScreen from './pages/Login';
import OpeningScreen from './pages/Opening';
import SignupScreen from './pages/Signup';
import RewardsScreen from './pages/Rewards';
import AchievementsScreen from './pages/Achievements';
import ProfileScreen from './pages/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RedeemedItemPage from './pages/RedeemedItem';
import NewItemPage from './pages/NewItem';
import VenturePage from './pages/Venture';
import VentureGallery from './pages/VentureGallery';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name=" " component={HomeScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Rewards" component={RewardsScreen} options={{ headerShown: false }}/>
    <Tab.Screen name="Achievements" component={AchievementsScreen} options={{ headerShown: false }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Opening"
          component={OpeningScreen}
          options={{title: 'opening screen'}}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Home" 
          component={BottomTabNavigator} 
        />
        <Stack.Screen 
          name="Rewards" 
          component={BottomTabNavigator} 
        />
        <Stack.Screen 
          name="Profile" 
          component={BottomTabNavigator} 
        />
        <Stack.Screen 
          name="Achievements" 
          component={BottomTabNavigator} 
        />
        <Stack.Screen 
          name="RedeemedItemPage" 
          component={RedeemedItemPage} 
        />
        <Stack.Screen 
          name="NewItemPage" 
          component={NewItemPage} 
        />
        <Stack.Screen 
          name="VenturePage" 
          component={VenturePage} 
        />
        <Stack.Screen 
          name="VentureGallery" 
          component={VentureGallery} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
      <MyStack />
  )
};
