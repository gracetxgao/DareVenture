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
          options={{ headerShown: false }} 
          
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Rewards" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Achievements" 
          component={BottomTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RedeemedItemPage" 
          component={RedeemedItemPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="NewItemPage" 
          component={NewItemPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VenturePage" 
          component={VenturePage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="VentureGallery" 
          component={VentureGallery} 
          options={{ headerShown: false }} 
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
