import { TextInput, TextInputProps } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";

import { styles } from "./styles";
import { forwardRef } from "react";

type Props = {
    formProps: UseControllerProps;
    inputProps: TextInputProps
};

const Input = forwardRef<TextInput, Props>(({ formProps, inputProps }, ref) => {
    return (
        <Controller
        {...formProps}
            render={({field}) => (
                <TextInput
                    ref={ref}
                    value={field.value}
                    onChangeText={field.onChange} 
                    style={styles.control} 
                    {...inputProps} 
                />
            )}
        />  
    );
});

export { Input };