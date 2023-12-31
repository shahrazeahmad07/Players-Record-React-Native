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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
    id: 3,
    image: undefined,
    name: 'Shahbaz Sharif',
    email: 'email@gmail.com',
    role: 'Manager',
    isWorking: 'Retired',
  },
];

let retiredPersonsList;

const MemberScreen = ({style, route}) => {
  const [currentSelected, setCurrentSelected] = useState(0);
  const [selectedList, setSelectedList] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');

  const filterResults = text => {
    if (text) {
      let masterList;
      if (currentSelected == 0) {
        masterList = personsList;
      } else {
        masterList = retiredPersonsList;
      }
      const filteredList = masterList.filter(item => {
        const name = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const filterText = text.toUpperCase();
        return name.indexOf(filterText) > -1;
      });
      setSelectedList(filteredList);
    } else {
      if (currentSelected == 0) {
        setSelectedList(personsList);
      } else {
        setSelectedList(retiredPersonsList);
      }
    }
  };

  useEffect(() => {
    let count = personsList.length;
    if (route.params) {
      const object = {
        id: count + 2,
        image: route.params.values.image.assets[0].uri,
        name: route.params.values.name,
        email: route.params.values.email,
        role: route.params.values.role,
        isWorking: route.params.values.isWorking,
      };
      count++;
      personsList.push(object);
    }
    retiredPersonsList = personsList.filter(
      item => item.isWorking === 'Retired',
    );
    setSelectedList(personsList);
    // let filteredList = personsList.filter(
    //   item => item.isWorking === 'Retired',
    // );
  }, [route.params]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.topBar}>
        <TouchableWithoutFeedback
          onPress={() => {
            setCurrentSelected(0);
            setSelectedList(personsList);
          }}>
          <Text style={styles.text}>All</Text>
        </TouchableWithoutFeedback>
        <View style={styles.divider} />
        <TouchableWithoutFeedback
          onPress={() => {
            setCurrentSelected(1);
            setSelectedList(retiredPersonsList);
          }}>
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
            value={searchedValue}
            onChangeText={text => {
              setSearchedValue(text);
              filterResults(text);
            }}
          />
          {Platform.OS === 'android' ? (
            <Icon2
              style={styles.reloadIcon}
              name="close"
              size={23}
              color={colors.lightGray}
              onPress={() => {
                setSearchedValue('');
                if (currentSelected == 0) {
                  setSelectedList(personsList);
                } else {
                  setSelectedList(retiredPersonsList);
                }
              }}
            />
          ) : (
            <></>
          )}
        </View>
      </View>
      <HorizontalDivider />
      <FlatList
        style={styles.flatList}
        data={selectedList}
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
    left: wp(24),
    position: 'absolute',
    transform: [{rotate: '45deg'}],
  },
  rightSelected: {
    width: 17,
    height: 17,
    backgroundColor: colors.primary,
    top: 50,
    right: wp(24),
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
