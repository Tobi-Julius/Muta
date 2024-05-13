import { Home, Learn, LiveSessions } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { scale } from "../utils/scale";
import { Text } from "../component/primary";
import { Platform, View } from "react-native";
import { Image } from "expo-image";
import { images } from "../constants";

const Tab = createBottomTabNavigator();
export const RootStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#1b1e26",
          height: scale.heightPixel(60),
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Home"}
              textStyle={[
                {
                  color: focused ? "#4CA6A8" : "#848A99",
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                  fontSize: scale.fontPixel(12),
                  fontFamily: "KAMedium",
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "40%",
              }}
            >
              <Image
                source={images.home}
                style={{
                  width: scale.widthPixel(24),
                  height: scale.heightPixel(24),
                }}
                contentFit="cover"
                cachePolicy={"memory-disk"}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: "Home",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Learn"}
              textStyle={[
                {
                  color: focused ? "#4CA6A8" : "#848A99",
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                  fontFamily: "KAMedium",
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "40%",
              }}
            >
              <Image
                source={images.MenuIcons}
                style={{
                  width: scale.widthPixel(24),
                  height: scale.heightPixel(24),
                }}
                contentFit="cover"
                cachePolicy={"memory-disk"}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Learn"
        component={Learn}
      />
      <Tab.Screen
        options={{
          title: "Home",
          tabBarLabel: ({ color, focused }) => (
            <Text
              text={"Live session"}
              textStyle={[
                {
                  color: focused ? "#4CA6A8" : "#848A99",
                  paddingBottom:
                    Platform.OS === "android" ? scale.pixelSizeVertical(5) : 0,
                  fontFamily: "KAMedium",
                },
              ]}
            />
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "space-between",
                height: "40%",
              }}
            >
              <Image
                source={images.agent}
                style={{
                  width: scale.widthPixel(24),
                  height: scale.heightPixel(24),
                }}
                contentFit="cover"
                cachePolicy={"memory-disk"}
              />
            </View>
          ),
          tabBarAccessibilityLabel: "home",
        }}
        name="Live Session"
        component={LiveSessions}
      />
    </Tab.Navigator>
  );
};
