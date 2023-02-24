import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyMapView, UseHooks } from "./src/screens";

export default function App() {
	return <MyMapView />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#S",
		alignItems: "center",
		justifyContent: "center",
	},
});
