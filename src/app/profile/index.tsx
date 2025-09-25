import { View, Text, Button } from "react-native";
import { Stack, useRouter } from "expo-router";
import { profileStyles as styles } from "../features/profile/components/styles";

export default function ProfileScreen() {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <Text style={styles.title}>👤 Perfil</Text>
        <Button title="Ir para Configurações" onPress={() => router.push("/profile/settings")} />
        <Button title="Ir para Login" onPress={() => router.push("/login")} />
      </View>
  );
}