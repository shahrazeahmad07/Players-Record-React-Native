import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const AppSwitch = ({style, title, onValueChange, value}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Switch onValueChange={onValueChange} value={value} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginEnd: 20,
  },
});

export default AppSwitch;
