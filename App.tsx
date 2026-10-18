import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import ForgotPasswordScreen from './src/screens/auth/ForgotPasswordScreen';
import VerifyCodeScreen from './src/screens/auth/VerifyCodeScreen';
import ResetPasswordScreen from './src/screens/auth/ResetPasswordScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import CitySelectScreen from './src/screens/auth/CitySelectScreen';
import MainTabs from './src/navigation/MainTabs';
import CourseDetailsScreen from './src/screens/main/CourseDetailsScreen';
import AssignmentDetailsScreen from './src/screens/main/AssignmentDetailsScreen';
import AssignmentsScreen from './src/screens/main/AssignmentsScreen';
import GradesScreen from './src/screens/main/GradesScreen';
import type { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="CitySelect" component={CitySelectScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="AssignmentDetails" component={AssignmentDetailsScreen} />
      <Stack.Screen name="Assignments" component={AssignmentsScreen} />
      <Stack.Screen name="Grades" component={GradesScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
}
