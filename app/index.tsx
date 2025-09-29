import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function IndexLayout() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const targetRoute = user ? "/(app)/main" : "/(sign)/sign-in";

    try {
      router.replace(targetRoute as any);
    } catch (error) {
      console.error("Error navegando:", error);
      // Fallback
      if (user) {
        router.push("/(app)/main");
      } else {
        router.push("/(sign)/sign-in");
      }
    }
  }, [isLoading, user, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.loadingText}>
        {isLoading ? "Verificando sesión..." : "Redirigiendo..."}
      </Text>
      <Text style={styles.debugText}>
        {isLoading ? "Verificando sesión..." : "Redirigiendo..."}
      </Text>
      <Text style={styles.debugText}>
        User: {user?.email || "null"} | Loading: {isLoading.toString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
  },
  debugText: {
    marginTop: 8,
    fontSize: 12,
    color: "#adb5bd",
    textAlign: "center",
  },
});
