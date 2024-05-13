import React, { useContext, useEffect, useState } from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { RootStack } from "./RootStack";
import { UserContext } from "../hooks/Context";

const Stack = createSharedElementStackNavigator();

export const MainStack = () => {
  const [
    currentUser,
    updateCurrentUser,
    signIn,
    signUp,
    updateLearningInfo,
    learningInfo,
  ] = useContext(UserContext);

  const [isAuth, updateIsAuth] = useState(false);

  useEffect(() => {
    if (currentUser) {
      updateIsAuth(true);
    } else {
      updateIsAuth(false);
    }
  }, [currentUser]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuth ? (
          <Stack.Screen name="RootStack" component={RootStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
