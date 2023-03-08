const onOrdersData = [
	{
		_uid: 1,
		customerName: "Test 1",
		productName: "Product 1",
		deliverName: "Diliver 1",
		address: "Học Viện Báo chí và Tuyên truyền",
		coordinates: {
			latitude: 21.037950932035965,
			longitude: 105.78801309985293,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		delivered: "false",
	},
	{
		_uid: 2,
		customerName: "Test 2",
		productName: "Product 2",
		deliverName: "Diliver 1",
		address: "Đại học Thương mại",
		coordinates: {
			latitude: 21.03688113367763,
			longitude: 105.77501276857662,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		delivered: "false",
	},
	{
		_uid: 3,
		customerName: "Test 3",
		productName: "Product 3",
		deliverName: "Diliver 2",
		address: "Đại học Sư phạm Hà Nội",
		coordinates: {
			latitude: 21.0376565464535,
			longitude: 105.78337862624798,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		delivered: "false",
	},
	{
		_uid: 4,
		customerName: "Test 4",
		productName: "Product 4",
		deliverName: "Diliver 2",
		address: "Đại học Ngoại Ngữ",
		coordinates: {
			latitude: 21.04182361360483,
			longitude: 105.78116638784617,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		delivered: "false",
	},
];

const ordersData = [
	{
		customerName: "Test 1",
		productName: "Product 1",
		deliverName: "Diliver 1",
		address: "Học Viện Báo chí và Tuyên truyền",
		coordinates: {
			latitude: 21.037950932035965,
			longitude: 105.78801309985293,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
	},
	{
		customerName: "Test 2",
		productName: "Product 2",
		deliverName: "Diliver 1",
		address: "Đại học Thương mại",
		coordinates: {
			latitude: 21.03688113367763,
			longitude: 105.77501276857662,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
	},
	{
		customerName: "Test 3",
		productName: "Product 3",
		deliverName: "Diliver 2",
		address: "Đại học Sư phạm Hà Nội",
		coordinates: {
			latitude: 21.0376565464535,
			longitude: 105.78337862624798,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
	},
	{
		customerName: "Test 4",
		productName: "Product 4",
		deliverName: "Diliver 2",
		address: "Đại học Ngoại Ngữ",
		coordinates: {
			latitude: 21.04182361360483,
			longitude: 105.78116638784617,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
	},
	{
		customerName: "Test 5",
		productName: "Product 5",
		deliverName: "Diliver 5",
		address: "Công viên Nghĩa Đô",
		coordinates: {
			latitude: 21.04207029258441,
			longitude: 105.78695042637708,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.04207029258441, 105.78695042637708
	},
	{
		customerName: "Test 6",
		productName: "Product 6",
		deliverName: "Diliver 6",
		address:
			"Cà phê thư viện sách, N11A P. Trần Quý Kiên, Dịch Vọng, Cầu Giấy, Hà Nội, Vietnam",
		coordinates: {
			latitude: 21.03791320666469,
			longitude: 105.79255837934738,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.03791320666469, 105.79255837934738
	},
	{
		customerName: "Test 7",
		productName: "Product 7",
		deliverName: "Diliver 7",
		address: "Số 8, Tôn Thất Thuyết",
		coordinates: {
			latitude: 21.031882362811345,
			longitude: 105.78185230579773,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.031882362811345, 105.78185230579773
	},
	{
		customerName: "Test 8",
		productName: "Product 8",
		deliverName: "Diliver 7",
		address: "Sân bóng Đông Đô 2",
		coordinates: {
			latitude: 21.02539166233209,
			longitude: 105.78627454840549,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.02539166233209, 105.78627454840549
	},
	{
		customerName: "Test 9",
		productName: "Product 9",
		deliverName: "Diliver 8",
		address: "Tòa Discovery Cầu Giấy",
		coordinates: {
			latitude: 21.035544268916908,
			longitude: 105.79462402434051,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.035544268916908, 105.79462402434051
	},
	{
		customerName: "Test 10",
		productName: "Product 10",
		deliverName: "Diliver 2",
		address: "Nhà hàng Sentosa, 32 Đ. Nguyễn Văn Huyên, Quan Hoa, Cầu Giấy",
		coordinates: {
			latitude: 21.035968673097962,
			longitude: 105.79745088372172,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.035886614888376, 105.79726253450076 21.035968673097962, 105.79745088372172
	},
	{
		customerName: "Test 11",
		productName: "Product 11",
		deliverName: "Diliver 4",
		address: "18, Trần Thái Tông",
		coordinates: {
			latitude: 21.03585869767535,
			longitude: 105.7892165967139,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.03585869767535, 105.7892165967139
	},
	{
		customerName: "Test 12",
		productName: "Product 12",
		deliverName: "Diliver 6",
		address: "BI-A 77 Trần Quốc Vượng",
		coordinates: {
			latitude: 21.03483622316015,
			longitude: 105.78492993455721,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.03483622316015, 105.78492993455721
	},
	{
		customerName: "Test 13",
		productName: "Product 13",
		deliverName: "Diliver 5",
		address: "Lẩu ếch Dica, 47 Nguyễn Văn Huyên, Cầu Giấy, Hà Nội",
		coordinates: {
			latitude: 21.03560002752467,
			longitude: 105.79791206837882,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.03560002752467, 105.79791206837882
	},
	{
		customerName: "Test 14",
		productName: "Product 14",
		deliverName: "Diliver 4",
		address:
			"Hậu cần Kỹ thuật Bộ Công An, 80, P. Trần Quốc Hoàn, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
		coordinates: {
			latitude: 21.04182361360483,
			longitude: 105.78116638784617,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.041967244185347, 105.78592145926297
	},
	{
		customerName: "Test 15",
		productName: "Product 15",
		deliverName: "Diliver 10",
		address:
			"10B P. Phạm Tuấn Tài, Dịch Vọng Hậu, Cầu Giấy, Hà Nội 100000, Vietnam",
		coordinates: {
			latitude: 21.04279425968913,
			longitude: 105.78620058248092,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.04279425968913, 105.78620058248092
	},
	{
		customerName: "Test 16",
		productName: "Product 16",
		deliverName: "Diliver 9",
		address: "122 Hoàng Quốc Việt, Cổ Nhuế, Cầu Giấy, Hà Nội, Vietnam",
		coordinates: {
			latitude: 21.04678880733205,
			longitude: 105.79208677054635,
			latitudeDelta: 0.01,
			longitudeDelta: 0.01,
		},
		note: "",
		price: 125000,
		// 21.04678880733205, 105.79208677054635
	},
];

export default { onOrdersData, ordersData };
