import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FormScreen from './app/screens/FormScreen';
import MemberScreen from './app/screens/MembersScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Add Member" component={FormScreen} />
        <Stack.Screen name="Show Members" component={MemberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;