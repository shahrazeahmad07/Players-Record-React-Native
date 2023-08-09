import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ErrorComponent = ({style, errorText}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
});

export default ErrorComponent;
