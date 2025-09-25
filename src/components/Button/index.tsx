import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({title, ...rest}: Props) {
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => console.log("Register")}
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}