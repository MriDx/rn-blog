import React, { Component } from "react";
import { Text, View, BackHandler, Linking } from "react-native";

export default class MriDx extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
  }

  componentDidMount() {
    window.addEventListener("popstate", event => console.log(event));
  }

  render() {
    return (
      <View>
        <Text>MriDx</Text>
      </View>
    );
  }
}
