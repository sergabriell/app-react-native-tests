import { View, Text, Image, TouchableOpacity, Keyboard, Platform, ScrollView, TouchableWithoutFeedbackBase, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "./styles";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { CustomCheckbox } from "../../components/Checkbox";
import { Button } from "../../components/Button";

export default function RegisterScreen() {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const passwordRef = useRef<TextInput>(null);
  const [isChecked, setIsChecked] = useState(false);

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
                <Text style={styles.title}>Register</Text>
                <Text style={[styles.text, {textAlign:"center", fontWeight: 'bold', marginBottom: 10}]}>Enter your details to register</Text>
                <Input
                    formProps={{
                        name: 'name', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Name',
                        onSubmitEditing: () => passwordRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                />
                <Input
                    formProps={{
                        name: 'email', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Email Address'
                    }}
                    ref={passwordRef}
                />
                <Input
                    formProps={{
                        name: 'number', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Mobile Number'
                    }}
                    ref={passwordRef}
                />
                <Input
                    formProps={{
                        name: 'password', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Password',
                        secureTextEntry: true,
                    }}
                    ref={passwordRef}
                />
                <Input
                    formProps={{
                        name: 'confirmPassword', 
                        control
                    }}
                    inputProps={{
                        placeholder: 'Confirm Password',
                        secureTextEntry: true,
                        onSubmitEditing: handleSubmit(handleNextStep),
                    }}
                    ref={passwordRef}
                />
                <CustomCheckbox 
                    onToggle={() => setIsChecked(!isChecked)}
                    isChecked={isChecked}
                    label="I agree to the terms & Conditions"
                />
                <Button
                    title="Register"
                    onPress={() => router.push("/login")}
                />
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