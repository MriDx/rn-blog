import React from "react";
import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width > 720 ? "90%" : "100%",
    alignSelf: "center",
    backgroundColor: "#F7FAFC"
  },
  textInputStyle: {
    height: 40,
    width: "75%",
    borderRadius: 4,
    backgroundColor: "#fff",
    margin: 10,
    alignSelf: "center",
    paddingStart: 5,
    paddingEnd: 5
  }
});
