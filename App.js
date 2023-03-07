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
} from "./src/screens";

export default function App() {
	return <EditOrderDetails order={mockdata.onOrdersData[0]} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#S",
		alignItems: "center",
		justifyContent: "center",
	},
});
