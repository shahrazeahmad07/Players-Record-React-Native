import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../config/colors';

const FormField = ({
  heading = '',
  placeholder = '',
  style,
  onChangeText = text => {},
  value,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.heading}>{heading}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
  },
  textInput: {
    fontSize: 17,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
});

export default FormField;
