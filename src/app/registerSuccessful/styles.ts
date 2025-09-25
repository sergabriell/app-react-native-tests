import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 55, 
    textAlign: 'center', 
    gap: 10 
},
  titleLogo: {
    marginBottom: 18,
    fontWeight: "bold",
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold",
    marginBottom: 30,
    color: '#454B60',
    textAlign: 'center',
    },
  areaInput:{
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    },
  text: {
    color: '#454B60',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  areaButton:  {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32,
    justifyContent: 'center',
    marginBottom: 100
  }
});