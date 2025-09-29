import { Stack } from "expo-router";

export default function RootApp() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="main">
      <Stack.Screen name="main" />
    </Stack>
  );
}
