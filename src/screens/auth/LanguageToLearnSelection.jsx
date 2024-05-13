import { StyleSheet, View, Pressable, FlatList } from "react-native";
import React, { useState, useContext } from "react";
import { images } from "../../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { scale } from "../../utils/scale";
import { Image } from "expo-image";
import { Button, Text } from "../../component/primary";
import { LanguageToLearnSelection as Child } from "../../component/children";
import { languagetolearnData } from "../../constants/staticData";
import { UserContext } from "../../hooks/Context";

export const LanguageToLearnSelection = () => {
  const { goBack, navigate } = useNavigation();
  const [lang, setLang] = useState("");

  const [
    currentUser,
    updateCurrentUser,
    signIn,
    signUp,
    updateLearningInfo,
    learningInfo,
  ] = useContext(UserContext);

  const _pressHandler = () => {
    updateLearningInfo({ ...learningInfo, langToLearn: lang.text });
    navigate("Proficiency");
  };

  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <Pressable onPress={() => goBack()}>
                <Image
                  source={images.back}
                  style={style.back}
                  cachePolicy={"memory-disk"}
                  contentFit="cover"
                />
              </Pressable>
              <Text text={"I want to learn..."} textStyle={style.text} />
            </>
          )}
          showsVerticalScrollIndicator={false}
          key={({ item, index }) => item.id}
          data={languagetolearnData}
          renderItem={({ item, index }) => (
            <Child lang={lang} setLang={setLang} item={item} index={index} />
          )}
          contentContainerStyle={{
            marginTop: scale.pixelSizeVertical(20),
            gap: 25,
            justifyContent: "space-between",
          }}
          columnWrapperStyle={{ gap: scale.width * 0.09 }}
          numColumns={2}
          ListFooterComponent={() => (
            <>
              <Button
                disabled={lang === "" ? true : false}
                onPress={() => _pressHandler()}
                title={"CONTINUE"}
                textStyle={style.btnText}
                containerStyle={[
                  style.btn,
                  {
                    backgroundColor: lang === "" ? "#4CA7A851" : "#4ca6a8",
                  },
                ]}
              />
            </>
          )}
        />
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
  back: {
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
    marginTop: scale.pixelSizeVertical(20),
  },
  text: {
    fontFamily: "KAMedium",
    fontSize: scale.fontPixel(20),
    lineHeight: scale.fontPixel(32),
    marginTop: scale.pixelSizeVertical(25),
    color: "#ffffff",
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
    marginVertical: scale.pixelSizeVertical(35),
  },
});
