import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import colors from '../config/colors';

const CircularImage = ({style, source = {assets: [{}]}}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={
          source.assets[0].uri
            ? {uri: source.assets[0].uri}
            : require('../assets/image_placeholder.jpg')
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default CircularImage;
