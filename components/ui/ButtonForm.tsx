import { Button, ButtonProps } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";

interface ButtonFormProps extends ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

export const ButtonForm: React.FC<ButtonFormProps> = ({
  title,
  onPress,
  loading = false,
  ...props
}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      loading={loading}
      buttonStyle={styles.button}
      titleStyle={styles.buttonText}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4c5eff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f5f5f5",
  },
});

export default ButtonForm;
