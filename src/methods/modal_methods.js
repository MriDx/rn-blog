import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Modal } from "react-native-web";
import { SideDrawerMenu, Seperator } from "../components";

export const QuickView = props => {
  return (
    <Modal
      isVisible={true}
      onBackdropPress={() => console.log("show")}
      backdropOpacity={0.5}
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      <View
        style={{
          width: "60%",
          height: "100%",
          backgroundColor: "#EEF8F4",
          alignSelf: "center",
          borderRadius: 20
        }}
      >
        <Text style={{ alignSelf: "center" }}>This is modal</Text>
      </View>
    </Modal>
  );
};
