import { View, Text, Image, TouchableOpacity, Keyboard, Platform, ScrollView, TouchableWithoutFeedbackBase, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { set, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { Button } from "../../components/Button";

export default function LoginScreen() {
  const router = useRouter();
  const { control, handleSubmit, formState: {errors} } = useForm();
  const passwordRef = useRef<TextInput>(null);
  const [isPassword, setIsPassword] = useState(false);

  function handleNextStep(data:any) {
    router.push("/profile");
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
                {
                    (!errors.password?.message && !errors.username?.message) ? <Text style={[styles.text, {textAlign:"center", marginBottom: 15, fontWeight: 'bold'}]}>
                                    Enter your username and password to login
                                    </Text>
                                 : <Text style={[styles.text, {textAlign:"center", marginBottom: 15, fontWeight: 'bold', color: "#FF0000"}]}>
                                    Invalid username and / or  password Please try again
                                    </Text>
                }
                <Input
                    formProps={{
                        name: 'username', 
                        control,
                        rules: { 
                            required: "Please enter your username" 
                         }
                    }}
                    inputProps={{
                        placeholder: 'Username',
                        onSubmitEditing: () => passwordRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                    error={errors.username?.message}
                />
                <TouchableOpacity style={styles.areaInput}>
                    <Text>Forgot Username?</Text>
                </TouchableOpacity>
                <Input
                    formProps={{
                        name: 'password', 
                        control,
                        rules:{
                            required: "Please enter your password"
                        }
                    }}
                    inputProps={{
                        placeholder: 'Password',
                        secureTextEntry: !isPassword,
                        onSubmitEditing: handleSubmit(handleNextStep),
                    }}
                    ref={passwordRef}
                    onToggle={() => setIsPassword(!isPassword)}
                    isPassword={isPassword}
                    error={errors.password?.message}
                />
                <TouchableOpacity style={styles.areaInput}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
                <Button
                    title="Login"
                    onPress={handleSubmit(handleNextStep)}
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