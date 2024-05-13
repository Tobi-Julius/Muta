import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "../primary";
import { Image } from "expo-image";
import { scale } from "../../utils/scale";

export const LanguageToLearnSelection = ({ item, index, lang, setLang }) => {
  return (
    <TouchableOpacity
      onPress={() => setLang(item)}
      style={[
        style.container,
        {
          borderColor: lang.id === item.id ? "#4CA6A8" : "#ABB3C7",
        },
      ]}
      activeOpacity={0.9}
    >
      <Image
        source={item.flag}
        contentFit="cover"
        style={style.image}
        cachePolicy={"memory-disk"}
      />
      <Text
        text={item.text}
        textStyle={[
          style.text,
          {
            color: lang.id === item.id ? "#4CA6A8" : "#ABB3C7",
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: scale.pixelSizeVertical(20),
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale.fontPixel(8),
    borderWidth: 1,
  },
  image: {
    height: scale.heightPixel(64),
    width: scale.widthPixel(64),
  },
  text: {
    fontFont: "KASemiBold",
    fontSize: scale.fontPixel(16),
    lineHeight: scale.fontPixel(32),
    marginTop: scale.pixelSizeVertical(25),
  },
});
