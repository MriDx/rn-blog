import React from "react";

import { View } from "react-native-web";
import { TopSection } from "./top_section";
import { SideDrawerMenu } from "./side_drawer";

export const Seperator = props => {
  return <View style={{ width: props.width, height: props.height }} />;
};
export * from "./top_section";
export * from "./side_drawer";
export * from "./PostView";
export * from "./DropDown";
