import { Input, InputProps } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";

interface InputFormProps extends InputProps {
  // Add any additional props here if needed
}

const InputForm: React.FC<InputFormProps> = (props) => {
  return (
    <Input
      {...props}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 15,
    borderColor: "#4c5eff",
    borderWidth: 1,
  },
  input: {
    fontSize: 16,
    color: "#4c5eff",
  },
});

export default InputForm;
