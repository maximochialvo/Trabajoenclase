import { View, Text, Pressable, StyleSheet } from 'react-native';
import Contador from '../Components/Contador';

export default function Home() {
  const Clicke = () => {
    console.log("me clickearon!!!!!!!!!!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola Mundo</Text>

      <Pressable style={styles.botonClickeame} onPress={Clicke}>
        <Text style={styles.textoClickeame}>Clickeame</Text>
      </Pressable>

      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center', 
    padding: 10, 
  },
  titulo: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  botonClickeame: {
    backgroundColor: '#ccc',
    padding: 4,
    marginBottom: 10,
    borderRadius: 4,
  },
  textoClickeame: {
    fontWeight: 'bold',
  },
});
