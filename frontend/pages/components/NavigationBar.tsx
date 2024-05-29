import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreScreen from '../Explore';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ExploreScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}