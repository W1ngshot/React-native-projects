import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback, useState } from "react";

SplashScreen.preventAutoHideAsync();

export function useLoadFonts() {
  const [iconMap, setIconMap] = useState<{ [key: string]: string } | null>(
    null
  );

  const [loaded, error] = useFonts({
    "PixelifySans-Bold": require("../assets/PixelifySans-Bold.ttf"),
    "PixelifySans-Medium": require("../assets/PixelifySans-Medium.ttf"),
    "PixelifySans-Regular": require("../assets/PixelifySans-Regular.ttf"),
    "PixelifySans-SemiBold": require("../assets/PixelifySans-SemiBold.ttf"),
    "Typicons": require("../assets/typicons.ttf"),
  });


  useEffect(() => {
    try {
      const json = require("../assets/typicons.json"); // <-- используем require()
      setIconMap(json);
    } catch (e) {
      console.error("Ошибка загрузки JSON с иконками:", e);
    }
  }, []);

  const hideSplashScreen = useCallback(async () => {
    if (loaded && iconMap) {
      await SplashScreen.hideAsync();
    }
  }, [loaded, iconMap]);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  return { loaded, error, iconMap };
}
