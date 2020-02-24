import React, { Component } from "react";
import {} from "react-native";

import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "@react-navigation/core";

import Posts from "./screens/Posts";
import Profile from "./screens/Profile";
import MriDx from "./screens/MriDx";
import Post from "./screens/Post";

const AppNavigator = createSwitchNavigator({
  Posts,
  Profile,
  MriDx,
  Post
});

const BrowerApp = createBrowserApp(AppNavigator, { history: "hash" });
export default BrowerApp;
