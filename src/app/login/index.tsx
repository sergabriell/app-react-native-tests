import { View, Text, Image, TouchableOpacity, Keyboard, Platform, ScrollView, TouchableWithoutFeedbackBase, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Button } from "../../components/Button";

export default function LoginScreen() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const passwordRef = useRef<TextInput>(null);

  function handleNextStep(data:any) {
    console.log(data);
  }

  return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../../assets/logo.png')}
                />
                <Text style={styles.titleLogo}>LOGO</Text>
                <Text style={styles.title}>Login</Text>
                <Text style={[styles.text, {textAlign:"center", marginBottom: 15, fontWeight: 'bold'}]}>Enter your username and password to login</Text>
                <Input
                    formProps={{
                        name: 'username', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Username',
                        onSubmitEditing: () => passwordRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                />
                <TouchableOpacity style={styles.areaInput}>
                    <Text>Forgot Username?</Text>
                </TouchableOpacity>
                <Input
                    formProps={{
                        name: 'password', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Password',
                        secureTextEntry: true,
                        onSubmitEditing: handleSubmit(handleNextStep),
                    }}
                    ref={passwordRef}
                />
                <TouchableOpacity style={styles.areaInput}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                <Button
                    title="Login"
                    onPress={() => router.push("/register")}
                />
                <Text style={styles.text}>Or login in with</Text>
                <View style={{flexDirection: 'row', gap: 21, width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 20}}>
                    <TouchableOpacity style={styles.btnSocials}>
                        <Image
                            source={require('../../assets/google.png')}
                        />
                        <Text style={[styles.text, {fontWeight:'400'}]}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btnSocials, {backgroundColor: '#454B60'}]}>
                        <Image
                            source={require('../../assets/facebook.png')}
                        />
                        <Text style={{color:'#fff', fontWeight:'400'}}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <Text
                        style={[styles.text, { fontWeight: "bold" }]}
                        onPress={() => router.push("/register")}
                    >
                        Register
                    </Text>
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
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}