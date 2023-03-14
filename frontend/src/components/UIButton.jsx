import React from "react";
import { Text } from "react-native";
import { Touchable, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../constants";

function UIButton(props) {
	const { onPress, title, isSelected } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				height: 45,
				borderColor: "white",
				borderWidth: 1,
				borderRadius: 5,
				marginHorizontal: 18,
				marginVertical: 10,
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: isSelected == true ? "white" : null,
			}}
		>
			{isSelected == true && (
				<Icon
					name={"check-circle"}
					size={20}
					style={{
						color: "green",
						position: "absolute",
						top: 10,
						left: 10,
					}}
				/>
			)}
			<Text style={{ color: isSelected == true ? colors.primary : "white" }}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default UIButton;
