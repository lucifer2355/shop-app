import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Button
} from "react-native";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const AuthScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.screen}
    >
      <LinearGradient colors={["#ffedff", "#ffe3ff"]} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id='email'
              label='E-Mail'
              keyboardType='email-address'
              required
              email
              authCapitalize='none'
              errorMessage='Please enter a valid email address'
              onInputChange={() => {}}
              initialValue=''
            />

            <Input
              id='password'
              label='Password'
              keyboardType='default'
              secureTextEntry
              required
              minLength={5}
              authCapitalize='none'
              errorMessage='Please enter a valid password'
              onInputChange={() => {}}
              initialValue=''
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button title='Login' color={Colors.primary} onPress={() => {}} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title='Sign Up' color={Colors.accent} onPress={() => {}} />
          </View>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Authenticate"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  authContainer: {
    width: "80%",
    maxWidth: 400,
    // height: "50%",
    maxHeight: 400,
    padding: 20
  },

  buttonContainer: {
    marginTop: 10
  }
});

export default AuthScreen;
