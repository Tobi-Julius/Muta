import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text as BaseText,
} from "react-native";
import React, { useState } from "react";
import { scale } from "../../utils/scale";
import { Image } from "expo-image";
import { images } from "../../constants";
import {
  Button,
  Text,
  TextInput,
  KeyBoardAvoidingWrapper,
} from "../../component/primary";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
  const { goBack, navigate } = useNavigation();
  const [email, setEmail] = useState("");

  const [errmsg, setErrMsg] = useState("");

  const _press = () => {
    if (/^\S+@\S+\.\S+$/.test(email) === false) {
      setErrMsg("Email provided not valid");
    } else {
      setErrMsg("");
      navigate("SignUpWithEmail", { email });
    }
  };

  return (
    <View style={style.container}>
      <KeyBoardAvoidingWrapper>
        <SafeAreaView>
          <Pressable onPress={() => goBack()}>
            <Image
              source={images.back}
              style={style.back}
              cachePolicy={"memory-disk"}
              contentFit="cover"
            />
          </Pressable>
          <Text
            text={"Sign up and start learning \n right away!"}
            textStyle={style.text}
          />
          <View style={style.otherSignUpBtn}>
            <TouchableOpacity
              style={style.socialButton}
              activeOpacity={0.9}
              onPress={() => {}}
            >
              <Image
                source={images.Google}
                style={style.socialBtn}
                cachePolicy={"memory-disk"}
                contentFit="cover"
              />
              <Text textStyle={style.socialText} text={"sign up with google"} />
              <View />
            </TouchableOpacity>
            <TouchableOpacity
              style={style.socialButton}
              activeOpacity={0.9}
              onPress={() => {}}
            >
              <Image
                source={images.Facebook}
                style={style.socialBtn}
                cachePolicy={"memory-disk"}
                contentFit="cover"
              />
              <Text
                textStyle={style.socialText}
                text={"sign up with facebook"}
              />
              <View />
            </TouchableOpacity>
          </View>
          <View style={style.orContainer}>
            <View style={style.line} />
            <Text textStyle={style.or} text={"OR"} />
            <View style={style.line} />
          </View>

          <TextInput
            label={"Enter email address"}
            containerStyles={{
              borderBottomColor: "#ABB3C7",
              borderBottomWidth: 1,
              marginTop: scale.pixelSizeVertical(30),
            }}
            labelStyles={{
              fontSize: scale.fontPixel(16),
              lineHeight: scale.fontPixel(24),
              color: "#ABB3C7",
              paddingBottom: scale.pixelSizeVertical(5),
              fontFamily: "KAMedium",
            }}
            customLabelStyles={{
              colorFocused: "#BBECED",
              fontSizeFocused: 12,
            }}
            inputStyles={{
              color: "#fff",
              fontFamily: "KAMedium",
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType={"email-address"}
            textContentType={"emailAddress"}
            clearButtonMode={"while-editing"}
          />
          {errmsg && <Text text={errmsg} textStyle={style.err} />}
          <Button
            // disabled={true}
            onPress={() => _press()}
            title={"sign up with email"}
            textStyle={style.btnText}
            containerStyle={style.btn}
          />
          <BaseText style={style.basetext}>
            Already a Muta user?
            <Text
              onPress={() => navigate("Login")}
              text={" Log In"}
              textStyle={style.login}
            />
          </BaseText>
        </SafeAreaView>
      </KeyBoardAvoidingWrapper>
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
    fontSize: scale.fontPixel(24),
    lineHeight: scale.fontPixel(40),
    color: "#ffffff",
    textAlign: "center",
    marginTop: scale.pixelSizeVertical(20),
    fontFamily: "KAMedium",
  },
  otherSignUpBtn: {
    marginTop: scale.pixelSizeVertical(20),
  },
  socialButton: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: scale.pixelSizeVertical(12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale.pixelSizeHorizontal(20),
    marginTop: scale.pixelSizeVertical(18),
    borderRadius: scale.fontPixel(8),
  },
  socialBtn: {
    height: scale.heightPixel(30),
    width: scale.widthPixel(30),
  },
  socialText: {
    fontFamily: "KASemiBold",
    fontSize: scale.fontPixel(14),
    lineHeight: scale.fontPixel(24),
    textTransform: "uppercase",
  },
  orContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale.pixelSizeVertical(60),
  },
  or: {
    color: "#ABB3C7",
    fontSize: scale.fontPixel(14),
    lineHeight: scale.fontPixel(16),
    fontFamily: "KALight",
  },
  line: {
    borderBottomColor: "#848A99",
    borderBottomWidth: 1,
    width: "42%",
  },
  btnText: {
    color: "#1B1E26",
    fontFamily: "KASemiBold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#BBECED",
    backgroundColor: "#4ca6a8",
    paddingVertical: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(7),
    marginVertical: scale.pixelSizeVertical(35),
  },
  basetext: {
    fontSize: scale.fontPixel(13),
    lineHeight: scale.fontPixel(20),
    color: "#C6CFE5",
    textAlign: "center",
    fontFamily: "KALight",
  },
  login: {
    textDecorationLine: "underline",
    color: "#4ca6a8",
  },
  err: {
    fontSize: scale.fontPixel(15),
    lineHeight: scale.fontPixel(24),
    color: "#EDA4A4",
    fontFamily: "KALight",
  },
});
