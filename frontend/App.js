import React, { useState, useEffect, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { mockdata } from "./src/constants";
import {
	TrackingRealtime,
	UseHooks,
	Welcome,
	Login,
	MapOnOrders,
	EditOrderDetails,
	ImportOnOrders,
} from "./src/screens";

const RootStack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				initialRouteName="ImportOnOrders"
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
					name="TrackingRealtime"
					component={TrackingRealtime}
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
