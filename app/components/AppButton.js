import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const AppButton = ({style, text, onPress, textColor}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, {color: colors[textColor]}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
});

export default AppButton;
