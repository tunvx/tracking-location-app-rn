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
import * as SecureStore from "expo-secure-store";
import haversine from "haversine";
import { MaterialIcons } from "@expo/vector-icons";
import { colors, icons, URL } from "../constants"; // import { mockdata, URL } from "./src/constants";
import { DriverToolBar } from "../components";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

// Set minimum distance to update data
const MIN_DISTANCE = 0.015; // (km)

function SimulateRealtimeTracking(props) {
	const [followingButton, setFollwingButton] = useState({
		following: true,
		name: "gps-fixed",
	});

	const [prevCoordinate, setPrevCroodinate] = useState({});
	const [routeCoordinates, setRouteCoordinates] = useState([]);
	const [distanceTraveled, setDistanceTraveled] = useState(0);

	// Request permission right after starting the app
	useEffect(() => {
		// After 1s, recall inner function
		let posotionInterval = setInterval(async () => {
			var accessToken;
			await SecureStore.getItemAsync("accessToken").then((token) => {
				accessToken = token;
			});

			fetch(URL.ROUTER_GET_LAST_COORDS, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					Authorization: "Bearer " + accessToken,
				},
			}).then((response) => {
				if (response.ok) {
					response.json().then(async (data) => {
						const { coords, time, distanceTraveled } = data;
						setPrevCroodinate(coords);
						setDistanceTraveled(distanceTraveled);
						setRouteCoordinates([coords].concat(routeCoordinates));
					});
				}
			});
		}, 2000);
		return () => clearInterval(posotionInterval);
	}, [routeCoordinates, distanceTraveled, prevCoordinate]); // ;

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
					<Marker.Animated coordinate={prevCoordinate} />
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

export default SimulateRealtimeTracking;
