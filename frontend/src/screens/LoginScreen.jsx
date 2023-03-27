import React, { useState, useEffect } from "react";
import {
	Text,
	View,
	Image,
	ImageBackground,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	Dimensions,
	Keyboard,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import jwt_decode from "jwt-decode";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors, images, icons, fontSizes, keys } from "../constants";
import { isValidateEmail, isValidatePassword } from "../utilies";

function Login(props) {
	const navigation = useNavigation();

	const [keyboardIsShow, setKeyboardIsShow] = useState(false);

	// states for validating
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	// states for store email and password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", () => {
			setKeyboardIsShow(true);
			//alert("Keyboard did show");
		});
		Keyboard.addListener("keyboardDidHide", () => {
			setKeyboardIsShow(false);
			// alert("Keyboard did hide");
		});
	});

	return (
		<SafeAreaView style={{ flex: 100, backgroundColor: "white" }}>
			<View
				style={{
					// height: 200,
					flex: 35,
					flexDirection: "row",
					// backgroundColor: "green",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<Text
					style={{
						color: "rgba(0,0,0,0.72)",
						fontSize: fontSizes.h1,
						fontWeight: "bold",
						width: "35%",
					}}
				>
					Already have an Account?
				</Text>
				<Image
					source={images.computer_logo}
					style={{
						// backgroundColor: "red",
						tintColor: colors.primary,
						width: 155,
						height: 155,
					}}
				/>
			</View>
			<View
				style={{
					flex: 20,
					// backgroundColor: "purple",
					marginHorizontal: 15,
				}}
			>
				<Text
					style={{
						color: colors.primary,
						fontSize: fontSizes.h6,
						padding: 5,
						paddingTop: 10,
					}}
				>
					Email:
				</Text>
				<TextInput
					onChangeText={(text) => {
						setErrorEmail(
							isValidateEmail(text) == true
								? ""
								: "Email not in correct format."
						);
						setEmail(text);
					}}
					style={{
						color: "black",
						fontSize: fontSizes.h5,
						padding: 5,
						borderBottomWidth: 1,
					}}
					defaultValue={"driverxx@gmail.com"}
					placeholder="example@gmail.com"
					placeholderTextColor={colors.placeholderColor}
				/>
				<Text
					style={{
						color: "red",
						fontSize: fontSizes.h6,
					}}
				>
					{errorEmail}
				</Text>
				<Text
					style={{
						color: colors.primary,
						fontSize: fontSizes.h6,
						padding: 5,
						paddingTop: 11,
					}}
				>
					Password:
				</Text>
				<TextInput
					onChangeText={(text) => {
						setErrorPassword(
							isValidatePassword(text) == true
								? ""
								: "Password must be at least 4 characters."
						);
						setPassword(text);
					}}
					style={{
						color: "black",
						fontSize: fontSizes.h5,
						padding: 5,
						borderBottomWidth: 1,
					}}
					defaultValue={"1234"}
					placeholder="Enter"
					placeholderTextColor={colors.placeholderColor}
					// secureTextEntry={true}
				/>
				<Text
					style={{
						color: "red",
						fontSize: fontSizes.h6,
					}}
				>
					{errorPassword}
				</Text>
			</View>
			{keyboardIsShow == false && (
				<View
					style={{
						flex: 17,
						// backgroundColor: "yellow",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							// if (email === "driverxx@gmail.com" && password === "1234") {
							// 	navigation.navigate("ImportOnOrders");
							// }
							fetch("http://192.168.0.187:3000/login", {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									email: email,
									password: password,
								}),
							}).then((response) => {
								if (response.ok) {
									response.json().then((data) => {
										console.log("Return response::");
										console.log(data);
										console.log(jwt_decode(data.accessToken));
									});
									// navigation.navigate("ImportOnOrders", );
								} else {
									Alert.alert("Thông tin tài khoản không tồn tại");
								}
							});
						}}
						style={{
							backgroundColor: colors.primary,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 16,
							marginHorizontal: 50,
							width: "64%",
							alignSelf: "center",
							padding: 6,
						}}
					>
						<Text
							style={{
								fontSize: fontSizes.h4,
								padding: 8,
								fontWeight: "bold",
								color: "white",
							}}
						>
							Login
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							alert(`Email = ${email}, Password = ${password}`);
						}}
						style={{
							// backgroundColor: "yellow",
							width: "64%",
							alignSelf: "center",
							padding: 5,
							alignItems: "center",
							paddingBottom: 15,
						}}
					>
						<Text
							style={{
								fontSize: fontSizes.h5,
								padding: 8,
								color: colors.primary,
								alignContent: "center",
							}}
						>
							New user? Register Now
						</Text>
					</TouchableOpacity>
				</View>
			)}
			<View
				style={{
					flex: 28,
					// backgroundColor: "red",
					// justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						color: "black",
						fontSize: fontSizes.h6,
						padding: 8,
						// backgroundColor: "green",
					}}
				>
					-------------Use other method ? --------------
				</Text>
				<View
					style={{
						flexDirection: "row",
						padding: 8,
						// backgroundColor: "red",
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: colors.facebook,
							width: 50,
							height: 50,
							alignItems: "center",
							marginHorizontal: 5,
							borderRadius: 8,
							padding: 5,
						}}
					>
						<Icon name={"facebook"} size={42} color={"white"}></Icon>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: colors.google,
							width: 50,
							height: 50,
							alignItems: "center",
							marginHorizontal: 5,
							borderRadius: 50,
							padding: 5,
						}}
					>
						<Icon name={"google"} size={42} color={"white"}></Icon>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default Login;
