import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
	TrackingRealtime,
	UseHooks,
	Welcome,
	Login,
	MapOrders,
} from "./src/screens";

export default function App() {
	return <MapOrders />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#S",
		alignItems: "center",
		justifyContent: "center",
	},
});
