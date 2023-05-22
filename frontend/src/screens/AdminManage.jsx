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
import {
	MaterialIcons,
	FontAwesome,
	AntDesign,
	Entypo,
} from "@expo/vector-icons";
import { colors, mockdata, fontSizes, URL } from "../constants";
import { DriverToolBar } from "../components";
import * as SecureStore from "expo-secure-store";
import { get7Days, getListDrivers } from "../utilies/backup";

const ItemView = (driverInfo) => {
	return (
		<View key={driverInfo.email} style={{ width: "100%", borderRadius: 6 }}>
			<View
				style={{
					height: 12,
					backgroundColor: colors.header,
				}}
			></View>
			<View
				style={{
					flexDirection: "row",
					backgroundColor: colors.textinputBackground,
				}}
			>
				<TouchableOpacity>
					<View style={{ marginLeft: "28%" }}>
						<Text
							style={{
								fontSize: fontSizes.h5,
								paddingVertical: 5,
							}}
						>
							{"Người giao hàng: " + driverInfo.name}
						</Text>
						<Text
							style={{
								fontSize: fontSizes.h5,
								paddingVertical: 8,
							}}
						>
							{"Email: " + driverInfo.email}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

function AdminMainScreen(props) {
	const [listDrivers, setListDrives] = useState(getListDrivers);
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
						Quản lý lộ trình giao hàng
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
					<Text>Quản lý lộ trình theo danh cách các nhân viên</Text>
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
					{listDrivers.map(ItemView)}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

export default AdminMainScreen;
