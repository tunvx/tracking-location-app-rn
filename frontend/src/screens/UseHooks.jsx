import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function UseHooks() {
	const [currentSecond, setCurrentSecond] = useState(null);
	const [distanceTimed, setDistanceTimed] = useState(0);
	const [routerSeconds, setRouterSeconds] = useState([]);
	const [prevSecond, setPrevSecond] = useState(null);

	useEffect(() => {
		async function fetchData() {
			let timeNow = Date.now() / 1000;
			if (timeNow - currentSecond >= 1.5 || distanceTimed === 0) {
				setPrevSecond(currentSecond);
				setRouterSeconds(routerSeconds.concat([currentSecond]));
				setRouterSeconds(timeNow);
			}
		}
		fetchData();
	}, [routerSeconds]);

	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: "purple",
			}}
		>
			<Text style={{ fontSize: 24 }}>{currentSecond}</Text>
		</View>
	);
}
export default UseHooks;
