import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}