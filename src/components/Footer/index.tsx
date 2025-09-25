import { Text, View } from "react-native";
import { styles } from "./styles";

export function Footer() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Need help? Visit our </Text>
            <Text
                style={[styles.text, { fontWeight: "bold" }]}
                onPress={() => console.log("Abrir help center")}
            >
                help center
            </Text>
        </View>  
    );
}