import React from "react";
import { AuthProvider } from "./hooks/Context";
import { useFont } from "./hooks/useFont";
import { StatusBar } from "expo-status-bar";
import { MainStack } from "./navigation/MainStack";
import { Text } from "react-native";

export default function App() {
  const { isFontReady } = useFont();

  return isFontReady ? (
    <AuthProvider>
      <MainStack />
    </AuthProvider>
  ) : null;
}
