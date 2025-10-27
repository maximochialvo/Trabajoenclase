import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config"; 

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", email: "", password: "", error: null };
  }

  
  onSubmit(userName, email, password) {
   
    if (email.indexOf("@") === -1) {
      this.setState({ error: "Email mal formateado" });
    } else if (password.length < 6) {
      this.setState({ error: "La password debe tener una longitud mínima de 6 caracteres" });
    } else {
      
      auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
       
          return db.collection("users").add({
            email: cred.user.email,
            userName: userName,     
            createdAt: Date.now()
          });
        })
        .then(() => {
          this.props.navigation.navigate("Login");
        })
        .catch(() => {
          this.setState({ error: "Fallo en el registro." });
        });
    }
  }

  render() {
    return (
      <View style={styles.contendor}>
        <Text style={styles.titulo}>Register</Text>

        <Pressable
          style={styles.boton}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.text}>Ir a Login / Ya tengo cuenta</Text>
        </Pressable>

        <TextInput
          style={styles.field}
          placeholder="userName"
          onChangeText={(text) => this.setState({ userName: text })}
          value={this.state.userName}
        />

        <TextInput
          style={styles.field}
          placeholder="email"
          keyboardType="email-address"
          onChangeText={(text) => this.setState({ email: text })}
          value={this.state.email}
        />

        <TextInput
          style={styles.field}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
          value={this.state.password}
        />

        {this.state.error ? (
          <Text style={{ color: "red", marginTop: 8 }}>{this.state.error}</Text>
        ) : null}

        <Pressable
          style={styles.boton}
          onPress={() =>
            this.onSubmit(this.state.userName, this.state.email, this.state.password)
          }
        >
          <Text style={styles.text}>Registrarme</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contendor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#000",
  },
  field: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    marginVertical: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
  boton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#28a745",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Register;
