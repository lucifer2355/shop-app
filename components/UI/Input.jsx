import React, { useReducer } from "react";
import { StyleSheet } from "react-native";

const INPUT_CHANGE = "INPUT_CHANGE";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initialValid,
    touched: false
  });

  const textChangeHandler = text => {
    dispatch();
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={formState.inputValues.title}
        onChangeText={textChangeHandler.bind(this, "title")}
      />
      {!formState.inputValues.title && <Text>{props.errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%"
  },

  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8
  },

  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

export default Input;
