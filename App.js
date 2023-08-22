import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FormScreen from './app/screens/FormScreen';
import MemberScreen from './app/screens/MembersScreen';
import HeaderBackIcon from './app/components/Header/HeaderBackIcon';
import HeaderBackground from './app/components/Header/HeaderBackground';
import HeaderTitle from './app/components/Header/HeaderTitle';
import TestScreen from './app/screens/TestScreen';
import HeaderRightIcon from './app/components/Header/HeaderRightIcon';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Test Screen"
          component={TestScreen}
          options={{header: () => {}}}
        /> */}
        <Stack.Screen
          name="Members"
          component={MemberScreen}
          options={({navigation}) => {
            return {
              headerBackground: () => <HeaderBackground />,
              // headerLeft: () => <HeaderBackIcon navigation={navigation} />,
              headerTitle: () => <HeaderTitle title={'Members'} />,
              headerRight: () => <HeaderRightIcon navigation={navigation} />,
              headerBackVisible: false,
            };
          }}
        />
        <Stack.Screen
          name="Add Member"
          component={FormScreen}
          options={({navigation}) => {
            return {
              headerBackground: () => <HeaderBackground />,
              headerLeft: () => <HeaderBackIcon navigation={navigation} />,
              headerTitle: () => <HeaderTitle title={'Add Member'} />,
              headerBackVisible: false,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
