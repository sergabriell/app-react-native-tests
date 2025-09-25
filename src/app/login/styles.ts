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
    marginBottom: 60,
    fontWeight: "bold",
  },
  title: { 
    fontSize: 30, 
    fontWeight: "bold",
    marginBottom: 30,
    color: '#454B60'
},
  areaInput:{
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    top:-8
},
  btnSocials: {
    flexDirection: 'row', 
    gap: 20, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#454B60', 
    padding: 10, 
    borderRadius: 10, 
    width:145
  },
  text: {
    color: '#454B60',
    fontSize: 16,
  }
});