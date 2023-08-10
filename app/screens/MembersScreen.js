import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import HorizontalDivider from '../components/HorizontalDivider';
import ListItem from '../components/ListItem';

const personsList = [
  {
    id: 1,
    image: undefined,
    name: 'Shahzaib',
    email: 'email@gmail.com',
    role: 'Manager',
    isWorking: 'Working',
  },
  {
    id: 2,
    image: undefined,
    name: 'Ahmad',
    email: 'email@gmail.com',
    role: 'Manager',
    isWorking: 'Working',
  },
  {
    id: 3,
    image: undefined,
    name: 'Maazu',
    email: 'email@gmail.com',
    role: 'Manager',
    isWorking: 'Retired',
  },
  {
    id: 4,
    image: undefined,
    name: 'Nomi',
    email: 'email@gmail.com',
    role: 'Manager',
    isWorking: 'Working',
  },
  {
    id: 5,
    image: undefined,
    name: 'Juni',
    email: 'email@gmail.com',
    role: 'Recruiter',
    isWorking: 'Retired',
  },
  {
    id: 6,
    image: undefined,
    name: 'Me',
    email: 'email@gmail.com',
    role: 'Recruiter',
    isWorking: 'Retired',
  },
];

const retiredPersonsList = personsList.filter(
  item => item.isWorking === 'Retired',
);

const MemberScreen = ({style, route}) => {
  const [currentSelected, setCurrentSelected] = useState(0);

  useEffect(() => {
    let count = personsList.length;
    const object = {
      id: count + 1,
      image: route.params.values.image.assets[0].uri,
      name: route.params.values.name,
      email: route.params.values.email,
      role: route.params.values.role,
      isWorking: route.params.values.isWorking,
    };
    count++;
    personsList.push(object);
  }, []);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.topBar}>
        <TouchableWithoutFeedback onPress={() => setCurrentSelected(0)}>
          <Text style={styles.text}>All</Text>
        </TouchableWithoutFeedback>
        <View style={styles.divider} />
        <TouchableWithoutFeedback onPress={() => setCurrentSelected(1)}>
          <Text style={styles.text}>Retired</Text>
        </TouchableWithoutFeedback>
        <View
          style={
            currentSelected == 0 ? styles.leftSelected : styles.rightSelected
          }
        />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color={colors.lightGray}
          />
          <TextInput
            placeholder="Search for person"
            style={styles.textInput}
            clearButtonMode="always"
          />
          {Platform.OS === 'android' ? (
            <Icon2
              style={styles.reloadIcon}
              name="reload"
              size={18}
              color={colors.lightGray}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
      <HorizontalDivider />
      <FlatList
        style={styles.flatList}
        data={currentSelected == 0 ? personsList : retiredPersonsList}
        keyExtractor={person => person.id}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name}
            role={item.role}
            working={item.isWorking}
            style={{
              backgroundColor:
                index % 2 == 0 ? 'white' : colors.secondaryVeryLight,
            }}
            source={item.image}
          />
        )}
        ItemSeparatorComponent={() => <HorizontalDivider />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  divider: {
    borderLeftColor: colors.lightGray,
    borderLeftWidth: 0.5,
    paddingVertical: 30,
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
  leftSelected: {
    width: 17,
    height: 17,
    backgroundColor: colors.primary,
    top: 50,
    left: 68,
    position: 'absolute',
    transform: [{rotate: '45deg'}],
  },
  rightSelected: {
    width: 17,
    height: 17,
    backgroundColor: colors.primary,
    top: 50,
    right: 68,
    position: 'absolute',
    transform: [{rotate: '45deg'}],
  },
  searchContainer: {
    padding: 15,
    paddingStart: 18,
    paddingTop: 20,
  },
  searchBox: {
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 120,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    paddingStart: 12,
  },
  textInput: {
    paddingStart: 10,
    maxHeight: 40,
    color: colors.primary,
    flex: 1,
  },
  reloadIcon: {
    paddingEnd: 12,
  },
  flatList: {
    flex: 1,
  },
});

export default MemberScreen;
