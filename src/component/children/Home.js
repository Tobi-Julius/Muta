import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "../primary";
import { Image } from "expo-image";
import { scale } from "../../utils/scale";

export const Home = ({ item, index }) => {
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: item.me ? "#EDE2BB" : "#2F3540",
          borderRadius: scale.fontPixel(15),
        },
      ]}
    >
      <View
        style={[
          style.numberCard,
          {
            backgroundColor: item.me ? "#000" : "#fff",
          },
        ]}
      >
        <Text
          text={`${item.id}.`}
          textStyle={[
            style.id,
            {
              color: item.me ? "#fff" : "#000",
            },
          ]}
        />
      </View>
      <View style={style.innerContainer}>
        <Image
          source={item.pp}
          style={style.pp}
          contentFit="cover"
          cachePolicy={"memory-disk"}
        />
        <View>
          <Text
            text={item.name}
            textStyle={[
              style.nameText,
              {
                color: item.me ? "#000" : "#fff",
              },
            ]}
          />
          <View style={style.flagcon}>
            <Text
              text={item.country}
              textStyle={[
                style.country,
                {
                  color: item.me ? "#000" : "#fff",
                },
              ]}
            />
            <Image
              source={item.flag}
              cachePolicy={"memory-disk"}
              contentFit="cover"
              style={style.flag}
            />
          </View>
        </View>
      </View>
      <Text
        text={item.score}
        textStyle={[
          style.score,
          {
            color: item.me ? "#000" : "#FF8700",
          },
        ]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: scale.pixelSizeVertical(30),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2F3540",
    marginVertical: scale.pixelSizeVertical(10),
    paddingHorizontal: scale.pixelSizeHorizontal(15),
  },
  pp: {
    height: scale.heightPixel(48),
    width: scale.widthPixel(48),
    marginRight: scale.pixelSizeHorizontal(12),
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    fontSize: scale.fontPixel(15),
    lineHeight: scale.fontPixel(24),
    color: "#fff",
    fontFamily: "KASemiBold",
  },
  country: {
    fontSize: scale.fontPixel(13),
    lineHeight: scale.fontPixel(24),
    color: "#C6CFE5",
    fontFamily: "KAMedium",
  },
  score: {
    fontSize: scale.fontPixel(13),
    lineHeight: scale.fontPixel(24),
    color: "#C6CFE5",
    fontFamily: "KAMedium",
  },
  numberCard: {
    position: "absolute",
    backgroundColor: "#fff",
    paddingHorizontal: scale.pixelSizeHorizontal(10),
    paddingVertical: scale.pixelSizeVertical(8),
    top: 0,
    left: 0,
    borderBottomRightRadius: scale.fontPixel(15),
    borderTopLeftRadius: scale.fontPixel(15),
  },
  id: {
    fontSize: scale.fontPixel(12),
    lineHeight: scale.fontPixel(16),
    color: "#C6CFE5",
    fontFamily: "KASemiBold",
  },
  flag: {
    height: scale.heightPixel(20),
    width: scale.widthPixel(20),
    marginLeft: scale.pixelSizeHorizontal(8),
  },
  flagcon: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(5),
  },
});
