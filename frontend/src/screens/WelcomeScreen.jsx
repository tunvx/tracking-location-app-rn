import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome";

import { colors, icons, fontSizes, images, keys } from "../constants";
import { UIButton } from "../components";

function Welcome(props) {
	const [accountTypes, setAccountTypes] = useState([
		{
			name: "Người dùng",
			isSelected: true,
		},
		{
			name: "Lái xe công nghệ",
			isSelected: false,
		},
		{
			name: "Người quản lý",
		},
	]);

	// return <View style={{ flex: 100, backgroundColor: "red" }}>
	// </View>;
	return (
		<View style={{ flex: 100 }}>
			<ImageBackground
				source={images.background}
				style={{ flex: 100 }}
				resizeMode="cover"
			>
				<View style={{ height: 33 }}></View>
				<View
					style={{
						// backgroundColor: "red",
						flex: 20,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							height: 50,
							justifyContent: "flex-start",
							alignItems: "center",
						}}
					>
						<Image
							source={icons.fire}
							style={{
								width: 30,
								height: 30,
								marginStart: 10,
								marginEnd: 5,
							}}
						/>
						<Text style={{ color: "white", fontSize: fontSizes.h5 }}>
							YOURCOMPANY.CO
						</Text>
						<View style={{ flex: 1 }} />
						{/* <Icon
							name={"question-circle"}
							color={"white"}
							size={20}
							style={{ marginEnd: 20 }}
						/> */}
					</View>
				</View>
				<View
					style={{
						flex: 20,
						// backgroundColor: "purple",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							marginBottom: 10,
							color: "white",
							fontSize: fontSizes.h5,
						}}
					>
						Welcome to
					</Text>
					<Text
						style={{
							marginBottom: 10,
							color: "white",
							fontWeight: "bold",
							fontSize: fontSizes.h5,
						}}
					>
						YOURCOMPANY.CO !
					</Text>
					<Text
						style={{
							color: "white",
							fontSize: fontSizes.h5,
						}}
					>
						Please select your account type
					</Text>
				</View>
				<View
					style={{
						flex: 40,
						// backgroundColor: "purple",
					}}
				>
					{accountTypes.map((accountType) => (
						<UIButton
							onPress={() => {
								let newAccountTypes = accountTypes.map((eachAccountType) => {
									return {
										...eachAccountType,
										isSelected: eachAccountType.name == accountType.name,
									};
								});
								// accountTypes = newAccountTypes; => DONOT DO THIS
								// reset each element of acountTypes to following newAccountTypes and reload UI
								setAccountTypes(newAccountTypes);
							}}
							title={accountType.name}
							isSelected={accountType.isSelected}
						/>
					))}
				</View>
				<View
					style={{
						flex: 20,
						// backgroundColor: "green",
					}}
				>
					<UIButton title={"Login"}></UIButton>
					<Text
						style={{
							color: "white",
							fontSize: fontSizes.h5,
							alignSelf: "center",
						}}
					>
						Want to register a new account?
					</Text>
					<TouchableOpacity
						onPress={() => {}}
						style={{
							// backgroundColor: "red",
							padding: 8,
							marginHorizontal: 90,
						}}
					>
						<Text
							style={{
								color: colors.primary,
								fontSize: fontSizes.h5,
								textDecorationLine: "underline",
								alignSelf: "center",
							}}
						>
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

export default Welcome;
