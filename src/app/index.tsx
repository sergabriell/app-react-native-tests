import { View, Text, Button } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 22 }}>🏠 Página inicial</Text>
        <Button title="Ir para Perfil" onPress={() => router.push("/profile")} />
      </View>
  );
}
