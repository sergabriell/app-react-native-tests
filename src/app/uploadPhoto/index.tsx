import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { AccountProps } from "../../contexts/AccountFormContex";

export default function uploadPhotoScreen() {
    const router = useRouter();
    const { handleSubmit } = useForm<AccountProps>();

    function handleNextStep() {
        router.push("/registerSuccessful");
  }

    return(
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                />
                <Text style={styles.titleLogo}>LOGO</Text>
                <Text style={styles.title}>Register</Text>
                <Image
                    source={require('../../assets/circle-user.png')}
                />
                <Text style={styles.text}>Take photo{'\n'} with camera </Text>
                <Image
                    source={require('../../assets/circle-user.png')}
                />
                <Text style={styles.text}>Upload Photo{'\n'} from your phone </Text>
                <View style={styles.areaButton}>
                    <Button
                        title="Upload"
                    //onPress={handleSubmit(handleNextStep)}
                    />
                    <Button
                        backgroundColor='#fff'
                        title="Skip"
                        onPress={handleSubmit(handleNextStep)}
                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.text}>Need help? Visit our </Text>
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