import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Platform,
	PermissionsAndroid,
} from "react-native";
import MapView, {
	Marker,
	AnimatedRegion,
	Polyline,
	PROVIDER_GOOGLE,
} from "react-native-maps";
import * as Location from "expo-location";
import haversine from "haversine";

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
	},
});

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const MIN_DISTANCE = 0.005;

function MyMapScreen(props) {
	const [position, setPosition] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const [routeCoordinates, setRouteCoordinates] = useState([]);
	const [distanceTraveled, setDistanceTraveled] = useState(0);
	const [prevLatLng, setPrevLatLng] = useState({});
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
		latitude: position.coords.latitude,
		longitude: position.coords.longitude,
		latitudeDelta: position.coords.latitudeDelta,
		longitudeDelta: position.coords.longitudeDelta,
	});

	// Calculate distance between previous and current position
	const calcDistance = (newLatLng) => {
		return haversine(prevLatLng, newLatLng) || 0;
	};

	// Request permission right after starting the app
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			// Get current position
			let position = await Location.getCurrentPositionAsync({});
			const { latitude, longitude } = position.coords;
			const newCoordinates = {
				latitude,
				longitude,
			};

			console.log(
				"================================================================"
			);
			console.log(calcDistance(newCoordinates));

			// Check re-rendering screens when agent moves
			if (
				distanceTraveled == 0 ||
				calcDistance(newCoordinates) >= MIN_DISTANCE
			) {
				// Set current values
				setPosition(position);
				setRouteCoordinates(routeCoordinates.concat([newCoordinates]));
				setDistanceTraveled(distanceTraveled + calcDistance(newCoordinates));
				setPrevLatLng(newCoordinates);
				setCoordinate(new AnimatedRegion(position.coords));

				// Log values
				console.log(position); // Not null
				console.log(routeCoordinates); // Not null
				console.log(distanceTraveled); // Not null
				console.log(prevLatLng); // Not null
				console.log(coordinate); // Not null
			}
		})();
	});

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				showsUserLocation={true}
				followsUserLocation={true}
				loadingEnabled={true}
				// region={getMapRegion()}
			>
				<Polyline coordinates={routeCoordinates} strokeWidth={5} />
				<Marker.Animated coordinate={coordinate} />
			</MapView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={[styles.bubble, styles.button]}>
					<Text style={{ fontSize: 24 }}>
						{parseFloat(distanceTraveled).toFixed(2)} km
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default MyMapScreen;
