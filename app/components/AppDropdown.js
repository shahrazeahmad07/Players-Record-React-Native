import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import colors from '../config/colors';

const AppDropdown = ({
  title,
  style,
  data,
  labelField,
  valueField,
  onChange,
  value,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Dropdown
        style={styles.dropdown}
        data={data}
        labelField={labelField}
        valueField={valueField}
        onChange={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 17,
    color: colors.primary,
    fontWeight: 'bold',
  },
  dropdown: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: 150,
  },
});

export default AppDropdown;
