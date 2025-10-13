import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0,
    };
  }

  sumarClick = () => {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textoCantidad}>
          Cantidad de clicks: {this.state.cantidad}
        </Text>

        <Pressable style={styles.botonContador} onPress={this.sumarClick}>
          <Text style={styles.textoContador}>Click aquí para contar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5, 
    alignItems: 'center',
  },
  textoCantidad: {
    fontSize: 18,
    marginBottom: 10,
  },
  botonContador: {
    backgroundColor: 'rgba(0, 255, 0, 0.5)',
    padding: 7,
    marginBottom: 10,
    borderRadius: 4,
  },
  textoContador: {
    fontWeight: 'bold',
  },
});
