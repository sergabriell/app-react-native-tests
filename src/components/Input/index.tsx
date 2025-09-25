import { forwardRef } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { MaskedTextInput} from "react-native-mask-text";

type MaskedInputProps = TextInputProps & {
  mask?: string;
  onChangeText?: (formatted: string, raw: string) => void;
};

type Props = {
    error?: string;
    formProps: UseControllerProps;
    inputProps: MaskedInputProps;
    onToggle?: () => void;
    isPassword?: boolean;
};



const Input = forwardRef<TextInput, Props>(
  ({ formProps, inputProps, error = "", onToggle, isPassword }, ref) => {
    return (
      <Controller
        {...formProps}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.container}>
            <View style={styles.viewControl}>
              {inputProps?.mask ? (
                <MaskedTextInput
                  {...inputProps}
                  ref={ref}
                  mask={inputProps.mask}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(text, rawText) => {
                    onChange(rawText); // salva só os números
                    if (inputProps.onChangeText) {
                      inputProps.onChangeText(text, rawText);
                    }
                  }}
                  style={[
                    styles.control,
                    { borderColor: error.length > 0 ? "#FF0000" : "#454B60" },
                    inputProps?.style,
                  ]}
                />
              ) : (
                <TextInput
                  {...inputProps}
                  ref={ref}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  style={[
                    styles.control,
                    { borderColor: error.length > 0 ? "#FF0000" : "#454B60" },
                    inputProps?.style,
                  ]}
                />
              )}
              {(formProps.name === "password" ||
                formProps.name === "confirmPassword") && (
                <TouchableOpacity style={styles.icon} onPress={onToggle}>
                  <Feather
                    name={isPassword ? "eye" : "eye-off"}
                    size={20}
                    color={error.length > 0 ? "#FF0000" : "#ccc"}
                  />
                </TouchableOpacity>
              )}
            </View>
            {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          </View>
        )}
      />
    );
  }
);

export { Input };