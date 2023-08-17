import React from 'react';
import {StyleSheet, View} from 'react-native';

const TestScreen = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TestScreen;
