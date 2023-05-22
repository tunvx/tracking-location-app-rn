import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Touchable, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors, icons } from "../constants";

function DriverToolBar(props) {
	const navigation = useNavigation();
	return (
		<View
			style={{
				width: "100%",
				flex: 6,
				backgroundColor: colors.snow,
				flexDirection: "row",
				justifyContent: "center",
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("ShowListRoutes");
				}}
				style={{
					height: 50,
					width: 50,
					marginHorizontal: 50,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Image
					source={icons.tracking}
					style={{
						width: 32,
						height: 32,
						backgroundColor: colors.primary,
						borderRadius: 3,
						color: colors.primary,
					}}
				/>
				{/* <MaterialIcons
					name="follow-the-signs"
					size={36}
					color={colors.primary}
				/> */}
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate("ImportOnOrders");
				}}
				style={{
					height: 50,
					width: 50,
					marginHorizontal: 50,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<MaterialIcons name="home-work" size={37} color={colors.primary} />
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					const { onOrders } = props;
					navigation.navigate("MapOnOrders", { onOrders: onOrders });
				}}
				style={{
					height: 50,
					width: 50,
					marginHorizontal: 50,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<MaterialCommunityIcons
					name="truck-delivery"
					size={37}
					color={colors.primary}
				/>
			</TouchableOpacity>
		</View>
	);
}

export default DriverToolBar;
