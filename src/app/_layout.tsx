import { Stack } from "expo-router";
import { AccountProvider } from "../contexts/AccountFormContex";

export default function RootLayout() {
  return (
    <AccountProvider>
      <Stack
          screenOptions={{
          headerStyle: { backgroundColor: "#fff" },
          headerTintColor: "#454B60",
          animation: "slide_from_right",
          headerShown: false,
          headerTitle: 'Back'
        }}
      />
    </AccountProvider>
  );
}
