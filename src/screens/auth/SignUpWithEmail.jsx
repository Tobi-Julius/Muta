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

export const SignUpWithEmail = () => {
  const { goBack, navigate } = useNavigation();

  const { params } = useRoute();

  const [values, setValues] = useState({
    email: params?.email ? params.email : "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const [errmsg, setErrMsg] = useState("");

  const _press = () => {
    if (/^\S+@\S+\.\S+$/.test(values.email) === false) {
      setErrMsg("Email provided not valid");
    } else if (values.firstName === "" || values.lastName === "") {
      setErrMsg("Provide first and last name.");
    } else if (values.password.length < 8) {
      setErrMsg("Use 8 or more character");
    } else {
      signUp(values);
      setErrMsg("");
    }
  };
  const [
    currentUser,
    updateCurrentUser,
    signIn,
    signUp,
    updateLearningInfo,
    learningInfo,
    loading,
  ] = useContext(UserContext);

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
          <Text text={"Enter name and password"} textStyle={style.text} />

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
              fontFamily: "KAMedium",
              color: "#fff",
            }}
            value={values.email}
            onChangeText={(text) => setValues({ ...values, email: text })}
            keyboardType={"email-address"}
            textContentType={"emailAddress"}
            clearButtonMode={"while-editing"}
          />

          <TextInput
            label={"First name"}
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
            value={values.firstName}
            onChangeText={(text) => setValues({ ...values, firstName: text })}
            // keyboardType={"email-address"}
            // textContentType={"emailAddress"}
            clearButtonMode={"while-editing"}
          />

          <TextInput
            label={"Last name"}
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
            value={values.lastName}
            onChangeText={(text) => setValues({ ...values, lastName: text })}
            // keyboardType={"email-address"}
            // textContentType={"emailAddress"}
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
                "sign up"
              )
            }
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
  btnText: {
    color: "#1B1E26",
    fontWeight: "bold",
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
    marginVertical: scale.pixelSizeVertical(35),
    fontFamily: "KASemiBold",
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
    fontWeight: 600,
    lineHeight: scale.fontPixel(24),
    color: "#EDA4A4",
    fontFamily: "KALight",
  },
});
