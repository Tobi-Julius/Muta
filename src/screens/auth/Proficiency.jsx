import { View, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "../../component/primary";
import { scale } from "../../utils/scale";
import { Image } from "expo-image";
import { images } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { proficiencydata } from "../../constants/staticData";
import { Proficiency as Child } from "../../component/children";
import { UserContext } from "../../hooks/Context";

export const Proficiency = () => {
  const { goBack, navigate } = useNavigation();
  const {
    currentUser,
    updateCurrentUser,
    signIn,
    signUp,
    updateLearningInfo,
    learningInfo,}
  = useContext(UserContext);
  const [proficiency, updateProficiency] = useState("");

  const _pressHandler = () => {
    updateLearningInfo({ ...learningInfo, proficiency: proficiency.text });

    navigate("SignUp");
  };
  return (
    <View style={style.container}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={() => (
            <View>
              <Pressable onPress={() => goBack()}>
                <Image
                  source={images.back}
                  style={style.back}
                  cachePolicy={"memory-disk"}
                  contentFit="cover"
                />
              </Pressable>
              <Text
                text={`How would you rate your proficiency in ${learningInfo.langToLearn}?`}
                textStyle={style.text}
              />
            </View>
          )}
          data={proficiencydata}
          contentContainerStyle={{
            marginVertical: scale.pixelSizeVertical(20),
          }}
          renderItem={({ item, index }) => (
            <Child
              proficiency={proficiency}
              updateProficiency={updateProficiency}
              item={item}
              index={index}
            />
          )}
          ListFooterComponent={() => (
            <View>
              <Button
                disabled={proficiency === "" ? true : false}
                onPress={() => _pressHandler()}
                title={"CONTINUE"}
                textStyle={style.btnText}
                containerStyle={[
                  style.btn,
                  {
                    backgroundColor:
                      proficiency === "" ? "#4CA7A851" : "#4ca6a8",
                  },
                ]}
              />
            </View>
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
    paddingHorizontal: scale.pixelSizeHorizontal(10),
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
    fontF: "KASemiBold",
    textAlign: "center",
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
