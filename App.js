import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { mockdata } from "./src/constants";
import {
	TrackingRealtime,
	UseHooks,
	Welcome,
	Login,
	MapOrders,
	EditOrderDetails,
	ImportOnOrders,
} from "./src/screens";

export default function App() {
	return <ImportOnOrders />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#S",
		alignItems: "center",
		justifyContent: "center",
	},
});
