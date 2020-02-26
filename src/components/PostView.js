import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';

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