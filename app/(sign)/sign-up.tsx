import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FormRegister } from "../../components";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <FormRegister />
      <Text style={styles.text}>
        ¿Ya tienes una cuenta?{" "}
        <Link href={{ pathname: "/sign-in" }} style={styles.link}>
          Inicia sesión
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    color: "#4c5eff",
    marginTop: 20,
  },
  link: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#4c5eff",
  },
});
