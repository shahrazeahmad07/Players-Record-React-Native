import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../config/colors';

const HeaderBackground = ({style}) => {
  return <View style={[styles.container, style]}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default HeaderBackground;
