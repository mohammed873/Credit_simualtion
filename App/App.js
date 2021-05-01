
import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,ScrollView, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NativeRouter, Switch, Route } from 'react-router-native';
import  SignUp from './components/Signup';
import Sumulation from './components/sumulation';
import validInfo from './components/validateInfo'

import Validatemail from './components/validatemail';



const Stack = createStackNavigator()

export default function App() {
  return (
    // <ImageBackground source={image} style={styles.backgroundcontainer}>
    <NativeRouter>
      <Switch>
        <Route  path='/'  exact component={SignUp} />
        <Route  path='/simulate' exact component={Sumulation} />
        <Route  path='/info' exact component={validInfo} />
        <Route  path='/validate' exact component={Validatemail} />
      </Switch>
    </NativeRouter>
    
  );
}

const styles = StyleSheet.create({
 
  backgroundcontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  }
});
