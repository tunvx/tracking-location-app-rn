import { View, Text, AppRegistry } from "react-native";
import styled from "styled-components";

let fakedProducts = [
	{ productName: "Iphone 3", year: 2013 },
	{ productName: "Iphone 4", year: 2014 },
	{ productName: "Iphone 5", year: 2015 },
	{ productName: "Iphone 6", year: 2016 },
	{ productName: "Iphone 7", year: 2017 },
];

export const Page = styled(View)`
	padding: 40px 30px 0px 30px;
`;

export const Heading = styled(Text)`
	text-align: center;
	font-size: 20px;
	margin-bottom: 16px;
	font-weight: bold;
`;

// AppRegistry.registerComponent();
import UIButton from "./UIButton";
import DriverToolBar from "./DriverToolBar";

export { UIButton, DriverToolBar };
