import React from "react";
import { View, Text } from "react-native";
import Modal from "modal-enhanced-react-native-web";

export const DropDown = props => {
  return (
    <Modal
      isVisible={true}
      onBackdropPress={() =>
        /* props.closeEditor() */ console.log("hide modal")
      }
      style={{
        margin: 0,
        width: "100%",
        borderRadius: 10
      }}
      backdropOpacity={0.3}
    >
      <View>
        <Text>Show dropdown</Text>
      </View>
    </Modal>
  );
};
