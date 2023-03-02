import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
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
import { MaterialIcons } from "@expo/vector-icons";
import { colors, icons } from "../constants";

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
		// backgroundColor: "red",
	},
});

function MapOrders(props) {
	const [onOrders, setOnOrders] = useState([
		{
			id: 1,
			customerName: "test1",
			address: "Học Viện Báo chí và Tuyên truyền",
			coordinates: {
				latitude: 21.037950932035965,
				longitude: 105.78801309985293,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
		},
		{
			id: 2,
			customerName: "test2",
			address: "Đại học Thương mại",
			coordinates: {
				latitude: 21.03688113367763,
				longitude: 105.77501276857662,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
		},
		{
			id: 3,
			customerName: "test3",
			address: "Đại học Sư phạm Hà Nội",
			coordinates: {
				latitude: 21.0376565464535,
				longitude: 105.78337862624798,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
		},
		{
			id: 4,
			customerName: "test4",
			address: "Đại học Ngoại Ngữ",
			coordinates: {
				latitude: 21.04182361360483,
				longitude: 105.78116638784617,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			},
		},
	]);
	const [foregroundPermissions, setForegroundPermissions] = useState(null);
	const [backgroundPermissions, setBackgroundPermissions] = useState(null);

	useEffect(() => {
		async () => {
			let { foregroundStatus } =
				await Location.requestForegroundPermissionsAsync();
			if (foregroundStatus !== "granted") {
				setErrorMsg("Foreground permission to access location was denied");
				return;
			}
			let { backgroundStatus } =
				await Location.requestBackgroundPermissionsAsync();
			if (backgroundStatus !== "granted") {
				setErrorMsg("Background permission to access location was denied");
				return;
			}
		};
	});
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				showsUserLocation={true}
				// followsUserLocation={true}
				loadingEnabled={true}
				// region={getMapRegion()}
			>
				{onOrders.map(
					(onOrder) => (
						console.log(),
						(
							<Marker
								key={onOrder.id}
								coordinate={onOrder.coordinates}
								title={onOrder.address}
								icon={
									<Image
										source={icons.maker}
										style={{ width: 30, height: 30 }}
										resizeMode="contain"
									/>
								}
							></Marker>
						)
					)
				)}
			</MapView>
		</View>
	);
}

export default MapOrders;
