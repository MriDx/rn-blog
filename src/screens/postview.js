import React, { Component } from "react";
import { View, Text, Platform, TouchableWithoutFeedback } from "react-native";

class PostViewUI extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Post view mounted");
  }
  render() {
    return (
      <View>
        <Text> {this.props} </Text>
      </View>
    );
  }
}

/* let hotWrapper = () => () => PostViewUI;
if (Platform.OS === "web") {
  const { hot } = require("react-hot-loader");
  hotWrapper = hot;
} */
//export default hotWrapper(module)(PostViewUI);

export const PostUI = props => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={() => props.onBack()}>
        <View>
          <Text>Go back</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={{ fontSize: 20, alignSelf: "center" }}>
        {" "}
        {props.post.title}{" "}
      </Text>
      <Text style={{ fontSize: 16 }}> {props.post.content} </Text>
    </View>
  );
};
