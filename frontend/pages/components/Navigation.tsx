import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Opening: undefined;
  Login: undefined;
  Signup: undefined;
  MainTabs: undefined;
  Venture: undefined;
  VentureCategory: { category: string; cards: Array<Array<String>> };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default Stack;