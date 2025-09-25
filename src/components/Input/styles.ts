import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    viewControl:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    control: {
        padding: 13.3,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        color: "#454B60"
    },
    icon: {
        position: 'absolute',
        right: 12,
    },
    error: {
        color: '#FF0000',
        marginTop: 2,
        fontSize: 12,
        fontWeight: '400',
    }
});