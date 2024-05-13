import React from "react";
import { MainStack } from "./navigation/MainStack";
import { AuthProvider } from "./hooks/Context";
import { useFont } from "./hooks/useFont";

export default function App() {
  const { isFontReady } = useFont();

  return (
    isFontReady && (
      <AuthProvider>
        <MainStack />
      </AuthProvider>
    )
  );
}
