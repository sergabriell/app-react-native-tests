import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    backgroundColor?: string;
}

export function Button({title, backgroundColor, ...rest}: Props) {
    return (
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: backgroundColor ? backgroundColor : '#454B60', borderColor: '#454B60', borderWidth: 1 }]} 
            onPress={() => console.log("Register")}
            {...rest}
        >
            <Text style={[styles.text, {color: backgroundColor ? '#454B60' : '#fff'}]}>{title}</Text>
        </TouchableOpacity>
    );
}