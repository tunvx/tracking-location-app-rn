import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors, mockdata, fontSizes } from "../constants";
import { DriverToolBar } from "../components";
import * as SecureStore from "expo-secure-store";

function EditOrderDetails(props) {
	// const order = mockdata.onOrdersData[0];
	// const order = props.route.params.order;
	// const order_id = props.route.params.order_id;
	const [order, setOrder] = useState(props.route.params.order);
	const [customer, setCustomer] = useState(null);
	const [deliver, setDeliver] = useState(null);

	useEffect(() => {
		async function fetchData() {
			if (order.customerId !== null) {
				await SecureStore.getItemAsync("accessToken").then((accessToken) => {
					fetch(`http://192.168.0.187:3000/users/u/${order.customerId}`, {
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
							setCustomer(response);
						});
				});
			}
		}
		fetchData();
	}, []);

	return (
		customer != undefined && (
			<SafeAreaView style={{ backgroundColor: "white", flex: 100 }}>
				<View style={styles.cellHead}>
					<Text style={styles.textTitleStyle}>Thông tin đơn giao</Text>
				</View>
				<View style={styles.cellMiddle}>
					<View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Tên hàng: </Text>
						<TextInput
							value={order.productName.toString()}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Người nhận: </Text>
						<TextInput
							value={customer.name}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Địa chỉ giao:</Text>
						<TextInput
							value={order.address.toString()}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View>

					{/* <View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Người giao:</Text>
						<TextInput
							defaultValue={order.deliverName.toString()}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View> */}
					<View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Giá sản phẩm:</Text>
						<TextInput
							value={order.price.toLocaleString("vi", {
								style: "currency",
								currency: "VND",
							})}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Dự đoán thời gian:</Text>
						<TextInput
							defaultValue={"Chưa xác định"}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
							onChangeText={(text) => {
								order.predictTime = text;
								console.log(order.predictTime);
							}}
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View>
					<View style={styles.cellMiddleChild}>
						<Text style={styles.textMiddleStyle}>Chú thích:</Text>
						<TextInput
							defaultValue={order.note.toString()}
							style={styles.textInputMiddleStyle}
							placeholder="Nhập ..."
							onChangeText={(text) => {
								order.note = text;
								console.log(order.note);
							}}
						></TextInput>
						<TouchableOpacity>
							<Entypo name="pencil" size={22} color="black" />
						</TouchableOpacity>
					</View>

					<View
						style={{
							...styles.cellMiddleChild,
							backgroundColor: colors.textinputBackground,
						}}
					>
						<View style={{ width: "65%" }}></View>
						<TouchableOpacity
							onPress={async () => {
								console.log("Press Save button");
								await SecureStore.getItemAsync("accessToken").then(
									(accessToken) => {
										fetch(
											`http://192.168.0.187:3000/orders/update/${order._id}`,
											{
												method: "PATCH",
												headers: {
													Accept: "application/json",
													"Content-Type": "application/json",
													Authorization: "Bearer " + accessToken,
												},
												body: JSON.stringify({
													note: order.note,
													predictTime: order.predictTime,
												}),
											}
										).then((response) => {
											if (response.ok) {
												response.json().then((data) => {
													console.log("Return response::");
													console.log(data);
												});
											}
										});
									}
								);
								Alert.alert("Đã lưu thông tin sửa đổi");
							}}
						>
							<FontAwesome name="save" size={32} color="black" />
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{ height: 6, width: "100%", backgroundColor: "white" }}
				></View>
				<View
					style={{
						height: 7,
						width: "100%",
						backgroundColor: colors.textinputBackground,
					}}
				></View>
				<View style={styles.cellTail}>
					<View
						style={{
							height: 25,
							width: "100%",
							//backgroundColor: "red",
							justifyContent: "center",
							alignItems: "center",
							paddingTop: 2,
						}}
					>
						<Text style={{ fontSize: 14 }}>Thông tin trạng thái giao hàng</Text>
					</View>
					<ScrollView style={{ width: "95%" }}>
						<View style={styles.cellTailChild}>
							<Text style={styles.textTailStyle}>Thành tiền</Text>
							<Text style={styles.textTailStyle}>
								{(order.price + 15000).toLocaleString("vi", {
									style: "currency",
									currency: "VND",
								})}
							</Text>
						</View>
						<View style={styles.cellTailChild}>
							<Text style={styles.textTailStyle}>Trạng thái giao hàng</Text>
							<Text style={styles.textTailStyle}>
								{order.delivered === true
									? "Giao thành công"
									: "Đang giao hàng"}
							</Text>
						</View>
						{order.delivered === true && (
							<View style={styles.cellTailChild}>
								<Text style={styles.textTailStyle}>Thời điểm giao</Text>
								<Text style={styles.textTailStyle}>
									{order.receivingTime.toString()}
								</Text>
							</View>
						)}
						{order.delivered === true && (
							<View style={styles.cellTailChild}>
								<Text style={styles.textTailStyle}>Thông tin vị trí giao</Text>
								<Text style={styles.textTailStyle}>
									Số 117, ngõ 133, Xuân Thủy
								</Text>
							</View>
						)}
						<View style={styles.cellTailChild}>
							<Text style={styles.textTailStyle}>Đánh giá từ khách hàng</Text>
							<Text style={styles.textTailStyle}>Không nhận được đánh giá</Text>
						</View>
					</ScrollView>
				</View>
				<DriverToolBar />
			</SafeAreaView>
		)
	);
}

const styles = StyleSheet.create({
	cellHead: {
		flex: 10,
		backgroundColor: "rgb(173, 216, 230)",
		alignItems: "center",
		justifyContent: "center",
	},

	cellMiddle: {
		flex: 54,
		backgroundColor: colors.textinputBackground,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},

	cellTail: {
		flex: 30,
		backgroundColor: "white",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},

	textTitleStyle: { fontSize: fontSizes.h1 },

	cellMiddleChild: {
		marginVertical: 5,
		backgroundColor: "white",
		flexDirection: "row",
		paddingVertical: 8,
		borderRadius: 5,
	},

	textMiddleStyle: {
		fontSize: fontSizes.h5,
		backgroundColor: "white",
		width: "28%",
		paddingLeft: 5,
	},
	textInputMiddleStyle: {
		fontSize: fontSizes.h5,
		backgroundColor: "white",
		width: "50%",
		marginHorizontal: 2,
		color: "black",
	},

	cellTailChild: {
		flexDirection: "row",
		marginTop: 6,
		borderTopWidth: 1,
		borderColor: colors.primary,
		paddingTop: 10,
		paddingBottom: 8,
		width: "95%",
	},

	textTailStyle: {
		fontSize: fontSizes.h6,
		backgroundColor: "white",
		paddingLeft: 5,
		width: "45%",
	},
});

export default EditOrderDetails;
