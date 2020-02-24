import React, { Component } from "react";
import { View, Text, Linking } from "react-native";
import { _getPost } from "../methods";

export default class Post extends Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.params);
    this.state = {
      postid: this.props.navigation.state.params.id,
      post: null,
      oldUrl: ""
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", event =>
      this.setState({ oldUrl: event.oldURL })
    );
    window.addEventListener("popstate", () =>
      Linking.openURL(this.state.oldUrl)
    );
    _getPost({ id: this.state.postid })
      .then(response => response.json())
      .then(res =>
        res.status === "success"
          ? this.setState({ post: res.post, loading: false })
          : null
      )
      .catch(error => console.log(error));
  }
  render() {
    return (
      <View>
        <Text> {JSON.stringify(this.state.post)} </Text>
      </View>
    );
  }
}
