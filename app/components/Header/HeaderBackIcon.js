import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderBackIcon = ({style, navigation}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={styles.icon}
          name="chevron-back-outline"
          size={20}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    padding: 10,
    paddingStart: 0,
  },
});

export default HeaderBackIcon;
