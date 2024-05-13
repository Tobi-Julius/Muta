import { useEffect, useState } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export const useFont = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  SplashScreen.preventAutoHideAsync();

  const subscribe = async () => {
    try {
      await Font.loadAsync({
        KABold: require("../assets/fonts/KABOLD.otf"),
        KALight: require("../assets/fonts/KALight.otf"),
        KAMedium: require("../assets/fonts/KAMedium.otf"),
        KASemiBold: require("../assets/fonts/KASemiBold.otf"),
        magica: require("../assets/fonts/Magica.otf"),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      Font.isLoaded ? setIsFontReady(true) : setIsFontReady(false);
    }
  };
  useEffect(() => {
    subscribe();
  });

  const unSubscribe = async () => {
    isFontReady ? SplashScreen.hideAsync() : null;
  };

  useEffect(() => {
    unSubscribe();
  });

  return { isFontReady };
};
