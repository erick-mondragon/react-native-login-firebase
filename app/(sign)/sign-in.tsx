import { Text } from "@rneui/themed";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FormLogin } from "../../components";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <FormLogin />
      <Text style={styles.text}>
        ¿No tienes una cuenta?{" "}
        <Link href={{ pathname: "/sign-up" }} style={styles.link}>
          Regístrate
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
