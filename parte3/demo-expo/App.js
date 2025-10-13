import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Productlist from './src/Screens/Productlist';

export default function App() {
  return (
    <View >
     <Text style={styles.titulo}>
      Probando flat list!
     </Text>
     <Productlist />
    </View>
  );
}

const styles = StyleSheet.create({
 titulo: {
    fontSize: 28,        
    fontWeight: 'bold',  
    textAlign: 'center',
    marginVertical: 20, 
    color: '#333',       
  },
});
