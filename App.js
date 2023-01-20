/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainDrawer from './src/stacks/MainDrawer';
import Preload from './src/screens/Preload';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import MainTab from './src/stacks/MainTab';
import Historic from './src/screens/Historic';

const navOptionHandler = () => ({
  headerShown: false,
});

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Preload"
      drawerContent={() => <MainDrawer navigation={navigation} />}>
      <Drawer.Screen name="Preload" component={Preload} />
      <Drawer.Screen name="SignIn" component={SignIn} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen name="MainTab" component={MainTab} />
      <Drawer.Screen name="Historic" component={Historic} />
    </Drawer.Navigator>
  );
}
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Preload">
        <StackApp.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
