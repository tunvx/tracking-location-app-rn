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
import { colors, images, icons, fontSizes, keys, URL } from "../constants";
import { isValidateEmail, isValidatePassword } from "../utilies";
import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

function Login(props) {
	const navigation = useNavigation();

	const [keyboardIsShow, setKeyboardIsShow] = useState(false);

	// states for validating
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	// states for store email and password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [accountType, setAccountType] = useState("");

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", () => {
			setKeyboardIsShow(true);
			//alert("Keyboard did show");
		});
		Keyboard.addListener("keyboardDidHide", () => {
			setKeyboardIsShow(false);
			// alert("Keyboard did hide");
		});
		SecureStore.getItemAsync("account").then(async (accounttype) =>
			setAccountType(accounttype)
		);
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
						color: colors.primary,
						fontSize: fontSizes.h1,
						fontWeight: "bold",
						width: "35%",
					}}
				>
					Already have an Account?
				</Text>
				<Image
					source={images.login_logo}
					style={{ borderRadius: 12 }}
					resizeMode={"cover"}
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
					defaultValue={"driver05@gmail.com"}
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
							if (email.includes(accountType) === false) {
								Alert.alert("Thông tin tài khoản không tồn tại");
								return;
							}
							fetch(URL.LOGIN, {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									email: email,
									password: password,
								}),
							}).then((response) => {
								if (response.ok) {
									response.json().then(async (data) => {
										await SecureStore.setItemAsync(
											"accessToken",
											data.accessToken
										);
										await SecureStore.getItemAsync("accessToken").then(
											async (token) => {
												// Create a new router for deliver for today
												if (accountType === "driver") {
													fetch(URL.ROUTER_CREATE, {
														method: "POST",
														headers: {
															Accept: "application/json",
															"Content-Type": "application/json",
															Authorization: "Bearer " + token,
														},
														body: JSON.stringify({}),
													}).then((response) => {
														// console.log(response.json());
													});
												}

												// create router for today before set user
												await SecureStore.setItemAsync("isLoggedIn", "true");
											}
										);
									});
									if (accountType === "admin") {
										navigation.navigate("AdminMainScreen");
									} else if (accountType === "driver") {
										navigation.navigate("ImportOnOrders");
									} else if (accountType === "customer") {
										navigation.navigate("UserCheckOrderInfo");
									}
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
