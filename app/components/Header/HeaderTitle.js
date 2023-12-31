import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const HeaderTitle = ({style, title}) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    marginLeft: 10,
  },
});

export default HeaderTitle;
