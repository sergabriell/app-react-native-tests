import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { AccountProps } from "../../contexts/AccountFormContex";

export default function registerSuccessfulScreen() {
    const router = useRouter();
    const { handleSubmit } = useForm<AccountProps>();

    function handleNextStep() {
        router.push("/login");
  }

    return(
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                />
                <Text style={styles.titleLogo}>LOGO</Text>
                <Text style={styles.title}>Registration Successful!</Text>
                <Image
                    source={require('../../assets/circle-check.png')}
                />
                <Text style={styles.text}>You will be redirected to the landing page in 5 seconds... </Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 25, marginBottom: 100 }}>
                    <Text>
                        Click
                    </Text>
                    <Text 
                        style={[styles.text, { fontWeight: "bold" }]}
                        onPress={handleSubmit(handleNextStep)}
                        > here 
                    </Text>
                    <Text> if you are not redirected 
                            automatically
                    </Text>
                    </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>Need help? Visit our </Text>
                    <Text
                        style={[styles.text, { fontWeight: "bold" }]}
                        onPress={() => console.log("Abrir help center")}
                    >
                        help center
                    </Text>
                </View>   
            </ScrollView>
    );
}