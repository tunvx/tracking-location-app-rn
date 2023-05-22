import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	ScrollView,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import {
	MaterialIcons,
	FontAwesome,
	AntDesign,
	Entypo,
} from "@expo/vector-icons";
import { colors, mockdata, fontSizes, URL } from "../constants";
import { DriverToolBar } from "../components";
import * as SecureStore from "expo-secure-store";

function ImportOnOrders(props) {
	// const orders = mockdata.ordersData;

	const [orders, setOrders] = useState(null);
	const [onOrders, setOnOrders] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await SecureStore.getItemAsync("accessToken").then((accessToken) => {
				fetch(URL.ORDER_GET_ALL, {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + accessToken,
					},
				})
					.then((response) => response.json())
					.then((response) => {
						// console.log("Fetching orders....");
						// console.log(response);
						setOrders(response);
					});
			});
		}
		fetchData();
	}, []);

	return (
		orders !== null && (
			<SafeAreaView style={{ backgroundColor: "white", flex: 100 }}>
				<View style={styles.cellHead}>
					<Text style={styles.textTitleStyle}>Nhập các đơn giao</Text>
				</View>
				<View style={styles.cellMiddle}>
					<View style={styles.cellInfoStyle}>
						<Text style={styles.textInfoStyle}>Tất cả các đơn hàng</Text>
					</View>
					<DataTable
						style={{
							backgroundColor: "white",
							overflow: "scroll",
						}}
					>
						<DataTable.Header>
							<DataTable.Title>Hình ảnh</DataTable.Title>
							<DataTable.Title>Tên sản phẩm</DataTable.Title>
							<DataTable.Title>Địa chỉ</DataTable.Title>
							<DataTable.Title style={{ justifyContent: "center" }}>
								Chọn giao
							</DataTable.Title>
						</DataTable.Header>
						<ScrollView>
							{orders.map((order) => (
								<DataTable.Row key={order._id}>
									<DataTable.Cell>
										<TouchableOpacity>
											<FontAwesome
												name="product-hunt"
												size={24}
												color={colors.primary}
											/>
										</TouchableOpacity>
									</DataTable.Cell>
									<DataTable.Cell>{order.productName}</DataTable.Cell>
									<DataTable.Cell>{order.address}</DataTable.Cell>
									<DataTable.Cell style={{ justifyContent: "center" }}>
										<TouchableOpacity
											onPress={() => {
												// list below
												setOnOrders(onOrders.concat([order]));

												// list above
												setOrders((orders) =>
													orders.filter((element) => element !== order)
												);
											}}
										>
											<MaterialIcons
												name="delivery-dining"
												size={24}
												color={colors.primary}
											/>
										</TouchableOpacity>
									</DataTable.Cell>
								</DataTable.Row>
							))}
						</ScrollView>
					</DataTable>
				</View>
				<View style={styles.cellTail}>
					<View
						style={{
							...styles.cellInfoStyle,
							height: 5,
							backgroundColor: colors.textinputBackground,
						}}
					></View>
					<View style={styles.cellInfoStyle}>
						<Text style={styles.textInfoStyle}>Các đơn hàng nhập giao</Text>
					</View>
					<DataTable
						style={{
							backgroundColor: colors.snow,
							alignSelf: "baseline",
							overflow: "scroll",
						}}
					>
						<DataTable.Header>
							<DataTable.Title>Hình ảnh</DataTable.Title>
							<DataTable.Title>Tên sản phẩm</DataTable.Title>
							<DataTable.Title>Địa chỉ</DataTable.Title>
							<DataTable.Title style={{ justifyContent: "center" }}>
								Đã chọn giao
							</DataTable.Title>
						</DataTable.Header>
						<ScrollView>
							{onOrders.map((order) => (
								<DataTable.Row key={order._id}>
									<DataTable.Cell>
										<FontAwesome
											name="product-hunt"
											size={24}
											color={colors.primary}
										/>
									</DataTable.Cell>
									<DataTable.Cell>{order.productName}</DataTable.Cell>
									<DataTable.Cell>{order.address}</DataTable.Cell>
									<DataTable.Cell style={{ justifyContent: "center" }}>
										<TouchableOpacity
											onPress={() => {
												// list above
												setOrders(orders.concat([order]));

												// list below
												setOnOrders((onOrders) =>
													onOrders.filter((element) => element !== order)
												);
											}}
										>
											<AntDesign name="checkcircle" size={24} color="green" />
										</TouchableOpacity>
									</DataTable.Cell>
								</DataTable.Row>
							))}
						</ScrollView>
					</DataTable>
				</View>
				<DriverToolBar onOrders={onOrders} />
			</SafeAreaView>
		)
	);
}

const styles = StyleSheet.create({
	cellHead: {
		flex: 10,
		backgroundColor: colors.primary_1,
		alignItems: "center",
		justifyContent: "center",
	},

	cellMiddle: {
		flex: 48,
		backgroundColor: colors.textinputBackground,
		flexDirection: "column",
		alignItems: "center",
	},

	cellTail: {
		flex: 36,
		backgroundColor: colors.textinputBackground,
		flexDirection: "column",
		alignItems: "center",
	},

	textTitleStyle: { fontSize: fontSizes.h1, color: colors.primary_red },

	textInfoStyle: {
		fontSize: fontSizes.h5,
		paddingVertical: 5,
		color: colors.primary,
	},

	cellInfoStyle: {
		backgroundColor: "white",
		width: "100%",
		alignItems: "center",
	},

	cellContentStyle: {
		flexDirection: "row",
	},
});

export default ImportOnOrders;
