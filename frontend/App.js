import React, { useState, useEffect, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mockdata, URL } from "./src/constants";
import {
	SimulateRealtimeTracking,
	Welcome,
	Login,
	MapOnOrders,
	EditOrderDetails,
	ImportOnOrders,
} from "./src/screens";
import * as Location from "expo-location";
import haversine from "haversine";
import MapView, {
	Marker,
	AnimatedRegion,
	Polyline,
	PROVIDER_GOOGLE,
} from "react-native-maps";
import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import { getTimeNow } from "./src/utilies/backup";

const RootStack = createNativeStackNavigator();

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

// Set minimum distance to update data
const MIN_DISTANCE = 0.01; // (km)

export default function App() {
	const [errorMsg, setErrorMsg] = useState(null);

	const [prevCoordinate, setPrevCroodinate] = useState({});
	const [distanceTraveled, setDistanceTraveled] = useState(0);

	// Calculate distance between previous and current position
	const calcDistance = (newCoords) => {
		return haversine(prevCoordinate, newCoords) || 0; // unit: km
	};

	// Request permission right after starting the app
	useEffect(() => {
		// After 1s, recall inner function
		let posotionInterval = setInterval(async () => {
			console.log("\n===================== start ========================");
			var isLoggedIn;
			await SecureStore.getItemAsync("isLoggedIn").then((data) => {
				isLoggedIn = data;
			});
			console.log(`Deliver is logged in: ${isLoggedIn}`);
			if (isLoggedIn !== "true") return;

			var accessToken;
			await SecureStore.getItemAsync("accessToken").then((token) => {
				accessToken = token;
			});
			// console.log(`Access token: ${accessToken}`);
			if (accessToken === null || accessToken === undefined) return;
			console.log(jwt_decode(accessToken));

			// Grant location access || foregroundStatus, backgroundStatus
			let foregroundStatus = await Location.requestForegroundPermissionsAsync();
			if (foregroundStatus.status !== "granted") {
				setErrorMsg("Foreground permission to access location was denied");
				return;
			}
			// console.log(foregroundStatus.status);

			// let backgroundStatus = await Location.requestBackgroundPermissionsAsync();
			// if (backgroundStatus.status !== "granted") {
			// 	setErrorMsg("Background permission to access location was denied");
			// 	return;
			// }
			// console.log(backgroundStatus.status);

			let position = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = position.coords;
			const newCoords = { latitude, longitude };
			console.log(newCoords);

			// Calculate distance between new and old coordinates - unit: km
			let distanceCalculate = calcDistance(newCoords);
			console.log(`DistanceCalculate: ${distanceCalculate}`);
			if (distanceTraveled === 0 || distanceCalculate >= MIN_DISTANCE) {
				// After calculating distance, current coordinate has no value, it's
				// set all values
				setPrevCroodinate(newCoords);
				setDistanceTraveled(distanceTraveled + distanceCalculate);
				console.log(`DistanceTraveled: ${distanceTraveled}`);

				fetch(URL.ROUTER_UPDATE, {
					method: "PATCH",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + accessToken,
					},
					body: JSON.stringify({
						coord: {
							latitude: newCoords.latitude,
							longitude: newCoords.longitude,
						},
						time: getTimeNow(),
						distanceTraveled: distanceTraveled,
					}),
				}).then((response) => {
					if (response.ok) {
						console.log("Stored coordinates successfully, 200 status");
					}
				});
			}
		}, 2000);
		return () => clearInterval(posotionInterval);
	}, [distanceTraveled, prevCoordinate]);

	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName="Welcome"
				screenOptions={{
					headerShown: false,
				}}
			>
				<RootStack.Screen name="MapOnOrders" component={MapOnOrders} />
				<RootStack.Screen
					name="EditOrderDetails"
					component={EditOrderDetails}
				/>
				<RootStack.Screen name="ImportOnOrders" component={ImportOnOrders} />
				<RootStack.Screen
					name="SimulateRealtimeTracking"
					component={SimulateRealtimeTracking}
				/>
				<RootStack.Screen name="Welcome" component={Welcome} />
				<RootStack.Screen name="Login" component={Login} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#S",
		alignItems: "center",
		justifyContent: "center",
	},
});
