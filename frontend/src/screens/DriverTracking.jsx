import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	SafeAreaView,
	Platform,
	PermissionsAndroid,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MapView, {
	Marker,
	AnimatedRegion,
	Polyline,
	PROVIDER_GOOGLE,
} from "react-native-maps";
import * as Location from "expo-location";
import haversine from "haversine";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, icons } from "../constants";
import { DriverToolBar } from "../components";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

// Set minimum distance to update data
const MIN_DISTANCE = 0.015; // (km)

function TrackingRealtime(props) {
	const [errorMsg, setErrorMsg] = useState(null);

	const [followingButton, setFollwingButton] = useState({
		following: true,
		name: "gps-fixed",
	});

	const [prevCoordinate, setPrevCroodinate] = useState({});
	const [routeCoordinates, setRouteCoordinates] = useState([]);
	const [distanceTraveled, setDistanceTraveled] = useState(0);
	const [coordinate, setCoordinate] = useState(
		new AnimatedRegion({
			latitude: LATITUDE,
			longitude: LONGITUDE,
			latitudeDelta: 0,
			longitudeDelta: 0,
		})
	);

	// Set coordinates of the region
	const getMapRegion = () => ({
		latitude: prevCoordinate.latitude,
		longitude: prevCoordinate.longitude,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});

	// Calculate distance between previous and current position
	const calcDistance = (newCoords) => {
		return haversine(prevCoordinate, newCoords) || 0; // unit: km
	};

	// Request permission right after starting the app
	useEffect(() => {
		// After 1s, recall inner function
		let posotionInterval = setInterval(async () => {
			// Grant location access || foregroundStatus, backgroundStatus
			let foregroundStatus = await Location.requestForegroundPermissionsAsync();
			if (foregroundStatus.status !== "granted") {
				setErrorMsg("Foreground permission to access location was denied");
				return;
			}
			// console.log(foregroundStatus.status);

			let backgroundStatus = await Location.requestForegroundPermissionsAsync();
			if (backgroundStatus.status !== "granted") {
				setErrorMsg("Background Permission to access location was denied");
				return;
			}
			// console.log(backgroundStatus.status);

			let position = await Location.getCurrentPositionAsync();
			let coordss = await Location.geocodeAsync(
				"136 Đ. Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Vietnam"
			);
			// 21.030410221614545, 105.7826646342802
			// 21.0288247, 105.7817389
			console.log("===================== start ========================");
			console.log(coordss);
			// console.log(routeCoordinates.length);
			// console.log(followingButton);
			// console.log(position);
			const { latitude, longitude } = position.coords;
			const newCoords = { latitude, longitude };

			// Calculate distance between new and old coordinates - unit: km
			let distanceCalculate = calcDistance(newCoords);
			// console.log(distanceCalculate);
			if (distanceCalculate === 0 || distanceCalculate >= MIN_DISTANCE) {
				// After calculating distance, current coordinate has no value, it's
				// set all values
				setRouteCoordinates(routeCoordinates.concat([newCoords]));
				setPrevCroodinate(newCoords);
				setDistanceTraveled(distanceTraveled + distanceCalculate);
				setCoordinate(new AnimatedRegion(position.coords));
			}
		}, 1000);
		return () => clearInterval(posotionInterval);
	}, [routeCoordinates, distanceTraveled, prevCoordinate, coordinate]); // ;

	return (
		<SafeAreaView style={{ flex: 100 }}>
			<View style={styles.container}>
				<MapView
					style={styles.map}
					showsUserLocation={true}
					followsUserLocation={followingButton.following}
					loadingEnabled={true}
					// region={getMapRegion()}
				>
					<Polyline
						coordinates={routeCoordinates}
						strokeWidth={4}
						strokeColor={colors.primary}
					/>
					<Marker.Animated coordinate={coordinate} />
				</MapView>
				<View
					style={{
						marginTop: 6,
						backgroundColor: "transparent",
						alignSelf: "flex-end",
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
							backgroundColor: "transparent", // red transparent
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
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={[styles.bubble, styles.button]}>
						<Text style={{ fontSize: 24 }}>
							{parseFloat(distanceTraveled).toFixed(2)} km
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<DriverToolBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 94,
		flexDirection: "column",
		justifyContent: "space-between",
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
	},
});

export default TrackingRealtime;
