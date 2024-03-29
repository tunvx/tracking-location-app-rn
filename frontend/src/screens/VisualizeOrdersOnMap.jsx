import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	Image,
	Alert,
	TouchableOpacity,
	Platform,
	PermissionsAndroid,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShortInfoOrder from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { FocusScrollView } from "react-native-focus-scroll";
import MapView, {
	Marker,
	AnimatedRegion,
	Polyline,
	PROVIDER_GOOGLE,
	Callout,
} from "react-native-maps";
import * as Location from "expo-location";
import * as SecureStore from "expo-secure-store";
import haversine from "haversine";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	AntDesign,
} from "@expo/vector-icons";

import { colors, fontSizes, icons, images, mockdata, URL } from "../constants";
import { DriverToolBar } from "../components";
import { getShortAddress } from "../utilies/backup";

function VisualizeOrdersOnMap(props) {
	const navigation = useNavigation();

	const screenWidth = Dimensions.get("window").width;
	const screenHeigh = Dimensions.get("window").height;

	const platform = Platform.OS.toString();

	// Store permissions
	const [foregroundPermissions, setForegroundPermissions] = useState(null);
	const [backgroundPermissions, setBackgroundPermissions] = useState(null);

	// Show textinput to enter note
	const [showInputText, setShowInputText] = useState(false);

	// Store new notification
	const [note, setNote] = useState("");

	// Store current location
	const [currentLocation, setCurrentLocation] = useState(null);

	// Store order in hand to save note
	const [orderInHand, setOrderInHand] = useState("");

	// Mock data || array of orders
	const [ordersAreBeingDelivered, setOrdersAreBeingDelivered] = useState(
		props?.route?.params?.onOrders || []
	);

	// console.log(ordersAreBeingDelivered);

	const [followingButton, setFollwingButton] = useState({
		following: true,
		name: "gps-fixed",
	});

	const [dataSourceCords, setDataSourceCords] = useState([]);
	const [ref, setRef] = useState(null);

	const scrollHandler = (scrollToIndex) => {
		// console.log(dataSourceCords.length, scrollToIndex);
		if (scrollToIndex < dataSourceCords.length) {
			ref.scrollTo({
				x: dataSourceCords[scrollToIndex],
				y: 0,
				animated: true,
			});
		} else {
			alert("Out of Max Index");
		}
	};

	const ItemView = (order) => {
		return (
			<View
				key={ordersAreBeingDelivered.indexOf(order)}
				style={{
					backgroundColor: "white",
					width: screenWidth - 20,
					height: "100%",
					borderRadius: 10,
					flexDirection: "row",
					justifyContent: "center",
					marginHorizontal: 5,
				}}
				onLayout={(event) => {
					const layout = event.nativeEvent.layout;
					dataSourceCords[ordersAreBeingDelivered.indexOf(order)] = layout.x;
					setDataSourceCords(dataSourceCords);
					// console.log(layout.x);
					// console.log(layout.y);
				}}
			>
				<View
					style={{
						width: "38%",
						backgroundColor: "transparent",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image
						source={images.address_1}
						style={{
							height: "96%",
							width: "96%",
						}}
						resizeMode={"cover"}
					/>
				</View>
				<View
					style={{
						width: "58%",
						backgroundColor: "transparent",
						flexDirection: "column",
					}}
				>
					<View style={{ flexDirection: "row", height: 65 }}>
						<View style={{ backgroundColor: "transparent", width: "70%" }}>
							<Text
								style={{
									fontSize: fontSizes.h6,
									fontWeight: "450",
									marginHorizontal: 4,
									paddingVertical: 2,
								}}
							>
								{"K/H: " + order.customerId.name}
							</Text>
							<Text
								style={{
									fontSize: fontSizes.h6,
									marginHorizontal: 4,
									paddingVertical: 2,
									fontWeight: "450",
								}}
							>
								{order.productName}
							</Text>
							<Text
								style={{
									fontSize: fontSizes.h6,
									marginHorizontal: 4,
									paddingVertical: 2,
								}}
							>
								{"....................................."}
							</Text>
						</View>
						<View style={{ backgroundColor: "transparent", width: "30%" }}>
							<Image
								source={images.order}
								style={{
									marginTop: 3,
									height: "90%",
									width: "96%",
								}}
								resizeMode={"cover"}
							></Image>
						</View>
					</View>
					<Text
						style={{
							fontSize: fontSizes.h3,
							color: colors.primary_red,
							fontWeight: "600",
							marginLeft: 6,
							marginTop: 5,
							marginBottom: 6,
						}}
					>
						{"Thành tiền: " +
							order.price.toLocaleString("vi", {
								style: "currency",
								currency: "VND",
							})}
					</Text>

					<Text
						style={{
							fontSize: fontSizes.h6,
							fontWeight: "500",
							color: colors.locate,
							marginLeft: 6,
							paddingVertical: 1,
							marginTop: 4,
						}}
					>
						{"Đc: " + order.address}
					</Text>
				</View>
			</View>
		);
	};

	if (ordersAreBeingDelivered === undefined) {
		return <>Still loading...</>;
	}

	return (
		<SafeAreaView style={{ flex: 100 }}>
			<View style={styles.container}>
				<MapView
					style={styles.map}
					showsUserLocation={true}
					followsUserLocation={followingButton.following}
					loadingEnabled={true}
					// region={getMapRegion()}
					initialRegion={{
						latitude: 21.0376565464535,
						longitude: 105.78337862624798,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}}
				>
					{ordersAreBeingDelivered.map((order) => (
						<Marker
							// step 1 press to marker button
							onPress={() => {
								setNote("");
								setShowInputText(false);
								scrollHandler(ordersAreBeingDelivered.indexOf(order));
							}}
							// step 2 press to title of marker button
							onCalloutPress={() => {
								setOrderInHand(order);
								setShowInputText(true);
								setNote(order.note);
							}}
							key={ordersAreBeingDelivered.indexOf(order)}
							coordinate={order.coords}
							title={
								// order.note === ""
								// 	? "Chú thích riêng..., " + order.address
								// 	: order.note + ", " + order.address
								order.note === "" ? getShortAddress(order.address) : order.note
							}
						>
							{order.delivered === true ? (
								<MaterialCommunityIcons
									name="map-marker-check-outline"
									size={33}
									color="green"
								/>
							) : (
								<MaterialCommunityIcons
									name="map-marker-account-outline"
									size={33}
									color={colors.primary} // "red"
								/>
							)}
						</Marker>
					))}
				</MapView>
				<View
					style={{
						marginTop: platform === "android" ? 30 : 6,
						flexDirection: "column",
						alignItems: "flex-end",
						justifyContent: "center",
						backgroundColor: "transparent",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							if (followingButton.following === true) {
								setFollwingButton({
									following: false,
									name: "gps-not-fixed",
								});
							} else {
								setFollwingButton({
									following: true,
									name: "gps-fixed",
								});
							}
						}}
						style={{
							width: 45,
							height: 45,
							backgroundColor: "transparent",
							alignItems: "center",
							justifyContent: "center",
							marginRight: 2,
							marginBottom: 5,
						}}
					>
						<MaterialIcons
							name={followingButton.name}
							size={34}
							color={colors.primary}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							setNote("");
							setShowInputText(false);
						}}
						style={{
							width: 45,
							height: 45,
							backgroundColor: "transparent",
							alignItems: "center",
							justifyContent: "center",
							marginRight: 2,
						}}
					>
						<MaterialIcons name="cancel" size={34} color={colors.primary} />
					</TouchableOpacity>
				</View>
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
								paddingLeft: 6,
								width: "60%",
							}}
							placeholder=" Nhập chú thích"
							placeholderTextColor={colors.placeholderColor}
						></TextInput>
						<TouchableOpacity // Button used to confirm save notes
							onPress={async () => {
								setOrdersAreBeingDelivered((ordersAreBeingDelivered) =>
									ordersAreBeingDelivered
										.filter((order) => order._id !== orderInHand._id)
										.concat([{ ...orderInHand, note: note }])
								);
								// console.log(note);
								await SecureStore.getItemAsync("accessToken").then(
									(accessToken) => {
										fetch(URL.ORDER_UPDATE_BY_ID + orderInHand._id, {
											method: "PATCH",
											headers: {
												Accept: "application/json",
												"Content-Type": "application/json",
												Authorization: "Bearer " + accessToken,
											},
											body: JSON.stringify({
												note: note,
											}),
										}).then((response) => {
											if (response.ok) {
												response.json().then((data) => {
													// console.log("Return response::");
													// console.log(data);
												});
											}
										});
									}
								);
								setNote("");
								setShowInputText(false);
							}}
							style={{
								backgroundColor: "transparent",
								width: 32,
								height: 32,
								margin: 2,
								marginLeft: 10,
							}}
						>
							<MaterialIcons
								name="check-circle"
								size={35}
								color={colors.primary}
							/>
						</TouchableOpacity>
						<TouchableOpacity // Button used to edit order details
							onPress={() => {
								console.log(orderInHand);
								navigation.navigate("EditOrderDetails", { order: orderInHand });
							}}
							style={{
								backgroundColor: "transparent",
								width: 32,
								height: 32,
								margin: 2,
								marginLeft: 10,
							}}
						>
							<MaterialCommunityIcons
								name="note-edit"
								size={36}
								color={colors.primary}
							/>
						</TouchableOpacity>

						<TouchableOpacity // Button used to confirm the order has been received
							onPress={() => {
								if (orderInHand.delivered == true) {
									Alert.alert("Đơn hàng đã được giao thành công");
									setNote("");
									setShowInputText(false);
									return;
								}
								setNote("");
								setShowInputText(false);
								Alert.alert(
									"Xác nhận giao hàng thành công ",
									"", // <- this part is optional, you can pass an empty string
									[
										{
											text: "OK",
											onPress: () => {
												// console.log("OK Pressed");
												setOrdersAreBeingDelivered((ordersAreBeingDelivered) =>
													ordersAreBeingDelivered
														.filter((order) => order._id !== orderInHand._id)
														.concat([
															{
																...orderInHand,
																delivered: true,
																receivingTime: "8h 37' sáng",
															},
														])
												);
											},
										},
									],
									{ cancelable: false }
								);
							}}
							style={{
								backgroundColor: "transparent",
								width: 32,
								height: 32,
								margin: 2,
								marginLeft: 10,
							}}
						>
							<MaterialCommunityIcons
								name="truck-delivery"
								size={36}
								color={colors.primary}
							/>
						</TouchableOpacity>
					</View>
				)}
				<ScrollView
					style={styles.viewInfoContainer}
					horizontal={true}
					contentContainerStyle={{ justifyContent: "center" }}
					threshold={100}
					// disableIntervalMomentum={true}
					ref={(ref) => {
						setRef(ref);
					}}
				>
					{ordersAreBeingDelivered.map(ItemView)}
				</ScrollView>
			</View>
			<DriverToolBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 94,
		flexDirection: "column",
		alignItems: "flex-end",
		justifyContent: "flex-start",
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
		backgroundColor: colors.snow_1,
		borderColor: colors.primary,
		paddingVertical: 6,
		width: "100%",
		marginTop: "81%",
	},
	viewInfoContainer: {
		marginVertical: 15,
		backgroundColor: "transparent",
		borderColor: colors.primary,
		paddingVertical: 3,
		paddingHorizontal: 8,
		width: "100%",
		height: "15%",
		marginTop: "120%",
	},
});

export default VisualizeOrdersOnMap;
