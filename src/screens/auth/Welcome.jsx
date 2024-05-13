import { StyleSheet, View, Text as BaseText } from "react-native";
import React from "react";
import { Button, Text } from "../../component/primary";
import { Image } from "expo-image";
import { images } from "../../constants/images";
import { scale } from "../../utils/scale";
import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
  const { navigate } = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          source={images.doodles}
          style={style.topImage}
          cachePolicy={"memory-disk"}
          contentFit="cover"
        />
        <View style={style.textContainer}>
          <Text textStyle={style.text1} text={"Learn languages from"} />
          <Text textStyle={style.text2} text={"Africa"} />
        </View>
      </View>
      <Text
        textStyle={style.middleText}
        text={"Muta helps you learn African languages in the \n easiest way"}
      />
      <View style={style.buttonContainer}>
        <Button
          title={"GET STARTED"}
          textStyle={style.getstartedText}
          onPress={() => navigate("LanguageSelection")}
          containerStyle={style.btn1Container}
        />
        <Button
          title={"LOG IN"}
          textStyle={style.loginText}
          onPress={() => navigate("Login")}
          containerStyle={style.btn2Container}
        />
      </View>
      <BaseText style={style.BaseText}>
        By continuing on this app, you agree to Muta’s{" "}
        <Text textStyle={style.subText} text={"\n Terms of Service "} /> and
        <Text textStyle={style.subText} text={" Privacy Policy"} />
      </BaseText>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1b1e26" },
  imageContainer: {
    width: "100%",
    height: scale.heightPixel(400),
  },
  topImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  text1: {
    fontSize: scale.size.h4,
    lineHeight: scale.lineSize.lh2,
    color: "#fff",
    fontFamily: "KAMedium",
  },
  text2: {
    fontSize: scale.fontPixel(44),
    color: "#fff",
    fontFamily: "magica",
  },
  textContainer: {
    bottom: scale.heightPixel(30),
    position: "absolute",
    paddingHorizontal: scale.pixelSizeHorizontal(16),
  },
  middleText: {
    color: "#ABB3C7",
    lineHeight: scale.lineSize.lh2,
    fontSize: scale.size.h5,
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    fontFamily: "KALight",
  },
  btn1Container: {
    borderWidth: 1,
    borderColor: "#BBECED",
    backgroundColor: "#4ca6a8",
    paddingVertical: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(7),
  },
  getstartedText: {
    color: "#1B1E26",
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "KASemiBold",
  },
  buttonContainer: {
    paddingHorizontal: scale.pixelSizeHorizontal(10),
    marginTop: scale.pixelSizeVertical(60),
  },
  btn2Container: {
    borderWidth: 1,
    borderColor: "#BBECED",
    paddingVertical: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(7),
    marginTop: scale.pixelSizeVertical(15),
  },
  loginText: {
    color: "#BBECED",
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "KASemiBold",
  },
  BaseText: {
    position: "absolute",
    bottom: scale.pixelSizeVertical(25),
    alignSelf: "center",
    textAlign: "center",
    fontSize: scale.fontPixel(12),
    color: "#ABB3C7",
    fontFamily: "KALight",
  },
  subText: {
    color: "#BBECED",
  },
});
