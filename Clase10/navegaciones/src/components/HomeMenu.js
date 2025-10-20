import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {AntDesign} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => <AntDesign name="desktop" size={24} color="black" />}} />
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => <AntDesign name="account-book" size={24} color="black" />}} />
    </Tab.Navigator>
  );
}
