import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	Platform,
	PermissionsAndroid,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MapView, {
	Marker,
	AnimatedRegion,
	Polyline,
	PROVIDER_GOOGLE,
	Callout,
} from "react-native-maps";
import * as Location from "expo-location";
import haversine from "haversine";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, fontSizes, icons, mockdata } from "../constants";

function MapOrders(props) {
	// Store permissions
	const [foregroundPermissions, setForegroundPermissions] = useState(null);
	const [backgroundPermissions, setBackgroundPermissions] = useState(null);

	// Show textinput to enter note
	const [showInputText, setShowInputText] = useState(false);

	// Store new notification
	const [note, setNote] = useState("");

	// Store current location
	const [currentLocation, setCurrentLocation] = useState(null);

	// Store key to get order to save note
	const [keyOfOrder, setKeyOfOrder] = useState("");

	// Mock data || array of orders
	const onOrders = mockdata.onOrdersData;

	// Fetch/GET data from api
	useEffect(() => {
		// onOrders.map((onOrder) => {
		// 	onOrder.notification = "...";
		// });
		// setShowInputText(false);
	}, []);

	{
		/*
		*** Sự kiện diễn ra khi nhấn vào marker
			+ Ẩn đi bàn phím
			+ Hiển thị chú thích

		*** Sự kiện diễn ra khi nhấn vào chú thích
			+ Cho bàn phím nổi lên
			+ Hiển thị ô text để nhập chú thích của bạn

		********************************
		QUY TRÌNH NGHIỆP VỤ KINH DOANH CÓ THỂ:
			- Bản đồ hiển thị vị trí đánh dấu các đơn hàng.
			- Nhấn vào điểm đánh dấu (đơn hàng) để hiển thị ra chú thích của đơn hàng đó.
			- Nhấn vào chú thích, sẽ hiển thị 3 buttom: 	
				+ Button 1: Nhấp để vào trạng thái ghi chú thích.
				+ Button 2: Nhấp để thoát trạng thái ghi chú thích.
				+ Button 3: Nhấp để đi đến màn hình chỉnh sửa chi tiết đơn hàng.
		*/
	}

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				showsUserLocation={true}
				// followsUserLocation={true}
				loadingEnabled={true}
				// region={getMapRegion()}
				initialRegion={{
					latitude: 21.0376565464535,
					longitude: 105.78337862624798,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				{onOrders.map((onOrder) => (
					<Marker
						// step 1
						onPress={() => {
							setNote("");
							setShowInputText(false);
						}}
						// step 2
						onCalloutPress={() => {
							setKeyOfOrder(onOrder._id);
							setShowInputText(true);
							setNote(onOrder.note);
						}}
						key={onOrder._id}
						coordinate={onOrder.coordinates}
						title={
							onOrder.note === ""
								? "Chú thích riêng..., " + onOrder.address
								: onOrder.note + ", " + onOrder.address
						}
					></Marker>
				))}
			</MapView>
			{showInputText && (
				<View style={styles.buttonContainer}>
					<TextInput
						onChangeText={(text) => setNote(text)}
						defaultValue={note}
						autoFocus={showInputText}
						style={{
							borderColor: colors.primary,
							borderWidth: 1,
							color: "black",
							fontSize: 20,
							marginLeft: 20,
							paddingLeft: 8,
							width: "60%",
						}}
						placeholder=" Nhập chú thích"
						placeholderTextColor={colors.placeholderColor}
					></TextInput>
					<TouchableOpacity // Confirm note
						onPress={() => {
							onOrders.map((onOrder) => {
								if (onOrder._id === keyOfOrder) {
									onOrder.note = note;
								}
							});
							console.log(note);
							setNote("");
							setShowInputText(false);
						}}
						style={{
							backgroundColor: colors.primary,
							width: 32,
							height: 32,
							margin: 2,
							marginLeft: 10,
						}}
					></TouchableOpacity>
					<TouchableOpacity // Cancel note
						onPress={() => {
							setNote("");
							setShowInputText(false);
						}}
						style={{
							backgroundColor: colors.primary,
							width: 32,
							height: 32,
							margin: 2,
							marginLeft: 10,
						}}
					></TouchableOpacity>
					<TouchableOpacity // Edit order details
						onPress={() => {}}
						style={{
							backgroundColor: colors.primary,
							width: 32,
							height: 32,
							margin: 2,
							marginLeft: 10,
						}}
					></TouchableOpacity>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	bubble: {
		flex: 1,
		backgroundColor: "rgba(255,255,255,0.7)",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
	},
	latlng: {
		width: 200,
		alignItems: "stretch",
	},
	button: {
		width: 80,
		paddingHorizontal: 12,
		alignItems: "center",
		marginHorizontal: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		marginVertical: 20,
		backgroundColor: "transparent",
		borderColor: colors.primary,
		// borderWidth: 1,
		width: "100%",
		marginBottom: "90%",
		// backgroundColor: "red",
	},
});

export default MapOrders;
