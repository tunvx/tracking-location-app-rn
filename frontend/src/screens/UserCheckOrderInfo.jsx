import React, { useState, useEffect, Component } from "react";
import {
	StyleSheet,
	View,
	SafeAreaView,
	Text,
	Image,
	Alert,
	TouchableOpacity,
	Platform,
	PermissionsAndroid,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { FocusScrollView } from "react-native-focus-scroll";
import MapView, {
	Marker,
	AnimatedRegion,
	Polyline,
	PROVIDER_GOOGLE,
	Callout,
} from "react-native-maps";
import * as Location from "expo-location";
import haversine from "haversine";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	AntDesign,
} from "@expo/vector-icons";

import { colors, fontSizes, icons, images, mockdata } from "../constants";

const ItemView = () => {
	return (
		<View style={{ width: "100%" }}>
			<View
				style={{
					width: "100%",
					height: 12,
					backgroundColor: colors.header,
				}}
			></View>
			<View
				style={{
					width: "100%",
					height: 120,
					backgroundColor: "transparent",
					flexDirection: "row-reverse",
					alignItems: "center",
				}}
			>
				<Image
					source={images.order}
					style={{
						height: "96%",
						width: "46%",
						marginRight: 2,
					}}
					resizeMode={"cover"}
				/>
				<View style={{ flexDirection: "column", width: "54%", height: "96%" }}>
					<Text
						style={{
							fontSize: fontSizes.h5,
							marginVertical: 8,
							marginRight: 5,
							marginLeft: 10,
							fontWeight: "600",
						}}
					>
						{"Đơn hàng: Bộ sách giáo khoa lớp 12"}
					</Text>

					<View
						style={{
							height: 5,
							width: "100%",
							borderTopWidth: 1,
							borderTopColor: colors.primary,
						}}
					></View>
					<Text
						style={{
							fontSize: fontSizes.h6,
							marginVertical: 8,
							marginRight: 5,
							marginLeft: 10,
						}}
					>
						{"Địa chỉ: 32 .Đ Nguyễn Văn Huyên, Cầu Giấy"}
					</Text>
				</View>
			</View>
			<View
				style={{
					width: "100%",
					height: 40,
					backgroundColor: "transparent",
					flexDirection: "row",
					alignItems: "center",
					borderTopWidth: 1,
					borderTopColor: colors.primary,
				}}
			>
				<Text style={{ paddingHorizontal: 10 }}>1 sản phẩm</Text>
				<View
					style={{
						height: 40,
						width: "35%",
						backgroundColor: "transparent",
					}}
				></View>
				<Text style={{ paddingHorizontal: 1, fontWeight: "600" }}>
					Thành tiền: 460.000đ
				</Text>
			</View>
			<View
				style={{
					width: "100%",
					height: 40,
					backgroundColor: "transparent",
					flexDirection: "row",
					alignItems: "center",
					borderTopWidth: 1,
					borderTopColor: colors.primary,
				}}
			>
				<Text style={{ paddingHorizontal: 10 }}>{"Dự đoán     "}</Text>
				<View
					style={{
						height: 40,
						width: "35%",
						backgroundColor: "transparent",
					}}
				></View>
				<Text style={{ paddingHorizontal: 1 }}>Thời gian nhận: ...</Text>
			</View>
			<View
				style={{
					width: "100%",
					height: 50,
					backgroundColor: "transparent",
					flexDirection: "row",
					alignItems: "center",
					borderTopWidth: 1,
					borderTopColor: colors.primary,
				}}
			>
				<View style={{ backgroundColor: "transparent", width: "60%" }}>
					<Text style={{ paddingHorizontal: 10 }}>
						{"Trạng thái: <10km, đang tại kho chờ vận chuyển"}
					</Text>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: colors.primary_2,
						paddingVertical: 11,
						marginHorizontal: 5,
						paddingHorizontal: 17,
						borderRadius: 3,
						justifyContent: "center",
					}}
				>
					<Text style={{}}> Xem vị trí hiện tại</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const ItemView1 = () => {
	return (
		<View style={{ width: "100%" }}>
			<View
				style={{
					width: "100%",
					height: 15,
					backgroundColor: colors.padding,
				}}
			></View>
			<View
				style={{
					width: "100%",
					height: 120,
					backgroundColor: "transparent",
					flexDirection: "row-reverse",
					alignItems: "center",
				}}
			>
				<Image
					source={images.order_2}
					style={{
						height: "96%",
						width: "46%",
						marginRight: 2,
					}}
					resizeMode={"cover"}
				/>
				<View style={{ flexDirection: "column", width: "54%", height: "96%" }}>
					<Text
						style={{
							fontSize: fontSizes.h5,
							marginVertical: 8,
							marginRight: 5,
							marginLeft: 10,
							fontWeight: "600",
						}}
					>
						{"Đơn hàng: Ca-nô điều khiển từ xa"}
					</Text>

					<View
						style={{
							height: 5,
							width: "100%",
							borderTopWidth: 1,
							borderTopColor: colors.primary,
						}}
					></View>
					<Text
						style={{
							fontSize: fontSizes.h6,
							marginVertical: 8,
							marginRight: 5,
							marginLeft: 10,
						}}
					>
						{"Địa chỉ: 133 .Đ Trần Quốc Hoàn, Cầu Giấy"}
					</Text>
				</View>
			</View>
			<View
				style={{
					width: "100%",
					height: 40,
					backgroundColor: "transparent",
					flexDirection: "row",
					alignItems: "center",
					borderTopWidth: 1,
					borderTopColor: colors.primary,
				}}
			>
				<Text style={{ paddingHorizontal: 10 }}>1 sản phẩm</Text>
				<View
					style={{
						height: 40,
						width: "35%",
						backgroundColor: "transparent",
					}}
				></View>
				<Text style={{ paddingHorizontal: 1, fontWeight: "600" }}>
					Thành tiền: 1.200.000đ
				</Text>
			</View>
			<View
				style={{
					width: "100%",
					height: 40,
					backgroundColor: "transparent",
					flexDirection: "row",
					alignItems: "center",
					borderTopWidth: 1,
					borderTopColor: colors.primary,
				}}
			>
				<Text style={{ paddingHorizontal: 10 }}>{"Dự đoán     "}</Text>
				<View
					style={{
						height: 40,
						width: "35%",
						backgroundColor: "transparent",
					}}
				></View>
				<Text style={{ paddingHorizontal: 1 }}>Thời gian nhận: ...</Text>
			</View>
			<View
				style={{
					width: "100%",
					height: 50,
					backgroundColor: "transparent",
					flexDirection: "row",
					alignItems: "center",
					borderTopWidth: 1,
					borderTopColor: colors.primary,
				}}
			>
				<View style={{ backgroundColor: "transparent", width: "60%" }}>
					<Text style={{ paddingHorizontal: 10 }}>
						{"Trạng thái: <10km, đang tại kho chờ vận chuyển"}
					</Text>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: colors.primary_2,
						paddingVertical: 11,
						marginHorizontal: 5,
						paddingHorizontal: 17,
						borderRadius: 3,
						justifyContent: "center",
					}}
				>
					<Text style={{}}> Xem vị trí hiện tại</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

function UserCheckOrderInfo(props) {
	const [option, setOption] = useState(2);

	return (
		<View style={{ flex: 100, flexDirection: "column" }}>
			<View
				style={{
					flex: 16,
					flexDirection: "column",
					backgroundColor: colors.primary_1,
				}}
			>
				<View style={{ height: 40, width: "100%" }}></View>
				<View
					style={{
						height: 70,
						width: "100%",
						backgroundColor: colors.primary_1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={{ fontSize: 24, fontWeight: "bold", color: colors.primary }}
					>
						Đơn mua
					</Text>
				</View>
				<View
					style={{
						alignItems: "flex-end",
						justifyContent: "space-around",
						flexDirection: "row",
						borderButtomWidth: 1,
						borderButtomColor: colors.primary,
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "transparent",
							paddingHorizontal: 15,
							paddingVertical: 7,
						}}
						onPress={() => setOption(1)}
					>
						<Text
							style={{
								fontSize: 17,
								color: option === 1 ? colors.primary : "black",
								fontWeight: option === 1 ? "bold" : "normal",
								textDecorationLine: option === 1 ? "underline" : "none",
								textDecorationColor: colors.primary,
								textDecorationStyle: { padding: 4 },
							}}
						>
							Chờ giao
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "transparent",
							paddingHorizontal: 15,
							paddingVertical: 7,
						}}
						onPress={() => setOption(2)}
					>
						<Text
							style={{
								fontSize: 17,
								color: option === 2 ? colors.primary : "black",
								fontWeight: option === 2 ? "bold" : "normal",
								textDecorationLine: option === 2 ? "underline" : "none",
								textDecorationColor: colors.primary,
								textDecorationStyle: { padding: 4 },
							}}
						>
							Đang giao
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "transparent",
							paddingHorizontal: 15,
							paddingVertical: 7,
						}}
						onPress={() => setOption(3)}
					>
						<Text
							style={{
								fontSize: 17,
								color: option === 3 ? colors.primary : "black",
								fontWeight: option === 3 ? "bold" : "normal",
								textDecorationLine: option === 3 ? "underline" : "none",
								textDecorationColor: colors.primary,
								textDecorationStyle: { padding: 4 },
							}}
						>
							Đã giao
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ flex: 84, backgroundColor: colors.textinputBackground }}>
				<ScrollView style={{ flex: 1 }}>
					<ItemView />
					<ItemView1 />
				</ScrollView>
			</View>
		</View>
	);
}
export default UserCheckOrderInfo;
