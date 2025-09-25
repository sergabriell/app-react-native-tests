import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'flex-start',
    width: '100%',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkedCheckbox: {
    backgroundColor: '#454B60',
    borderColor: '#454B60',
  },
  label: {
    fontSize: 14,
    color: '#454B60',
    fontWeight: 'bold'
  },
});
