import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
    label?: string;
    isChecked: boolean;
    onToggle: () => void;
}

const CustomCheckbox = ({ label, onToggle, isChecked }: Props) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container} activeOpacity={0.8}>
      <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <MaterialIcons name="check" size={16} color="white" />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};


export { CustomCheckbox };