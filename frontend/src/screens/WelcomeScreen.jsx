import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	SafeAreaView,
	Image,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { Icon } from "react-native-vector-icons/FontAwesome";

import { colors, icons, fontSizes, images, keys } from "../constants";
import { UIButton } from "../components";

function Welcome(props) {
	const navigation = useNavigation();

	const [backgroundLoginButton, setBackgroundLoginButton] =
		useState("transparent");

	const [accountTypes, setAccountTypes] = useState([
		{
			name: "Người dùng",
			isSelected: false,
		},
		{
			name: "Lái xe công nghệ",
			isSelected: false,
		},
		{
			name: "Người quản lý",
			isSelected: false,
		},
	]);

	useEffect(() => {
		SecureStore.setItemAsync("isLoggedIn", "false");
	}, []);

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
						<Text style={{ color: colors.primary, fontSize: fontSizes.h5 }}>
							Nâng cao chất lượng phục vụ
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
							color: colors.primary,
							fontSize: fontSizes.h5,
						}}
					>
						Chào mừng bạn đến với
					</Text>
					<Text
						style={{
							marginBottom: 10,
							color: colors.primary,
							fontWeight: "700",
							fontSize: fontSizes.h4,
						}}
					>
						Ứng dụng hỗ trợ giao hàng
					</Text>
					<Text
						style={{
							color: colors.primary,
							fontSize: fontSizes.h5,
						}}
					>
						Vui lòng chọn loại tài khoản của bạn
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
							key={accountType.name}
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
					<TouchableOpacity
						onPress={() => {
							setBackgroundLoginButton("white");
							navigation.navigate("Login");
						}}
						style={{
							height: 45,
							borderColor: colors.primary,
							borderWidth: 1,
							borderRadius: 5,
							marginHorizontal: 18,
							marginVertical: 10,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: backgroundLoginButton,
						}}
					>
						<Text
							style={{
								color: colors.primary,
								fontWeight: "700",
							}}
						>
							Login
						</Text>
					</TouchableOpacity>
					<Text
						style={{
							color: colors.placeholderColor,
							fontSize: fontSizes.h5,
							alignSelf: "center",
						}}
					>
						Want to register a new account?
					</Text>
					<TouchableOpacity
						onPress={() => {}}
						style={{
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
