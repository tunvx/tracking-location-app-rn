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
			<View style={styles.cellTitle}>
				<Text style={styles.cellTextTitleStyle}>Thông tin đơn giao</Text>
			</View>
			<View style={styles.cellMain}>
				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Mã đơn hàng:</Text>
					<TextInput
						defaultValue={order._uid.toString()}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Tên loại hàng: </Text>
					<TextInput
						defaultValue={order.productName.toString()}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Người nhận: </Text>
					<TextInput
						defaultValue={order.customerName}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Địa chỉ giao:</Text>
					<TextInput
						defaultValue={order.address.toString()}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>

				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Người giao:</Text>
					<TextInput
						defaultValue={order.deliverName.toString()}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Chú thích:</Text>
					<TextInput
						defaultValue={order.note.toString()}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View style={styles.cellInfo}>
					<Text style={styles.cellInfoTextStyle}>Chú thích:</Text>
					<TextInput
						defaultValue={order.note.toString()}
						style={styles.cellTextInputStyle}
						placeholder="Nhập ..."
					></TextInput>
					<TouchableOpacity>
						<Entypo name="pencil" size={22} color="black" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						...styles.cellInfo,
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
			<View style={styles.cellStatusStyle}>
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
				<View style={styles.cellInfoStatusStyle}>
					<Text style={styles.cellStatusTextStyle}>Giá sản phẩm</Text>
					<Text style={styles.cellStatusTextStyle}>
						{"Thành tiền: " +
							order.price.toLocaleString("vi", {
								style: "currency",
								currency: "VND",
							})}
					</Text>
				</View>
				<View style={styles.cellInfoStatusStyle}>
					<Text style={styles.cellStatusTextStyle}>Trạng thái giao hàng</Text>
					<Text style={styles.cellStatusTextStyle}>Giao thành công</Text>
				</View>
				<View style={styles.cellInfoStatusStyle}>
					<Text style={styles.cellStatusTextStyle}>Đánh giá từ khách hàng</Text>
					<Text style={styles.cellStatusTextStyle}>
						Không nhận được đánh giá
					</Text>
				</View>
				<View style={styles.cellInfoStatusStyle}></View>
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

	cellTitle: {
		flex: 10,
		backgroundColor: "rgb(173, 216, 230)",
		alignItems: "center",
		justifyContent: "center",
	},

	cellTextTitleStyle: { fontSize: fontSizes.h1 },

	cellMain: {
		flex: 60,
		backgroundColor: colors.textinputBackground,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		// marginBottom: 6,
	},

	cellInfo: {
		marginVertical: 10,
		backgroundColor: "white",
		flexDirection: "row",
		paddingVertical: 8,
		borderRadius: 5,
	},

	cellInfoTextStyle: {
		fontSize: fontSizes.h5,
		backgroundColor: "white",
		width: "28%",
		paddingLeft: 5,
	},
	cellTextInputStyle: {
		fontSize: fontSizes.h5,
		backgroundColor: "white",
		width: "50%",
		marginHorizontal: 2,
		color: "black",
	},

	cellStatusStyle: {
		flex: 30,
		backgroundColor: "white",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "flex-start",
	},

	cellInfoStatusStyle: {
		flexDirection: "row",
		marginTop: 6,
		borderTopWidth: 1,
		borderColor: colors.primary,
		paddingTop: 10,
		paddingBottom: 8,
		width: "95%",
	},

	cellStatusTextStyle: {
		fontSize: fontSizes.h6,
		backgroundColor: "white",
		paddingLeft: 5,
		width: "45%",
	},
});

export default EditOrderDetails;
