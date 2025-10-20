import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Pantalla de registro</Text>

        <Pressable
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.botonEntrar}
        >
          <Text>Ya tengo cuenta </Text>
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