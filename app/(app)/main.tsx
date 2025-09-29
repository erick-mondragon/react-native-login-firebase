import { signout } from "@/services";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Main() {
  const router = useRouter();

  const handleSignOut = async () => {
    const result = await signout();
    if (result.success) {
      console.log("User signed out successfully");
      router.replace("/(sign)/sign-in");
    } else {
      console.error("Error signing out:", result.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App</Text>
      <Text onPress={handleSignOut} style={styles.signOut}>
        Cerrar sesión
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  signOut: {
    marginTop: 20,
    color: "#4c5eff",
  },
});
