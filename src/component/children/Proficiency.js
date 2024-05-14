import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "../primary";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { scale } from "../../utils/scale";

export const Proficiency = ({
  item,
  index,
  updateProficiency,
  proficiency,
}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        key={index}
        activeOpacity={0.9}
        onPress={() => updateProficiency(item)}
        style={[
          style.container2,
          {
            borderColor: item.id === proficiency.id ? "#717171" : "#332F2F",
            borderWidth: 1,
          },
        ]}
      >
        <View style={style.flagText}>
          <Image
            source={item.flag}
            style={style.flagImage}
            contentFit="cover"
            cachePolicy={"memory-disk"}
          />
          <View>
            <Text text={item.text} textStyle={style.languageText} />
            <Text text={item.subText} textStyle={style.subText} />
          </View>
        </View>
        {item.id === proficiency.id ? (
          <AntDesign
            name="checkcircle"
            size={24}
            color="green"
            style={{
              backgroundColor: "#fff",
              borderRadius: scale.fontPixel(34),
            }}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: scale.pixelSizeHorizontal(10),
  },
  flagImage: {
    height: scale.heightPixel(35),
    width: scale.widthPixel(35),
    marginRight: scale.pixelSizeHorizontal(20),
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale.pixelSizeHorizontal(15),
    marginVertical: scale.pixelSizeVertical(15),
    paddingVertical: scale.pixelSizeVertical(30),
    alignItems: "center",
    borderRadius: scale.fontPixel(8),
  },
  flagText: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    color: "#fff",
    fontSize: scale.fontPixel(16),
    fontFamily: "KAMedium",
  },
  subText: {
    fontSize: scale.fontPixel(14),
    lineHeight: scale.fontPixel(20),
    color: "#ABB3C7",
    fontFamily: "KALight",
  },
});
