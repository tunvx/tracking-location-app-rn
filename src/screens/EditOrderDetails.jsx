import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { colors, mockdata, fontSizes } from "../constants";

function EditOrderDetails(props) {
	const order = mockdata.onOrdersData[0];

	return (
		<SafeAreaView style={{ backgroundColor: "white", flex: 100 }}>
			<View style={styles.cellHead}>
				<Text style={styles.textTitleStyle}>Thông tin đơn giao</Text>
			</View>
			<View style={styles.cellMiddle}>
				<View style={styles.cellMiddleChild}>
					<Text style={styles.textMiddleStyle}>Mã đơn hàng:</Text>
					<TextInput
						defaultValue={order._uid.toString()}
						style={styles.textInputMiddleStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.cellMiddleChild}>
					<Text style={styles.textMiddleStyle}>Tên loại hàng: </Text>
					<TextInput
						defaultValue={order.productName.toString()}
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
						defaultValue={order.customerName}
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
						defaultValue={order.address.toString()}
						style={styles.textInputMiddleStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>

				<View style={styles.cellMiddleChild}>
					<Text style={styles.textMiddleStyle}>Người giao:</Text>
					<TextInput
						defaultValue={order.deliverName.toString()}
						style={styles.textInputMiddleStyle}
						placeholder="Nhập ..."
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
						onPress={() => {
							console.log(order);
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
				<View style={styles.cellTailChild}>
					<Text style={styles.textTailStyle}>Giá sản phẩm</Text>
					<Text style={styles.textTailStyle}>
						{"Thành tiền: " +
							order.price.toLocaleString("vi", {
								style: "currency",
								currency: "VND",
							})}
					</Text>
				</View>
				<View style={styles.cellTailChild}>
					<Text style={styles.textTailStyle}>Trạng thái giao hàng</Text>
					<Text style={styles.textTailStyle}>
						{order.delivered === true ? "Giao thành công" : "Đang giao hàng"}
					</Text>
				</View>
				<View style={styles.cellTailChild}>
					<Text style={styles.textTailStyle}>Đánh giá từ khách hàng</Text>
					<Text style={styles.textTailStyle}>Không nhận được đánh giá</Text>
				</View>
				<View style={styles.cellTailChild}></View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: "flex-end",
		alignItems: "center",
	},

	cellHead: {
		flex: 10,
		backgroundColor: "rgb(173, 216, 230)",
		alignItems: "center",
		justifyContent: "center",
	},

	textTitleStyle: { fontSize: fontSizes.h1 },

	cellMiddle: {
		flex: 60,
		backgroundColor: colors.textinputBackground,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},

	cellMiddleChild: {
		marginVertical: 10,
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

	cellTail: {
		flex: 30,
		backgroundColor: "white",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
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
