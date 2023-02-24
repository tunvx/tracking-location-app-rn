import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function UseHooks() {
	const [orderCount, setCount] = useState({ count: 0 });

	const changeCount = async () => {
		await setCount({ count: orderCount.count + 1 });
	};

	useEffect(() => {
		console.log("useEffect called");
	});

	return (
		<View
			style={{
				justifyContent: "center",
				alignItems: "center",
				flex: 1,
				backgroundColor: "purple",
			}}
		>
			<Text style={{ fontSize: 24 }}>{orderCount.count}</Text>
			<TouchableOpacity
				onPress={changeCount}
				style={{ width: 100, height: 100, backgroundColor: "red" }}
			/>
		</View>
	);
}
export default UseHooks;
