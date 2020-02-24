import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking
} from "react-native";
import Modal from "modal-enhanced-react-native-web";
import { Icon } from "../icons";
import { Seperator } from ".";

export const SideDrawerMenu = props => {
  return (
    <Modal
      isVisible={props.modalVisible}
      onBackdropPress={() => props.closeMenu()}
      backdropOpacity={0.3}
      style={{
        margin: 0,
        width: Dimensions.get("window").width > 720 ? "40%" : "85%",
        borderRadius: 10
      }}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#EEF8F4" }}
      >
        <Seperator height={56} width={0} />
        {props.user != null ? (
          <TouchableWithoutFeedback onPress={() => Linking.openURL("/Profile")}>
            <View style={{ padding: 20, flexDirection: "row" }}>
              <Icon
                name="account"
                size={75}
                color="#44A9C9"
                style={{ alignSelf: "flex-start" }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 18,
                  fontWeight: "700",
                  marginStart: 20,
                  color: "#44A9C9",
                  textTransform: "capitalize"
                }}
              >
                {props.user.name}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ) : null}
      </View>
    </Modal>
  );
};
