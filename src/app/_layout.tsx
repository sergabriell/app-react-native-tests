import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#454B60",
        animation: "slide_from_right",
        headerShown: false,
        headerTitle: 'Back'
      }}
    />
  );
}
