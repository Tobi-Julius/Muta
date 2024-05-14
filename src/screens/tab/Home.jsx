import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "../../utils/scale";
import { Button, Text } from "../../component/primary";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { images } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import { leaderData } from "../../constants/staticData";
import { Home as Child } from "../../component/children";

export const Home = () => {
  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.header}>
          <View style={style.lesson}>
            <Text text={"Yoruba Lessons"} textStyle={style.lessonText} />
            <AntDesign name="caretdown" size={14} color="#fff" />
          </View>
          <View style={style.lesson}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
            <Image
              source={images.Group}
              cachePolicy={"memory-disk"}
              contentFit="cover"
              style={style.ProfilePic}
            />
          </View>
        </View>

        <View>
          <FlatList
            ListHeaderComponent={() => (
              <View>
                <View style={style.card}>
                  <View>
                    <View>
                      <View style={style.miniContainer}>
                        <Image
                          source={images.layer}
                          contentFit="cover"
                          cachePolicy={"memory-disk"}
                          style={style.learn}
                        />
                        <Text text={"Intermediate"} textStyle={style.text} />
                      </View>
                      <View style={style.miniContainer}>
                        <Image
                          source={images.vector}
                          contentFit="cover"
                          cachePolicy={"memory-disk"}
                          style={style.learn}
                        />
                        <Text text={"Lesson 2"} textStyle={style.text} />
                      </View>
                    </View>
                    <View style={style.perContainer}>
                      <Image
                        source={images.Slider}
                        style={style.slider}
                        contentFit="cover"
                        cachePolicy={"memory-disk"}
                      />
                      <Text text={"52%"} textStyle={style.per} />
                    </View>

                    <TouchableOpacity
                      style={style.btnCon}
                      activeOpacity={0.9}
                      onPress={() => {}}
                    >
                      <Text
                        text={"Start learning"}
                        textStyle={style.learning}
                      />
                      <Image
                        source={images.play}
                        contentFit="cover"
                        style={style.play}
                        cachePolicy={"memory-disk"}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={style.imageCon}>
                    <Image
                      source={images.Languageasho}
                      contentFit="cover"
                      style={style.yor}
                      cachePolicy={"memory-disk"}
                    />
                  </View>
                </View>

                <View style={style.card2}>
                  <View style={style.imgCon}>
                    <Image
                      source={images.exam}
                      contentFit="cover"
                      cachePolicy={"memory-disk"}
                      style={style.learn2}
                    />
                    <Text
                      textStyle={style.review}
                      text={"Review your most \n recent lesson"}
                    />
                  </View>
                  <Entypo name="chevron-right" size={24} color="black" />
                </View>
                <View style={style.boardCon}>
                  <Text text={"Leaderboard"} textStyle={style.leaderboard} />
                  <Entypo name="chevron-right" size={24} color="#C6CFE5" />
                </View>
              </View>
            )}
            data={leaderData}
            key={({ item }) => item.id}
            renderItem={({ item, index }) => (
              <Child item={item} index={index} />
            )}
            contentContainerStyle={{
              paddingBottom: scale.pixelSizeVertical(135),
              //   marginTop: scale.pixelSizeVertical(5),
            }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
              <TouchableOpacity
                activeOpacity={0.9}
                style={style.btn}
                onPress={() => {}}
              >
                <Image
                  source={images.unlock}
                  contentFit="cover"
                  cachePolicy={"memory-disk"}
                  style={style.unlock}
                />
                <Text
                  text={"Upgrade now to unlock all lessons"}
                  textStyle={style.lessons}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1e26",
    paddingHorizontal: scale.pixelSizeHorizontal(16),
  },
  lesson: {
    flexDirection: "row",
    alignItems: "center",
  },
  lessonText: {
    fontSize: scale.fontPixel(18),
    fontFamily: "KASemiBold",
    lineHeight: scale.fontPixel(24),
    color: "#fff",
    marginRight: scale.pixelSizeHorizontal(10),
  },
  ProfilePic: {
    height: scale.heightPixel(40),
    width: scale.widthPixel(40),
    marginLeft: scale.pixelSizeHorizontal(20),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(12),
    paddingBottom: scale.pixelSizeVertical(10),
  },
  card: {
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    paddingVertical: scale.pixelSizeVertical(20),
    backgroundColor: "#2F3540",
    borderRadius: scale.fontPixel(12),
    marginTop: scale.pixelSizeVertical(25),
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  miniContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: scale.pixelSizeVertical(10),
  },
  learn: {
    height: scale.heightPixel(20),
    width: scale.widthPixel(20),
    marginRight: scale.pixelSizeHorizontal(10),
    fontFamily: "KAMedium",
  },
  learn2: {
    height: scale.heightPixel(40),
    width: scale.widthPixel(40),
    marginRight: scale.pixelSizeHorizontal(10),
    fontFamily: "KAMedium",
  },
  text: {
    fontFamily: "KAMedium",
    fontSize: scale.fontPixel(14),
    lineHeight: scale.fontPixel(24),
    color: "#fff",
  },
  perContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(10),
  },
  slider: {
    width: scale.widthPixel(160),
    height: scale.heightPixel(3),
    borderRadius: scale.fontPixel(5),
  },
  per: {
    fontSize: scale.fontPixel(12),
    lineHeight: scale.fontPixel(16),
    color: "#fff",
    marginLeft: scale.pixelSizeHorizontal(7),
    fontFamily: "KAMedium",
  },
  learning: {
    fontSize: scale.fontPixel(12),
    lineHeight: scale.fontPixel(16),
    color: "#000",
  },
  btnCon: {
    width: scale.pixelSizeHorizontal(185),
    paddingVertical: scale.pixelSizeVertical(10),
    backgroundColor: "#BBECED",
    marginTop: scale.pixelSizeVertical(13),
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: scale.fontPixel(30),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    alignItems: "center",
  },
  learning: {
    fontSize: scale.fontPixel(16),
    lineHeight: scale.fontPixel(16),
    color: "#000",
    fontFamily: "KAMedium",
  },
  play: {
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
  },
  imageCon: {
    position: "absolute",
    right: -scale.pixelSizeHorizontal(30),

    borderWidth: scale.widthPixel(8),
    borderRadius: scale.fontPixel(60),
    borderColor: "#fff",
    padding: scale.fontPixel(30),
  },
  yor: {
    height: scale.fontPixel(45),
    width: scale.widthPixel(45),
  },
  card2: {
    backgroundColor: "#FFF5DC",
    paddingHorizontal: scale.pixelSizeVertical(20),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: scale.pixelSizeVertical(30),
    alignItems: "center",
    marginTop: scale.pixelSizeHorizontal(30),
    borderRadius: scale.fontPixel(10),
  },
  imgCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  review: {
    fontSize: scale.fontPixel(16),
    lineHeight: scale.fontPixel(24),
    color: "#000",
    fontFamily: "KASemiBold",
  },
  boardCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: scale.pixelSizeVertical(20),
  },
  leaderboard: {
    fontSize: scale.fontPixel(16),
    lineHeight: scale.fontPixel(24),
    color: "#fff",
    fontFamily: "KASemiBold",
  },
  unlock: {
    height: scale.heightPixel(32),
    width: scale.widthPixel(32),
    marginRight: scale.pixelSizeHorizontal(32),
  },
  btn: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#BBECED",
    marginTop: scale.pixelSizeVertical(50),
    width: "100%",
    justifyContent: "center",
    paddingVertical: scale.pixelSizeVertical(15),
    borderRadius: scale.fontPixel(50),
  },
  lessons: {
    fontSize: scale.fontPixel(14),
    lineHeight: scale.fontPixel(16),
    color: "#1B1E26",
    fontFamily: "KASemiBold",
  },
});
