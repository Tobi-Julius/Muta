import { StyleSheet } from "react-native";
import React from "react";
import { scale } from "../../utils/scale";
import { FloatingLabelInput } from "react-native-floating-label-input";

export const TextInput = ({
  value,
  label,
  isPassword,
  togglePassword,
  onChangeText,
  customShowPasswordComponent,
  customHidePasswordComponent,
  inputStyles,
  containerStyles,
  showPasswordContainerStyles,
  showPasswordImageStyles,
  customHidePasswordImage,
  customShowPasswordImage,
  labelStyles,
  others,
  staticLabel,
  keyboardType,
  textContentType,
  passwordRules,
  clearButtonMode,
  onTogglePassword,
}) => {
  return (
    <FloatingLabelInput
      value={value}
      label={label}
      isPassword={isPassword}
      togglePassword={togglePassword}
      onChangeText={onChangeText}
      customShowPasswordComponent={customShowPasswordComponent}
      customHidePasswordComponent={customHidePasswordComponent}
      inputStyles={inputStyles}
      containerStyles={containerStyles}
      showPasswordContainerStyles={showPasswordContainerStyles}
      showPasswordImageStyles={showPasswordImageStyles}
      customHidePasswordImage={customHidePasswordImage}
      customShowPasswordImage={customShowPasswordImage}
      {...others}
      labelStyles={labelStyles}
      staticLabel={staticLabel}
      keyboardType={keyboardType}
      textContentType={textContentType}
      passwordRules={passwordRules}
      clearButtonMode={clearButtonMode}
      onTogglePassword={onTogglePassword}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    height: scale.heightPixel(47),
    borderRadius: scale.fontPixel(5),
    paddingVertical: scale.pixelSizeVertical(4),
    borderWidth: scale.widthPixel(1),
    fontFamily: "Outfit_400Regular",
    fontSize: scale.fontPixel(13),
    paddingHorizontal: scale.pixelSizeHorizontal(16),
    paddingVertical: scale.pixelSizeVertical(14),
    borderColor: "#F0F0F0",
  },
});
