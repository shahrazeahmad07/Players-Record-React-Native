import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FormScreen from './app/screens/FormScreen';
import MemberScreen from './app/screens/MembersScreen';
import HeaderBackIcon from './app/components/Header/HeaderBackIcon';
import HeaderBackground from './app/components/Header/HeaderBackground';
import HeaderTitle from './app/components/Header/HeaderTitle';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Add Member"
          component={FormScreen}
          options={{header: () => {}}}
        />
        <Stack.Screen
          name="Show Members"
          component={MemberScreen}
          options={({navigation}) => {
            return {
              headerBackground: () => <HeaderBackground />,
              headerLeft: () => <HeaderBackIcon navigation={navigation} />,
              headerTitle: () => <HeaderTitle />,
              headerBackVisible: false,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
