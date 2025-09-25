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
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();
  const emailRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const passwordConfirmRef = useRef<TextInput>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);

  function handleNextStep(data:any) {
    router.push("/login");
  }

  function validateConfirmPassword(passwordConfirmation: string) {
    const { password } = getValues();
    return passwordConfirmation === password || "Passwords do not match";
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
                        control,
                        rules: { 
                            required: "Please enter your name" 
                        }
                    }}
                    inputProps={{
                        placeholder: 'Name',
                        onSubmitEditing: () => emailRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                    error={errors.name?.message}
                />
                <Input
                    formProps={{
                        name: 'email', 
                        control,
                        rules: { 
                            required: "Please enter your email address",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                         }
                    }}
                    inputProps={{
                        placeholder: 'Email Address',
                        onSubmitEditing: () => phoneRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                    ref={emailRef}
                    error={errors.email?.message}
                />
                <Input
                    formProps={{
                        name: "number",
                        control,
                        rules: {
                            required: "Please enter your mobile number",
                            pattern: {
                                value: /^\d{11}$/,
                                message: "Invalid mobile number",
                            },
                        },
                    }}
                    inputProps={{
                        placeholder: "(99) 9 9999-9999",
                        keyboardType: "numeric",
                        mask: "(99) 9 9999-9999",
                        onSubmitEditing: () => passwordRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                    error={errors.number?.message}
                    ref={phoneRef}
                />
                <Input
                    formProps={{
                        name: 'password', 
                        control,
                        rules: { 
                            required: "Please enter your password",
                            pattern: {
                                value: /^(?=.*[\d\W]).{8,}$/,
                                message: "Must be 8 or more characters and contain at least 1 number or special character"
                            }
                        }
                    }}   
                    inputProps={{
                        placeholder: 'Password',
                        secureTextEntry: !isPassword,
                        onSubmitEditing: () => passwordConfirmRef.current?.focus(),
                        returnKeyType: 'next'
                    }}
                    ref={passwordRef}
                    onToggle={() => setIsPassword(!isPassword)}
                    isPassword={isPassword}
                    error={errors.password?.message}
                />
                <Input
                    formProps={{
                        name: 'confirmPassword', 
                        control,
                        rules: {
                            required: "Please confirm your password",
                            validate: validateConfirmPassword
                        }
                    }}
                    inputProps={{
                        placeholder: 'Confirm Password',
                        secureTextEntry: !isConfirmPassword,
                        onSubmitEditing: handleSubmit(handleNextStep),
                    }}
                    ref={passwordConfirmRef}
                    onToggle={() => setIsConfirmPassword(!isConfirmPassword)}
                    isPassword={isConfirmPassword}
                    error={errors.confirmPassword?.message}
                />
                <CustomCheckbox 
                    onToggle={() => setIsChecked(!isChecked)}
                    isChecked={isChecked}
                    label="I agree to the terms & Conditions"
                />
                <Button
                    title="Register"
                    onPress={handleSubmit(handleNextStep)}
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