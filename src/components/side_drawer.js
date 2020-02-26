import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
  TouchableOpacity,
  FlatList
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
        <View style={{ marginStart: 30, marginTop: 20 }}>
          <View
            style={{
              backgroundColor: "#49a9c9",
              borderRadius: 45,
              height: 90,
              width: 90,
              justifyContent: "center",
              shadowOpacity: 0.4,
              shadowRadius: 5,
              shadowColor: "#000",
              shadowOffset: { width: 3, height: 3 },
              alignSelf: "center"
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#fff",
                fontWeight: "400",
                alignSelf: "center"
              }}
            >
              Blog
            </Text>
          </View>
        </View>
        {props.user != null ? (
          <View>
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
            <TouchableOpacity style={{ marginTop: 20, marginStart: 30 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="file-document" size={30} color="#44A9C9" />
                <Text
                  style={{ marginStart: 10, fontSize: 16, fontWeight: "600" }}
                >
                  Create Post
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, marginStart: 30 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="account" size={30} color="#44A9C9" />
                <Text
                  style={{ marginStart: 10, fontSize: 16, fontWeight: "600" }}
                >
                  My Account
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ marginTop: 30, marginStart: 40, marginEnd: 40 }}>
            <Text style={{ fontSize: 16, textAlign: "center" }}>
              In this site, you can actually create an account or you can logged
              in to existing one . A dedicated account will pleased to you.
              Besides that, you can post articles, comment on them, or reply on
              any comment. and if you feels like you don't want to be here, No
              issue. Go ahead and click Logout. But , try atleast once
            </Text>
            <TouchableOpacity onPress={() => props.onSignin()}>
              <View
                style={{
                  width: 150,
                  height: 46,
                  justifyContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                  backgroundColor: "#44a9c9",
                  marginTop: 10,
                  borderRadius: 10,
                  flexDirection: "row"
                }}
              >
                <Icon
                  name="account"
                  size={24}
                  color="#fff"
                  style={{ marginEnd: 10 }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    alignSelf: "center",
                    color: "#fff"
                  }}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
            <View></View>
          </View>
        )}

        <Seperator height={30} />

        <View style={{ marginStart: 30 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="animation" color="#44a9c9" size={30} />
              <Text
                style={{ fontWeight: "600", fontSize: 16, marginStart: 10 }}
              >
                Categories
              </Text>
            </View>
          </TouchableOpacity>
          <FlatList
            style={{ marginStart: 50, marginTop: 10 }}
            data={props.categories.slice(0, 5)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => props.onCategory({ id: item.id })}
              >
                <View>
                  {console.log(item)}
                  <Text
                    style={{ fontSize: 16, fontWeight: "400", marginTop: 5 }}
                  >
                    {" "}
                    {item.name}{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </Modal>
  );
};
