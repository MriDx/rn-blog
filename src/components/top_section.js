import React from "react";
import { View, Dimensions, Text, Image, TouchableOpacity } from "react-native";

export const TopSection = props => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: "55%",
          height: Dimensions.get("window").width > 720 ? 380 : 200,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            width: "75%",
            alignSelf: "flex-end",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "#44A9C9",
              marginTop: 100,
              fontFamily: "BlinkMacSystemFont"
            }}
          >
            struggling to build a web or mobile app ?
          </Text>
          <Text
            style={{
              fontSize: 30,
              color: "#44A9C9",
              marginTop: 10,
              fontWeight: "bold",
              textAlign: "left",
              fontFamily: "BlinkMacSystemFont"
            }}
          >
            Unveil learning opportunities in our harbour right now!
          </Text>
          <View
            style={{
              width: "75%",
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "#44A9C9",
                  width: 250,
                  height: 56,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 15
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: "BlinkMacSystemFont",
                    color: "#fff",
                    fontWeight: "600"
                  }}
                >
                  Explore Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          width: Dimensions.get("window").width > 720 ? "45%" : "55%",
          flexDirection: "column"
        }}
      >
        <View
          style={{
            width: "100%",
            height: Dimensions.get("window").width > 720 ? 380 : 200,
            alignSelf: "flex-end",
            backgroundColor: "#EEF8F4",
            borderTopStartRadius:
              Dimensions.get("window").width > 720 ? 180 : 150,
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../images/blogging1.svg")}
            style={{
              width: Dimensions.get("window").width > 720 ? 350 : 150,
              height: Dimensions.get("window").width > 720 ? 200 : 100,
              alignSelf: "center"
            }}
          />
        </View>
      </View>
    </View>
  );
};
