import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	ScrollView,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
	MaterialIcons,
	FontAwesome,
	AntDesign,
	Entypo,
} from "@expo/vector-icons";
import { colors, mockdata, fontSizes, URL } from "../constants";
import { DriverToolBar } from "../components";
import * as SecureStore from "expo-secure-store";
import { get7Days } from "../utilies/backup";

const ItemView = (day) => {
	const navigation = useNavigation();
	return (
		<View key={day} style={{ width: "80%", borderRadius: 6 }}>
			<View
				style={{
					height: 12,
					backgroundColor: colors.header,
				}}
			></View>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
					backgroundColor: colors.textinputBackground,
				}}
			>
				<Text
					style={{
						fontSize: fontSizes.h5,
						paddingVertical: 15,
						marginLeft: 20,
					}}
				>
					{"Lộ trình " + day}
				</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("SimulateRealtimeTracking");
					}}
					style={{
						backgroundColor: colors.primary_2,
						marginHorizontal: 20,
						paddingHorizontal: 17,
						borderRadius: 5,
						justifyContent: "center",
					}}
				>
					<Text
						style={{
							fontSize: fontSizes.h5,
							paddingVertical: 10,
							textDecorationLine: "underline",
							textDecorationColor: "black",
							textDecorationStyle: { padding: 4 },
						}}
					>
						Chi tiết
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

function ShowListRoutes(props) {
	const navigation = useNavigation();
	const [list7Days, setList7Days] = useState(get7Days);
	return (
		<SafeAreaView
			style={{
				flex: 100,
				flexDirection: "column",
				backgroundColor: colors.header,
			}}
		>
			<View
				style={{
					flex: 16,
					flexDirection: "column",
					backgroundColor: colors.primary_1,
				}}
			>
				<View style={{ height: 40, width: "100%" }}></View>
				<View
					style={{
						height: 70,
						width: "100%",
						backgroundColor: colors.primary_1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{ fontSize: 24, fontWeight: "bold", color: colors.primary }}
					>
						Lộ trình giao hàng
					</Text>
				</View>
				<View
					style={{
						alignItems: "flex-end",
						justifyContent: "space-around",
						flexDirection: "row",
						borderButtomWidth: 1,
						borderButtomColor: colors.primary,
					}}
				>
					<Text>Bạn có thể xem lại lộ trình của mình trong 7 ngày qua</Text>
				</View>
			</View>
			<View
				style={{
					flex: 84,
					backgroundColor: colors.header,
				}}
			>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
						alignItems: "center",
					}}
				>
					{list7Days.map(ItemView)}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default ShowListRoutes;
