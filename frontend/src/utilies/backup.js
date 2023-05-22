export function getTimeNow() {
	return new Date(Date.now()).toLocaleString("vi");
}

export function getShortAddress(address) {
	const strings = address.split(", ");
	return strings[0] + ", " + strings[1];
}

export function get7Days() {
	return [
		"02/05/2023",
		"03/05/2023",
		"04/05/2023",
		"05/05/2023",
		"06/05/2023",
		"07/05/2023",
		"08/05/2023",
		"09/05/2023",
	].reverse();
}

export function getListDrivers() {
	return [
		{ name: "Nguyen Van A", email: "driver01@gmail.com" },
		{ name: "Nguyen Van B", email: "driver02@gmail.com" },
		{ name: "Nguyen Van C", email: "driver03@gmail.com" },
		{ name: "Nguyen Van D", email: "driver04@gmail.com" },
		{ name: "Tran Van A", email: "driver05@gmail.com" },
		{ name: "Tran Van B", email: "driver06@gmail.com" },
		{ name: "Tran Van C", email: "driver07@gmail.com" },
		{ name: "Tran Van D", email: "driver08@gmail.com" },
	];
}
