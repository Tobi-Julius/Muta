import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  LanguageSelection,
  LanguageToLearnSelection,
  Login,
  LoginWithEmail,
  Proficiency,
  SignUp,
  SignUpWithEmail,
  Welcome,
} from "../screens";
const Stack = createSharedElementStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignUpWithEmail" component={SignUpWithEmail} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Proficiency" component={Proficiency} />
      <Stack.Screen name="LoginWithEmail" component={LoginWithEmail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="LanguageToLearnSelection"
        component={LanguageToLearnSelection}
      />
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
    </Stack.Navigator>
  );
};

export default AuthStack;
