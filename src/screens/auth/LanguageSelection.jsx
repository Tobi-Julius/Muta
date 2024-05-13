import { FlatList, Pressable, StyleSheet, View } from "react-native";
import React, { useState, useContext } from "react";
import { Button } from "../../component/primary";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { images } from "../../constants/images";
import { scale } from "../../utils/scale";
import { useNavigation } from "@react-navigation/native";
import { languageSelectionData } from "../../constants/staticData";
import { LanguageSelection as Child } from "../../component/children";
import { UserContext } from "../../hooks/Context";

export const LanguageSelection = () => {
  const { goBack, navigate } = useNavigation();
  const [selectedId, updateSelectedId] = useState("");

  const [
    currentUser,
    updateCurrentUser,
    signIn,
    signUp,
    updateLearningInfo,
    learningInfo,
  ] = useContext(UserContext);

  const _pressHandler = () => {
    updateLearningInfo({ ...learningInfo, langUserSpeak: selectedId.lang });
    navigate("LanguageToLearnSelection");
  };

  return (
    <View style={style.container}>
      <SafeAreaView>
        <Pressable onPress={() => goBack()}>
          <Image
            source={images.back}
            style={style.back}
            cachePolicy={"memory-disk"}
            contentFit="cover"
          />
        </Pressable>
        <View style={{ marginTop: scale.pixelSizeVertical(25) }}>
          {languageSelectionData.map((item, index) => (
            <Child
              key={item.id}
              item={item}
              index={index}
              selectedId={selectedId}
              updateSelectedId={updateSelectedId}
            />
          ))}
        </View>

        <Button
          disabled={selectedId === "" ? true : false}
          onPress={() => _pressHandler()}
          title={"CONTINUE"}
          textStyle={style.btnText}
          containerStyle={[
            style.btn,
            {
              backgroundColor: selectedId === "" ? "#4CA7A851" : "#4ca6a8",
            },
          ]}
        />
      </SafeAreaView>
    </View>
  );
};

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1b1e26" },
  back: {
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
    marginTop: scale.pixelSizeVertical(20),
    marginLeft: scale.pixelSizeHorizontal(10),
  },
  btnText: {
    color: "#1B1E26",
    // fontWeight: "bold",
    textAlign: "center",
    fontFamily: "KASemiBold",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#BBECED",
    backgroundColor: "#4ca6a8",
    paddingVertical: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(7),
    marginTop: scale.pixelSizeVertical(35),
    marginHorizontal: scale.pixelSizeHorizontal(16),
  },
});
