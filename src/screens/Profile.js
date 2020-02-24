import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
  }
  render() {
    return (
      <View>
        <Text>My Profile</Text>
      </View>
    );
  }
}
