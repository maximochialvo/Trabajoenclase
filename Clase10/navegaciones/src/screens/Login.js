import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Formulario de login</Text>

        <Pressable
          onPress={() => this.props.navigation.navigate('Register')}
          style={styles.botonEntrar}
        >
          <Text>Ir al registro</Text>
        </Pressable>

        <Pressable
          onPress={() => this.props.navigation.navigate('HomeMenu')}
          style={styles.botonEntrar}
        >
          <Text>Entrar en la app</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    botonEntrar: {
        marginTop: 16,
        backgroundColor: "red"
    }
})