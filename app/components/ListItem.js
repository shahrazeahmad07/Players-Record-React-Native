import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../config/colors';

const ListItem = ({style, name, role, working}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={require('../assets/image_placeholder.jpg')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.details}>{role}</Text>
          <Text style={styles.details}>{working}</Text>
        </View>
      </View>
      <View style={styles.iconBackground}>
        <Icon name="person-4" size={25} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.secondaryVeryLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 33,
    marginStart: 2,
  },
  textContainer: {
    paddingStart: 20,
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
    flexWrap: 'nowrap',
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
  },
  details: {
    paddingEnd: 10,
    color: 'gray',
  },
  iconBackground: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 3,
  },
});

export default ListItem;
