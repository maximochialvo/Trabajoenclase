import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Images from './Components/Images'; // 👈 ajustá la ruta según tu estructura

export default function App() {
  return (
    <View>
      <Text style={styles.titulo}>Probando imágenes</Text>
      <Images />
      <StatusBar style="auto" />
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
