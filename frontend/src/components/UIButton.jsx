import React from "react";
import { Text } from "react-native";
import { Touchable, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../constants";
import { useNavigation } from "@react-navigation/native";

function UIButton(props) {
	const { onPress, title, isSelected, textColor } = props;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				height: 45,
				borderColor:
					isSelected == true ? colors.primary : colors.placeholderColor,
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
			<Text
				style={{
					color:
						textColor || isSelected == true
							? colors.primary
							: colors.placeholderColor,
					fontWeight: "700",
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
}

export default UIButton;
