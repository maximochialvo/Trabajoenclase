import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Trabajoenclase/Clase10/navegaciones/src/screens/Login';
import Register from '../../Trabajoenclase/Clase10/navegaciones/src/screens/Register';

import Homemenu from '../../Trabajoenclase/Clase10/navegaciones/src/components/HomeMenu'
import HomeMenu from '../../Trabajoenclase/Clase10/navegaciones/src/components/HomeMenu';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} 
      >  
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeMenu" component={HomeMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
