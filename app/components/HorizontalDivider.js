import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';

const HorizontalDivider = ({style}) => {
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
});

export default HorizontalDivider;
