import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar, LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

 
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';

LogBox.ignoreAllLogs();

export default function styled() {
 return (
   <NavigationContainer>
    <AuthProvider>
    <StatusBar backgroundColor={'#131313'} barStyle='light-content'/>
    <Routes/>
    </AuthProvider>
    </NavigationContainer>
  );
}