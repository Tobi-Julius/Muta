import {
  View,
  StyleSheet,
  Pressable,
  Text as BaseText,
  ActivityIndicator,
} from "react-native";
import React, { useState, useContext } from "react";
import {
  Text,
  Button,
  TextInput,
  KeyBoardAvoidingWrapper,
} from "../../component/primary";
import { images } from "../../constants/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { scale } from "../../utils/scale";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../hooks/Context";

export const LoginWithEmail = () => {
  const { goBack, navigate } = useNavigation();

  const { params } = useRoute();

  const [values, setValues] = useState({
    email: params?.email ? params.email : "",
    password: "",
  });

  const {
    currentUser,
    updateCurrentUser,
    signIn,
    signUp,
    updateLearningInfo,
    learningInfo,
    loading,}
   = useContext(UserContext);

  const [errmsg, setErrMsg] = useState("");

  const _press = () => {
    if (values.email === "" || values.password === "") {
      setErrMsg("Fields must not be blank.");
    } else {
      signIn(values);
      setErrMsg("");
    }
  };

  const [show, setShow] = useState(false);
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
          <Text text={"Enter your password"} textStyle={style.text} />

          <TextInput
            label={"Enter email address"}
            containerStyles={{
              borderBottomColor: "#ABB3C7",
              borderBottomWidth: 1,
              marginTop: scale.pixelSizeVertical(40),
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
            value={values.email}
            onChangeText={(text) => setValues({ ...values, email: text })}
            keyboardType={"email-address"}
            textContentType={"emailAddress"}
            clearButtonMode={"while-editing"}
          />

          <TextInput
            label={"Password"}
            containerStyles={{
              borderBottomColor: "#ABB3C7",
              borderBottomWidth: 1,
              marginTop: scale.pixelSizeVertical(40),
            }}
            isPassword
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
            value={values.password}
            onChangeText={(text) => setValues({ ...values, password: text })}
            keyboardType={"password"}
            textContentType={"password"}
            passwordRules={"minlength: 8"}
            togglePassword={show}
            clearButtonMode={"while-editing"}
            onTogglePassword={() => setShow(!show)}
          />

          {errmsg && <Text text={errmsg} textStyle={style.err} />}

          <Button
            // disabled={true}
            onPress={() => _press()}
            title={
              loading ? (
                <ActivityIndicator
                  size={scale.fontPixel(24)}
                  color={"#1B1E26"}
                />
              ) : (
                "log in"
              )
            }
            textStyle={style.btnText}
            containerStyle={style.btn}
          />
          <BaseText style={style.basetext}>
            Don’t have a Muta account?
            <Text
              onPress={() => navigate("SignUp")}
              text={" Sign Up"}
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
  btnText: {
    color: "#1B1E26",
    fontFamily: "KASemiBold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  text: {
    fontFamily: "KAMedium",
    fontSize: scale.fontPixel(20),
    lineHeight: scale.fontPixel(32),
    marginTop: scale.pixelSizeVertical(25),
    color: "#ffffff",
    textAlign: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#BBECED",
    backgroundColor: "#4ca6a8",
    paddingVertical: scale.pixelSizeVertical(16),
    borderRadius: scale.fontPixel(7),
    marginVertical: scale.pixelSizeVertical(45),
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
