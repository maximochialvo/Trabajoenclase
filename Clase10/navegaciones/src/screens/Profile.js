import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <Text>Pantalla de perfil</Text>

        <Pressable
          onPress={() => this.props.navigation.getParent()?.navigate('Login')}
          style={styles.botonEntrar}
        >
          <Text>Desloguearse</Text>
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