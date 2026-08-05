/**
 * CampusHub Expanded Seed Data
 * Total Entries: 500 Products, 50 Stores, 200 Users, 300 Orders
 */

export const INITIAL_CATEGORIES = [
  {
    "key": "study",
    "name": "📚 Study Essentials",
    "icon": "📚",
    "isActive": true
  },
  {
    "key": "electronics",
    "name": "💻 Electronics & Accessories",
    "icon": "💻",
    "isActive": true
  },
  {
    "key": "food",
    "name": "🍜 Food & Snacks",
    "icon": "🍜",
    "isActive": true
  },
  {
    "key": "personal",
    "name": "🧴 Personal Care",
    "icon": "🧴",
    "isActive": true
  },
  {
    "key": "hostel",
    "name": "🛏 Hostel Essentials",
    "icon": "🛏",
    "isActive": true
  },
  {
    "key": "merchandise",
    "name": "🎓 College Merchandise",
    "icon": "🎓",
    "isActive": true
  },
  {
    "key": "marketplace",
    "name": "🔄 Second-Hand Market",
    "icon": "🔄",
    "isActive": true
  },
  {
    "key": "services",
    "name": "🛠 Campus Services",
    "icon": "🛠",
    "isActive": true
  },
  {
    "key": "combos",
    "name": "📦 Student Combo Packs",
    "icon": "📦",
    "isActive": true
  }
];

export const INITIAL_STORES = [
  {
    "id": "str-1",
    "storeName": "Campus Mart Express",
    "description": "Official verified campus store providing high quality electronics and express hostel room delivery.",
    "sellerId": "usr-seller-2",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-2",
    "storeName": "Hostel Night Canteen",
    "description": "Official verified campus store providing high quality food and express hostel room delivery.",
    "sellerId": "usr-seller-3",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-3",
    "storeName": "TechHub Accessories & Repairs",
    "description": "Official verified campus store providing high quality personal and express hostel room delivery.",
    "sellerId": "usr-seller-4",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-4",
    "storeName": "Express Stationery #4 - Hostel",
    "description": "Official verified campus store providing high quality hostel and express hostel room delivery.",
    "sellerId": "usr-seller-5",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-5",
    "storeName": "Elite Boutique #5 - College",
    "description": "Official verified campus store providing high quality college and express hostel room delivery.",
    "sellerId": "usr-seller-6",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-6",
    "storeName": "Metro Outlet #6 - Second-Hand",
    "description": "Official verified campus store providing high quality second-hand and express hostel room delivery.",
    "sellerId": "usr-seller-7",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-7",
    "storeName": "Prime Supply Co. #7 - Campus",
    "description": "Official verified campus store providing high quality campus and express hostel room delivery.",
    "sellerId": "usr-seller-8",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-8",
    "storeName": "Central Corner #8 - Student",
    "description": "Official verified campus store providing high quality student and express hostel room delivery.",
    "sellerId": "usr-seller-9",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-9",
    "storeName": "Global Market #9 - Study",
    "description": "Official verified campus store providing high quality study and express hostel room delivery.",
    "sellerId": "usr-seller-10",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.1,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-10",
    "storeName": "Campus Mart #10 - Electronics",
    "description": "Official verified campus store providing high quality electronics and express hostel room delivery.",
    "sellerId": "usr-seller-11",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-11",
    "storeName": "Hostel Store #11 - Food",
    "description": "Official verified campus store providing high quality food and express hostel room delivery.",
    "sellerId": "usr-seller-12",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-12",
    "storeName": "Student Canteen #12 - Personal",
    "description": "Official verified campus store providing high quality personal and express hostel room delivery.",
    "sellerId": "usr-seller-13",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-13",
    "storeName": "Academic Tech Hub #13 - Hostel",
    "description": "Official verified campus store providing high quality hostel and express hostel room delivery.",
    "sellerId": "usr-seller-14",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-14",
    "storeName": "Express Stationery #14 - College",
    "description": "Official verified campus store providing high quality college and express hostel room delivery.",
    "sellerId": "usr-seller-15",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-15",
    "storeName": "Elite Boutique #15 - Second-Hand",
    "description": "Official verified campus store providing high quality second-hand and express hostel room delivery.",
    "sellerId": "usr-seller-16",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": false,
    "status": "Pending"
  },
  {
    "id": "str-16",
    "storeName": "Metro Outlet #16 - Campus",
    "description": "Official verified campus store providing high quality campus and express hostel room delivery.",
    "sellerId": "usr-seller-17",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-17",
    "storeName": "Prime Supply Co. #17 - Student",
    "description": "Official verified campus store providing high quality student and express hostel room delivery.",
    "sellerId": "usr-seller-18",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-18",
    "storeName": "Central Corner #18 - Study",
    "description": "Official verified campus store providing high quality study and express hostel room delivery.",
    "sellerId": "usr-seller-19",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.1,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-19",
    "storeName": "Global Market #19 - Electronics",
    "description": "Official verified campus store providing high quality electronics and express hostel room delivery.",
    "sellerId": "usr-seller-20",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-20",
    "storeName": "Campus Mart #20 - Food",
    "description": "Official verified campus store providing high quality food and express hostel room delivery.",
    "sellerId": "usr-seller-21",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-21",
    "storeName": "Hostel Store #21 - Personal",
    "description": "Official verified campus store providing high quality personal and express hostel room delivery.",
    "sellerId": "usr-seller-22",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-22",
    "storeName": "Student Canteen #22 - Hostel",
    "description": "Official verified campus store providing high quality hostel and express hostel room delivery.",
    "sellerId": "usr-seller-23",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-23",
    "storeName": "Academic Tech Hub #23 - College",
    "description": "Official verified campus store providing high quality college and express hostel room delivery.",
    "sellerId": "usr-seller-24",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-24",
    "storeName": "Express Stationery #24 - Second-Hand",
    "description": "Official verified campus store providing high quality second-hand and express hostel room delivery.",
    "sellerId": "usr-seller-25",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-25",
    "storeName": "Elite Boutique #25 - Campus",
    "description": "Official verified campus store providing high quality campus and express hostel room delivery.",
    "sellerId": "usr-seller-1",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-26",
    "storeName": "Metro Outlet #26 - Student",
    "description": "Official verified campus store providing high quality student and express hostel room delivery.",
    "sellerId": "usr-seller-2",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-27",
    "storeName": "Prime Supply Co. #27 - Study",
    "description": "Official verified campus store providing high quality study and express hostel room delivery.",
    "sellerId": "usr-seller-3",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.1,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-28",
    "storeName": "Central Corner #28 - Electronics",
    "description": "Official verified campus store providing high quality electronics and express hostel room delivery.",
    "sellerId": "usr-seller-4",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-29",
    "storeName": "Global Market #29 - Food",
    "description": "Official verified campus store providing high quality food and express hostel room delivery.",
    "sellerId": "usr-seller-5",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-30",
    "storeName": "Campus Mart #30 - Personal",
    "description": "Official verified campus store providing high quality personal and express hostel room delivery.",
    "sellerId": "usr-seller-6",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": false,
    "status": "Pending"
  },
  {
    "id": "str-31",
    "storeName": "Hostel Store #31 - Hostel",
    "description": "Official verified campus store providing high quality hostel and express hostel room delivery.",
    "sellerId": "usr-seller-7",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-32",
    "storeName": "Student Canteen #32 - College",
    "description": "Official verified campus store providing high quality college and express hostel room delivery.",
    "sellerId": "usr-seller-8",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-33",
    "storeName": "Academic Tech Hub #33 - Second-Hand",
    "description": "Official verified campus store providing high quality second-hand and express hostel room delivery.",
    "sellerId": "usr-seller-9",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-34",
    "storeName": "Express Stationery #34 - Campus",
    "description": "Official verified campus store providing high quality campus and express hostel room delivery.",
    "sellerId": "usr-seller-10",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-35",
    "storeName": "Elite Boutique #35 - Student",
    "description": "Official verified campus store providing high quality student and express hostel room delivery.",
    "sellerId": "usr-seller-11",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-36",
    "storeName": "Metro Outlet #36 - Study",
    "description": "Official verified campus store providing high quality study and express hostel room delivery.",
    "sellerId": "usr-seller-12",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.1,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-37",
    "storeName": "Prime Supply Co. #37 - Electronics",
    "description": "Official verified campus store providing high quality electronics and express hostel room delivery.",
    "sellerId": "usr-seller-13",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-38",
    "storeName": "Central Corner #38 - Food",
    "description": "Official verified campus store providing high quality food and express hostel room delivery.",
    "sellerId": "usr-seller-14",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-39",
    "storeName": "Global Market #39 - Personal",
    "description": "Official verified campus store providing high quality personal and express hostel room delivery.",
    "sellerId": "usr-seller-15",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-40",
    "storeName": "Campus Mart #40 - Hostel",
    "description": "Official verified campus store providing high quality hostel and express hostel room delivery.",
    "sellerId": "usr-seller-16",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-41",
    "storeName": "Hostel Store #41 - College",
    "description": "Official verified campus store providing high quality college and express hostel room delivery.",
    "sellerId": "usr-seller-17",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-42",
    "storeName": "Student Canteen #42 - Second-Hand",
    "description": "Official verified campus store providing high quality second-hand and express hostel room delivery.",
    "sellerId": "usr-seller-18",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-43",
    "storeName": "Academic Tech Hub #43 - Campus",
    "description": "Official verified campus store providing high quality campus and express hostel room delivery.",
    "sellerId": "usr-seller-19",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-44",
    "storeName": "Express Stationery #44 - Student",
    "description": "Official verified campus store providing high quality student and express hostel room delivery.",
    "sellerId": "usr-seller-20",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-45",
    "storeName": "Elite Boutique #45 - Study",
    "description": "Official verified campus store providing high quality study and express hostel room delivery.",
    "sellerId": "usr-seller-21",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.1,
    "verificationStatus": false,
    "status": "Pending"
  },
  {
    "id": "str-46",
    "storeName": "Metro Outlet #46 - Electronics",
    "description": "Official verified campus store providing high quality electronics and express hostel room delivery.",
    "sellerId": "usr-seller-22",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-47",
    "storeName": "Prime Supply Co. #47 - Food",
    "description": "Official verified campus store providing high quality food and express hostel room delivery.",
    "sellerId": "usr-seller-23",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-48",
    "storeName": "Central Corner #48 - Personal",
    "description": "Official verified campus store providing high quality personal and express hostel room delivery.",
    "sellerId": "usr-seller-24",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-49",
    "storeName": "Global Market #49 - Hostel",
    "description": "Official verified campus store providing high quality hostel and express hostel room delivery.",
    "sellerId": "usr-seller-25",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-50",
    "storeName": "Campus Mart #50 - College",
    "description": "Official verified campus store providing high quality college and express hostel room delivery.",
    "sellerId": "usr-seller-1",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": false,
    "status": "Active"
  }
];

export const INITIAL_USERS = [
  {
    "id": "usr-student-1",
    "name": "Alex Johnson",
    "email": "alex.student@campushub.edu",
    "password": "$2a$10$encryptedPasswordHashStudent123",
    "phone": "+91 98765 43210",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "302",
    "createdAt": "2026-01-15T08:00:00.000Z"
  },
  {
    "id": "usr-seller-1",
    "name": "Campus Tech Supplies",
    "email": "seller.tech@campushub.edu",
    "password": "$2a$10$encryptedPasswordHashSeller456",
    "phone": "+91 98123 45678",
    "role": "Seller",
    "hostelBlock": "Market Complex",
    "roomNumber": "Shop #12",
    "createdAt": "2026-01-10T10:00:00.000Z"
  },
  {
    "id": "usr-admin-1",
    "name": "Super Admin",
    "email": "admin@campushub.edu",
    "password": "$2a$10$encryptedPasswordHashAdmin789",
    "phone": "+91 90000 00000",
    "role": "Admin",
    "hostelBlock": "Admin Block",
    "roomNumber": "A-101",
    "createdAt": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "usr-4",
    "name": "Aditya Bhat",
    "email": "aditya.bhat4@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_4",
    "phone": "+91 9800004936",
    "role": "Seller",
    "hostelBlock": "Block H-5",
    "roomNumber": "505",
    "createdAt": "2026-01-05T04:34:00.000Z"
  },
  {
    "id": "usr-5",
    "name": "Sneha Kulkarni",
    "email": "sneha.kulkarni5@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_5",
    "phone": "+91 9800006170",
    "role": "Seller",
    "hostelBlock": "Block H-6",
    "roomNumber": "106",
    "createdAt": "2026-01-06T04:35:00.000Z"
  },
  {
    "id": "usr-6",
    "name": "Rahul Saxena",
    "email": "rahul.saxena6@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_6",
    "phone": "+91 9800007404",
    "role": "Seller",
    "hostelBlock": "Block H-7",
    "roomNumber": "207",
    "createdAt": "2026-01-07T04:36:00.000Z"
  },
  {
    "id": "usr-7",
    "name": "Kavya Kapoor",
    "email": "kavya.kapoor7@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_7",
    "phone": "+91 9800008638",
    "role": "Seller",
    "hostelBlock": "Block H-8",
    "roomNumber": "308",
    "createdAt": "2026-01-08T04:37:00.000Z"
  },
  {
    "id": "usr-8",
    "name": "Vikram Rathore",
    "email": "vikram.rathore8@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_8",
    "phone": "+91 9800009872",
    "role": "Seller",
    "hostelBlock": "Block H-9",
    "roomNumber": "409",
    "createdAt": "2026-01-09T04:38:00.000Z"
  },
  {
    "id": "usr-9",
    "name": "Neha Patel",
    "email": "neha.patel9@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_9",
    "phone": "+91 9800011106",
    "role": "Seller",
    "hostelBlock": "Block H-10",
    "roomNumber": "501",
    "createdAt": "2026-01-10T04:39:00.000Z"
  },
  {
    "id": "usr-10",
    "name": "Siddharth Kumar",
    "email": "siddharth.kumar10@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_10",
    "phone": "+91 9800012340",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "102",
    "createdAt": "2026-01-11T04:40:00.000Z"
  },
  {
    "id": "usr-11",
    "name": "Meera Joshi",
    "email": "meera.joshi11@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_11",
    "phone": "+91 9800013574",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "203",
    "createdAt": "2026-01-12T04:41:00.000Z"
  },
  {
    "id": "usr-12",
    "name": "Dev Rao",
    "email": "dev.rao12@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_12",
    "phone": "+91 9800014808",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "304",
    "createdAt": "2026-01-13T04:42:00.000Z"
  },
  {
    "id": "usr-13",
    "name": "Ishita Mehta",
    "email": "ishita.mehta13@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_13",
    "phone": "+91 9800016042",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "405",
    "createdAt": "2026-01-14T04:43:00.000Z"
  },
  {
    "id": "usr-14",
    "name": "Arjun Dutta",
    "email": "arjun.dutta14@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_14",
    "phone": "+91 9800017276",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "506",
    "createdAt": "2026-01-15T04:44:00.000Z"
  },
  {
    "id": "usr-15",
    "name": "Riya Choudhury",
    "email": "riya.choudhury15@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_15",
    "phone": "+91 9800018510",
    "role": "Seller",
    "hostelBlock": "Block H-1",
    "roomNumber": "107",
    "createdAt": "2026-01-16T04:45:00.000Z"
  },
  {
    "id": "usr-16",
    "name": "Karan Trivedi",
    "email": "karan.trivedi16@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_16",
    "phone": "+91 9800019744",
    "role": "Seller",
    "hostelBlock": "Block H-2",
    "roomNumber": "208",
    "createdAt": "2026-01-17T04:46:00.000Z"
  },
  {
    "id": "usr-17",
    "name": "Tanvi Verma",
    "email": "tanvi.verma17@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_17",
    "phone": "+91 9800020978",
    "role": "Seller",
    "hostelBlock": "Block H-3",
    "roomNumber": "309",
    "createdAt": "2026-01-18T04:47:00.000Z"
  },
  {
    "id": "usr-18",
    "name": "Varun Singh",
    "email": "varun.singh18@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_18",
    "phone": "+91 9800022212",
    "role": "Seller",
    "hostelBlock": "Block H-4",
    "roomNumber": "401",
    "createdAt": "2026-01-19T04:48:00.000Z"
  },
  {
    "id": "usr-19",
    "name": "Pooja Nair",
    "email": "pooja.nair19@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_19",
    "phone": "+91 9800023446",
    "role": "Seller",
    "hostelBlock": "Block H-5",
    "roomNumber": "502",
    "createdAt": "2026-01-20T04:49:00.000Z"
  },
  {
    "id": "usr-20",
    "name": "Yash Malhotra",
    "email": "yash.malhotra20@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_20",
    "phone": "+91 9800024680",
    "role": "Seller",
    "hostelBlock": "Block H-6",
    "roomNumber": "103",
    "createdAt": "2026-01-21T04:50:00.000Z"
  },
  {
    "id": "usr-21",
    "name": "Shruti Deshmukh",
    "email": "shruti.deshmukh21@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_21",
    "phone": "+91 9800025914",
    "role": "Seller",
    "hostelBlock": "Block H-7",
    "roomNumber": "204",
    "createdAt": "2026-01-22T04:51:00.000Z"
  },
  {
    "id": "usr-22",
    "name": "Kabir Sen",
    "email": "kabir.sen22@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_22",
    "phone": "+91 9800027148",
    "role": "Seller",
    "hostelBlock": "Block H-8",
    "roomNumber": "305",
    "createdAt": "2026-01-23T04:52:00.000Z"
  },
  {
    "id": "usr-23",
    "name": "Simran Agrawal",
    "email": "simran.agrawal23@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_23",
    "phone": "+91 9800028382",
    "role": "Seller",
    "hostelBlock": "Block H-9",
    "roomNumber": "406",
    "createdAt": "2026-01-24T04:53:00.000Z"
  },
  {
    "id": "usr-24",
    "name": "Nikhil Bhasin",
    "email": "nikhil.bhasin24@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_24",
    "phone": "+91 9800029616",
    "role": "Seller",
    "hostelBlock": "Block H-10",
    "roomNumber": "507",
    "createdAt": "2026-01-25T04:54:00.000Z"
  },
  {
    "id": "usr-25",
    "name": "Diya Sharma",
    "email": "diya.sharma25@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_25",
    "phone": "+91 9800030850",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "108",
    "createdAt": "2026-01-26T04:55:00.000Z"
  },
  {
    "id": "usr-26",
    "name": "Amit Gupta",
    "email": "amit.gupta26@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_26",
    "phone": "+91 9800032084",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "209",
    "createdAt": "2026-01-27T04:56:00.000Z"
  },
  {
    "id": "usr-27",
    "name": "Divya Reddy",
    "email": "divya.reddy27@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_27",
    "phone": "+91 9800033318",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "301",
    "createdAt": "2026-01-28T04:57:00.000Z"
  },
  {
    "id": "usr-28",
    "name": "Gaurav Chopra",
    "email": "gaurav.chopra28@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_28",
    "phone": "+91 9800034552",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "402",
    "createdAt": "2026-01-01T04:58:00.000Z"
  },
  {
    "id": "usr-29",
    "name": "Anushka Bhat",
    "email": "anushka.bhat29@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_29",
    "phone": "+91 9800035786",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "503",
    "createdAt": "2026-01-02T04:59:00.000Z"
  },
  {
    "id": "usr-30",
    "name": "Manish Kulkarni",
    "email": "manish.kulkarni30@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_30",
    "phone": "+91 9800037020",
    "role": "Seller",
    "hostelBlock": "Block H-1",
    "roomNumber": "104",
    "createdAt": "2026-01-03T05:00:00.000Z"
  },
  {
    "id": "usr-31",
    "name": "Ritu Saxena",
    "email": "ritu.saxena31@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_31",
    "phone": "+91 9800038254",
    "role": "Admin",
    "hostelBlock": "Block H-2",
    "roomNumber": "205",
    "createdAt": "2026-01-04T05:01:00.000Z"
  },
  {
    "id": "usr-32",
    "name": "Sameer Kapoor",
    "email": "sameer.kapoor32@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_32",
    "phone": "+91 9800039488",
    "role": "Admin",
    "hostelBlock": "Block H-3",
    "roomNumber": "306",
    "createdAt": "2026-01-05T05:02:00.000Z"
  },
  {
    "id": "usr-33",
    "name": "Nisha Rathore",
    "email": "nisha.rathore33@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_33",
    "phone": "+91 9800040722",
    "role": "Admin",
    "hostelBlock": "Block H-4",
    "roomNumber": "407",
    "createdAt": "2026-01-06T05:03:00.000Z"
  },
  {
    "id": "usr-34",
    "name": "Tanya Patel",
    "email": "tanya.patel34@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_34",
    "phone": "+91 9800041956",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "508",
    "createdAt": "2026-01-07T05:04:00.000Z"
  },
  {
    "id": "usr-35",
    "name": "Abhinav Kumar",
    "email": "abhinav.kumar35@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_35",
    "phone": "+91 9800043190",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "109",
    "createdAt": "2026-01-08T05:05:00.000Z"
  },
  {
    "id": "usr-36",
    "name": "Shweta Joshi",
    "email": "shweta.joshi36@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_36",
    "phone": "+91 9800044424",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "201",
    "createdAt": "2026-01-09T05:06:00.000Z"
  },
  {
    "id": "usr-37",
    "name": "Pranav Rao",
    "email": "pranav.rao37@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_37",
    "phone": "+91 9800045658",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "302",
    "createdAt": "2026-01-10T05:07:00.000Z"
  },
  {
    "id": "usr-38",
    "name": "Bhavna Mehta",
    "email": "bhavna.mehta38@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_38",
    "phone": "+91 9800046892",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "403",
    "createdAt": "2026-01-11T05:08:00.000Z"
  },
  {
    "id": "usr-39",
    "name": "Tarun Dutta",
    "email": "tarun.dutta39@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_39",
    "phone": "+91 9800048126",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "504",
    "createdAt": "2026-01-12T05:09:00.000Z"
  },
  {
    "id": "usr-40",
    "name": "Aarav Choudhury",
    "email": "aarav.choudhury40@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_40",
    "phone": "+91 9800049360",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "105",
    "createdAt": "2026-01-13T05:10:00.000Z"
  },
  {
    "id": "usr-41",
    "name": "Ananya Trivedi",
    "email": "ananya.trivedi41@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_41",
    "phone": "+91 9800050594",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "206",
    "createdAt": "2026-01-14T05:11:00.000Z"
  },
  {
    "id": "usr-42",
    "name": "Rohan Verma",
    "email": "rohan.verma42@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_42",
    "phone": "+91 9800051828",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "307",
    "createdAt": "2026-01-15T05:12:00.000Z"
  },
  {
    "id": "usr-43",
    "name": "Priya Singh",
    "email": "priya.singh43@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_43",
    "phone": "+91 9800053062",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "408",
    "createdAt": "2026-01-16T05:13:00.000Z"
  },
  {
    "id": "usr-44",
    "name": "Aditya Nair",
    "email": "aditya.nair44@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_44",
    "phone": "+91 9800054296",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "509",
    "createdAt": "2026-01-17T05:14:00.000Z"
  },
  {
    "id": "usr-45",
    "name": "Sneha Malhotra",
    "email": "sneha.malhotra45@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_45",
    "phone": "+91 9800055530",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "101",
    "createdAt": "2026-01-18T05:15:00.000Z"
  },
  {
    "id": "usr-46",
    "name": "Rahul Deshmukh",
    "email": "rahul.deshmukh46@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_46",
    "phone": "+91 9800056764",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "202",
    "createdAt": "2026-01-19T05:16:00.000Z"
  },
  {
    "id": "usr-47",
    "name": "Kavya Sen",
    "email": "kavya.sen47@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_47",
    "phone": "+91 9800057998",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "303",
    "createdAt": "2026-01-20T05:17:00.000Z"
  },
  {
    "id": "usr-48",
    "name": "Vikram Agrawal",
    "email": "vikram.agrawal48@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_48",
    "phone": "+91 9800059232",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "404",
    "createdAt": "2026-01-21T05:18:00.000Z"
  },
  {
    "id": "usr-49",
    "name": "Neha Bhasin",
    "email": "neha.bhasin49@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_49",
    "phone": "+91 9800060466",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "505",
    "createdAt": "2026-01-22T05:19:00.000Z"
  },
  {
    "id": "usr-50",
    "name": "Siddharth Sharma",
    "email": "siddharth.sharma50@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_50",
    "phone": "+91 9800061700",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "106",
    "createdAt": "2026-01-23T05:20:00.000Z"
  },
  {
    "id": "usr-51",
    "name": "Meera Gupta",
    "email": "meera.gupta51@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_51",
    "phone": "+91 9800062934",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "207",
    "createdAt": "2026-01-24T05:21:00.000Z"
  },
  {
    "id": "usr-52",
    "name": "Dev Reddy",
    "email": "dev.reddy52@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_52",
    "phone": "+91 9800064168",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "308",
    "createdAt": "2026-01-25T05:22:00.000Z"
  },
  {
    "id": "usr-53",
    "name": "Ishita Chopra",
    "email": "ishita.chopra53@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_53",
    "phone": "+91 9800065402",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "409",
    "createdAt": "2026-01-26T05:23:00.000Z"
  },
  {
    "id": "usr-54",
    "name": "Arjun Bhat",
    "email": "arjun.bhat54@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_54",
    "phone": "+91 9800066636",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "501",
    "createdAt": "2026-01-27T05:24:00.000Z"
  },
  {
    "id": "usr-55",
    "name": "Riya Kulkarni",
    "email": "riya.kulkarni55@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_55",
    "phone": "+91 9800067870",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "102",
    "createdAt": "2026-01-28T05:25:00.000Z"
  },
  {
    "id": "usr-56",
    "name": "Karan Saxena",
    "email": "karan.saxena56@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_56",
    "phone": "+91 9800069104",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "203",
    "createdAt": "2026-01-01T05:26:00.000Z"
  },
  {
    "id": "usr-57",
    "name": "Tanvi Kapoor",
    "email": "tanvi.kapoor57@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_57",
    "phone": "+91 9800070338",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "304",
    "createdAt": "2026-01-02T05:27:00.000Z"
  },
  {
    "id": "usr-58",
    "name": "Varun Rathore",
    "email": "varun.rathore58@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_58",
    "phone": "+91 9800071572",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "405",
    "createdAt": "2026-01-03T05:28:00.000Z"
  },
  {
    "id": "usr-59",
    "name": "Pooja Patel",
    "email": "pooja.patel59@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_59",
    "phone": "+91 9800072806",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "506",
    "createdAt": "2026-01-04T05:29:00.000Z"
  },
  {
    "id": "usr-60",
    "name": "Yash Kumar",
    "email": "yash.kumar60@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_60",
    "phone": "+91 9800074040",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "107",
    "createdAt": "2026-01-05T04:30:00.000Z"
  },
  {
    "id": "usr-61",
    "name": "Shruti Joshi",
    "email": "shruti.joshi61@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_61",
    "phone": "+91 9800075274",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "208",
    "createdAt": "2026-01-06T04:31:00.000Z"
  },
  {
    "id": "usr-62",
    "name": "Kabir Rao",
    "email": "kabir.rao62@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_62",
    "phone": "+91 9800076508",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "309",
    "createdAt": "2026-01-07T04:32:00.000Z"
  },
  {
    "id": "usr-63",
    "name": "Simran Mehta",
    "email": "simran.mehta63@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_63",
    "phone": "+91 9800077742",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "401",
    "createdAt": "2026-01-08T04:33:00.000Z"
  },
  {
    "id": "usr-64",
    "name": "Nikhil Dutta",
    "email": "nikhil.dutta64@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_64",
    "phone": "+91 9800078976",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "502",
    "createdAt": "2026-01-09T04:34:00.000Z"
  },
  {
    "id": "usr-65",
    "name": "Diya Choudhury",
    "email": "diya.choudhury65@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_65",
    "phone": "+91 9800080210",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "103",
    "createdAt": "2026-01-10T04:35:00.000Z"
  },
  {
    "id": "usr-66",
    "name": "Amit Trivedi",
    "email": "amit.trivedi66@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_66",
    "phone": "+91 9800081444",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "204",
    "createdAt": "2026-01-11T04:36:00.000Z"
  },
  {
    "id": "usr-67",
    "name": "Divya Verma",
    "email": "divya.verma67@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_67",
    "phone": "+91 9800082678",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "305",
    "createdAt": "2026-01-12T04:37:00.000Z"
  },
  {
    "id": "usr-68",
    "name": "Gaurav Singh",
    "email": "gaurav.singh68@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_68",
    "phone": "+91 9800083912",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "406",
    "createdAt": "2026-01-13T04:38:00.000Z"
  },
  {
    "id": "usr-69",
    "name": "Anushka Nair",
    "email": "anushka.nair69@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_69",
    "phone": "+91 9800085146",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "507",
    "createdAt": "2026-01-14T04:39:00.000Z"
  },
  {
    "id": "usr-70",
    "name": "Manish Malhotra",
    "email": "manish.malhotra70@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_70",
    "phone": "+91 9800086380",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "108",
    "createdAt": "2026-01-15T04:40:00.000Z"
  },
  {
    "id": "usr-71",
    "name": "Ritu Deshmukh",
    "email": "ritu.deshmukh71@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_71",
    "phone": "+91 9800087614",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "209",
    "createdAt": "2026-01-16T04:41:00.000Z"
  },
  {
    "id": "usr-72",
    "name": "Sameer Sen",
    "email": "sameer.sen72@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_72",
    "phone": "+91 9800088848",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "301",
    "createdAt": "2026-01-17T04:42:00.000Z"
  },
  {
    "id": "usr-73",
    "name": "Nisha Agrawal",
    "email": "nisha.agrawal73@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_73",
    "phone": "+91 9800090082",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "402",
    "createdAt": "2026-01-18T04:43:00.000Z"
  },
  {
    "id": "usr-74",
    "name": "Tanya Bhasin",
    "email": "tanya.bhasin74@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_74",
    "phone": "+91 9800091316",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "503",
    "createdAt": "2026-01-19T04:44:00.000Z"
  },
  {
    "id": "usr-75",
    "name": "Abhinav Sharma",
    "email": "abhinav.sharma75@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_75",
    "phone": "+91 9800092550",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "104",
    "createdAt": "2026-01-20T04:45:00.000Z"
  },
  {
    "id": "usr-76",
    "name": "Shweta Gupta",
    "email": "shweta.gupta76@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_76",
    "phone": "+91 9800093784",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "205",
    "createdAt": "2026-01-21T04:46:00.000Z"
  },
  {
    "id": "usr-77",
    "name": "Pranav Reddy",
    "email": "pranav.reddy77@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_77",
    "phone": "+91 9800095018",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "306",
    "createdAt": "2026-01-22T04:47:00.000Z"
  },
  {
    "id": "usr-78",
    "name": "Bhavna Chopra",
    "email": "bhavna.chopra78@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_78",
    "phone": "+91 9800096252",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "407",
    "createdAt": "2026-01-23T04:48:00.000Z"
  },
  {
    "id": "usr-79",
    "name": "Tarun Bhat",
    "email": "tarun.bhat79@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_79",
    "phone": "+91 9800097486",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "508",
    "createdAt": "2026-01-24T04:49:00.000Z"
  },
  {
    "id": "usr-80",
    "name": "Aarav Kulkarni",
    "email": "aarav.kulkarni80@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_80",
    "phone": "+91 9800098720",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "109",
    "createdAt": "2026-01-25T04:50:00.000Z"
  },
  {
    "id": "usr-81",
    "name": "Ananya Saxena",
    "email": "ananya.saxena81@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_81",
    "phone": "+91 9800099954",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "201",
    "createdAt": "2026-01-26T04:51:00.000Z"
  },
  {
    "id": "usr-82",
    "name": "Rohan Kapoor",
    "email": "rohan.kapoor82@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_82",
    "phone": "+91 9800101188",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "302",
    "createdAt": "2026-01-27T04:52:00.000Z"
  },
  {
    "id": "usr-83",
    "name": "Priya Rathore",
    "email": "priya.rathore83@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_83",
    "phone": "+91 9800102422",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "403",
    "createdAt": "2026-01-28T04:53:00.000Z"
  },
  {
    "id": "usr-84",
    "name": "Aditya Patel",
    "email": "aditya.patel84@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_84",
    "phone": "+91 9800103656",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "504",
    "createdAt": "2026-01-01T04:54:00.000Z"
  },
  {
    "id": "usr-85",
    "name": "Sneha Kumar",
    "email": "sneha.kumar85@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_85",
    "phone": "+91 9800104890",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "105",
    "createdAt": "2026-01-02T04:55:00.000Z"
  },
  {
    "id": "usr-86",
    "name": "Rahul Joshi",
    "email": "rahul.joshi86@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_86",
    "phone": "+91 9800106124",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "206",
    "createdAt": "2026-01-03T04:56:00.000Z"
  },
  {
    "id": "usr-87",
    "name": "Kavya Rao",
    "email": "kavya.rao87@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_87",
    "phone": "+91 9800107358",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "307",
    "createdAt": "2026-01-04T04:57:00.000Z"
  },
  {
    "id": "usr-88",
    "name": "Vikram Mehta",
    "email": "vikram.mehta88@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_88",
    "phone": "+91 9800108592",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "408",
    "createdAt": "2026-01-05T04:58:00.000Z"
  },
  {
    "id": "usr-89",
    "name": "Neha Dutta",
    "email": "neha.dutta89@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_89",
    "phone": "+91 9800109826",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "509",
    "createdAt": "2026-01-06T04:59:00.000Z"
  },
  {
    "id": "usr-90",
    "name": "Siddharth Choudhury",
    "email": "siddharth.choudhury90@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_90",
    "phone": "+91 9800111060",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "101",
    "createdAt": "2026-01-07T05:00:00.000Z"
  },
  {
    "id": "usr-91",
    "name": "Meera Trivedi",
    "email": "meera.trivedi91@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_91",
    "phone": "+91 9800112294",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "202",
    "createdAt": "2026-01-08T05:01:00.000Z"
  },
  {
    "id": "usr-92",
    "name": "Dev Verma",
    "email": "dev.verma92@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_92",
    "phone": "+91 9800113528",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "303",
    "createdAt": "2026-01-09T05:02:00.000Z"
  },
  {
    "id": "usr-93",
    "name": "Ishita Singh",
    "email": "ishita.singh93@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_93",
    "phone": "+91 9800114762",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "404",
    "createdAt": "2026-01-10T05:03:00.000Z"
  },
  {
    "id": "usr-94",
    "name": "Arjun Nair",
    "email": "arjun.nair94@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_94",
    "phone": "+91 9800115996",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "505",
    "createdAt": "2026-01-11T05:04:00.000Z"
  },
  {
    "id": "usr-95",
    "name": "Riya Malhotra",
    "email": "riya.malhotra95@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_95",
    "phone": "+91 9800117230",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "106",
    "createdAt": "2026-01-12T05:05:00.000Z"
  },
  {
    "id": "usr-96",
    "name": "Karan Deshmukh",
    "email": "karan.deshmukh96@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_96",
    "phone": "+91 9800118464",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "207",
    "createdAt": "2026-01-13T05:06:00.000Z"
  },
  {
    "id": "usr-97",
    "name": "Tanvi Sen",
    "email": "tanvi.sen97@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_97",
    "phone": "+91 9800119698",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "308",
    "createdAt": "2026-01-14T05:07:00.000Z"
  },
  {
    "id": "usr-98",
    "name": "Varun Agrawal",
    "email": "varun.agrawal98@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_98",
    "phone": "+91 9800120932",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "409",
    "createdAt": "2026-01-15T05:08:00.000Z"
  },
  {
    "id": "usr-99",
    "name": "Pooja Bhasin",
    "email": "pooja.bhasin99@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_99",
    "phone": "+91 9800122166",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "501",
    "createdAt": "2026-01-16T05:09:00.000Z"
  },
  {
    "id": "usr-100",
    "name": "Yash Sharma",
    "email": "yash.sharma100@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_100",
    "phone": "+91 9800123400",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "102",
    "createdAt": "2026-01-17T05:10:00.000Z"
  },
  {
    "id": "usr-101",
    "name": "Shruti Gupta",
    "email": "shruti.gupta101@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_101",
    "phone": "+91 9800124634",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "203",
    "createdAt": "2026-01-18T05:11:00.000Z"
  },
  {
    "id": "usr-102",
    "name": "Kabir Reddy",
    "email": "kabir.reddy102@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_102",
    "phone": "+91 9800125868",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "304",
    "createdAt": "2026-01-19T05:12:00.000Z"
  },
  {
    "id": "usr-103",
    "name": "Simran Chopra",
    "email": "simran.chopra103@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_103",
    "phone": "+91 9800127102",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "405",
    "createdAt": "2026-01-20T05:13:00.000Z"
  },
  {
    "id": "usr-104",
    "name": "Nikhil Bhat",
    "email": "nikhil.bhat104@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_104",
    "phone": "+91 9800128336",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "506",
    "createdAt": "2026-01-21T05:14:00.000Z"
  },
  {
    "id": "usr-105",
    "name": "Diya Kulkarni",
    "email": "diya.kulkarni105@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_105",
    "phone": "+91 9800129570",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "107",
    "createdAt": "2026-01-22T05:15:00.000Z"
  },
  {
    "id": "usr-106",
    "name": "Amit Saxena",
    "email": "amit.saxena106@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_106",
    "phone": "+91 9800130804",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "208",
    "createdAt": "2026-01-23T05:16:00.000Z"
  },
  {
    "id": "usr-107",
    "name": "Divya Kapoor",
    "email": "divya.kapoor107@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_107",
    "phone": "+91 9800132038",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "309",
    "createdAt": "2026-01-24T05:17:00.000Z"
  },
  {
    "id": "usr-108",
    "name": "Gaurav Rathore",
    "email": "gaurav.rathore108@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_108",
    "phone": "+91 9800133272",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "401",
    "createdAt": "2026-01-25T05:18:00.000Z"
  },
  {
    "id": "usr-109",
    "name": "Anushka Patel",
    "email": "anushka.patel109@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_109",
    "phone": "+91 9800134506",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "502",
    "createdAt": "2026-01-26T05:19:00.000Z"
  },
  {
    "id": "usr-110",
    "name": "Manish Kumar",
    "email": "manish.kumar110@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_110",
    "phone": "+91 9800135740",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "103",
    "createdAt": "2026-01-27T05:20:00.000Z"
  },
  {
    "id": "usr-111",
    "name": "Ritu Joshi",
    "email": "ritu.joshi111@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_111",
    "phone": "+91 9800136974",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "204",
    "createdAt": "2026-01-28T05:21:00.000Z"
  },
  {
    "id": "usr-112",
    "name": "Sameer Rao",
    "email": "sameer.rao112@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_112",
    "phone": "+91 9800138208",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "305",
    "createdAt": "2026-01-01T05:22:00.000Z"
  },
  {
    "id": "usr-113",
    "name": "Nisha Mehta",
    "email": "nisha.mehta113@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_113",
    "phone": "+91 9800139442",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "406",
    "createdAt": "2026-01-02T05:23:00.000Z"
  },
  {
    "id": "usr-114",
    "name": "Tanya Dutta",
    "email": "tanya.dutta114@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_114",
    "phone": "+91 9800140676",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "507",
    "createdAt": "2026-01-03T05:24:00.000Z"
  },
  {
    "id": "usr-115",
    "name": "Abhinav Choudhury",
    "email": "abhinav.choudhury115@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_115",
    "phone": "+91 9800141910",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "108",
    "createdAt": "2026-01-04T05:25:00.000Z"
  },
  {
    "id": "usr-116",
    "name": "Shweta Trivedi",
    "email": "shweta.trivedi116@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_116",
    "phone": "+91 9800143144",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "209",
    "createdAt": "2026-01-05T05:26:00.000Z"
  },
  {
    "id": "usr-117",
    "name": "Pranav Verma",
    "email": "pranav.verma117@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_117",
    "phone": "+91 9800144378",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "301",
    "createdAt": "2026-01-06T05:27:00.000Z"
  },
  {
    "id": "usr-118",
    "name": "Bhavna Singh",
    "email": "bhavna.singh118@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_118",
    "phone": "+91 9800145612",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "402",
    "createdAt": "2026-01-07T05:28:00.000Z"
  },
  {
    "id": "usr-119",
    "name": "Tarun Nair",
    "email": "tarun.nair119@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_119",
    "phone": "+91 9800146846",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "503",
    "createdAt": "2026-01-08T05:29:00.000Z"
  },
  {
    "id": "usr-120",
    "name": "Aarav Malhotra",
    "email": "aarav.malhotra120@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_120",
    "phone": "+91 9800148080",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "104",
    "createdAt": "2026-01-09T04:30:00.000Z"
  },
  {
    "id": "usr-121",
    "name": "Ananya Deshmukh",
    "email": "ananya.deshmukh121@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_121",
    "phone": "+91 9800149314",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "205",
    "createdAt": "2026-01-10T04:31:00.000Z"
  },
  {
    "id": "usr-122",
    "name": "Rohan Sen",
    "email": "rohan.sen122@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_122",
    "phone": "+91 9800150548",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "306",
    "createdAt": "2026-01-11T04:32:00.000Z"
  },
  {
    "id": "usr-123",
    "name": "Priya Agrawal",
    "email": "priya.agrawal123@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_123",
    "phone": "+91 9800151782",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "407",
    "createdAt": "2026-01-12T04:33:00.000Z"
  },
  {
    "id": "usr-124",
    "name": "Aditya Bhasin",
    "email": "aditya.bhasin124@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_124",
    "phone": "+91 9800153016",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "508",
    "createdAt": "2026-01-13T04:34:00.000Z"
  },
  {
    "id": "usr-125",
    "name": "Sneha Sharma",
    "email": "sneha.sharma125@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_125",
    "phone": "+91 9800154250",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "109",
    "createdAt": "2026-01-14T04:35:00.000Z"
  },
  {
    "id": "usr-126",
    "name": "Rahul Gupta",
    "email": "rahul.gupta126@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_126",
    "phone": "+91 9800155484",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "201",
    "createdAt": "2026-01-15T04:36:00.000Z"
  },
  {
    "id": "usr-127",
    "name": "Kavya Reddy",
    "email": "kavya.reddy127@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_127",
    "phone": "+91 9800156718",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "302",
    "createdAt": "2026-01-16T04:37:00.000Z"
  },
  {
    "id": "usr-128",
    "name": "Vikram Chopra",
    "email": "vikram.chopra128@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_128",
    "phone": "+91 9800157952",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "403",
    "createdAt": "2026-01-17T04:38:00.000Z"
  },
  {
    "id": "usr-129",
    "name": "Neha Bhat",
    "email": "neha.bhat129@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_129",
    "phone": "+91 9800159186",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "504",
    "createdAt": "2026-01-18T04:39:00.000Z"
  },
  {
    "id": "usr-130",
    "name": "Siddharth Kulkarni",
    "email": "siddharth.kulkarni130@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_130",
    "phone": "+91 9800160420",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "105",
    "createdAt": "2026-01-19T04:40:00.000Z"
  },
  {
    "id": "usr-131",
    "name": "Meera Saxena",
    "email": "meera.saxena131@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_131",
    "phone": "+91 9800161654",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "206",
    "createdAt": "2026-01-20T04:41:00.000Z"
  },
  {
    "id": "usr-132",
    "name": "Dev Kapoor",
    "email": "dev.kapoor132@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_132",
    "phone": "+91 9800162888",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "307",
    "createdAt": "2026-01-21T04:42:00.000Z"
  },
  {
    "id": "usr-133",
    "name": "Ishita Rathore",
    "email": "ishita.rathore133@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_133",
    "phone": "+91 9800164122",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "408",
    "createdAt": "2026-01-22T04:43:00.000Z"
  },
  {
    "id": "usr-134",
    "name": "Arjun Patel",
    "email": "arjun.patel134@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_134",
    "phone": "+91 9800165356",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "509",
    "createdAt": "2026-01-23T04:44:00.000Z"
  },
  {
    "id": "usr-135",
    "name": "Riya Kumar",
    "email": "riya.kumar135@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_135",
    "phone": "+91 9800166590",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "101",
    "createdAt": "2026-01-24T04:45:00.000Z"
  },
  {
    "id": "usr-136",
    "name": "Karan Joshi",
    "email": "karan.joshi136@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_136",
    "phone": "+91 9800167824",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "202",
    "createdAt": "2026-01-25T04:46:00.000Z"
  },
  {
    "id": "usr-137",
    "name": "Tanvi Rao",
    "email": "tanvi.rao137@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_137",
    "phone": "+91 9800169058",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "303",
    "createdAt": "2026-01-26T04:47:00.000Z"
  },
  {
    "id": "usr-138",
    "name": "Varun Mehta",
    "email": "varun.mehta138@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_138",
    "phone": "+91 9800170292",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "404",
    "createdAt": "2026-01-27T04:48:00.000Z"
  },
  {
    "id": "usr-139",
    "name": "Pooja Dutta",
    "email": "pooja.dutta139@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_139",
    "phone": "+91 9800171526",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "505",
    "createdAt": "2026-01-28T04:49:00.000Z"
  },
  {
    "id": "usr-140",
    "name": "Yash Choudhury",
    "email": "yash.choudhury140@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_140",
    "phone": "+91 9800172760",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "106",
    "createdAt": "2026-01-01T04:50:00.000Z"
  },
  {
    "id": "usr-141",
    "name": "Shruti Trivedi",
    "email": "shruti.trivedi141@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_141",
    "phone": "+91 9800173994",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "207",
    "createdAt": "2026-01-02T04:51:00.000Z"
  },
  {
    "id": "usr-142",
    "name": "Kabir Verma",
    "email": "kabir.verma142@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_142",
    "phone": "+91 9800175228",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "308",
    "createdAt": "2026-01-03T04:52:00.000Z"
  },
  {
    "id": "usr-143",
    "name": "Simran Singh",
    "email": "simran.singh143@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_143",
    "phone": "+91 9800176462",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "409",
    "createdAt": "2026-01-04T04:53:00.000Z"
  },
  {
    "id": "usr-144",
    "name": "Nikhil Nair",
    "email": "nikhil.nair144@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_144",
    "phone": "+91 9800177696",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "501",
    "createdAt": "2026-01-05T04:54:00.000Z"
  },
  {
    "id": "usr-145",
    "name": "Diya Malhotra",
    "email": "diya.malhotra145@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_145",
    "phone": "+91 9800178930",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "102",
    "createdAt": "2026-01-06T04:55:00.000Z"
  },
  {
    "id": "usr-146",
    "name": "Amit Deshmukh",
    "email": "amit.deshmukh146@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_146",
    "phone": "+91 9800180164",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "203",
    "createdAt": "2026-01-07T04:56:00.000Z"
  },
  {
    "id": "usr-147",
    "name": "Divya Sen",
    "email": "divya.sen147@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_147",
    "phone": "+91 9800181398",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "304",
    "createdAt": "2026-01-08T04:57:00.000Z"
  },
  {
    "id": "usr-148",
    "name": "Gaurav Agrawal",
    "email": "gaurav.agrawal148@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_148",
    "phone": "+91 9800182632",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "405",
    "createdAt": "2026-01-09T04:58:00.000Z"
  },
  {
    "id": "usr-149",
    "name": "Anushka Bhasin",
    "email": "anushka.bhasin149@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_149",
    "phone": "+91 9800183866",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "506",
    "createdAt": "2026-01-10T04:59:00.000Z"
  },
  {
    "id": "usr-150",
    "name": "Manish Sharma",
    "email": "manish.sharma150@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_150",
    "phone": "+91 9800185100",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "107",
    "createdAt": "2026-01-11T05:00:00.000Z"
  },
  {
    "id": "usr-151",
    "name": "Ritu Gupta",
    "email": "ritu.gupta151@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_151",
    "phone": "+91 9800186334",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "208",
    "createdAt": "2026-01-12T05:01:00.000Z"
  },
  {
    "id": "usr-152",
    "name": "Sameer Reddy",
    "email": "sameer.reddy152@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_152",
    "phone": "+91 9800187568",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "309",
    "createdAt": "2026-01-13T05:02:00.000Z"
  },
  {
    "id": "usr-153",
    "name": "Nisha Chopra",
    "email": "nisha.chopra153@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_153",
    "phone": "+91 9800188802",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "401",
    "createdAt": "2026-01-14T05:03:00.000Z"
  },
  {
    "id": "usr-154",
    "name": "Tanya Bhat",
    "email": "tanya.bhat154@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_154",
    "phone": "+91 9800190036",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "502",
    "createdAt": "2026-01-15T05:04:00.000Z"
  },
  {
    "id": "usr-155",
    "name": "Abhinav Kulkarni",
    "email": "abhinav.kulkarni155@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_155",
    "phone": "+91 9800191270",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "103",
    "createdAt": "2026-01-16T05:05:00.000Z"
  },
  {
    "id": "usr-156",
    "name": "Shweta Saxena",
    "email": "shweta.saxena156@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_156",
    "phone": "+91 9800192504",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "204",
    "createdAt": "2026-01-17T05:06:00.000Z"
  },
  {
    "id": "usr-157",
    "name": "Pranav Kapoor",
    "email": "pranav.kapoor157@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_157",
    "phone": "+91 9800193738",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "305",
    "createdAt": "2026-01-18T05:07:00.000Z"
  },
  {
    "id": "usr-158",
    "name": "Bhavna Rathore",
    "email": "bhavna.rathore158@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_158",
    "phone": "+91 9800194972",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "406",
    "createdAt": "2026-01-19T05:08:00.000Z"
  },
  {
    "id": "usr-159",
    "name": "Tarun Patel",
    "email": "tarun.patel159@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_159",
    "phone": "+91 9800196206",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "507",
    "createdAt": "2026-01-20T05:09:00.000Z"
  },
  {
    "id": "usr-160",
    "name": "Aarav Kumar",
    "email": "aarav.kumar160@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_160",
    "phone": "+91 9800197440",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "108",
    "createdAt": "2026-01-21T05:10:00.000Z"
  },
  {
    "id": "usr-161",
    "name": "Ananya Joshi",
    "email": "ananya.joshi161@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_161",
    "phone": "+91 9800198674",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "209",
    "createdAt": "2026-01-22T05:11:00.000Z"
  },
  {
    "id": "usr-162",
    "name": "Rohan Rao",
    "email": "rohan.rao162@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_162",
    "phone": "+91 9800199908",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "301",
    "createdAt": "2026-01-23T05:12:00.000Z"
  },
  {
    "id": "usr-163",
    "name": "Priya Mehta",
    "email": "priya.mehta163@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_163",
    "phone": "+91 9800201142",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "402",
    "createdAt": "2026-01-24T05:13:00.000Z"
  },
  {
    "id": "usr-164",
    "name": "Aditya Dutta",
    "email": "aditya.dutta164@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_164",
    "phone": "+91 9800202376",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "503",
    "createdAt": "2026-01-25T05:14:00.000Z"
  },
  {
    "id": "usr-165",
    "name": "Sneha Choudhury",
    "email": "sneha.choudhury165@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_165",
    "phone": "+91 9800203610",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "104",
    "createdAt": "2026-01-26T05:15:00.000Z"
  },
  {
    "id": "usr-166",
    "name": "Rahul Trivedi",
    "email": "rahul.trivedi166@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_166",
    "phone": "+91 9800204844",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "205",
    "createdAt": "2026-01-27T05:16:00.000Z"
  },
  {
    "id": "usr-167",
    "name": "Kavya Verma",
    "email": "kavya.verma167@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_167",
    "phone": "+91 9800206078",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "306",
    "createdAt": "2026-01-28T05:17:00.000Z"
  },
  {
    "id": "usr-168",
    "name": "Vikram Singh",
    "email": "vikram.singh168@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_168",
    "phone": "+91 9800207312",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "407",
    "createdAt": "2026-01-01T05:18:00.000Z"
  },
  {
    "id": "usr-169",
    "name": "Neha Nair",
    "email": "neha.nair169@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_169",
    "phone": "+91 9800208546",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "508",
    "createdAt": "2026-01-02T05:19:00.000Z"
  },
  {
    "id": "usr-170",
    "name": "Siddharth Malhotra",
    "email": "siddharth.malhotra170@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_170",
    "phone": "+91 9800209780",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "109",
    "createdAt": "2026-01-03T05:20:00.000Z"
  },
  {
    "id": "usr-171",
    "name": "Meera Deshmukh",
    "email": "meera.deshmukh171@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_171",
    "phone": "+91 9800211014",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "201",
    "createdAt": "2026-01-04T05:21:00.000Z"
  },
  {
    "id": "usr-172",
    "name": "Dev Sen",
    "email": "dev.sen172@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_172",
    "phone": "+91 9800212248",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "302",
    "createdAt": "2026-01-05T05:22:00.000Z"
  },
  {
    "id": "usr-173",
    "name": "Ishita Agrawal",
    "email": "ishita.agrawal173@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_173",
    "phone": "+91 9800213482",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "403",
    "createdAt": "2026-01-06T05:23:00.000Z"
  },
  {
    "id": "usr-174",
    "name": "Arjun Bhasin",
    "email": "arjun.bhasin174@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_174",
    "phone": "+91 9800214716",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "504",
    "createdAt": "2026-01-07T05:24:00.000Z"
  },
  {
    "id": "usr-175",
    "name": "Riya Sharma",
    "email": "riya.sharma175@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_175",
    "phone": "+91 9800215950",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "105",
    "createdAt": "2026-01-08T05:25:00.000Z"
  },
  {
    "id": "usr-176",
    "name": "Karan Gupta",
    "email": "karan.gupta176@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_176",
    "phone": "+91 9800217184",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "206",
    "createdAt": "2026-01-09T05:26:00.000Z"
  },
  {
    "id": "usr-177",
    "name": "Tanvi Reddy",
    "email": "tanvi.reddy177@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_177",
    "phone": "+91 9800218418",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "307",
    "createdAt": "2026-01-10T05:27:00.000Z"
  },
  {
    "id": "usr-178",
    "name": "Varun Chopra",
    "email": "varun.chopra178@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_178",
    "phone": "+91 9800219652",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "408",
    "createdAt": "2026-01-11T05:28:00.000Z"
  },
  {
    "id": "usr-179",
    "name": "Pooja Bhat",
    "email": "pooja.bhat179@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_179",
    "phone": "+91 9800220886",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "509",
    "createdAt": "2026-01-12T05:29:00.000Z"
  },
  {
    "id": "usr-180",
    "name": "Yash Kulkarni",
    "email": "yash.kulkarni180@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_180",
    "phone": "+91 9800222120",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "101",
    "createdAt": "2026-01-13T04:30:00.000Z"
  },
  {
    "id": "usr-181",
    "name": "Shruti Saxena",
    "email": "shruti.saxena181@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_181",
    "phone": "+91 9800223354",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "202",
    "createdAt": "2026-01-14T04:31:00.000Z"
  },
  {
    "id": "usr-182",
    "name": "Kabir Kapoor",
    "email": "kabir.kapoor182@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_182",
    "phone": "+91 9800224588",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "303",
    "createdAt": "2026-01-15T04:32:00.000Z"
  },
  {
    "id": "usr-183",
    "name": "Simran Rathore",
    "email": "simran.rathore183@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_183",
    "phone": "+91 9800225822",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "404",
    "createdAt": "2026-01-16T04:33:00.000Z"
  },
  {
    "id": "usr-184",
    "name": "Nikhil Patel",
    "email": "nikhil.patel184@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_184",
    "phone": "+91 9800227056",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "505",
    "createdAt": "2026-01-17T04:34:00.000Z"
  },
  {
    "id": "usr-185",
    "name": "Diya Kumar",
    "email": "diya.kumar185@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_185",
    "phone": "+91 9800228290",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "106",
    "createdAt": "2026-01-18T04:35:00.000Z"
  },
  {
    "id": "usr-186",
    "name": "Amit Joshi",
    "email": "amit.joshi186@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_186",
    "phone": "+91 9800229524",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "207",
    "createdAt": "2026-01-19T04:36:00.000Z"
  },
  {
    "id": "usr-187",
    "name": "Divya Rao",
    "email": "divya.rao187@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_187",
    "phone": "+91 9800230758",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "308",
    "createdAt": "2026-01-20T04:37:00.000Z"
  },
  {
    "id": "usr-188",
    "name": "Gaurav Mehta",
    "email": "gaurav.mehta188@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_188",
    "phone": "+91 9800231992",
    "role": "Student",
    "hostelBlock": "Block H-9",
    "roomNumber": "409",
    "createdAt": "2026-01-21T04:38:00.000Z"
  },
  {
    "id": "usr-189",
    "name": "Anushka Dutta",
    "email": "anushka.dutta189@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_189",
    "phone": "+91 9800233226",
    "role": "Student",
    "hostelBlock": "Block H-10",
    "roomNumber": "501",
    "createdAt": "2026-01-22T04:39:00.000Z"
  },
  {
    "id": "usr-190",
    "name": "Manish Choudhury",
    "email": "manish.choudhury190@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_190",
    "phone": "+91 9800234460",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "102",
    "createdAt": "2026-01-23T04:40:00.000Z"
  },
  {
    "id": "usr-191",
    "name": "Ritu Trivedi",
    "email": "ritu.trivedi191@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_191",
    "phone": "+91 9800235694",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "203",
    "createdAt": "2026-01-24T04:41:00.000Z"
  },
  {
    "id": "usr-192",
    "name": "Sameer Verma",
    "email": "sameer.verma192@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_192",
    "phone": "+91 9800236928",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "304",
    "createdAt": "2026-01-25T04:42:00.000Z"
  },
  {
    "id": "usr-193",
    "name": "Nisha Singh",
    "email": "nisha.singh193@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_193",
    "phone": "+91 9800238162",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-4",
    "roomNumber": "405",
    "createdAt": "2026-01-26T04:43:00.000Z"
  },
  {
    "id": "usr-194",
    "name": "Tanya Nair",
    "email": "tanya.nair194@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_194",
    "phone": "+91 9800239396",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-5",
    "roomNumber": "506",
    "createdAt": "2026-01-27T04:44:00.000Z"
  },
  {
    "id": "usr-195",
    "name": "Abhinav Malhotra",
    "email": "abhinav.malhotra195@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_195",
    "phone": "+91 9800240630",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "107",
    "createdAt": "2026-01-28T04:45:00.000Z"
  },
  {
    "id": "usr-196",
    "name": "Shweta Deshmukh",
    "email": "shweta.deshmukh196@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_196",
    "phone": "+91 9800241864",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "208",
    "createdAt": "2026-01-01T04:46:00.000Z"
  },
  {
    "id": "usr-197",
    "name": "Pranav Sen",
    "email": "pranav.sen197@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_197",
    "phone": "+91 9800243098",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "309",
    "createdAt": "2026-01-02T04:47:00.000Z"
  },
  {
    "id": "usr-198",
    "name": "Bhavna Agrawal",
    "email": "bhavna.agrawal198@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_198",
    "phone": "+91 9800244332",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "401",
    "createdAt": "2026-01-03T04:48:00.000Z"
  },
  {
    "id": "usr-199",
    "name": "Tarun Bhasin",
    "email": "tarun.bhasin199@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_199",
    "phone": "+91 9800245566",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "502",
    "createdAt": "2026-01-04T04:49:00.000Z"
  },
  {
    "id": "usr-200",
    "name": "Aarav Sharma",
    "email": "aarav.sharma200@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_200",
    "phone": "+91 9800246800",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "103",
    "createdAt": "2026-01-05T04:50:00.000Z"
  }
];

export const INITIAL_PRODUCTS = [
  {
    "id": "prod-1",
    "title": "Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1299,
    "originalPrice": 1599,
    "rating": 4.3,
    "reviewsCount": 17,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T03:30:00.000Z"
  },
  {
    "id": "prod-2",
    "title": "Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 180,
    "originalPrice": 240,
    "rating": 4.6,
    "reviewsCount": 24,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T04:30:00.000Z"
  },
  {
    "id": "prod-3",
    "title": "Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 299,
    "originalPrice": 350,
    "rating": 4.9,
    "reviewsCount": 31,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T05:30:00.000Z"
  },
  {
    "id": "prod-4",
    "title": "Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 160,
    "originalPrice": 200,
    "rating": 4.2,
    "reviewsCount": 38,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T06:30:00.000Z"
  },
  {
    "id": "prod-5",
    "title": "Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 120,
    "originalPrice": 150,
    "rating": 4.5,
    "reviewsCount": 45,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T07:30:00.000Z"
  },
  {
    "id": "prod-6",
    "title": "Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 199,
    "originalPrice": 250,
    "rating": 4.8,
    "reviewsCount": 52,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T08:30:00.000Z"
  },
  {
    "id": "prod-7",
    "title": "Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 150,
    "originalPrice": 180,
    "rating": 4.1,
    "reviewsCount": 59,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 96,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T09:30:00.000Z"
  },
  {
    "id": "prod-8",
    "title": "A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.4,
    "reviewsCount": 66,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T10:30:00.000Z"
  },
  {
    "id": "prod-9",
    "title": "Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 349,
    "originalPrice": 499,
    "rating": 4.7,
    "reviewsCount": 73,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T11:30:00.000Z"
  },
  {
    "id": "prod-10",
    "title": "Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 180,
    "originalPrice": 250,
    "rating": 4,
    "reviewsCount": 80,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T12:30:00.000Z"
  },
  {
    "id": "prod-11",
    "title": "White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 350,
    "originalPrice": 450,
    "rating": 4.3,
    "reviewsCount": 87,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T13:30:00.000Z"
  },
  {
    "id": "prod-12",
    "title": "Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 80,
    "originalPrice": 120,
    "rating": 4.6,
    "reviewsCount": 94,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T02:30:00.000Z"
  },
  {
    "id": "prod-13",
    "title": "Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 699,
    "originalPrice": 999,
    "rating": 4.9,
    "reviewsCount": 101,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T03:30:00.000Z"
  },
  {
    "id": "prod-14",
    "title": "Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 799,
    "originalPrice": 999,
    "rating": 4.2,
    "reviewsCount": 108,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 87,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T04:30:00.000Z"
  },
  {
    "id": "prod-15",
    "title": "Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1299,
    "originalPrice": 1799,
    "rating": 4.5,
    "reviewsCount": 115,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 100,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T05:30:00.000Z"
  },
  {
    "id": "prod-16",
    "title": "Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1499,
    "originalPrice": 2990,
    "rating": 4.8,
    "reviewsCount": 122,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T06:30:00.000Z"
  },
  {
    "id": "prod-17",
    "title": "Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1199,
    "originalPrice": 1699,
    "rating": 4.1,
    "reviewsCount": 129,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T07:30:00.000Z"
  },
  {
    "id": "prod-18",
    "title": "SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 849,
    "originalPrice": 1200,
    "rating": 4.4,
    "reviewsCount": 136,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T08:30:00.000Z"
  },
  {
    "id": "prod-19",
    "title": "Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.7,
    "reviewsCount": 143,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T09:30:00.000Z"
  },
  {
    "id": "prod-20",
    "title": "Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 499,
    "originalPrice": 799,
    "rating": 4,
    "reviewsCount": 150,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T10:30:00.000Z"
  },
  {
    "id": "prod-21",
    "title": "Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1450,
    "originalPrice": 2200,
    "rating": 4.3,
    "reviewsCount": 157,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T11:30:00.000Z"
  },
  {
    "id": "prod-22",
    "title": "Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 899,
    "originalPrice": 1299,
    "rating": 4.6,
    "reviewsCount": 164,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 91,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T12:30:00.000Z"
  },
  {
    "id": "prod-23",
    "title": "Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 168,
    "originalPrice": 180,
    "rating": 4.9,
    "reviewsCount": 171,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 104,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T13:30:00.000Z"
  },
  {
    "id": "prod-24",
    "title": "Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 199,
    "originalPrice": 240,
    "rating": 4.2,
    "reviewsCount": 178,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T02:30:00.000Z"
  },
  {
    "id": "prod-25",
    "title": "Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 349,
    "originalPrice": 420,
    "rating": 4.5,
    "reviewsCount": 185,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T03:30:00.000Z"
  },
  {
    "id": "prod-26",
    "title": "Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 120,
    "originalPrice": 120,
    "rating": 4.8,
    "reviewsCount": 192,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T04:30:00.000Z"
  },
  {
    "id": "prod-27",
    "title": "MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.1,
    "reviewsCount": 199,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T05:30:00.000Z"
  },
  {
    "id": "prod-28",
    "title": "Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 275,
    "originalPrice": 285,
    "rating": 4.4,
    "reviewsCount": 206,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T06:30:00.000Z"
  },
  {
    "id": "prod-29",
    "title": "Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 150,
    "originalPrice": 180,
    "rating": 4.7,
    "reviewsCount": 213,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T07:30:00.000Z"
  },
  {
    "id": "prod-30",
    "title": "Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 460,
    "originalPrice": 500,
    "rating": 4,
    "reviewsCount": 220,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 95,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T08:30:00.000Z"
  },
  {
    "id": "prod-31",
    "title": "Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.3,
    "reviewsCount": 227,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T09:30:00.000Z"
  },
  {
    "id": "prod-32",
    "title": "Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 180,
    "originalPrice": 220,
    "rating": 4.6,
    "reviewsCount": 234,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T10:30:00.000Z"
  },
  {
    "id": "prod-33",
    "title": "Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 249,
    "originalPrice": 299,
    "rating": 4.9,
    "reviewsCount": 241,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T11:30:00.000Z"
  },
  {
    "id": "prod-34",
    "title": "Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 175,
    "originalPrice": 210,
    "rating": 4.2,
    "reviewsCount": 248,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T12:30:00.000Z"
  },
  {
    "id": "prod-35",
    "title": "Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 349,
    "originalPrice": 425,
    "rating": 4.5,
    "reviewsCount": 255,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T13:30:00.000Z"
  },
  {
    "id": "prod-36",
    "title": "Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 199,
    "originalPrice": 250,
    "rating": 4.8,
    "reviewsCount": 262,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T02:30:00.000Z"
  },
  {
    "id": "prod-37",
    "title": "Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.1,
    "reviewsCount": 269,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 86,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T03:30:00.000Z"
  },
  {
    "id": "prod-38",
    "title": "100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 399,
    "originalPrice": 599,
    "rating": 4.4,
    "reviewsCount": 276,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 99,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T04:30:00.000Z"
  },
  {
    "id": "prod-39",
    "title": "Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 199,
    "originalPrice": 299,
    "rating": 4.7,
    "reviewsCount": 283,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T05:30:00.000Z"
  },
  {
    "id": "prod-40",
    "title": "Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 249,
    "originalPrice": 320,
    "rating": 4,
    "reviewsCount": 290,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T06:30:00.000Z"
  },
  {
    "id": "prod-41",
    "title": "Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 499,
    "originalPrice": 799,
    "rating": 4.3,
    "reviewsCount": 297,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T07:30:00.000Z"
  },
  {
    "id": "prod-42",
    "title": "Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 220,
    "originalPrice": 299,
    "rating": 4.6,
    "reviewsCount": 304,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T08:30:00.000Z"
  },
  {
    "id": "prod-43",
    "title": "Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1299,
    "originalPrice": 1799,
    "rating": 4.9,
    "reviewsCount": 311,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T09:30:00.000Z"
  },
  {
    "id": "prod-44",
    "title": "Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.2,
    "reviewsCount": 318,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T10:30:00.000Z"
  },
  {
    "id": "prod-45",
    "title": "Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.5,
    "reviewsCount": 325,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 90,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T11:30:00.000Z"
  },
  {
    "id": "prod-46",
    "title": "Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 24999,
    "originalPrice": 55000,
    "rating": 4.8,
    "reviewsCount": 332,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 103,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T12:30:00.000Z"
  },
  {
    "id": "prod-47",
    "title": "Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 3499,
    "originalPrice": 8500,
    "rating": 4.1,
    "reviewsCount": 339,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T13:30:00.000Z"
  },
  {
    "id": "prod-48",
    "title": "Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1499,
    "originalPrice": 3500,
    "rating": 4.4,
    "reviewsCount": 346,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T02:30:00.000Z"
  },
  {
    "id": "prod-49",
    "title": "Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 299,
    "originalPrice": 499,
    "rating": 4.7,
    "reviewsCount": 353,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T03:30:00.000Z"
  },
  {
    "id": "prod-50",
    "title": "Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 199,
    "originalPrice": 349,
    "rating": 4,
    "reviewsCount": 360,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T04:30:00.000Z"
  },
  {
    "id": "prod-51",
    "title": "Pro Edition: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1364,
    "originalPrice": 1679,
    "rating": 4.3,
    "reviewsCount": 367,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T05:30:00.000Z"
  },
  {
    "id": "prod-52",
    "title": "Pro Edition: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 189,
    "originalPrice": 252,
    "rating": 4.6,
    "reviewsCount": 374,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T06:30:00.000Z"
  },
  {
    "id": "prod-53",
    "title": "Pro Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 314,
    "originalPrice": 368,
    "rating": 4.9,
    "reviewsCount": 381,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 94,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T07:30:00.000Z"
  },
  {
    "id": "prod-54",
    "title": "Pro Edition: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 168,
    "originalPrice": 210,
    "rating": 4.2,
    "reviewsCount": 388,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T08:30:00.000Z"
  },
  {
    "id": "prod-55",
    "title": "Pro Edition: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 126,
    "originalPrice": 158,
    "rating": 4.5,
    "reviewsCount": 395,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T09:30:00.000Z"
  },
  {
    "id": "prod-56",
    "title": "Pro Edition: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 209,
    "originalPrice": 263,
    "rating": 4.8,
    "reviewsCount": 402,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T10:30:00.000Z"
  },
  {
    "id": "prod-57",
    "title": "Pro Edition: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 158,
    "originalPrice": 189,
    "rating": 4.1,
    "reviewsCount": 409,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T11:30:00.000Z"
  },
  {
    "id": "prod-58",
    "title": "Pro Edition: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 524,
    "originalPrice": 734,
    "rating": 4.4,
    "reviewsCount": 416,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T12:30:00.000Z"
  },
  {
    "id": "prod-59",
    "title": "Pro Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 366,
    "originalPrice": 524,
    "rating": 4.7,
    "reviewsCount": 423,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T13:30:00.000Z"
  },
  {
    "id": "prod-60",
    "title": "Pro Edition: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 189,
    "originalPrice": 263,
    "rating": 4,
    "reviewsCount": 430,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 85,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T02:30:00.000Z"
  },
  {
    "id": "prod-61",
    "title": "Pro Edition: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 368,
    "originalPrice": 473,
    "rating": 4.3,
    "reviewsCount": 437,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 98,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T03:30:00.000Z"
  },
  {
    "id": "prod-62",
    "title": "Pro Edition: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 84,
    "originalPrice": 126,
    "rating": 4.6,
    "reviewsCount": 444,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T04:30:00.000Z"
  },
  {
    "id": "prod-63",
    "title": "Pro Edition: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 734,
    "originalPrice": 1049,
    "rating": 4.9,
    "reviewsCount": 451,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T05:30:00.000Z"
  },
  {
    "id": "prod-64",
    "title": "Pro Edition: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 839,
    "originalPrice": 1049,
    "rating": 4.2,
    "reviewsCount": 458,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T06:30:00.000Z"
  },
  {
    "id": "prod-65",
    "title": "Pro Edition: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1364,
    "originalPrice": 1889,
    "rating": 4.5,
    "reviewsCount": 15,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T07:30:00.000Z"
  },
  {
    "id": "prod-66",
    "title": "Pro Edition: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1574,
    "originalPrice": 3140,
    "rating": 4.8,
    "reviewsCount": 22,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T08:30:00.000Z"
  },
  {
    "id": "prod-67",
    "title": "Pro Edition: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1259,
    "originalPrice": 1784,
    "rating": 4.1,
    "reviewsCount": 29,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T09:30:00.000Z"
  },
  {
    "id": "prod-68",
    "title": "Pro Edition: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 891,
    "originalPrice": 1260,
    "rating": 4.4,
    "reviewsCount": 36,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 89,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T10:30:00.000Z"
  },
  {
    "id": "prod-69",
    "title": "Pro Edition: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1049,
    "originalPrice": 1574,
    "rating": 4.7,
    "reviewsCount": 43,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 102,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T11:30:00.000Z"
  },
  {
    "id": "prod-70",
    "title": "Pro Edition: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 524,
    "originalPrice": 839,
    "rating": 4,
    "reviewsCount": 50,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T12:30:00.000Z"
  },
  {
    "id": "prod-71",
    "title": "Pro Edition: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1523,
    "originalPrice": 2310,
    "rating": 4.3,
    "reviewsCount": 57,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T13:30:00.000Z"
  },
  {
    "id": "prod-72",
    "title": "Pro Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 944,
    "originalPrice": 1364,
    "rating": 4.6,
    "reviewsCount": 64,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T02:30:00.000Z"
  },
  {
    "id": "prod-73",
    "title": "Pro Edition: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 176,
    "originalPrice": 189,
    "rating": 4.9,
    "reviewsCount": 71,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T03:30:00.000Z"
  },
  {
    "id": "prod-74",
    "title": "Pro Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 209,
    "originalPrice": 252,
    "rating": 4.2,
    "reviewsCount": 78,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T04:30:00.000Z"
  },
  {
    "id": "prod-75",
    "title": "Pro Edition: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 366,
    "originalPrice": 441,
    "rating": 4.5,
    "reviewsCount": 85,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T05:30:00.000Z"
  },
  {
    "id": "prod-76",
    "title": "Pro Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 126,
    "originalPrice": 126,
    "rating": 4.8,
    "reviewsCount": 92,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 93,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T06:30:00.000Z"
  },
  {
    "id": "prod-77",
    "title": "Pro Edition: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 314,
    "originalPrice": 419,
    "rating": 4.1,
    "reviewsCount": 99,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T07:30:00.000Z"
  },
  {
    "id": "prod-78",
    "title": "Pro Edition: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 289,
    "originalPrice": 299,
    "rating": 4.4,
    "reviewsCount": 106,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T08:30:00.000Z"
  },
  {
    "id": "prod-79",
    "title": "Pro Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 158,
    "originalPrice": 189,
    "rating": 4.7,
    "reviewsCount": 113,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T09:30:00.000Z"
  },
  {
    "id": "prod-80",
    "title": "Pro Edition: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 483,
    "originalPrice": 525,
    "rating": 4,
    "reviewsCount": 120,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T10:30:00.000Z"
  },
  {
    "id": "prod-81",
    "title": "Pro Edition: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 524,
    "originalPrice": 734,
    "rating": 4.3,
    "reviewsCount": 127,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T11:30:00.000Z"
  },
  {
    "id": "prod-82",
    "title": "Pro Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 189,
    "originalPrice": 231,
    "rating": 4.6,
    "reviewsCount": 134,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T12:30:00.000Z"
  },
  {
    "id": "prod-83",
    "title": "Pro Edition: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 261,
    "originalPrice": 314,
    "rating": 4.9,
    "reviewsCount": 141,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T13:30:00.000Z"
  },
  {
    "id": "prod-84",
    "title": "Pro Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 184,
    "originalPrice": 221,
    "rating": 4.2,
    "reviewsCount": 148,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 97,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T02:30:00.000Z"
  },
  {
    "id": "prod-85",
    "title": "Pro Edition: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 366,
    "originalPrice": 446,
    "rating": 4.5,
    "reviewsCount": 155,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T03:30:00.000Z"
  },
  {
    "id": "prod-86",
    "title": "Pro Edition: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 209,
    "originalPrice": 263,
    "rating": 4.8,
    "reviewsCount": 162,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T04:30:00.000Z"
  },
  {
    "id": "prod-87",
    "title": "Pro Edition: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 314,
    "originalPrice": 419,
    "rating": 4.1,
    "reviewsCount": 169,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T05:30:00.000Z"
  },
  {
    "id": "prod-88",
    "title": "Pro Edition: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 419,
    "originalPrice": 629,
    "rating": 4.4,
    "reviewsCount": 176,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T06:30:00.000Z"
  },
  {
    "id": "prod-89",
    "title": "Pro Edition: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 209,
    "originalPrice": 314,
    "rating": 4.7,
    "reviewsCount": 183,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T07:30:00.000Z"
  },
  {
    "id": "prod-90",
    "title": "Pro Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 261,
    "originalPrice": 336,
    "rating": 4,
    "reviewsCount": 190,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T08:30:00.000Z"
  },
  {
    "id": "prod-91",
    "title": "Pro Edition: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 524,
    "originalPrice": 839,
    "rating": 4.3,
    "reviewsCount": 197,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 88,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T09:30:00.000Z"
  },
  {
    "id": "prod-92",
    "title": "Pro Edition: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 231,
    "originalPrice": 314,
    "rating": 4.6,
    "reviewsCount": 204,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 101,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T10:30:00.000Z"
  },
  {
    "id": "prod-93",
    "title": "Pro Edition: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1364,
    "originalPrice": 1889,
    "rating": 4.9,
    "reviewsCount": 211,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T11:30:00.000Z"
  },
  {
    "id": "prod-94",
    "title": "Pro Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 524,
    "originalPrice": 734,
    "rating": 4.2,
    "reviewsCount": 218,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T12:30:00.000Z"
  },
  {
    "id": "prod-95",
    "title": "Pro Edition: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 314,
    "originalPrice": 419,
    "rating": 4.5,
    "reviewsCount": 225,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T13:30:00.000Z"
  },
  {
    "id": "prod-96",
    "title": "Pro Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 26249,
    "originalPrice": 57750,
    "rating": 4.8,
    "reviewsCount": 232,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T02:30:00.000Z"
  },
  {
    "id": "prod-97",
    "title": "Pro Edition: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 3674,
    "originalPrice": 8925,
    "rating": 4.1,
    "reviewsCount": 239,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T03:30:00.000Z"
  },
  {
    "id": "prod-98",
    "title": "Pro Edition: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1574,
    "originalPrice": 3675,
    "rating": 4.4,
    "reviewsCount": 246,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T04:30:00.000Z"
  },
  {
    "id": "prod-99",
    "title": "Pro Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 314,
    "originalPrice": 524,
    "rating": 4.7,
    "reviewsCount": 253,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 92,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T05:30:00.000Z"
  },
  {
    "id": "prod-100",
    "title": "Pro Edition: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 209,
    "originalPrice": 366,
    "rating": 4,
    "reviewsCount": 260,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T06:30:00.000Z"
  },
  {
    "id": "prod-101",
    "title": "Deluxe Pack: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1429,
    "originalPrice": 1759,
    "rating": 4.3,
    "reviewsCount": 267,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T07:30:00.000Z"
  },
  {
    "id": "prod-102",
    "title": "Deluxe Pack: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 198,
    "originalPrice": 264,
    "rating": 4.6,
    "reviewsCount": 274,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T08:30:00.000Z"
  },
  {
    "id": "prod-103",
    "title": "Deluxe Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 329,
    "originalPrice": 385,
    "rating": 4.9,
    "reviewsCount": 281,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T09:30:00.000Z"
  },
  {
    "id": "prod-104",
    "title": "Deluxe Pack: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 176,
    "originalPrice": 220,
    "rating": 4.2,
    "reviewsCount": 288,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T10:30:00.000Z"
  },
  {
    "id": "prod-105",
    "title": "Deluxe Pack: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 132,
    "originalPrice": 165,
    "rating": 4.5,
    "reviewsCount": 295,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T11:30:00.000Z"
  },
  {
    "id": "prod-106",
    "title": "Deluxe Pack: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 219,
    "originalPrice": 275,
    "rating": 4.8,
    "reviewsCount": 302,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T12:30:00.000Z"
  },
  {
    "id": "prod-107",
    "title": "Deluxe Pack: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 165,
    "originalPrice": 198,
    "rating": 4.1,
    "reviewsCount": 309,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 96,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T13:30:00.000Z"
  },
  {
    "id": "prod-108",
    "title": "Deluxe Pack: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 549,
    "originalPrice": 769,
    "rating": 4.4,
    "reviewsCount": 316,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T02:30:00.000Z"
  },
  {
    "id": "prod-109",
    "title": "Deluxe Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 384,
    "originalPrice": 549,
    "rating": 4.7,
    "reviewsCount": 323,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T03:30:00.000Z"
  },
  {
    "id": "prod-110",
    "title": "Deluxe Pack: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 198,
    "originalPrice": 275,
    "rating": 4,
    "reviewsCount": 330,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T04:30:00.000Z"
  },
  {
    "id": "prod-111",
    "title": "Deluxe Pack: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 385,
    "originalPrice": 495,
    "rating": 4.3,
    "reviewsCount": 337,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T05:30:00.000Z"
  },
  {
    "id": "prod-112",
    "title": "Deluxe Pack: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 88,
    "originalPrice": 132,
    "rating": 4.6,
    "reviewsCount": 344,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T06:30:00.000Z"
  },
  {
    "id": "prod-113",
    "title": "Deluxe Pack: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 769,
    "originalPrice": 1099,
    "rating": 4.9,
    "reviewsCount": 351,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T07:30:00.000Z"
  },
  {
    "id": "prod-114",
    "title": "Deluxe Pack: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 879,
    "originalPrice": 1099,
    "rating": 4.2,
    "reviewsCount": 358,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 87,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T08:30:00.000Z"
  },
  {
    "id": "prod-115",
    "title": "Deluxe Pack: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1429,
    "originalPrice": 1979,
    "rating": 4.5,
    "reviewsCount": 365,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 100,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T09:30:00.000Z"
  },
  {
    "id": "prod-116",
    "title": "Deluxe Pack: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1649,
    "originalPrice": 3289,
    "rating": 4.8,
    "reviewsCount": 372,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T10:30:00.000Z"
  },
  {
    "id": "prod-117",
    "title": "Deluxe Pack: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1319,
    "originalPrice": 1869,
    "rating": 4.1,
    "reviewsCount": 379,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T11:30:00.000Z"
  },
  {
    "id": "prod-118",
    "title": "Deluxe Pack: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 934,
    "originalPrice": 1320,
    "rating": 4.4,
    "reviewsCount": 386,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T12:30:00.000Z"
  },
  {
    "id": "prod-119",
    "title": "Deluxe Pack: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1099,
    "originalPrice": 1649,
    "rating": 4.7,
    "reviewsCount": 393,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T13:30:00.000Z"
  },
  {
    "id": "prod-120",
    "title": "Deluxe Pack: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 549,
    "originalPrice": 879,
    "rating": 4,
    "reviewsCount": 400,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T02:30:00.000Z"
  },
  {
    "id": "prod-121",
    "title": "Deluxe Pack: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1595,
    "originalPrice": 2420,
    "rating": 4.3,
    "reviewsCount": 407,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T03:30:00.000Z"
  },
  {
    "id": "prod-122",
    "title": "Deluxe Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 989,
    "originalPrice": 1429,
    "rating": 4.6,
    "reviewsCount": 414,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 91,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T04:30:00.000Z"
  },
  {
    "id": "prod-123",
    "title": "Deluxe Pack: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 185,
    "originalPrice": 198,
    "rating": 4.9,
    "reviewsCount": 421,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 104,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T05:30:00.000Z"
  },
  {
    "id": "prod-124",
    "title": "Deluxe Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 219,
    "originalPrice": 264,
    "rating": 4.2,
    "reviewsCount": 428,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T06:30:00.000Z"
  },
  {
    "id": "prod-125",
    "title": "Deluxe Pack: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 384,
    "originalPrice": 462,
    "rating": 4.5,
    "reviewsCount": 435,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T07:30:00.000Z"
  },
  {
    "id": "prod-126",
    "title": "Deluxe Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 132,
    "originalPrice": 132,
    "rating": 4.8,
    "reviewsCount": 442,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T08:30:00.000Z"
  },
  {
    "id": "prod-127",
    "title": "Deluxe Pack: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 329,
    "originalPrice": 439,
    "rating": 4.1,
    "reviewsCount": 449,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T09:30:00.000Z"
  },
  {
    "id": "prod-128",
    "title": "Deluxe Pack: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 303,
    "originalPrice": 314,
    "rating": 4.4,
    "reviewsCount": 456,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T10:30:00.000Z"
  },
  {
    "id": "prod-129",
    "title": "Deluxe Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 165,
    "originalPrice": 198,
    "rating": 4.7,
    "reviewsCount": 13,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T11:30:00.000Z"
  },
  {
    "id": "prod-130",
    "title": "Deluxe Pack: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 506,
    "originalPrice": 550,
    "rating": 4,
    "reviewsCount": 20,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 95,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T12:30:00.000Z"
  },
  {
    "id": "prod-131",
    "title": "Deluxe Pack: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 549,
    "originalPrice": 769,
    "rating": 4.3,
    "reviewsCount": 27,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T13:30:00.000Z"
  },
  {
    "id": "prod-132",
    "title": "Deluxe Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 198,
    "originalPrice": 242,
    "rating": 4.6,
    "reviewsCount": 34,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T02:30:00.000Z"
  },
  {
    "id": "prod-133",
    "title": "Deluxe Pack: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 274,
    "originalPrice": 329,
    "rating": 4.9,
    "reviewsCount": 41,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T03:30:00.000Z"
  },
  {
    "id": "prod-134",
    "title": "Deluxe Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 193,
    "originalPrice": 231,
    "rating": 4.2,
    "reviewsCount": 48,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T04:30:00.000Z"
  },
  {
    "id": "prod-135",
    "title": "Deluxe Pack: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 384,
    "originalPrice": 468,
    "rating": 4.5,
    "reviewsCount": 55,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T05:30:00.000Z"
  },
  {
    "id": "prod-136",
    "title": "Deluxe Pack: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 219,
    "originalPrice": 275,
    "rating": 4.8,
    "reviewsCount": 62,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T06:30:00.000Z"
  },
  {
    "id": "prod-137",
    "title": "Deluxe Pack: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 329,
    "originalPrice": 439,
    "rating": 4.1,
    "reviewsCount": 69,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 86,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T07:30:00.000Z"
  },
  {
    "id": "prod-138",
    "title": "Deluxe Pack: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 439,
    "originalPrice": 659,
    "rating": 4.4,
    "reviewsCount": 76,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 99,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T08:30:00.000Z"
  },
  {
    "id": "prod-139",
    "title": "Deluxe Pack: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 219,
    "originalPrice": 329,
    "rating": 4.7,
    "reviewsCount": 83,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T09:30:00.000Z"
  },
  {
    "id": "prod-140",
    "title": "Deluxe Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 274,
    "originalPrice": 352,
    "rating": 4,
    "reviewsCount": 90,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T10:30:00.000Z"
  },
  {
    "id": "prod-141",
    "title": "Deluxe Pack: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 549,
    "originalPrice": 879,
    "rating": 4.3,
    "reviewsCount": 97,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T11:30:00.000Z"
  },
  {
    "id": "prod-142",
    "title": "Deluxe Pack: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 242,
    "originalPrice": 329,
    "rating": 4.6,
    "reviewsCount": 104,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T12:30:00.000Z"
  },
  {
    "id": "prod-143",
    "title": "Deluxe Pack: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1429,
    "originalPrice": 1979,
    "rating": 4.9,
    "reviewsCount": 111,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T13:30:00.000Z"
  },
  {
    "id": "prod-144",
    "title": "Deluxe Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 549,
    "originalPrice": 769,
    "rating": 4.2,
    "reviewsCount": 118,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T02:30:00.000Z"
  },
  {
    "id": "prod-145",
    "title": "Deluxe Pack: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 329,
    "originalPrice": 439,
    "rating": 4.5,
    "reviewsCount": 125,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 90,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T03:30:00.000Z"
  },
  {
    "id": "prod-146",
    "title": "Deluxe Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 27499,
    "originalPrice": 60500,
    "rating": 4.8,
    "reviewsCount": 132,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 103,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T04:30:00.000Z"
  },
  {
    "id": "prod-147",
    "title": "Deluxe Pack: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 3849,
    "originalPrice": 9350,
    "rating": 4.1,
    "reviewsCount": 139,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T05:30:00.000Z"
  },
  {
    "id": "prod-148",
    "title": "Deluxe Pack: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1649,
    "originalPrice": 3850,
    "rating": 4.4,
    "reviewsCount": 146,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T06:30:00.000Z"
  },
  {
    "id": "prod-149",
    "title": "Deluxe Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 329,
    "originalPrice": 549,
    "rating": 4.7,
    "reviewsCount": 153,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T07:30:00.000Z"
  },
  {
    "id": "prod-150",
    "title": "Deluxe Pack: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 219,
    "originalPrice": 384,
    "rating": 4,
    "reviewsCount": 160,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T08:30:00.000Z"
  },
  {
    "id": "prod-151",
    "title": "Campus Special: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1494,
    "originalPrice": 1839,
    "rating": 4.3,
    "reviewsCount": 167,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T09:30:00.000Z"
  },
  {
    "id": "prod-152",
    "title": "Campus Special: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 207,
    "originalPrice": 276,
    "rating": 4.6,
    "reviewsCount": 174,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T10:30:00.000Z"
  },
  {
    "id": "prod-153",
    "title": "Campus Special: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 344,
    "originalPrice": 402,
    "rating": 4.9,
    "reviewsCount": 181,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 94,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T11:30:00.000Z"
  },
  {
    "id": "prod-154",
    "title": "Campus Special: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 184,
    "originalPrice": 230,
    "rating": 4.2,
    "reviewsCount": 188,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T12:30:00.000Z"
  },
  {
    "id": "prod-155",
    "title": "Campus Special: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 138,
    "originalPrice": 173,
    "rating": 4.5,
    "reviewsCount": 195,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T13:30:00.000Z"
  },
  {
    "id": "prod-156",
    "title": "Campus Special: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 229,
    "originalPrice": 288,
    "rating": 4.8,
    "reviewsCount": 202,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T02:30:00.000Z"
  },
  {
    "id": "prod-157",
    "title": "Campus Special: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 173,
    "originalPrice": 207,
    "rating": 4.1,
    "reviewsCount": 209,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T03:30:00.000Z"
  },
  {
    "id": "prod-158",
    "title": "Campus Special: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 574,
    "originalPrice": 804,
    "rating": 4.4,
    "reviewsCount": 216,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T04:30:00.000Z"
  },
  {
    "id": "prod-159",
    "title": "Campus Special: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 401,
    "originalPrice": 574,
    "rating": 4.7,
    "reviewsCount": 223,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T05:30:00.000Z"
  },
  {
    "id": "prod-160",
    "title": "Campus Special: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 207,
    "originalPrice": 288,
    "rating": 4,
    "reviewsCount": 230,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 85,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T06:30:00.000Z"
  },
  {
    "id": "prod-161",
    "title": "Campus Special: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 402,
    "originalPrice": 518,
    "rating": 4.3,
    "reviewsCount": 237,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 98,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T07:30:00.000Z"
  },
  {
    "id": "prod-162",
    "title": "Campus Special: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 92,
    "originalPrice": 138,
    "rating": 4.6,
    "reviewsCount": 244,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T08:30:00.000Z"
  },
  {
    "id": "prod-163",
    "title": "Campus Special: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 804,
    "originalPrice": 1149,
    "rating": 4.9,
    "reviewsCount": 251,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T09:30:00.000Z"
  },
  {
    "id": "prod-164",
    "title": "Campus Special: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 919,
    "originalPrice": 1149,
    "rating": 4.2,
    "reviewsCount": 258,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T10:30:00.000Z"
  },
  {
    "id": "prod-165",
    "title": "Campus Special: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1494,
    "originalPrice": 2069,
    "rating": 4.5,
    "reviewsCount": 265,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T11:30:00.000Z"
  },
  {
    "id": "prod-166",
    "title": "Campus Special: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1724,
    "originalPrice": 3438,
    "rating": 4.8,
    "reviewsCount": 272,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T12:30:00.000Z"
  },
  {
    "id": "prod-167",
    "title": "Campus Special: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1379,
    "originalPrice": 1954,
    "rating": 4.1,
    "reviewsCount": 279,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T13:30:00.000Z"
  },
  {
    "id": "prod-168",
    "title": "Campus Special: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 976,
    "originalPrice": 1380,
    "rating": 4.4,
    "reviewsCount": 286,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 89,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T02:30:00.000Z"
  },
  {
    "id": "prod-169",
    "title": "Campus Special: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1149,
    "originalPrice": 1724,
    "rating": 4.7,
    "reviewsCount": 293,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 102,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T03:30:00.000Z"
  },
  {
    "id": "prod-170",
    "title": "Campus Special: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 574,
    "originalPrice": 919,
    "rating": 4,
    "reviewsCount": 300,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T04:30:00.000Z"
  },
  {
    "id": "prod-171",
    "title": "Campus Special: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1667,
    "originalPrice": 2530,
    "rating": 4.3,
    "reviewsCount": 307,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T05:30:00.000Z"
  },
  {
    "id": "prod-172",
    "title": "Campus Special: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1034,
    "originalPrice": 1494,
    "rating": 4.6,
    "reviewsCount": 314,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T06:30:00.000Z"
  },
  {
    "id": "prod-173",
    "title": "Campus Special: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 193,
    "originalPrice": 207,
    "rating": 4.9,
    "reviewsCount": 321,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T07:30:00.000Z"
  },
  {
    "id": "prod-174",
    "title": "Campus Special: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 229,
    "originalPrice": 276,
    "rating": 4.2,
    "reviewsCount": 328,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T08:30:00.000Z"
  },
  {
    "id": "prod-175",
    "title": "Campus Special: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 401,
    "originalPrice": 483,
    "rating": 4.5,
    "reviewsCount": 335,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T09:30:00.000Z"
  },
  {
    "id": "prod-176",
    "title": "Campus Special: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 138,
    "originalPrice": 138,
    "rating": 4.8,
    "reviewsCount": 342,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 93,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T10:30:00.000Z"
  },
  {
    "id": "prod-177",
    "title": "Campus Special: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 344,
    "originalPrice": 459,
    "rating": 4.1,
    "reviewsCount": 349,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T11:30:00.000Z"
  },
  {
    "id": "prod-178",
    "title": "Campus Special: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 316,
    "originalPrice": 328,
    "rating": 4.4,
    "reviewsCount": 356,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T12:30:00.000Z"
  },
  {
    "id": "prod-179",
    "title": "Campus Special: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 173,
    "originalPrice": 207,
    "rating": 4.7,
    "reviewsCount": 363,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T13:30:00.000Z"
  },
  {
    "id": "prod-180",
    "title": "Campus Special: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 529,
    "originalPrice": 575,
    "rating": 4,
    "reviewsCount": 370,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T02:30:00.000Z"
  },
  {
    "id": "prod-181",
    "title": "Campus Special: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 574,
    "originalPrice": 804,
    "rating": 4.3,
    "reviewsCount": 377,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T03:30:00.000Z"
  },
  {
    "id": "prod-182",
    "title": "Campus Special: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 207,
    "originalPrice": 253,
    "rating": 4.6,
    "reviewsCount": 384,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T04:30:00.000Z"
  },
  {
    "id": "prod-183",
    "title": "Campus Special: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 286,
    "originalPrice": 344,
    "rating": 4.9,
    "reviewsCount": 391,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T05:30:00.000Z"
  },
  {
    "id": "prod-184",
    "title": "Campus Special: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 201,
    "originalPrice": 241,
    "rating": 4.2,
    "reviewsCount": 398,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 97,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T06:30:00.000Z"
  },
  {
    "id": "prod-185",
    "title": "Campus Special: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 401,
    "originalPrice": 489,
    "rating": 4.5,
    "reviewsCount": 405,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T07:30:00.000Z"
  },
  {
    "id": "prod-186",
    "title": "Campus Special: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 229,
    "originalPrice": 288,
    "rating": 4.8,
    "reviewsCount": 412,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T08:30:00.000Z"
  },
  {
    "id": "prod-187",
    "title": "Campus Special: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 344,
    "originalPrice": 459,
    "rating": 4.1,
    "reviewsCount": 419,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T09:30:00.000Z"
  },
  {
    "id": "prod-188",
    "title": "Campus Special: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 459,
    "originalPrice": 689,
    "rating": 4.4,
    "reviewsCount": 426,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T10:30:00.000Z"
  },
  {
    "id": "prod-189",
    "title": "Campus Special: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 229,
    "originalPrice": 344,
    "rating": 4.7,
    "reviewsCount": 433,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T11:30:00.000Z"
  },
  {
    "id": "prod-190",
    "title": "Campus Special: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 286,
    "originalPrice": 368,
    "rating": 4,
    "reviewsCount": 440,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T12:30:00.000Z"
  },
  {
    "id": "prod-191",
    "title": "Campus Special: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 574,
    "originalPrice": 919,
    "rating": 4.3,
    "reviewsCount": 447,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 88,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T13:30:00.000Z"
  },
  {
    "id": "prod-192",
    "title": "Campus Special: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 253,
    "originalPrice": 344,
    "rating": 4.6,
    "reviewsCount": 454,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 101,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T02:30:00.000Z"
  },
  {
    "id": "prod-193",
    "title": "Campus Special: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1494,
    "originalPrice": 2069,
    "rating": 4.9,
    "reviewsCount": 11,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T03:30:00.000Z"
  },
  {
    "id": "prod-194",
    "title": "Campus Special: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 574,
    "originalPrice": 804,
    "rating": 4.2,
    "reviewsCount": 18,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T04:30:00.000Z"
  },
  {
    "id": "prod-195",
    "title": "Campus Special: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 344,
    "originalPrice": 459,
    "rating": 4.5,
    "reviewsCount": 25,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T05:30:00.000Z"
  },
  {
    "id": "prod-196",
    "title": "Campus Special: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 28749,
    "originalPrice": 63250,
    "rating": 4.8,
    "reviewsCount": 32,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T06:30:00.000Z"
  },
  {
    "id": "prod-197",
    "title": "Campus Special: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4024,
    "originalPrice": 9775,
    "rating": 4.1,
    "reviewsCount": 39,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T07:30:00.000Z"
  },
  {
    "id": "prod-198",
    "title": "Campus Special: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1724,
    "originalPrice": 4025,
    "rating": 4.4,
    "reviewsCount": 46,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T08:30:00.000Z"
  },
  {
    "id": "prod-199",
    "title": "Campus Special: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 344,
    "originalPrice": 574,
    "rating": 4.7,
    "reviewsCount": 53,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 92,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T09:30:00.000Z"
  },
  {
    "id": "prod-200",
    "title": "Campus Special: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 229,
    "originalPrice": 401,
    "rating": 4,
    "reviewsCount": 60,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T10:30:00.000Z"
  },
  {
    "id": "prod-201",
    "title": "Premium Series: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1559,
    "originalPrice": 1919,
    "rating": 4.3,
    "reviewsCount": 67,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T11:30:00.000Z"
  },
  {
    "id": "prod-202",
    "title": "Premium Series: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 216,
    "originalPrice": 288,
    "rating": 4.6,
    "reviewsCount": 74,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T12:30:00.000Z"
  },
  {
    "id": "prod-203",
    "title": "Premium Series: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 359,
    "originalPrice": 420,
    "rating": 4.9,
    "reviewsCount": 81,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T13:30:00.000Z"
  },
  {
    "id": "prod-204",
    "title": "Premium Series: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 192,
    "originalPrice": 240,
    "rating": 4.2,
    "reviewsCount": 88,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T02:30:00.000Z"
  },
  {
    "id": "prod-205",
    "title": "Premium Series: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 144,
    "originalPrice": 180,
    "rating": 4.5,
    "reviewsCount": 95,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T03:30:00.000Z"
  },
  {
    "id": "prod-206",
    "title": "Premium Series: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 239,
    "originalPrice": 300,
    "rating": 4.8,
    "reviewsCount": 102,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T04:30:00.000Z"
  },
  {
    "id": "prod-207",
    "title": "Premium Series: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 180,
    "originalPrice": 216,
    "rating": 4.1,
    "reviewsCount": 109,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 96,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T05:30:00.000Z"
  },
  {
    "id": "prod-208",
    "title": "Premium Series: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 599,
    "originalPrice": 839,
    "rating": 4.4,
    "reviewsCount": 116,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T06:30:00.000Z"
  },
  {
    "id": "prod-209",
    "title": "Premium Series: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 419,
    "originalPrice": 599,
    "rating": 4.7,
    "reviewsCount": 123,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T07:30:00.000Z"
  },
  {
    "id": "prod-210",
    "title": "Premium Series: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 216,
    "originalPrice": 300,
    "rating": 4,
    "reviewsCount": 130,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T08:30:00.000Z"
  },
  {
    "id": "prod-211",
    "title": "Premium Series: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 420,
    "originalPrice": 540,
    "rating": 4.3,
    "reviewsCount": 137,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T09:30:00.000Z"
  },
  {
    "id": "prod-212",
    "title": "Premium Series: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 96,
    "originalPrice": 144,
    "rating": 4.6,
    "reviewsCount": 144,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T10:30:00.000Z"
  },
  {
    "id": "prod-213",
    "title": "Premium Series: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 839,
    "originalPrice": 1199,
    "rating": 4.9,
    "reviewsCount": 151,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T11:30:00.000Z"
  },
  {
    "id": "prod-214",
    "title": "Premium Series: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 959,
    "originalPrice": 1199,
    "rating": 4.2,
    "reviewsCount": 158,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 87,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T12:30:00.000Z"
  },
  {
    "id": "prod-215",
    "title": "Premium Series: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1559,
    "originalPrice": 2159,
    "rating": 4.5,
    "reviewsCount": 165,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 100,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T13:30:00.000Z"
  },
  {
    "id": "prod-216",
    "title": "Premium Series: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1799,
    "originalPrice": 3588,
    "rating": 4.8,
    "reviewsCount": 172,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T02:30:00.000Z"
  },
  {
    "id": "prod-217",
    "title": "Premium Series: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1439,
    "originalPrice": 2039,
    "rating": 4.1,
    "reviewsCount": 179,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T03:30:00.000Z"
  },
  {
    "id": "prod-218",
    "title": "Premium Series: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1019,
    "originalPrice": 1440,
    "rating": 4.4,
    "reviewsCount": 186,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T04:30:00.000Z"
  },
  {
    "id": "prod-219",
    "title": "Premium Series: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1199,
    "originalPrice": 1799,
    "rating": 4.7,
    "reviewsCount": 193,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T05:30:00.000Z"
  },
  {
    "id": "prod-220",
    "title": "Premium Series: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 599,
    "originalPrice": 959,
    "rating": 4,
    "reviewsCount": 200,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T06:30:00.000Z"
  },
  {
    "id": "prod-221",
    "title": "Premium Series: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1740,
    "originalPrice": 2640,
    "rating": 4.3,
    "reviewsCount": 207,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T07:30:00.000Z"
  },
  {
    "id": "prod-222",
    "title": "Premium Series: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1079,
    "originalPrice": 1559,
    "rating": 4.6,
    "reviewsCount": 214,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 91,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T08:30:00.000Z"
  },
  {
    "id": "prod-223",
    "title": "Premium Series: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 202,
    "originalPrice": 216,
    "rating": 4.9,
    "reviewsCount": 221,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 104,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T09:30:00.000Z"
  },
  {
    "id": "prod-224",
    "title": "Premium Series: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 239,
    "originalPrice": 288,
    "rating": 4.2,
    "reviewsCount": 228,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T10:30:00.000Z"
  },
  {
    "id": "prod-225",
    "title": "Premium Series: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 419,
    "originalPrice": 504,
    "rating": 4.5,
    "reviewsCount": 235,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T11:30:00.000Z"
  },
  {
    "id": "prod-226",
    "title": "Premium Series: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 144,
    "originalPrice": 144,
    "rating": 4.8,
    "reviewsCount": 242,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T12:30:00.000Z"
  },
  {
    "id": "prod-227",
    "title": "Premium Series: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 359,
    "originalPrice": 479,
    "rating": 4.1,
    "reviewsCount": 249,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T13:30:00.000Z"
  },
  {
    "id": "prod-228",
    "title": "Premium Series: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 330,
    "originalPrice": 342,
    "rating": 4.4,
    "reviewsCount": 256,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T02:30:00.000Z"
  },
  {
    "id": "prod-229",
    "title": "Premium Series: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 180,
    "originalPrice": 216,
    "rating": 4.7,
    "reviewsCount": 263,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T03:30:00.000Z"
  },
  {
    "id": "prod-230",
    "title": "Premium Series: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 552,
    "originalPrice": 600,
    "rating": 4,
    "reviewsCount": 270,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 95,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T04:30:00.000Z"
  },
  {
    "id": "prod-231",
    "title": "Premium Series: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 599,
    "originalPrice": 839,
    "rating": 4.3,
    "reviewsCount": 277,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T05:30:00.000Z"
  },
  {
    "id": "prod-232",
    "title": "Premium Series: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 216,
    "originalPrice": 264,
    "rating": 4.6,
    "reviewsCount": 284,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T06:30:00.000Z"
  },
  {
    "id": "prod-233",
    "title": "Premium Series: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 299,
    "originalPrice": 359,
    "rating": 4.9,
    "reviewsCount": 291,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T07:30:00.000Z"
  },
  {
    "id": "prod-234",
    "title": "Premium Series: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 210,
    "originalPrice": 252,
    "rating": 4.2,
    "reviewsCount": 298,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T08:30:00.000Z"
  },
  {
    "id": "prod-235",
    "title": "Premium Series: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 419,
    "originalPrice": 510,
    "rating": 4.5,
    "reviewsCount": 305,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T09:30:00.000Z"
  },
  {
    "id": "prod-236",
    "title": "Premium Series: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 239,
    "originalPrice": 300,
    "rating": 4.8,
    "reviewsCount": 312,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T10:30:00.000Z"
  },
  {
    "id": "prod-237",
    "title": "Premium Series: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 359,
    "originalPrice": 479,
    "rating": 4.1,
    "reviewsCount": 319,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 86,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T11:30:00.000Z"
  },
  {
    "id": "prod-238",
    "title": "Premium Series: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 479,
    "originalPrice": 719,
    "rating": 4.4,
    "reviewsCount": 326,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 99,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T12:30:00.000Z"
  },
  {
    "id": "prod-239",
    "title": "Premium Series: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 239,
    "originalPrice": 359,
    "rating": 4.7,
    "reviewsCount": 333,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T13:30:00.000Z"
  },
  {
    "id": "prod-240",
    "title": "Premium Series: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 299,
    "originalPrice": 384,
    "rating": 4,
    "reviewsCount": 340,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T02:30:00.000Z"
  },
  {
    "id": "prod-241",
    "title": "Premium Series: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 599,
    "originalPrice": 959,
    "rating": 4.3,
    "reviewsCount": 347,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T03:30:00.000Z"
  },
  {
    "id": "prod-242",
    "title": "Premium Series: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 264,
    "originalPrice": 359,
    "rating": 4.6,
    "reviewsCount": 354,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T04:30:00.000Z"
  },
  {
    "id": "prod-243",
    "title": "Premium Series: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1559,
    "originalPrice": 2159,
    "rating": 4.9,
    "reviewsCount": 361,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T05:30:00.000Z"
  },
  {
    "id": "prod-244",
    "title": "Premium Series: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 599,
    "originalPrice": 839,
    "rating": 4.2,
    "reviewsCount": 368,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T06:30:00.000Z"
  },
  {
    "id": "prod-245",
    "title": "Premium Series: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 359,
    "originalPrice": 479,
    "rating": 4.5,
    "reviewsCount": 375,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 90,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T07:30:00.000Z"
  },
  {
    "id": "prod-246",
    "title": "Premium Series: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 29999,
    "originalPrice": 66000,
    "rating": 4.8,
    "reviewsCount": 382,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 103,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T08:30:00.000Z"
  },
  {
    "id": "prod-247",
    "title": "Premium Series: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4199,
    "originalPrice": 10200,
    "rating": 4.1,
    "reviewsCount": 389,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T09:30:00.000Z"
  },
  {
    "id": "prod-248",
    "title": "Premium Series: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1799,
    "originalPrice": 4200,
    "rating": 4.4,
    "reviewsCount": 396,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T10:30:00.000Z"
  },
  {
    "id": "prod-249",
    "title": "Premium Series: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 359,
    "originalPrice": 599,
    "rating": 4.7,
    "reviewsCount": 403,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T11:30:00.000Z"
  },
  {
    "id": "prod-250",
    "title": "Premium Series: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 239,
    "originalPrice": 419,
    "rating": 4,
    "reviewsCount": 410,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T12:30:00.000Z"
  },
  {
    "id": "prod-251",
    "title": "Student Pack: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1624,
    "originalPrice": 1999,
    "rating": 4.3,
    "reviewsCount": 417,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T13:30:00.000Z"
  },
  {
    "id": "prod-252",
    "title": "Student Pack: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 225,
    "originalPrice": 300,
    "rating": 4.6,
    "reviewsCount": 424,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T02:30:00.000Z"
  },
  {
    "id": "prod-253",
    "title": "Student Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 374,
    "originalPrice": 438,
    "rating": 4.9,
    "reviewsCount": 431,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 94,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T03:30:00.000Z"
  },
  {
    "id": "prod-254",
    "title": "Student Pack: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 200,
    "originalPrice": 250,
    "rating": 4.2,
    "reviewsCount": 438,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T04:30:00.000Z"
  },
  {
    "id": "prod-255",
    "title": "Student Pack: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 150,
    "originalPrice": 188,
    "rating": 4.5,
    "reviewsCount": 445,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T05:30:00.000Z"
  },
  {
    "id": "prod-256",
    "title": "Student Pack: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 249,
    "originalPrice": 313,
    "rating": 4.8,
    "reviewsCount": 452,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T06:30:00.000Z"
  },
  {
    "id": "prod-257",
    "title": "Student Pack: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 188,
    "originalPrice": 225,
    "rating": 4.1,
    "reviewsCount": 459,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T07:30:00.000Z"
  },
  {
    "id": "prod-258",
    "title": "Student Pack: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 624,
    "originalPrice": 874,
    "rating": 4.4,
    "reviewsCount": 16,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T08:30:00.000Z"
  },
  {
    "id": "prod-259",
    "title": "Student Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 436,
    "originalPrice": 624,
    "rating": 4.7,
    "reviewsCount": 23,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T09:30:00.000Z"
  },
  {
    "id": "prod-260",
    "title": "Student Pack: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 225,
    "originalPrice": 313,
    "rating": 4,
    "reviewsCount": 30,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 85,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T10:30:00.000Z"
  },
  {
    "id": "prod-261",
    "title": "Student Pack: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 438,
    "originalPrice": 563,
    "rating": 4.3,
    "reviewsCount": 37,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 98,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T11:30:00.000Z"
  },
  {
    "id": "prod-262",
    "title": "Student Pack: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 100,
    "originalPrice": 150,
    "rating": 4.6,
    "reviewsCount": 44,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T12:30:00.000Z"
  },
  {
    "id": "prod-263",
    "title": "Student Pack: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 874,
    "originalPrice": 1249,
    "rating": 4.9,
    "reviewsCount": 51,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T13:30:00.000Z"
  },
  {
    "id": "prod-264",
    "title": "Student Pack: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 999,
    "originalPrice": 1249,
    "rating": 4.2,
    "reviewsCount": 58,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T02:30:00.000Z"
  },
  {
    "id": "prod-265",
    "title": "Student Pack: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1624,
    "originalPrice": 2249,
    "rating": 4.5,
    "reviewsCount": 65,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T03:30:00.000Z"
  },
  {
    "id": "prod-266",
    "title": "Student Pack: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1874,
    "originalPrice": 3738,
    "rating": 4.8,
    "reviewsCount": 72,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T04:30:00.000Z"
  },
  {
    "id": "prod-267",
    "title": "Student Pack: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1499,
    "originalPrice": 2124,
    "rating": 4.1,
    "reviewsCount": 79,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T05:30:00.000Z"
  },
  {
    "id": "prod-268",
    "title": "Student Pack: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1061,
    "originalPrice": 1500,
    "rating": 4.4,
    "reviewsCount": 86,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 89,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T06:30:00.000Z"
  },
  {
    "id": "prod-269",
    "title": "Student Pack: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1249,
    "originalPrice": 1874,
    "rating": 4.7,
    "reviewsCount": 93,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 102,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T07:30:00.000Z"
  },
  {
    "id": "prod-270",
    "title": "Student Pack: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 624,
    "originalPrice": 999,
    "rating": 4,
    "reviewsCount": 100,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T08:30:00.000Z"
  },
  {
    "id": "prod-271",
    "title": "Student Pack: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1813,
    "originalPrice": 2750,
    "rating": 4.3,
    "reviewsCount": 107,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T09:30:00.000Z"
  },
  {
    "id": "prod-272",
    "title": "Student Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1124,
    "originalPrice": 1624,
    "rating": 4.6,
    "reviewsCount": 114,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T10:30:00.000Z"
  },
  {
    "id": "prod-273",
    "title": "Student Pack: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 210,
    "originalPrice": 225,
    "rating": 4.9,
    "reviewsCount": 121,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T11:30:00.000Z"
  },
  {
    "id": "prod-274",
    "title": "Student Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 249,
    "originalPrice": 300,
    "rating": 4.2,
    "reviewsCount": 128,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T12:30:00.000Z"
  },
  {
    "id": "prod-275",
    "title": "Student Pack: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 436,
    "originalPrice": 525,
    "rating": 4.5,
    "reviewsCount": 135,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T13:30:00.000Z"
  },
  {
    "id": "prod-276",
    "title": "Student Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 150,
    "originalPrice": 150,
    "rating": 4.8,
    "reviewsCount": 142,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 93,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T02:30:00.000Z"
  },
  {
    "id": "prod-277",
    "title": "Student Pack: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 374,
    "originalPrice": 499,
    "rating": 4.1,
    "reviewsCount": 149,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T03:30:00.000Z"
  },
  {
    "id": "prod-278",
    "title": "Student Pack: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 344,
    "originalPrice": 356,
    "rating": 4.4,
    "reviewsCount": 156,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T04:30:00.000Z"
  },
  {
    "id": "prod-279",
    "title": "Student Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 188,
    "originalPrice": 225,
    "rating": 4.7,
    "reviewsCount": 163,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T05:30:00.000Z"
  },
  {
    "id": "prod-280",
    "title": "Student Pack: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 575,
    "originalPrice": 625,
    "rating": 4,
    "reviewsCount": 170,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T06:30:00.000Z"
  },
  {
    "id": "prod-281",
    "title": "Student Pack: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 624,
    "originalPrice": 874,
    "rating": 4.3,
    "reviewsCount": 177,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T07:30:00.000Z"
  },
  {
    "id": "prod-282",
    "title": "Student Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 225,
    "originalPrice": 275,
    "rating": 4.6,
    "reviewsCount": 184,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T08:30:00.000Z"
  },
  {
    "id": "prod-283",
    "title": "Student Pack: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 311,
    "originalPrice": 374,
    "rating": 4.9,
    "reviewsCount": 191,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T09:30:00.000Z"
  },
  {
    "id": "prod-284",
    "title": "Student Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 219,
    "originalPrice": 263,
    "rating": 4.2,
    "reviewsCount": 198,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 97,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T10:30:00.000Z"
  },
  {
    "id": "prod-285",
    "title": "Student Pack: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 436,
    "originalPrice": 531,
    "rating": 4.5,
    "reviewsCount": 205,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T11:30:00.000Z"
  },
  {
    "id": "prod-286",
    "title": "Student Pack: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 249,
    "originalPrice": 313,
    "rating": 4.8,
    "reviewsCount": 212,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T12:30:00.000Z"
  },
  {
    "id": "prod-287",
    "title": "Student Pack: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 374,
    "originalPrice": 499,
    "rating": 4.1,
    "reviewsCount": 219,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T13:30:00.000Z"
  },
  {
    "id": "prod-288",
    "title": "Student Pack: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 499,
    "originalPrice": 749,
    "rating": 4.4,
    "reviewsCount": 226,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T02:30:00.000Z"
  },
  {
    "id": "prod-289",
    "title": "Student Pack: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 249,
    "originalPrice": 374,
    "rating": 4.7,
    "reviewsCount": 233,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T03:30:00.000Z"
  },
  {
    "id": "prod-290",
    "title": "Student Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 311,
    "originalPrice": 400,
    "rating": 4,
    "reviewsCount": 240,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T04:30:00.000Z"
  },
  {
    "id": "prod-291",
    "title": "Student Pack: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 624,
    "originalPrice": 999,
    "rating": 4.3,
    "reviewsCount": 247,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 88,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T05:30:00.000Z"
  },
  {
    "id": "prod-292",
    "title": "Student Pack: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 275,
    "originalPrice": 374,
    "rating": 4.6,
    "reviewsCount": 254,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 101,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T06:30:00.000Z"
  },
  {
    "id": "prod-293",
    "title": "Student Pack: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1624,
    "originalPrice": 2249,
    "rating": 4.9,
    "reviewsCount": 261,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T07:30:00.000Z"
  },
  {
    "id": "prod-294",
    "title": "Student Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 624,
    "originalPrice": 874,
    "rating": 4.2,
    "reviewsCount": 268,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T08:30:00.000Z"
  },
  {
    "id": "prod-295",
    "title": "Student Pack: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 374,
    "originalPrice": 499,
    "rating": 4.5,
    "reviewsCount": 275,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T09:30:00.000Z"
  },
  {
    "id": "prod-296",
    "title": "Student Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 31249,
    "originalPrice": 68750,
    "rating": 4.8,
    "reviewsCount": 282,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T10:30:00.000Z"
  },
  {
    "id": "prod-297",
    "title": "Student Pack: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4374,
    "originalPrice": 10625,
    "rating": 4.1,
    "reviewsCount": 289,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T11:30:00.000Z"
  },
  {
    "id": "prod-298",
    "title": "Student Pack: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1874,
    "originalPrice": 4375,
    "rating": 4.4,
    "reviewsCount": 296,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T12:30:00.000Z"
  },
  {
    "id": "prod-299",
    "title": "Student Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 374,
    "originalPrice": 624,
    "rating": 4.7,
    "reviewsCount": 303,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 92,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T13:30:00.000Z"
  },
  {
    "id": "prod-300",
    "title": "Student Pack: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 249,
    "originalPrice": 436,
    "rating": 4,
    "reviewsCount": 310,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T02:30:00.000Z"
  },
  {
    "id": "prod-301",
    "title": "Ultra Edition: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1689,
    "originalPrice": 2079,
    "rating": 4.3,
    "reviewsCount": 317,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T03:30:00.000Z"
  },
  {
    "id": "prod-302",
    "title": "Ultra Edition: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 234,
    "originalPrice": 312,
    "rating": 4.6,
    "reviewsCount": 324,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T04:30:00.000Z"
  },
  {
    "id": "prod-303",
    "title": "Ultra Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 389,
    "originalPrice": 455,
    "rating": 4.9,
    "reviewsCount": 331,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T05:30:00.000Z"
  },
  {
    "id": "prod-304",
    "title": "Ultra Edition: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 208,
    "originalPrice": 260,
    "rating": 4.2,
    "reviewsCount": 338,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T06:30:00.000Z"
  },
  {
    "id": "prod-305",
    "title": "Ultra Edition: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 156,
    "originalPrice": 195,
    "rating": 4.5,
    "reviewsCount": 345,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T07:30:00.000Z"
  },
  {
    "id": "prod-306",
    "title": "Ultra Edition: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 259,
    "originalPrice": 325,
    "rating": 4.8,
    "reviewsCount": 352,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T08:30:00.000Z"
  },
  {
    "id": "prod-307",
    "title": "Ultra Edition: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 195,
    "originalPrice": 234,
    "rating": 4.1,
    "reviewsCount": 359,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 96,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T09:30:00.000Z"
  },
  {
    "id": "prod-308",
    "title": "Ultra Edition: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 649,
    "originalPrice": 909,
    "rating": 4.4,
    "reviewsCount": 366,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T10:30:00.000Z"
  },
  {
    "id": "prod-309",
    "title": "Ultra Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 454,
    "originalPrice": 649,
    "rating": 4.7,
    "reviewsCount": 373,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T11:30:00.000Z"
  },
  {
    "id": "prod-310",
    "title": "Ultra Edition: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 234,
    "originalPrice": 325,
    "rating": 4,
    "reviewsCount": 380,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T12:30:00.000Z"
  },
  {
    "id": "prod-311",
    "title": "Ultra Edition: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 455,
    "originalPrice": 585,
    "rating": 4.3,
    "reviewsCount": 387,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T13:30:00.000Z"
  },
  {
    "id": "prod-312",
    "title": "Ultra Edition: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 104,
    "originalPrice": 156,
    "rating": 4.6,
    "reviewsCount": 394,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T02:30:00.000Z"
  },
  {
    "id": "prod-313",
    "title": "Ultra Edition: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 909,
    "originalPrice": 1299,
    "rating": 4.9,
    "reviewsCount": 401,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T03:30:00.000Z"
  },
  {
    "id": "prod-314",
    "title": "Ultra Edition: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1039,
    "originalPrice": 1299,
    "rating": 4.2,
    "reviewsCount": 408,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 87,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T04:30:00.000Z"
  },
  {
    "id": "prod-315",
    "title": "Ultra Edition: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1689,
    "originalPrice": 2339,
    "rating": 4.5,
    "reviewsCount": 415,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 100,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T05:30:00.000Z"
  },
  {
    "id": "prod-316",
    "title": "Ultra Edition: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1949,
    "originalPrice": 3887,
    "rating": 4.8,
    "reviewsCount": 422,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T06:30:00.000Z"
  },
  {
    "id": "prod-317",
    "title": "Ultra Edition: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1559,
    "originalPrice": 2209,
    "rating": 4.1,
    "reviewsCount": 429,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T07:30:00.000Z"
  },
  {
    "id": "prod-318",
    "title": "Ultra Edition: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1104,
    "originalPrice": 1560,
    "rating": 4.4,
    "reviewsCount": 436,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T08:30:00.000Z"
  },
  {
    "id": "prod-319",
    "title": "Ultra Edition: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1299,
    "originalPrice": 1949,
    "rating": 4.7,
    "reviewsCount": 443,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T09:30:00.000Z"
  },
  {
    "id": "prod-320",
    "title": "Ultra Edition: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 649,
    "originalPrice": 1039,
    "rating": 4,
    "reviewsCount": 450,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T10:30:00.000Z"
  },
  {
    "id": "prod-321",
    "title": "Ultra Edition: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1885,
    "originalPrice": 2860,
    "rating": 4.3,
    "reviewsCount": 457,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T11:30:00.000Z"
  },
  {
    "id": "prod-322",
    "title": "Ultra Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1169,
    "originalPrice": 1689,
    "rating": 4.6,
    "reviewsCount": 14,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 91,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T12:30:00.000Z"
  },
  {
    "id": "prod-323",
    "title": "Ultra Edition: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 218,
    "originalPrice": 234,
    "rating": 4.9,
    "reviewsCount": 21,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 104,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T13:30:00.000Z"
  },
  {
    "id": "prod-324",
    "title": "Ultra Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 259,
    "originalPrice": 312,
    "rating": 4.2,
    "reviewsCount": 28,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T02:30:00.000Z"
  },
  {
    "id": "prod-325",
    "title": "Ultra Edition: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 454,
    "originalPrice": 546,
    "rating": 4.5,
    "reviewsCount": 35,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T03:30:00.000Z"
  },
  {
    "id": "prod-326",
    "title": "Ultra Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 156,
    "originalPrice": 156,
    "rating": 4.8,
    "reviewsCount": 42,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T04:30:00.000Z"
  },
  {
    "id": "prod-327",
    "title": "Ultra Edition: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 389,
    "originalPrice": 519,
    "rating": 4.1,
    "reviewsCount": 49,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T05:30:00.000Z"
  },
  {
    "id": "prod-328",
    "title": "Ultra Edition: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 358,
    "originalPrice": 371,
    "rating": 4.4,
    "reviewsCount": 56,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T06:30:00.000Z"
  },
  {
    "id": "prod-329",
    "title": "Ultra Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 195,
    "originalPrice": 234,
    "rating": 4.7,
    "reviewsCount": 63,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T07:30:00.000Z"
  },
  {
    "id": "prod-330",
    "title": "Ultra Edition: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 598,
    "originalPrice": 650,
    "rating": 4,
    "reviewsCount": 70,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 95,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T08:30:00.000Z"
  },
  {
    "id": "prod-331",
    "title": "Ultra Edition: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 649,
    "originalPrice": 909,
    "rating": 4.3,
    "reviewsCount": 77,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T09:30:00.000Z"
  },
  {
    "id": "prod-332",
    "title": "Ultra Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 234,
    "originalPrice": 286,
    "rating": 4.6,
    "reviewsCount": 84,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T10:30:00.000Z"
  },
  {
    "id": "prod-333",
    "title": "Ultra Edition: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 324,
    "originalPrice": 389,
    "rating": 4.9,
    "reviewsCount": 91,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T11:30:00.000Z"
  },
  {
    "id": "prod-334",
    "title": "Ultra Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 228,
    "originalPrice": 273,
    "rating": 4.2,
    "reviewsCount": 98,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T12:30:00.000Z"
  },
  {
    "id": "prod-335",
    "title": "Ultra Edition: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 454,
    "originalPrice": 553,
    "rating": 4.5,
    "reviewsCount": 105,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T13:30:00.000Z"
  },
  {
    "id": "prod-336",
    "title": "Ultra Edition: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 259,
    "originalPrice": 325,
    "rating": 4.8,
    "reviewsCount": 112,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T02:30:00.000Z"
  },
  {
    "id": "prod-337",
    "title": "Ultra Edition: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 389,
    "originalPrice": 519,
    "rating": 4.1,
    "reviewsCount": 119,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 86,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T03:30:00.000Z"
  },
  {
    "id": "prod-338",
    "title": "Ultra Edition: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 519,
    "originalPrice": 779,
    "rating": 4.4,
    "reviewsCount": 126,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 99,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T04:30:00.000Z"
  },
  {
    "id": "prod-339",
    "title": "Ultra Edition: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 259,
    "originalPrice": 389,
    "rating": 4.7,
    "reviewsCount": 133,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T05:30:00.000Z"
  },
  {
    "id": "prod-340",
    "title": "Ultra Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 324,
    "originalPrice": 416,
    "rating": 4,
    "reviewsCount": 140,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T06:30:00.000Z"
  },
  {
    "id": "prod-341",
    "title": "Ultra Edition: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 649,
    "originalPrice": 1039,
    "rating": 4.3,
    "reviewsCount": 147,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T07:30:00.000Z"
  },
  {
    "id": "prod-342",
    "title": "Ultra Edition: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 286,
    "originalPrice": 389,
    "rating": 4.6,
    "reviewsCount": 154,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T08:30:00.000Z"
  },
  {
    "id": "prod-343",
    "title": "Ultra Edition: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1689,
    "originalPrice": 2339,
    "rating": 4.9,
    "reviewsCount": 161,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T09:30:00.000Z"
  },
  {
    "id": "prod-344",
    "title": "Ultra Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 649,
    "originalPrice": 909,
    "rating": 4.2,
    "reviewsCount": 168,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T10:30:00.000Z"
  },
  {
    "id": "prod-345",
    "title": "Ultra Edition: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 389,
    "originalPrice": 519,
    "rating": 4.5,
    "reviewsCount": 175,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 90,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T11:30:00.000Z"
  },
  {
    "id": "prod-346",
    "title": "Ultra Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 32499,
    "originalPrice": 71500,
    "rating": 4.8,
    "reviewsCount": 182,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 103,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T12:30:00.000Z"
  },
  {
    "id": "prod-347",
    "title": "Ultra Edition: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4549,
    "originalPrice": 11050,
    "rating": 4.1,
    "reviewsCount": 189,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T13:30:00.000Z"
  },
  {
    "id": "prod-348",
    "title": "Ultra Edition: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1949,
    "originalPrice": 4550,
    "rating": 4.4,
    "reviewsCount": 196,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T02:30:00.000Z"
  },
  {
    "id": "prod-349",
    "title": "Ultra Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 389,
    "originalPrice": 649,
    "rating": 4.7,
    "reviewsCount": 203,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T03:30:00.000Z"
  },
  {
    "id": "prod-350",
    "title": "Ultra Edition: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 259,
    "originalPrice": 454,
    "rating": 4,
    "reviewsCount": 210,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T04:30:00.000Z"
  },
  {
    "id": "prod-351",
    "title": "Bundle Pack: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1754,
    "originalPrice": 2159,
    "rating": 4.3,
    "reviewsCount": 217,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T05:30:00.000Z"
  },
  {
    "id": "prod-352",
    "title": "Bundle Pack: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 243,
    "originalPrice": 324,
    "rating": 4.6,
    "reviewsCount": 224,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T06:30:00.000Z"
  },
  {
    "id": "prod-353",
    "title": "Bundle Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 404,
    "originalPrice": 473,
    "rating": 4.9,
    "reviewsCount": 231,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 94,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T07:30:00.000Z"
  },
  {
    "id": "prod-354",
    "title": "Bundle Pack: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 216,
    "originalPrice": 270,
    "rating": 4.2,
    "reviewsCount": 238,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T08:30:00.000Z"
  },
  {
    "id": "prod-355",
    "title": "Bundle Pack: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 162,
    "originalPrice": 203,
    "rating": 4.5,
    "reviewsCount": 245,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T09:30:00.000Z"
  },
  {
    "id": "prod-356",
    "title": "Bundle Pack: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 269,
    "originalPrice": 338,
    "rating": 4.8,
    "reviewsCount": 252,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T10:30:00.000Z"
  },
  {
    "id": "prod-357",
    "title": "Bundle Pack: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 203,
    "originalPrice": 243,
    "rating": 4.1,
    "reviewsCount": 259,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T11:30:00.000Z"
  },
  {
    "id": "prod-358",
    "title": "Bundle Pack: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 674,
    "originalPrice": 944,
    "rating": 4.4,
    "reviewsCount": 266,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T12:30:00.000Z"
  },
  {
    "id": "prod-359",
    "title": "Bundle Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 471,
    "originalPrice": 674,
    "rating": 4.7,
    "reviewsCount": 273,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T13:30:00.000Z"
  },
  {
    "id": "prod-360",
    "title": "Bundle Pack: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 243,
    "originalPrice": 338,
    "rating": 4,
    "reviewsCount": 280,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 85,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T02:30:00.000Z"
  },
  {
    "id": "prod-361",
    "title": "Bundle Pack: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 473,
    "originalPrice": 608,
    "rating": 4.3,
    "reviewsCount": 287,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 98,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T03:30:00.000Z"
  },
  {
    "id": "prod-362",
    "title": "Bundle Pack: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 108,
    "originalPrice": 162,
    "rating": 4.6,
    "reviewsCount": 294,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T04:30:00.000Z"
  },
  {
    "id": "prod-363",
    "title": "Bundle Pack: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 944,
    "originalPrice": 1349,
    "rating": 4.9,
    "reviewsCount": 301,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T05:30:00.000Z"
  },
  {
    "id": "prod-364",
    "title": "Bundle Pack: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1079,
    "originalPrice": 1349,
    "rating": 4.2,
    "reviewsCount": 308,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T06:30:00.000Z"
  },
  {
    "id": "prod-365",
    "title": "Bundle Pack: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1754,
    "originalPrice": 2429,
    "rating": 4.5,
    "reviewsCount": 315,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T07:30:00.000Z"
  },
  {
    "id": "prod-366",
    "title": "Bundle Pack: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 2024,
    "originalPrice": 4037,
    "rating": 4.8,
    "reviewsCount": 322,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T08:30:00.000Z"
  },
  {
    "id": "prod-367",
    "title": "Bundle Pack: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1619,
    "originalPrice": 2294,
    "rating": 4.1,
    "reviewsCount": 329,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T09:30:00.000Z"
  },
  {
    "id": "prod-368",
    "title": "Bundle Pack: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1146,
    "originalPrice": 1620,
    "rating": 4.4,
    "reviewsCount": 336,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 89,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T10:30:00.000Z"
  },
  {
    "id": "prod-369",
    "title": "Bundle Pack: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1349,
    "originalPrice": 2024,
    "rating": 4.7,
    "reviewsCount": 343,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 102,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T11:30:00.000Z"
  },
  {
    "id": "prod-370",
    "title": "Bundle Pack: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 674,
    "originalPrice": 1079,
    "rating": 4,
    "reviewsCount": 350,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T12:30:00.000Z"
  },
  {
    "id": "prod-371",
    "title": "Bundle Pack: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1958,
    "originalPrice": 2970,
    "rating": 4.3,
    "reviewsCount": 357,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T13:30:00.000Z"
  },
  {
    "id": "prod-372",
    "title": "Bundle Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1214,
    "originalPrice": 1754,
    "rating": 4.6,
    "reviewsCount": 364,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T02:30:00.000Z"
  },
  {
    "id": "prod-373",
    "title": "Bundle Pack: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 227,
    "originalPrice": 243,
    "rating": 4.9,
    "reviewsCount": 371,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T03:30:00.000Z"
  },
  {
    "id": "prod-374",
    "title": "Bundle Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 269,
    "originalPrice": 324,
    "rating": 4.2,
    "reviewsCount": 378,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T04:30:00.000Z"
  },
  {
    "id": "prod-375",
    "title": "Bundle Pack: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 471,
    "originalPrice": 567,
    "rating": 4.5,
    "reviewsCount": 385,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T05:30:00.000Z"
  },
  {
    "id": "prod-376",
    "title": "Bundle Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 162,
    "originalPrice": 162,
    "rating": 4.8,
    "reviewsCount": 392,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 93,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T06:30:00.000Z"
  },
  {
    "id": "prod-377",
    "title": "Bundle Pack: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 404,
    "originalPrice": 539,
    "rating": 4.1,
    "reviewsCount": 399,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T07:30:00.000Z"
  },
  {
    "id": "prod-378",
    "title": "Bundle Pack: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 371,
    "originalPrice": 385,
    "rating": 4.4,
    "reviewsCount": 406,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T08:30:00.000Z"
  },
  {
    "id": "prod-379",
    "title": "Bundle Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 203,
    "originalPrice": 243,
    "rating": 4.7,
    "reviewsCount": 413,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T09:30:00.000Z"
  },
  {
    "id": "prod-380",
    "title": "Bundle Pack: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 621,
    "originalPrice": 675,
    "rating": 4,
    "reviewsCount": 420,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T10:30:00.000Z"
  },
  {
    "id": "prod-381",
    "title": "Bundle Pack: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 674,
    "originalPrice": 944,
    "rating": 4.3,
    "reviewsCount": 427,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T11:30:00.000Z"
  },
  {
    "id": "prod-382",
    "title": "Bundle Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 243,
    "originalPrice": 297,
    "rating": 4.6,
    "reviewsCount": 434,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T12:30:00.000Z"
  },
  {
    "id": "prod-383",
    "title": "Bundle Pack: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 336,
    "originalPrice": 404,
    "rating": 4.9,
    "reviewsCount": 441,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T13:30:00.000Z"
  },
  {
    "id": "prod-384",
    "title": "Bundle Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 236,
    "originalPrice": 284,
    "rating": 4.2,
    "reviewsCount": 448,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 97,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T02:30:00.000Z"
  },
  {
    "id": "prod-385",
    "title": "Bundle Pack: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 471,
    "originalPrice": 574,
    "rating": 4.5,
    "reviewsCount": 455,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T03:30:00.000Z"
  },
  {
    "id": "prod-386",
    "title": "Bundle Pack: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 269,
    "originalPrice": 338,
    "rating": 4.8,
    "reviewsCount": 12,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T04:30:00.000Z"
  },
  {
    "id": "prod-387",
    "title": "Bundle Pack: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 404,
    "originalPrice": 539,
    "rating": 4.1,
    "reviewsCount": 19,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T05:30:00.000Z"
  },
  {
    "id": "prod-388",
    "title": "Bundle Pack: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 539,
    "originalPrice": 809,
    "rating": 4.4,
    "reviewsCount": 26,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T06:30:00.000Z"
  },
  {
    "id": "prod-389",
    "title": "Bundle Pack: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 269,
    "originalPrice": 404,
    "rating": 4.7,
    "reviewsCount": 33,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T07:30:00.000Z"
  },
  {
    "id": "prod-390",
    "title": "Bundle Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 336,
    "originalPrice": 432,
    "rating": 4,
    "reviewsCount": 40,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T08:30:00.000Z"
  },
  {
    "id": "prod-391",
    "title": "Bundle Pack: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 674,
    "originalPrice": 1079,
    "rating": 4.3,
    "reviewsCount": 47,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 88,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T09:30:00.000Z"
  },
  {
    "id": "prod-392",
    "title": "Bundle Pack: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 297,
    "originalPrice": 404,
    "rating": 4.6,
    "reviewsCount": 54,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 101,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T10:30:00.000Z"
  },
  {
    "id": "prod-393",
    "title": "Bundle Pack: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1754,
    "originalPrice": 2429,
    "rating": 4.9,
    "reviewsCount": 61,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T11:30:00.000Z"
  },
  {
    "id": "prod-394",
    "title": "Bundle Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 674,
    "originalPrice": 944,
    "rating": 4.2,
    "reviewsCount": 68,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T12:30:00.000Z"
  },
  {
    "id": "prod-395",
    "title": "Bundle Pack: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 404,
    "originalPrice": 539,
    "rating": 4.5,
    "reviewsCount": 75,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T13:30:00.000Z"
  },
  {
    "id": "prod-396",
    "title": "Bundle Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 33749,
    "originalPrice": 74250,
    "rating": 4.8,
    "reviewsCount": 82,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T02:30:00.000Z"
  },
  {
    "id": "prod-397",
    "title": "Bundle Pack: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4724,
    "originalPrice": 11475,
    "rating": 4.1,
    "reviewsCount": 89,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T03:30:00.000Z"
  },
  {
    "id": "prod-398",
    "title": "Bundle Pack: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 2024,
    "originalPrice": 4725,
    "rating": 4.4,
    "reviewsCount": 96,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T04:30:00.000Z"
  },
  {
    "id": "prod-399",
    "title": "Bundle Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 404,
    "originalPrice": 674,
    "rating": 4.7,
    "reviewsCount": 103,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 92,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T05:30:00.000Z"
  },
  {
    "id": "prod-400",
    "title": "Bundle Pack: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 269,
    "originalPrice": 471,
    "rating": 4,
    "reviewsCount": 110,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T06:30:00.000Z"
  },
  {
    "id": "prod-401",
    "title": "Special Edition: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1819,
    "originalPrice": 2239,
    "rating": 4.3,
    "reviewsCount": 117,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T07:30:00.000Z"
  },
  {
    "id": "prod-402",
    "title": "Special Edition: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 252,
    "originalPrice": 336,
    "rating": 4.6,
    "reviewsCount": 124,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T08:30:00.000Z"
  },
  {
    "id": "prod-403",
    "title": "Special Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 419,
    "originalPrice": 490,
    "rating": 4.9,
    "reviewsCount": 131,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T09:30:00.000Z"
  },
  {
    "id": "prod-404",
    "title": "Special Edition: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 224,
    "originalPrice": 280,
    "rating": 4.2,
    "reviewsCount": 138,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T10:30:00.000Z"
  },
  {
    "id": "prod-405",
    "title": "Special Edition: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 168,
    "originalPrice": 210,
    "rating": 4.5,
    "reviewsCount": 145,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T11:30:00.000Z"
  },
  {
    "id": "prod-406",
    "title": "Special Edition: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 279,
    "originalPrice": 350,
    "rating": 4.8,
    "reviewsCount": 152,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T12:30:00.000Z"
  },
  {
    "id": "prod-407",
    "title": "Special Edition: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 210,
    "originalPrice": 252,
    "rating": 4.1,
    "reviewsCount": 159,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 96,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T13:30:00.000Z"
  },
  {
    "id": "prod-408",
    "title": "Special Edition: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 699,
    "originalPrice": 979,
    "rating": 4.4,
    "reviewsCount": 166,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T02:30:00.000Z"
  },
  {
    "id": "prod-409",
    "title": "Special Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 489,
    "originalPrice": 699,
    "rating": 4.7,
    "reviewsCount": 173,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T03:30:00.000Z"
  },
  {
    "id": "prod-410",
    "title": "Special Edition: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 252,
    "originalPrice": 350,
    "rating": 4,
    "reviewsCount": 180,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T04:30:00.000Z"
  },
  {
    "id": "prod-411",
    "title": "Special Edition: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 490,
    "originalPrice": 630,
    "rating": 4.3,
    "reviewsCount": 187,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T05:30:00.000Z"
  },
  {
    "id": "prod-412",
    "title": "Special Edition: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 112,
    "originalPrice": 168,
    "rating": 4.6,
    "reviewsCount": 194,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T06:30:00.000Z"
  },
  {
    "id": "prod-413",
    "title": "Special Edition: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 979,
    "originalPrice": 1399,
    "rating": 4.9,
    "reviewsCount": 201,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T07:30:00.000Z"
  },
  {
    "id": "prod-414",
    "title": "Special Edition: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1119,
    "originalPrice": 1399,
    "rating": 4.2,
    "reviewsCount": 208,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 87,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T08:30:00.000Z"
  },
  {
    "id": "prod-415",
    "title": "Special Edition: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1819,
    "originalPrice": 2519,
    "rating": 4.5,
    "reviewsCount": 215,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 100,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T09:30:00.000Z"
  },
  {
    "id": "prod-416",
    "title": "Special Edition: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 2099,
    "originalPrice": 4186,
    "rating": 4.8,
    "reviewsCount": 222,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T10:30:00.000Z"
  },
  {
    "id": "prod-417",
    "title": "Special Edition: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1679,
    "originalPrice": 2379,
    "rating": 4.1,
    "reviewsCount": 229,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T11:30:00.000Z"
  },
  {
    "id": "prod-418",
    "title": "Special Edition: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1189,
    "originalPrice": 1680,
    "rating": 4.4,
    "reviewsCount": 236,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T12:30:00.000Z"
  },
  {
    "id": "prod-419",
    "title": "Special Edition: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1399,
    "originalPrice": 2099,
    "rating": 4.7,
    "reviewsCount": 243,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T13:30:00.000Z"
  },
  {
    "id": "prod-420",
    "title": "Special Edition: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 699,
    "originalPrice": 1119,
    "rating": 4,
    "reviewsCount": 250,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T02:30:00.000Z"
  },
  {
    "id": "prod-421",
    "title": "Special Edition: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 2030,
    "originalPrice": 3080,
    "rating": 4.3,
    "reviewsCount": 257,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T03:30:00.000Z"
  },
  {
    "id": "prod-422",
    "title": "Special Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1259,
    "originalPrice": 1819,
    "rating": 4.6,
    "reviewsCount": 264,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 91,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T04:30:00.000Z"
  },
  {
    "id": "prod-423",
    "title": "Special Edition: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 235,
    "originalPrice": 252,
    "rating": 4.9,
    "reviewsCount": 271,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 104,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T05:30:00.000Z"
  },
  {
    "id": "prod-424",
    "title": "Special Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 279,
    "originalPrice": 336,
    "rating": 4.2,
    "reviewsCount": 278,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T06:30:00.000Z"
  },
  {
    "id": "prod-425",
    "title": "Special Edition: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 489,
    "originalPrice": 588,
    "rating": 4.5,
    "reviewsCount": 285,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T07:30:00.000Z"
  },
  {
    "id": "prod-426",
    "title": "Special Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 168,
    "originalPrice": 168,
    "rating": 4.8,
    "reviewsCount": 292,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T08:30:00.000Z"
  },
  {
    "id": "prod-427",
    "title": "Special Edition: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 419,
    "originalPrice": 559,
    "rating": 4.1,
    "reviewsCount": 299,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T09:30:00.000Z"
  },
  {
    "id": "prod-428",
    "title": "Special Edition: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 385,
    "originalPrice": 399,
    "rating": 4.4,
    "reviewsCount": 306,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T10:30:00.000Z"
  },
  {
    "id": "prod-429",
    "title": "Special Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 210,
    "originalPrice": 252,
    "rating": 4.7,
    "reviewsCount": 313,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T11:30:00.000Z"
  },
  {
    "id": "prod-430",
    "title": "Special Edition: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 644,
    "originalPrice": 700,
    "rating": 4,
    "reviewsCount": 320,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 95,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T12:30:00.000Z"
  },
  {
    "id": "prod-431",
    "title": "Special Edition: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 699,
    "originalPrice": 979,
    "rating": 4.3,
    "reviewsCount": 327,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T13:30:00.000Z"
  },
  {
    "id": "prod-432",
    "title": "Special Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 252,
    "originalPrice": 308,
    "rating": 4.6,
    "reviewsCount": 334,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T02:30:00.000Z"
  },
  {
    "id": "prod-433",
    "title": "Special Edition: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 349,
    "originalPrice": 419,
    "rating": 4.9,
    "reviewsCount": 341,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T03:30:00.000Z"
  },
  {
    "id": "prod-434",
    "title": "Special Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 245,
    "originalPrice": 294,
    "rating": 4.2,
    "reviewsCount": 348,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T04:30:00.000Z"
  },
  {
    "id": "prod-435",
    "title": "Special Edition: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 489,
    "originalPrice": 595,
    "rating": 4.5,
    "reviewsCount": 355,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T05:30:00.000Z"
  },
  {
    "id": "prod-436",
    "title": "Special Edition: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 279,
    "originalPrice": 350,
    "rating": 4.8,
    "reviewsCount": 362,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T06:30:00.000Z"
  },
  {
    "id": "prod-437",
    "title": "Special Edition: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 419,
    "originalPrice": 559,
    "rating": 4.1,
    "reviewsCount": 369,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 86,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T07:30:00.000Z"
  },
  {
    "id": "prod-438",
    "title": "Special Edition: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 559,
    "originalPrice": 839,
    "rating": 4.4,
    "reviewsCount": 376,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 99,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T08:30:00.000Z"
  },
  {
    "id": "prod-439",
    "title": "Special Edition: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 279,
    "originalPrice": 419,
    "rating": 4.7,
    "reviewsCount": 383,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T09:30:00.000Z"
  },
  {
    "id": "prod-440",
    "title": "Special Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 349,
    "originalPrice": 448,
    "rating": 4,
    "reviewsCount": 390,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T10:30:00.000Z"
  },
  {
    "id": "prod-441",
    "title": "Special Edition: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 699,
    "originalPrice": 1119,
    "rating": 4.3,
    "reviewsCount": 397,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T11:30:00.000Z"
  },
  {
    "id": "prod-442",
    "title": "Special Edition: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 308,
    "originalPrice": 419,
    "rating": 4.6,
    "reviewsCount": 404,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T12:30:00.000Z"
  },
  {
    "id": "prod-443",
    "title": "Special Edition: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1819,
    "originalPrice": 2519,
    "rating": 4.9,
    "reviewsCount": 411,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T13:30:00.000Z"
  },
  {
    "id": "prod-444",
    "title": "Special Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 699,
    "originalPrice": 979,
    "rating": 4.2,
    "reviewsCount": 418,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T02:30:00.000Z"
  },
  {
    "id": "prod-445",
    "title": "Special Edition: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 419,
    "originalPrice": 559,
    "rating": 4.5,
    "reviewsCount": 425,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 90,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T03:30:00.000Z"
  },
  {
    "id": "prod-446",
    "title": "Special Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 34999,
    "originalPrice": 77000,
    "rating": 4.8,
    "reviewsCount": 432,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 103,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T04:30:00.000Z"
  },
  {
    "id": "prod-447",
    "title": "Special Edition: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4899,
    "originalPrice": 11900,
    "rating": 4.1,
    "reviewsCount": 439,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T05:30:00.000Z"
  },
  {
    "id": "prod-448",
    "title": "Special Edition: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 2099,
    "originalPrice": 4900,
    "rating": 4.4,
    "reviewsCount": 446,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T06:30:00.000Z"
  },
  {
    "id": "prod-449",
    "title": "Special Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 419,
    "originalPrice": 699,
    "rating": 4.7,
    "reviewsCount": 453,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T07:30:00.000Z"
  },
  {
    "id": "prod-450",
    "title": "Special Edition: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 279,
    "originalPrice": 489,
    "rating": 4,
    "reviewsCount": 10,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T08:30:00.000Z"
  },
  {
    "id": "prod-451",
    "title": "Mega Pack: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1884,
    "originalPrice": 2319,
    "rating": 4.3,
    "reviewsCount": 17,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T09:30:00.000Z"
  },
  {
    "id": "prod-452",
    "title": "Mega Pack: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 261,
    "originalPrice": 348,
    "rating": 4.6,
    "reviewsCount": 24,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T10:30:00.000Z"
  },
  {
    "id": "prod-453",
    "title": "Mega Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 434,
    "originalPrice": 508,
    "rating": 4.9,
    "reviewsCount": 31,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 94,
    "store": "Express Stationery #4 - Hostel",
    "createdAt": "2026-02-04T11:30:00.000Z"
  },
  {
    "id": "prod-454",
    "title": "Mega Pack: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 232,
    "originalPrice": 290,
    "rating": 4.2,
    "reviewsCount": 38,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "Elite Boutique #5 - College",
    "createdAt": "2026-02-05T12:30:00.000Z"
  },
  {
    "id": "prod-455",
    "title": "Mega Pack: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 174,
    "originalPrice": 218,
    "rating": 4.5,
    "reviewsCount": 45,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Metro Outlet #6 - Second-Hand",
    "createdAt": "2026-02-06T13:30:00.000Z"
  },
  {
    "id": "prod-456",
    "title": "Mega Pack: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 289,
    "originalPrice": 363,
    "rating": 4.8,
    "reviewsCount": 52,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Prime Supply Co. #7 - Campus",
    "createdAt": "2026-02-07T02:30:00.000Z"
  },
  {
    "id": "prod-457",
    "title": "Mega Pack: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 218,
    "originalPrice": 261,
    "rating": 4.1,
    "reviewsCount": 59,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Central Corner #8 - Student",
    "createdAt": "2026-02-08T03:30:00.000Z"
  },
  {
    "id": "prod-458",
    "title": "Mega Pack: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 724,
    "originalPrice": 1014,
    "rating": 4.4,
    "reviewsCount": 66,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Global Market #9 - Study",
    "createdAt": "2026-02-09T04:30:00.000Z"
  },
  {
    "id": "prod-459",
    "title": "Mega Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 506,
    "originalPrice": 724,
    "rating": 4.7,
    "reviewsCount": 73,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Mart #10 - Electronics",
    "createdAt": "2026-02-10T05:30:00.000Z"
  },
  {
    "id": "prod-460",
    "title": "Mega Pack: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 261,
    "originalPrice": 363,
    "rating": 4,
    "reviewsCount": 80,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 85,
    "store": "Hostel Store #11 - Food",
    "createdAt": "2026-02-11T06:30:00.000Z"
  },
  {
    "id": "prod-461",
    "title": "Mega Pack: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 508,
    "originalPrice": 653,
    "rating": 4.3,
    "reviewsCount": 87,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 98,
    "store": "Student Canteen #12 - Personal",
    "createdAt": "2026-02-12T07:30:00.000Z"
  },
  {
    "id": "prod-462",
    "title": "Mega Pack: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 116,
    "originalPrice": 174,
    "rating": 4.6,
    "reviewsCount": 94,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Academic Tech Hub #13 - Hostel",
    "createdAt": "2026-02-13T08:30:00.000Z"
  },
  {
    "id": "prod-463",
    "title": "Mega Pack: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1014,
    "originalPrice": 1449,
    "rating": 4.9,
    "reviewsCount": 101,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Express Stationery #14 - College",
    "createdAt": "2026-02-14T09:30:00.000Z"
  },
  {
    "id": "prod-464",
    "title": "Mega Pack: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1159,
    "originalPrice": 1449,
    "rating": 4.2,
    "reviewsCount": 108,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Elite Boutique #15 - Second-Hand",
    "createdAt": "2026-02-15T10:30:00.000Z"
  },
  {
    "id": "prod-465",
    "title": "Mega Pack: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1884,
    "originalPrice": 2609,
    "rating": 4.5,
    "reviewsCount": 115,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Metro Outlet #16 - Campus",
    "createdAt": "2026-02-16T11:30:00.000Z"
  },
  {
    "id": "prod-466",
    "title": "Mega Pack: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 2174,
    "originalPrice": 4336,
    "rating": 4.8,
    "reviewsCount": 122,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Prime Supply Co. #17 - Student",
    "createdAt": "2026-02-17T12:30:00.000Z"
  },
  {
    "id": "prod-467",
    "title": "Mega Pack: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1739,
    "originalPrice": 2464,
    "rating": 4.1,
    "reviewsCount": 129,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Central Corner #18 - Study",
    "createdAt": "2026-02-18T13:30:00.000Z"
  },
  {
    "id": "prod-468",
    "title": "Mega Pack: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1231,
    "originalPrice": 1740,
    "rating": 4.4,
    "reviewsCount": 136,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 89,
    "store": "Global Market #19 - Electronics",
    "createdAt": "2026-02-19T02:30:00.000Z"
  },
  {
    "id": "prod-469",
    "title": "Mega Pack: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1449,
    "originalPrice": 2174,
    "rating": 4.7,
    "reviewsCount": 143,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 102,
    "store": "Campus Mart #20 - Food",
    "createdAt": "2026-02-20T03:30:00.000Z"
  },
  {
    "id": "prod-470",
    "title": "Mega Pack: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 724,
    "originalPrice": 1159,
    "rating": 4,
    "reviewsCount": 150,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Hostel Store #21 - Personal",
    "createdAt": "2026-02-21T04:30:00.000Z"
  },
  {
    "id": "prod-471",
    "title": "Mega Pack: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 2103,
    "originalPrice": 3190,
    "rating": 4.3,
    "reviewsCount": 157,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Student Canteen #22 - Hostel",
    "createdAt": "2026-02-22T05:30:00.000Z"
  },
  {
    "id": "prod-472",
    "title": "Mega Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1304,
    "originalPrice": 1884,
    "rating": 4.6,
    "reviewsCount": 164,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Academic Tech Hub #23 - College",
    "createdAt": "2026-02-23T06:30:00.000Z"
  },
  {
    "id": "prod-473",
    "title": "Mega Pack: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 244,
    "originalPrice": 261,
    "rating": 4.9,
    "reviewsCount": 171,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Express Stationery #24 - Second-Hand",
    "createdAt": "2026-02-24T07:30:00.000Z"
  },
  {
    "id": "prod-474",
    "title": "Mega Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 289,
    "originalPrice": 348,
    "rating": 4.2,
    "reviewsCount": 178,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "Elite Boutique #25 - Campus",
    "createdAt": "2026-02-25T08:30:00.000Z"
  },
  {
    "id": "prod-475",
    "title": "Mega Pack: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 506,
    "originalPrice": 609,
    "rating": 4.5,
    "reviewsCount": 185,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Metro Outlet #26 - Student",
    "createdAt": "2026-02-01T09:30:00.000Z"
  },
  {
    "id": "prod-476",
    "title": "Mega Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 174,
    "originalPrice": 174,
    "rating": 4.8,
    "reviewsCount": 192,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 93,
    "store": "Prime Supply Co. #27 - Study",
    "createdAt": "2026-02-02T10:30:00.000Z"
  },
  {
    "id": "prod-477",
    "title": "Mega Pack: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 434,
    "originalPrice": 579,
    "rating": 4.1,
    "reviewsCount": 199,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Central Corner #28 - Electronics",
    "createdAt": "2026-02-03T11:30:00.000Z"
  },
  {
    "id": "prod-478",
    "title": "Mega Pack: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 399,
    "originalPrice": 413,
    "rating": 4.4,
    "reviewsCount": 206,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Global Market #29 - Food",
    "createdAt": "2026-02-04T12:30:00.000Z"
  },
  {
    "id": "prod-479",
    "title": "Mega Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 218,
    "originalPrice": 261,
    "rating": 4.7,
    "reviewsCount": 213,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Mart #30 - Personal",
    "createdAt": "2026-02-05T13:30:00.000Z"
  },
  {
    "id": "prod-480",
    "title": "Mega Pack: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 667,
    "originalPrice": 725,
    "rating": 4,
    "reviewsCount": 220,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Hostel Store #31 - Hostel",
    "createdAt": "2026-02-06T02:30:00.000Z"
  },
  {
    "id": "prod-481",
    "title": "Mega Pack: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 724,
    "originalPrice": 1014,
    "rating": 4.3,
    "reviewsCount": 227,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Student Canteen #32 - College",
    "createdAt": "2026-02-07T03:30:00.000Z"
  },
  {
    "id": "prod-482",
    "title": "Mega Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 261,
    "originalPrice": 319,
    "rating": 4.6,
    "reviewsCount": 234,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Academic Tech Hub #33 - Second-Hand",
    "createdAt": "2026-02-08T04:30:00.000Z"
  },
  {
    "id": "prod-483",
    "title": "Mega Pack: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 361,
    "originalPrice": 434,
    "rating": 4.9,
    "reviewsCount": 241,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Express Stationery #34 - Campus",
    "createdAt": "2026-02-09T05:30:00.000Z"
  },
  {
    "id": "prod-484",
    "title": "Mega Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 254,
    "originalPrice": 305,
    "rating": 4.2,
    "reviewsCount": 248,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 97,
    "store": "Elite Boutique #35 - Student",
    "createdAt": "2026-02-10T06:30:00.000Z"
  },
  {
    "id": "prod-485",
    "title": "Mega Pack: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 506,
    "originalPrice": 616,
    "rating": 4.5,
    "reviewsCount": 255,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Metro Outlet #36 - Study",
    "createdAt": "2026-02-11T07:30:00.000Z"
  },
  {
    "id": "prod-486",
    "title": "Mega Pack: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 289,
    "originalPrice": 363,
    "rating": 4.8,
    "reviewsCount": 262,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Prime Supply Co. #37 - Electronics",
    "createdAt": "2026-02-12T08:30:00.000Z"
  },
  {
    "id": "prod-487",
    "title": "Mega Pack: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 434,
    "originalPrice": 579,
    "rating": 4.1,
    "reviewsCount": 269,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Central Corner #38 - Food",
    "createdAt": "2026-02-13T09:30:00.000Z"
  },
  {
    "id": "prod-488",
    "title": "Mega Pack: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 579,
    "originalPrice": 869,
    "rating": 4.4,
    "reviewsCount": 276,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Global Market #39 - Personal",
    "createdAt": "2026-02-14T10:30:00.000Z"
  },
  {
    "id": "prod-489",
    "title": "Mega Pack: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 289,
    "originalPrice": 434,
    "rating": 4.7,
    "reviewsCount": 283,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Campus Mart #40 - Hostel",
    "createdAt": "2026-02-15T11:30:00.000Z"
  },
  {
    "id": "prod-490",
    "title": "Mega Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 361,
    "originalPrice": 464,
    "rating": 4,
    "reviewsCount": 290,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Hostel Store #41 - College",
    "createdAt": "2026-02-16T12:30:00.000Z"
  },
  {
    "id": "prod-491",
    "title": "Mega Pack: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 724,
    "originalPrice": 1159,
    "rating": 4.3,
    "reviewsCount": 297,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 88,
    "store": "Student Canteen #42 - Second-Hand",
    "createdAt": "2026-02-17T13:30:00.000Z"
  },
  {
    "id": "prod-492",
    "title": "Mega Pack: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 319,
    "originalPrice": 434,
    "rating": 4.6,
    "reviewsCount": 304,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 101,
    "store": "Academic Tech Hub #43 - Campus",
    "createdAt": "2026-02-18T02:30:00.000Z"
  },
  {
    "id": "prod-493",
    "title": "Mega Pack: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1884,
    "originalPrice": 2609,
    "rating": 4.9,
    "reviewsCount": 311,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Express Stationery #44 - Student",
    "createdAt": "2026-02-19T03:30:00.000Z"
  },
  {
    "id": "prod-494",
    "title": "Mega Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 724,
    "originalPrice": 1014,
    "rating": 4.2,
    "reviewsCount": 318,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "Elite Boutique #45 - Study",
    "createdAt": "2026-02-20T04:30:00.000Z"
  },
  {
    "id": "prod-495",
    "title": "Mega Pack: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 434,
    "originalPrice": 579,
    "rating": 4.5,
    "reviewsCount": 325,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Metro Outlet #46 - Electronics",
    "createdAt": "2026-02-21T05:30:00.000Z"
  },
  {
    "id": "prod-496",
    "title": "Mega Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 36249,
    "originalPrice": 79750,
    "rating": 4.8,
    "reviewsCount": 332,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Prime Supply Co. #47 - Food",
    "createdAt": "2026-02-22T06:30:00.000Z"
  },
  {
    "id": "prod-497",
    "title": "Mega Pack: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 5074,
    "originalPrice": 12325,
    "rating": 4.1,
    "reviewsCount": 339,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Central Corner #48 - Personal",
    "createdAt": "2026-02-23T07:30:00.000Z"
  },
  {
    "id": "prod-498",
    "title": "Mega Pack: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 2174,
    "originalPrice": 5075,
    "rating": 4.4,
    "reviewsCount": 346,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Global Market #49 - Hostel",
    "createdAt": "2026-02-24T08:30:00.000Z"
  },
  {
    "id": "prod-499",
    "title": "Mega Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 434,
    "originalPrice": 724,
    "rating": 4.7,
    "reviewsCount": 353,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 92,
    "store": "Campus Mart #50 - College",
    "createdAt": "2026-02-25T09:30:00.000Z"
  },
  {
    "id": "prod-500",
    "title": "Mega Pack: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 289,
    "originalPrice": 506,
    "rating": 4,
    "reviewsCount": 360,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T10:30:00.000Z"
  }
];

export const INITIAL_ORDERS = [
  {
    "id": "ord-1001",
    "userId": "usr-seller-1",
    "orderedProducts": [
      {
        "product": "prod-4",
        "title": "Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 160
      },
      {
        "product": "prod-8",
        "title": "A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 499
      }
    ],
    "totalAmount": 1318,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Market Complex, Room Shop #12",
    "orderDate": "2026-03-02T03:33:00.000Z"
  },
  {
    "id": "ord-1002",
    "userId": "usr-admin-1",
    "orderedProducts": [
      {
        "product": "prod-7",
        "title": "Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 150
      },
      {
        "product": "prod-15",
        "title": "Anker PowerCore 10000mAh Power Bank",
        "quantity": 3,
        "price": 1299
      }
    ],
    "totalAmount": 4047,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Admin Block, Room A-101",
    "orderDate": "2026-04-03T04:36:00.000Z"
  },
  {
    "id": "ord-1003",
    "userId": "usr-4",
    "orderedProducts": [
      {
        "product": "prod-10",
        "title": "Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 180
      },
      {
        "product": "prod-22",
        "title": "Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 1,
        "price": 899
      }
    ],
    "totalAmount": 1259,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-05-04T05:39:00.000Z"
  },
  {
    "id": "ord-1004",
    "userId": "usr-5",
    "orderedProducts": [
      {
        "product": "prod-13",
        "title": "Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 699
      },
      {
        "product": "prod-29",
        "title": "Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 2,
        "price": 150
      }
    ],
    "totalAmount": 999,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-06-05T06:42:00.000Z"
  },
  {
    "id": "ord-1005",
    "userId": "usr-6",
    "orderedProducts": [
      {
        "product": "prod-16",
        "title": "Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1499
      },
      {
        "product": "prod-36",
        "title": "Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 3,
        "price": 199
      }
    ],
    "totalAmount": 3595,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-07-06T07:45:00.000Z"
  },
  {
    "id": "ord-1006",
    "userId": "usr-7",
    "orderedProducts": [
      {
        "product": "prod-19",
        "title": "Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 999
      },
      {
        "product": "prod-43",
        "title": "Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1299
      }
    ],
    "totalAmount": 2298,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-02-07T08:48:00.000Z"
  },
  {
    "id": "ord-1007",
    "userId": "usr-8",
    "orderedProducts": [
      {
        "product": "prod-22",
        "title": "Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 899
      },
      {
        "product": "prod-50",
        "title": "Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 199
      }
    ],
    "totalAmount": 2196,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-03-08T09:51:00.000Z"
  },
  {
    "id": "ord-1008",
    "userId": "usr-9",
    "orderedProducts": [
      {
        "product": "prod-25",
        "title": "Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 349
      },
      {
        "product": "prod-57",
        "title": "Pro Edition: Camlin Geometry Box with Metal Compass",
        "quantity": 3,
        "price": 158
      }
    ],
    "totalAmount": 823,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-04-09T10:54:00.000Z"
  },
  {
    "id": "ord-1009",
    "userId": "usr-10",
    "orderedProducts": [
      {
        "product": "prod-28",
        "title": "Amul Butter 500g Pack",
        "quantity": 2,
        "price": 275
      },
      {
        "product": "prod-64",
        "title": "Pro Edition: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 1,
        "price": 839
      }
    ],
    "totalAmount": 1389,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-05-10T11:57:00.000Z"
  },
  {
    "id": "ord-1010",
    "userId": "usr-11",
    "orderedProducts": [
      {
        "product": "prod-31",
        "title": "Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 499
      },
      {
        "product": "prod-71",
        "title": "Pro Edition: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 2,
        "price": 1523
      }
    ],
    "totalAmount": 3545,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-06-11T13:00:00.000Z"
  },
  {
    "id": "ord-1011",
    "userId": "usr-12",
    "orderedProducts": [
      {
        "product": "prod-34",
        "title": "Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 175
      },
      {
        "product": "prod-78",
        "title": "Pro Edition: Amul Butter 500g Pack",
        "quantity": 3,
        "price": 289
      }
    ],
    "totalAmount": 1217,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-07-12T14:03:00.000Z"
  },
  {
    "id": "ord-1012",
    "userId": "usr-13",
    "orderedProducts": [
      {
        "product": "prod-37",
        "title": "Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 299
      },
      {
        "product": "prod-85",
        "title": "Pro Edition: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 366
      }
    ],
    "totalAmount": 665,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-02-13T03:06:00.000Z"
  },
  {
    "id": "ord-1013",
    "userId": "usr-14",
    "orderedProducts": [
      {
        "product": "prod-40",
        "title": "Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 249
      },
      {
        "product": "prod-92",
        "title": "Pro Edition: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 231
      }
    ],
    "totalAmount": 960,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-03-14T04:09:00.000Z"
  },
  {
    "id": "ord-1014",
    "userId": "usr-15",
    "orderedProducts": [
      {
        "product": "prod-43",
        "title": "Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1299
      },
      {
        "product": "prod-99",
        "title": "Pro Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 3,
        "price": 314
      }
    ],
    "totalAmount": 2241,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-04-15T05:12:00.000Z"
  },
  {
    "id": "ord-1015",
    "userId": "usr-16",
    "orderedProducts": [
      {
        "product": "prod-46",
        "title": "Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 24999
      },
      {
        "product": "prod-106",
        "title": "Deluxe Pack: Post-it Super Sticky Notes Color Pack",
        "quantity": 1,
        "price": 219
      }
    ],
    "totalAmount": 50217,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-05-16T06:15:00.000Z"
  },
  {
    "id": "ord-1016",
    "userId": "usr-17",
    "orderedProducts": [
      {
        "product": "prod-49",
        "title": "Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 299
      },
      {
        "product": "prod-113",
        "title": "Deluxe Pack: Logitech M220 Silent Wireless Mouse",
        "quantity": 2,
        "price": 769
      }
    ],
    "totalAmount": 1837,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-06-17T07:18:00.000Z"
  },
  {
    "id": "ord-1017",
    "userId": "usr-18",
    "orderedProducts": [
      {
        "product": "prod-52",
        "title": "Pro Edition: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 189
      },
      {
        "product": "prod-120",
        "title": "Deluxe Pack: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 3,
        "price": 549
      }
    ],
    "totalAmount": 2025,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-07-18T08:21:00.000Z"
  },
  {
    "id": "ord-1018",
    "userId": "usr-19",
    "orderedProducts": [
      {
        "product": "prod-55",
        "title": "Pro Edition: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 126
      },
      {
        "product": "prod-127",
        "title": "Deluxe Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 329
      }
    ],
    "totalAmount": 455,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-02-19T09:24:00.000Z"
  },
  {
    "id": "ord-1019",
    "userId": "usr-20",
    "orderedProducts": [
      {
        "product": "prod-58",
        "title": "Pro Edition: A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 524
      },
      {
        "product": "prod-134",
        "title": "Deluxe Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 193
      }
    ],
    "totalAmount": 1434,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-03-20T10:27:00.000Z"
  },
  {
    "id": "ord-1020",
    "userId": "usr-21",
    "orderedProducts": [
      {
        "product": "prod-61",
        "title": "Pro Edition: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 368
      },
      {
        "product": "prod-141",
        "title": "Deluxe Pack: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 3,
        "price": 549
      }
    ],
    "totalAmount": 2015,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 204",
    "orderDate": "2026-04-21T10:30:00.000Z"
  },
  {
    "id": "ord-1021",
    "userId": "usr-22",
    "orderedProducts": [
      {
        "product": "prod-64",
        "title": "Pro Edition: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 839
      },
      {
        "product": "prod-148",
        "title": "Deluxe Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 1,
        "price": 1649
      }
    ],
    "totalAmount": 3327,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 305",
    "orderDate": "2026-05-22T11:33:00.000Z"
  },
  {
    "id": "ord-1022",
    "userId": "usr-23",
    "orderedProducts": [
      {
        "product": "prod-67",
        "title": "Pro Edition: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1259
      },
      {
        "product": "prod-155",
        "title": "Campus Special: Hardbound Grid-Line Engineering Journal",
        "quantity": 2,
        "price": 138
      }
    ],
    "totalAmount": 1535,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 406",
    "orderDate": "2026-06-23T12:36:00.000Z"
  },
  {
    "id": "ord-1023",
    "userId": "usr-24",
    "orderedProducts": [
      {
        "product": "prod-70",
        "title": "Pro Edition: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 524
      },
      {
        "product": "prod-162",
        "title": "Campus Special: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 3,
        "price": 92
      }
    ],
    "totalAmount": 1324,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 507",
    "orderDate": "2026-07-24T13:39:00.000Z"
  },
  {
    "id": "ord-1024",
    "userId": "usr-25",
    "orderedProducts": [
      {
        "product": "prod-73",
        "title": "Pro Edition: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 176
      },
      {
        "product": "prod-169",
        "title": "Campus Special: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1149
      }
    ],
    "totalAmount": 1325,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
    "orderDate": "2026-02-25T02:42:00.000Z"
  },
  {
    "id": "ord-1025",
    "userId": "usr-26",
    "orderedProducts": [
      {
        "product": "prod-76",
        "title": "Pro Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 126
      },
      {
        "product": "prod-176",
        "title": "Campus Special: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 138
      }
    ],
    "totalAmount": 528,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
    "orderDate": "2026-03-26T03:45:00.000Z"
  },
  {
    "id": "ord-1026",
    "userId": "usr-27",
    "orderedProducts": [
      {
        "product": "prod-79",
        "title": "Pro Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 158
      },
      {
        "product": "prod-183",
        "title": "Campus Special: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 3,
        "price": 286
      }
    ],
    "totalAmount": 1016,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
    "orderDate": "2026-04-27T04:48:00.000Z"
  },
  {
    "id": "ord-1027",
    "userId": "usr-28",
    "orderedProducts": [
      {
        "product": "prod-82",
        "title": "Pro Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 189
      },
      {
        "product": "prod-190",
        "title": "Campus Special: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 1,
        "price": 286
      }
    ],
    "totalAmount": 664,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 402",
    "orderDate": "2026-05-28T05:51:00.000Z"
  },
  {
    "id": "ord-1028",
    "userId": "usr-29",
    "orderedProducts": [
      {
        "product": "prod-85",
        "title": "Pro Edition: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 366
      },
      {
        "product": "prod-197",
        "title": "Campus Special: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 2,
        "price": 4024
      }
    ],
    "totalAmount": 8414,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-5, Room 503",
    "orderDate": "2026-06-01T06:54:00.000Z"
  },
  {
    "id": "ord-1029",
    "userId": "usr-30",
    "orderedProducts": [
      {
        "product": "prod-88",
        "title": "Pro Edition: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 419
      },
      {
        "product": "prod-204",
        "title": "Premium Series: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 3,
        "price": 192
      }
    ],
    "totalAmount": 1414,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 104",
    "orderDate": "2026-07-02T07:57:00.000Z"
  },
  {
    "id": "ord-1030",
    "userId": "usr-31",
    "orderedProducts": [
      {
        "product": "prod-91",
        "title": "Pro Edition: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 524
      },
      {
        "product": "prod-211",
        "title": "Premium Series: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 420
      }
    ],
    "totalAmount": 944,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 205",
    "orderDate": "2026-02-03T09:00:00.000Z"
  },
  {
    "id": "ord-1031",
    "userId": "usr-32",
    "orderedProducts": [
      {
        "product": "prod-94",
        "title": "Pro Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 524
      },
      {
        "product": "prod-218",
        "title": "Premium Series: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 1019
      }
    ],
    "totalAmount": 3086,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 306",
    "orderDate": "2026-03-04T10:03:00.000Z"
  },
  {
    "id": "ord-1032",
    "userId": "usr-33",
    "orderedProducts": [
      {
        "product": "prod-97",
        "title": "Pro Edition: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 3674
      },
      {
        "product": "prod-225",
        "title": "Premium Series: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 3,
        "price": 419
      }
    ],
    "totalAmount": 4931,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 407",
    "orderDate": "2026-04-05T11:06:00.000Z"
  },
  {
    "id": "ord-1033",
    "userId": "usr-34",
    "orderedProducts": [
      {
        "product": "prod-100",
        "title": "Pro Edition: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 209
      },
      {
        "product": "prod-232",
        "title": "Premium Series: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 1,
        "price": 216
      }
    ],
    "totalAmount": 634,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 508",
    "orderDate": "2026-05-06T12:09:00.000Z"
  },
  {
    "id": "ord-1034",
    "userId": "usr-35",
    "orderedProducts": [
      {
        "product": "prod-103",
        "title": "Deluxe Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-239",
        "title": "Premium Series: Foldable Laundry Mesh Basket",
        "quantity": 2,
        "price": 239
      }
    ],
    "totalAmount": 807,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 109",
    "orderDate": "2026-06-07T13:12:00.000Z"
  },
  {
    "id": "ord-1035",
    "userId": "usr-36",
    "orderedProducts": [
      {
        "product": "prod-106",
        "title": "Deluxe Pack: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-246",
        "title": "Premium Series: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 3,
        "price": 29999
      }
    ],
    "totalAmount": 90435,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 201",
    "orderDate": "2026-07-08T14:15:00.000Z"
  },
  {
    "id": "ord-1036",
    "userId": "usr-37",
    "orderedProducts": [
      {
        "product": "prod-109",
        "title": "Deluxe Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 384
      },
      {
        "product": "prod-253",
        "title": "Student Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 374
      }
    ],
    "totalAmount": 758,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 302",
    "orderDate": "2026-02-09T03:18:00.000Z"
  },
  {
    "id": "ord-1037",
    "userId": "usr-38",
    "orderedProducts": [
      {
        "product": "prod-112",
        "title": "Deluxe Pack: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 88
      },
      {
        "product": "prod-260",
        "title": "Student Pack: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 225
      }
    ],
    "totalAmount": 626,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 403",
    "orderDate": "2026-03-10T04:21:00.000Z"
  },
  {
    "id": "ord-1038",
    "userId": "usr-39",
    "orderedProducts": [
      {
        "product": "prod-115",
        "title": "Deluxe Pack: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1429
      },
      {
        "product": "prod-267",
        "title": "Student Pack: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 3,
        "price": 1499
      }
    ],
    "totalAmount": 5926,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 504",
    "orderDate": "2026-04-11T05:24:00.000Z"
  },
  {
    "id": "ord-1039",
    "userId": "usr-40",
    "orderedProducts": [
      {
        "product": "prod-118",
        "title": "Deluxe Pack: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 934
      },
      {
        "product": "prod-274",
        "title": "Student Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 1,
        "price": 249
      }
    ],
    "totalAmount": 2117,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 105",
    "orderDate": "2026-05-12T06:27:00.000Z"
  },
  {
    "id": "ord-1040",
    "userId": "usr-41",
    "orderedProducts": [
      {
        "product": "prod-121",
        "title": "Deluxe Pack: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1595
      },
      {
        "product": "prod-281",
        "title": "Student Pack: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 2,
        "price": 624
      }
    ],
    "totalAmount": 2843,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 206",
    "orderDate": "2026-06-13T06:30:00.000Z"
  },
  {
    "id": "ord-1041",
    "userId": "usr-42",
    "orderedProducts": [
      {
        "product": "prod-124",
        "title": "Deluxe Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-288",
        "title": "Student Pack: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 3,
        "price": 499
      }
    ],
    "totalAmount": 1935,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 307",
    "orderDate": "2026-07-14T07:33:00.000Z"
  },
  {
    "id": "ord-1042",
    "userId": "usr-43",
    "orderedProducts": [
      {
        "product": "prod-127",
        "title": "Deluxe Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-295",
        "title": "Student Pack: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 374
      }
    ],
    "totalAmount": 703,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 408",
    "orderDate": "2026-02-15T08:36:00.000Z"
  },
  {
    "id": "ord-1043",
    "userId": "usr-44",
    "orderedProducts": [
      {
        "product": "prod-130",
        "title": "Deluxe Pack: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 506
      },
      {
        "product": "prod-302",
        "title": "Ultra Edition: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 234
      }
    ],
    "totalAmount": 1480,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 509",
    "orderDate": "2026-03-16T09:39:00.000Z"
  },
  {
    "id": "ord-1044",
    "userId": "usr-45",
    "orderedProducts": [
      {
        "product": "prod-133",
        "title": "Deluxe Pack: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 274
      },
      {
        "product": "prod-309",
        "title": "Ultra Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 3,
        "price": 454
      }
    ],
    "totalAmount": 1636,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-1, Room 101",
    "orderDate": "2026-04-17T10:42:00.000Z"
  },
  {
    "id": "ord-1045",
    "userId": "usr-46",
    "orderedProducts": [
      {
        "product": "prod-136",
        "title": "Deluxe Pack: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-316",
        "title": "Ultra Edition: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 1,
        "price": 1949
      }
    ],
    "totalAmount": 2387,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 202",
    "orderDate": "2026-05-18T11:45:00.000Z"
  },
  {
    "id": "ord-1046",
    "userId": "usr-47",
    "orderedProducts": [
      {
        "product": "prod-139",
        "title": "Deluxe Pack: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 219
      },
      {
        "product": "prod-323",
        "title": "Ultra Edition: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 2,
        "price": 218
      }
    ],
    "totalAmount": 655,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 303",
    "orderDate": "2026-06-19T12:48:00.000Z"
  },
  {
    "id": "ord-1047",
    "userId": "usr-48",
    "orderedProducts": [
      {
        "product": "prod-142",
        "title": "Deluxe Pack: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 242
      },
      {
        "product": "prod-330",
        "title": "Ultra Edition: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 3,
        "price": 598
      }
    ],
    "totalAmount": 2278,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 404",
    "orderDate": "2026-07-20T13:51:00.000Z"
  },
  {
    "id": "ord-1048",
    "userId": "usr-49",
    "orderedProducts": [
      {
        "product": "prod-145",
        "title": "Deluxe Pack: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-337",
        "title": "Ultra Edition: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 389
      }
    ],
    "totalAmount": 718,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-02-21T02:54:00.000Z"
  },
  {
    "id": "ord-1049",
    "userId": "usr-50",
    "orderedProducts": [
      {
        "product": "prod-148",
        "title": "Deluxe Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 1649
      },
      {
        "product": "prod-344",
        "title": "Ultra Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 649
      }
    ],
    "totalAmount": 4596,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-03-22T03:57:00.000Z"
  },
  {
    "id": "ord-1050",
    "userId": "usr-51",
    "orderedProducts": [
      {
        "product": "prod-151",
        "title": "Campus Special: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1494
      },
      {
        "product": "prod-351",
        "title": "Bundle Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 3,
        "price": 1754
      }
    ],
    "totalAmount": 6756,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-04-23T05:00:00.000Z"
  },
  {
    "id": "ord-1051",
    "userId": "usr-52",
    "orderedProducts": [
      {
        "product": "prod-154",
        "title": "Campus Special: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 184
      },
      {
        "product": "prod-358",
        "title": "Bundle Pack: A3 Size Engineering Drawing Board",
        "quantity": 1,
        "price": 674
      }
    ],
    "totalAmount": 1042,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-05-24T06:03:00.000Z"
  },
  {
    "id": "ord-1052",
    "userId": "usr-53",
    "orderedProducts": [
      {
        "product": "prod-157",
        "title": "Campus Special: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 173
      },
      {
        "product": "prod-365",
        "title": "Bundle Pack: Anker PowerCore 10000mAh Power Bank",
        "quantity": 2,
        "price": 1754
      }
    ],
    "totalAmount": 3681,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-06-25T07:06:00.000Z"
  },
  {
    "id": "ord-1053",
    "userId": "usr-54",
    "orderedProducts": [
      {
        "product": "prod-160",
        "title": "Campus Special: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 207
      },
      {
        "product": "prod-372",
        "title": "Bundle Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 3,
        "price": 1214
      }
    ],
    "totalAmount": 4056,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-07-26T08:09:00.000Z"
  },
  {
    "id": "ord-1054",
    "userId": "usr-55",
    "orderedProducts": [
      {
        "product": "prod-163",
        "title": "Campus Special: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 804
      },
      {
        "product": "prod-379",
        "title": "Bundle Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 203
      }
    ],
    "totalAmount": 1007,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-02-27T09:12:00.000Z"
  },
  {
    "id": "ord-1055",
    "userId": "usr-56",
    "orderedProducts": [
      {
        "product": "prod-166",
        "title": "Campus Special: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1724
      },
      {
        "product": "prod-386",
        "title": "Bundle Pack: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 269
      }
    ],
    "totalAmount": 3986,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-03-28T10:15:00.000Z"
  },
  {
    "id": "ord-1056",
    "userId": "usr-57",
    "orderedProducts": [
      {
        "product": "prod-169",
        "title": "Campus Special: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1149
      },
      {
        "product": "prod-393",
        "title": "Bundle Pack: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 3,
        "price": 1754
      }
    ],
    "totalAmount": 6411,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-04-01T11:18:00.000Z"
  },
  {
    "id": "ord-1057",
    "userId": "usr-58",
    "orderedProducts": [
      {
        "product": "prod-172",
        "title": "Campus Special: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 1034
      },
      {
        "product": "prod-400",
        "title": "Bundle Pack: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 1,
        "price": 269
      }
    ],
    "totalAmount": 2337,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-05-02T12:21:00.000Z"
  },
  {
    "id": "ord-1058",
    "userId": "usr-59",
    "orderedProducts": [
      {
        "product": "prod-175",
        "title": "Campus Special: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 401
      },
      {
        "product": "prod-407",
        "title": "Special Edition: Camlin Geometry Box with Metal Compass",
        "quantity": 2,
        "price": 210
      }
    ],
    "totalAmount": 821,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-06-03T13:24:00.000Z"
  },
  {
    "id": "ord-1059",
    "userId": "usr-60",
    "orderedProducts": [
      {
        "product": "prod-178",
        "title": "Campus Special: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 316
      },
      {
        "product": "prod-414",
        "title": "Special Edition: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 3,
        "price": 1119
      }
    ],
    "totalAmount": 3989,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-07-04T14:27:00.000Z"
  },
  {
    "id": "ord-1060",
    "userId": "usr-61",
    "orderedProducts": [
      {
        "product": "prod-181",
        "title": "Campus Special: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 574
      },
      {
        "product": "prod-421",
        "title": "Special Edition: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 2030
      }
    ],
    "totalAmount": 2604,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-02-05T02:30:00.000Z"
  },
  {
    "id": "ord-1061",
    "userId": "usr-62",
    "orderedProducts": [
      {
        "product": "prod-184",
        "title": "Campus Special: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 201
      },
      {
        "product": "prod-428",
        "title": "Special Edition: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 385
      }
    ],
    "totalAmount": 1172,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-03-06T03:33:00.000Z"
  },
  {
    "id": "ord-1062",
    "userId": "usr-63",
    "orderedProducts": [
      {
        "product": "prod-187",
        "title": "Campus Special: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 344
      },
      {
        "product": "prod-435",
        "title": "Special Edition: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 3,
        "price": 489
      }
    ],
    "totalAmount": 1811,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-04-07T04:36:00.000Z"
  },
  {
    "id": "ord-1063",
    "userId": "usr-64",
    "orderedProducts": [
      {
        "product": "prod-190",
        "title": "Campus Special: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 286
      },
      {
        "product": "prod-442",
        "title": "Special Edition: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 1,
        "price": 308
      }
    ],
    "totalAmount": 880,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-05-08T05:39:00.000Z"
  },
  {
    "id": "ord-1064",
    "userId": "usr-65",
    "orderedProducts": [
      {
        "product": "prod-193",
        "title": "Campus Special: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1494
      },
      {
        "product": "prod-449",
        "title": "Special Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 2,
        "price": 419
      }
    ],
    "totalAmount": 2332,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-06-09T06:42:00.000Z"
  },
  {
    "id": "ord-1065",
    "userId": "usr-66",
    "orderedProducts": [
      {
        "product": "prod-196",
        "title": "Campus Special: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 28749
      },
      {
        "product": "prod-456",
        "title": "Mega Pack: Post-it Super Sticky Notes Color Pack",
        "quantity": 3,
        "price": 289
      }
    ],
    "totalAmount": 58365,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 204",
    "orderDate": "2026-07-10T07:45:00.000Z"
  },
  {
    "id": "ord-1066",
    "userId": "usr-67",
    "orderedProducts": [
      {
        "product": "prod-199",
        "title": "Campus Special: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 344
      },
      {
        "product": "prod-463",
        "title": "Mega Pack: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 1014
      }
    ],
    "totalAmount": 1358,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 305",
    "orderDate": "2026-02-11T08:48:00.000Z"
  },
  {
    "id": "ord-1067",
    "userId": "usr-68",
    "orderedProducts": [
      {
        "product": "prod-202",
        "title": "Premium Series: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 216
      },
      {
        "product": "prod-470",
        "title": "Mega Pack: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 724
      }
    ],
    "totalAmount": 1880,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 406",
    "orderDate": "2026-03-12T09:51:00.000Z"
  },
  {
    "id": "ord-1068",
    "userId": "usr-69",
    "orderedProducts": [
      {
        "product": "prod-205",
        "title": "Premium Series: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 144
      },
      {
        "product": "prod-477",
        "title": "Mega Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 3,
        "price": 434
      }
    ],
    "totalAmount": 1446,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-10, Room 507",
    "orderDate": "2026-04-13T10:54:00.000Z"
  },
  {
    "id": "ord-1069",
    "userId": "usr-70",
    "orderedProducts": [
      {
        "product": "prod-208",
        "title": "Premium Series: A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 599
      },
      {
        "product": "prod-484",
        "title": "Mega Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 1,
        "price": 254
      }
    ],
    "totalAmount": 1452,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
    "orderDate": "2026-05-14T11:57:00.000Z"
  },
  {
    "id": "ord-1070",
    "userId": "usr-71",
    "orderedProducts": [
      {
        "product": "prod-211",
        "title": "Premium Series: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 420
      },
      {
        "product": "prod-491",
        "title": "Mega Pack: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 2,
        "price": 724
      }
    ],
    "totalAmount": 1868,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
    "orderDate": "2026-06-15T13:00:00.000Z"
  },
  {
    "id": "ord-1071",
    "userId": "usr-72",
    "orderedProducts": [
      {
        "product": "prod-214",
        "title": "Premium Series: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 959
      },
      {
        "product": "prod-498",
        "title": "Mega Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 3,
        "price": 2174
      }
    ],
    "totalAmount": 8440,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
    "orderDate": "2026-07-16T14:03:00.000Z"
  },
  {
    "id": "ord-1072",
    "userId": "usr-73",
    "orderedProducts": [
      {
        "product": "prod-217",
        "title": "Premium Series: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1439
      },
      {
        "product": "prod-5",
        "title": "Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 120
      }
    ],
    "totalAmount": 1559,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-4, Room 402",
    "orderDate": "2026-02-17T03:06:00.000Z"
  },
  {
    "id": "ord-1073",
    "userId": "usr-74",
    "orderedProducts": [
      {
        "product": "prod-220",
        "title": "Premium Series: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 599
      },
      {
        "product": "prod-12",
        "title": "Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 80
      }
    ],
    "totalAmount": 1358,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 503",
    "orderDate": "2026-03-18T04:09:00.000Z"
  },
  {
    "id": "ord-1074",
    "userId": "usr-75",
    "orderedProducts": [
      {
        "product": "prod-223",
        "title": "Premium Series: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 202
      },
      {
        "product": "prod-19",
        "title": "Wired Gaming Keyboard with RGB Backlight",
        "quantity": 3,
        "price": 999
      }
    ],
    "totalAmount": 3199,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 104",
    "orderDate": "2026-04-19T05:12:00.000Z"
  },
  {
    "id": "ord-1075",
    "userId": "usr-76",
    "orderedProducts": [
      {
        "product": "prod-226",
        "title": "Premium Series: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 144
      },
      {
        "product": "prod-26",
        "title": "Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 1,
        "price": 120
      }
    ],
    "totalAmount": 408,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 205",
    "orderDate": "2026-05-20T06:15:00.000Z"
  },
  {
    "id": "ord-1076",
    "userId": "usr-77",
    "orderedProducts": [
      {
        "product": "prod-229",
        "title": "Premium Series: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 180
      },
      {
        "product": "prod-33",
        "title": "Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 2,
        "price": 249
      }
    ],
    "totalAmount": 678,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 306",
    "orderDate": "2026-06-21T07:18:00.000Z"
  },
  {
    "id": "ord-1077",
    "userId": "usr-78",
    "orderedProducts": [
      {
        "product": "prod-232",
        "title": "Premium Series: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 216
      },
      {
        "product": "prod-40",
        "title": "Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 3,
        "price": 249
      }
    ],
    "totalAmount": 1179,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 407",
    "orderDate": "2026-07-22T08:21:00.000Z"
  },
  {
    "id": "ord-1078",
    "userId": "usr-79",
    "orderedProducts": [
      {
        "product": "prod-235",
        "title": "Premium Series: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 419
      },
      {
        "product": "prod-47",
        "title": "Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 3499
      }
    ],
    "totalAmount": 3918,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 508",
    "orderDate": "2026-02-23T09:24:00.000Z"
  },
  {
    "id": "ord-1079",
    "userId": "usr-80",
    "orderedProducts": [
      {
        "product": "prod-238",
        "title": "Premium Series: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 479
      },
      {
        "product": "prod-54",
        "title": "Pro Edition: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 168
      }
    ],
    "totalAmount": 1294,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 109",
    "orderDate": "2026-03-24T10:27:00.000Z"
  },
  {
    "id": "ord-1080",
    "userId": "usr-81",
    "orderedProducts": [
      {
        "product": "prod-241",
        "title": "Premium Series: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 599
      },
      {
        "product": "prod-61",
        "title": "Pro Edition: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 3,
        "price": 368
      }
    ],
    "totalAmount": 1703,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 201",
    "orderDate": "2026-04-25T10:30:00.000Z"
  },
  {
    "id": "ord-1081",
    "userId": "usr-82",
    "orderedProducts": [
      {
        "product": "prod-244",
        "title": "Premium Series: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 599
      },
      {
        "product": "prod-68",
        "title": "Pro Edition: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 1,
        "price": 891
      }
    ],
    "totalAmount": 2089,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 302",
    "orderDate": "2026-05-26T11:33:00.000Z"
  },
  {
    "id": "ord-1082",
    "userId": "usr-83",
    "orderedProducts": [
      {
        "product": "prod-247",
        "title": "Premium Series: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 4199
      },
      {
        "product": "prod-75",
        "title": "Pro Edition: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 2,
        "price": 366
      }
    ],
    "totalAmount": 4931,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 403",
    "orderDate": "2026-06-27T12:36:00.000Z"
  },
  {
    "id": "ord-1083",
    "userId": "usr-84",
    "orderedProducts": [
      {
        "product": "prod-250",
        "title": "Premium Series: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 239
      },
      {
        "product": "prod-82",
        "title": "Pro Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 3,
        "price": 189
      }
    ],
    "totalAmount": 1045,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 504",
    "orderDate": "2026-07-28T13:39:00.000Z"
  },
  {
    "id": "ord-1084",
    "userId": "usr-85",
    "orderedProducts": [
      {
        "product": "prod-253",
        "title": "Student Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 374
      },
      {
        "product": "prod-89",
        "title": "Pro Edition: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 209
      }
    ],
    "totalAmount": 583,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-1, Room 105",
    "orderDate": "2026-02-01T02:42:00.000Z"
  },
  {
    "id": "ord-1085",
    "userId": "usr-86",
    "orderedProducts": [
      {
        "product": "prod-256",
        "title": "Student Pack: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 249
      },
      {
        "product": "prod-96",
        "title": "Pro Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 26249
      }
    ],
    "totalAmount": 52996,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 206",
    "orderDate": "2026-03-02T03:45:00.000Z"
  },
  {
    "id": "ord-1086",
    "userId": "usr-87",
    "orderedProducts": [
      {
        "product": "prod-259",
        "title": "Student Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 436
      },
      {
        "product": "prod-103",
        "title": "Deluxe Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 3,
        "price": 329
      }
    ],
    "totalAmount": 1423,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 307",
    "orderDate": "2026-04-03T04:48:00.000Z"
  },
  {
    "id": "ord-1087",
    "userId": "usr-88",
    "orderedProducts": [
      {
        "product": "prod-262",
        "title": "Student Pack: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 100
      },
      {
        "product": "prod-110",
        "title": "Deluxe Pack: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 1,
        "price": 198
      }
    ],
    "totalAmount": 398,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 408",
    "orderDate": "2026-05-04T05:51:00.000Z"
  },
  {
    "id": "ord-1088",
    "userId": "usr-89",
    "orderedProducts": [
      {
        "product": "prod-265",
        "title": "Student Pack: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1624
      },
      {
        "product": "prod-117",
        "title": "Deluxe Pack: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 2,
        "price": 1319
      }
    ],
    "totalAmount": 4262,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-5, Room 509",
    "orderDate": "2026-06-05T06:54:00.000Z"
  },
  {
    "id": "ord-1089",
    "userId": "usr-90",
    "orderedProducts": [
      {
        "product": "prod-268",
        "title": "Student Pack: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 1061
      },
      {
        "product": "prod-124",
        "title": "Deluxe Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 3,
        "price": 219
      }
    ],
    "totalAmount": 2779,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 101",
    "orderDate": "2026-07-06T07:57:00.000Z"
  },
  {
    "id": "ord-1090",
    "userId": "usr-91",
    "orderedProducts": [
      {
        "product": "prod-271",
        "title": "Student Pack: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1813
      },
      {
        "product": "prod-131",
        "title": "Deluxe Pack: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 549
      }
    ],
    "totalAmount": 2362,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 202",
    "orderDate": "2026-02-07T09:00:00.000Z"
  },
  {
    "id": "ord-1091",
    "userId": "usr-92",
    "orderedProducts": [
      {
        "product": "prod-274",
        "title": "Student Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 249
      },
      {
        "product": "prod-138",
        "title": "Deluxe Pack: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 439
      }
    ],
    "totalAmount": 1376,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 303",
    "orderDate": "2026-03-08T10:03:00.000Z"
  },
  {
    "id": "ord-1092",
    "userId": "usr-93",
    "orderedProducts": [
      {
        "product": "prod-277",
        "title": "Student Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 374
      },
      {
        "product": "prod-145",
        "title": "Deluxe Pack: Embroidered Campus Baseball Cap",
        "quantity": 3,
        "price": 329
      }
    ],
    "totalAmount": 1361,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 404",
    "orderDate": "2026-04-09T11:06:00.000Z"
  },
  {
    "id": "ord-1093",
    "userId": "usr-94",
    "orderedProducts": [
      {
        "product": "prod-280",
        "title": "Student Pack: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 575
      },
      {
        "product": "prod-152",
        "title": "Campus Special: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 1,
        "price": 207
      }
    ],
    "totalAmount": 1357,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-05-10T12:09:00.000Z"
  },
  {
    "id": "ord-1094",
    "userId": "usr-95",
    "orderedProducts": [
      {
        "product": "prod-283",
        "title": "Student Pack: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 311
      },
      {
        "product": "prod-159",
        "title": "Campus Special: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 2,
        "price": 401
      }
    ],
    "totalAmount": 1113,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-06-11T13:12:00.000Z"
  },
  {
    "id": "ord-1095",
    "userId": "usr-96",
    "orderedProducts": [
      {
        "product": "prod-286",
        "title": "Student Pack: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 249
      },
      {
        "product": "prod-166",
        "title": "Campus Special: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 3,
        "price": 1724
      }
    ],
    "totalAmount": 5670,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-07-12T14:15:00.000Z"
  },
  {
    "id": "ord-1096",
    "userId": "usr-97",
    "orderedProducts": [
      {
        "product": "prod-289",
        "title": "Student Pack: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 249
      },
      {
        "product": "prod-173",
        "title": "Campus Special: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 193
      }
    ],
    "totalAmount": 442,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-02-13T03:18:00.000Z"
  },
  {
    "id": "ord-1097",
    "userId": "usr-98",
    "orderedProducts": [
      {
        "product": "prod-292",
        "title": "Student Pack: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 275
      },
      {
        "product": "prod-180",
        "title": "Campus Special: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 529
      }
    ],
    "totalAmount": 1608,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-03-14T04:21:00.000Z"
  },
  {
    "id": "ord-1098",
    "userId": "usr-99",
    "orderedProducts": [
      {
        "product": "prod-295",
        "title": "Student Pack: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 374
      },
      {
        "product": "prod-187",
        "title": "Campus Special: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 3,
        "price": 344
      }
    ],
    "totalAmount": 1406,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-04-15T05:24:00.000Z"
  },
  {
    "id": "ord-1099",
    "userId": "usr-100",
    "orderedProducts": [
      {
        "product": "prod-298",
        "title": "Student Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 1874
      },
      {
        "product": "prod-194",
        "title": "Campus Special: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 1,
        "price": 574
      }
    ],
    "totalAmount": 4322,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-05-16T06:27:00.000Z"
  },
  {
    "id": "ord-1100",
    "userId": "usr-101",
    "orderedProducts": [
      {
        "product": "prod-301",
        "title": "Ultra Edition: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1689
      },
      {
        "product": "prod-201",
        "title": "Premium Series: Casio FX-991EX Scientific Calculator",
        "quantity": 2,
        "price": 1559
      }
    ],
    "totalAmount": 4807,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-06-17T06:30:00.000Z"
  },
  {
    "id": "ord-1101",
    "userId": "usr-102",
    "orderedProducts": [
      {
        "product": "prod-304",
        "title": "Ultra Edition: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 208
      },
      {
        "product": "prod-208",
        "title": "Premium Series: A3 Size Engineering Drawing Board",
        "quantity": 3,
        "price": 599
      }
    ],
    "totalAmount": 2213,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-07-18T07:33:00.000Z"
  },
  {
    "id": "ord-1102",
    "userId": "usr-103",
    "orderedProducts": [
      {
        "product": "prod-307",
        "title": "Ultra Edition: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 195
      },
      {
        "product": "prod-215",
        "title": "Premium Series: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1559
      }
    ],
    "totalAmount": 1754,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-02-19T08:36:00.000Z"
  },
  {
    "id": "ord-1103",
    "userId": "usr-104",
    "orderedProducts": [
      {
        "product": "prod-310",
        "title": "Ultra Edition: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 234
      },
      {
        "product": "prod-222",
        "title": "Premium Series: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 1079
      }
    ],
    "totalAmount": 2626,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-03-20T09:39:00.000Z"
  },
  {
    "id": "ord-1104",
    "userId": "usr-105",
    "orderedProducts": [
      {
        "product": "prod-313",
        "title": "Ultra Edition: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 909
      },
      {
        "product": "prod-229",
        "title": "Premium Series: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 3,
        "price": 180
      }
    ],
    "totalAmount": 1449,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-04-21T10:42:00.000Z"
  },
  {
    "id": "ord-1105",
    "userId": "usr-106",
    "orderedProducts": [
      {
        "product": "prod-316",
        "title": "Ultra Edition: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1949
      },
      {
        "product": "prod-236",
        "title": "Premium Series: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 1,
        "price": 239
      }
    ],
    "totalAmount": 4137,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-05-22T11:45:00.000Z"
  },
  {
    "id": "ord-1106",
    "userId": "usr-107",
    "orderedProducts": [
      {
        "product": "prod-319",
        "title": "Ultra Edition: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1299
      },
      {
        "product": "prod-243",
        "title": "Premium Series: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 2,
        "price": 1559
      }
    ],
    "totalAmount": 4417,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-06-23T12:48:00.000Z"
  },
  {
    "id": "ord-1107",
    "userId": "usr-108",
    "orderedProducts": [
      {
        "product": "prod-322",
        "title": "Ultra Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 1169
      },
      {
        "product": "prod-250",
        "title": "Premium Series: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 3,
        "price": 239
      }
    ],
    "totalAmount": 3055,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-07-24T13:51:00.000Z"
  },
  {
    "id": "ord-1108",
    "userId": "usr-109",
    "orderedProducts": [
      {
        "product": "prod-325",
        "title": "Ultra Edition: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 454
      },
      {
        "product": "prod-257",
        "title": "Student Pack: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 188
      }
    ],
    "totalAmount": 642,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-02-25T02:54:00.000Z"
  },
  {
    "id": "ord-1109",
    "userId": "usr-110",
    "orderedProducts": [
      {
        "product": "prod-328",
        "title": "Ultra Edition: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 358
      },
      {
        "product": "prod-264",
        "title": "Student Pack: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 999
      }
    ],
    "totalAmount": 2714,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-03-26T03:57:00.000Z"
  },
  {
    "id": "ord-1110",
    "userId": "usr-111",
    "orderedProducts": [
      {
        "product": "prod-331",
        "title": "Ultra Edition: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 649
      },
      {
        "product": "prod-271",
        "title": "Student Pack: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 3,
        "price": 1813
      }
    ],
    "totalAmount": 6088,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 204",
    "orderDate": "2026-04-27T05:00:00.000Z"
  },
  {
    "id": "ord-1111",
    "userId": "usr-112",
    "orderedProducts": [
      {
        "product": "prod-334",
        "title": "Ultra Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 228
      },
      {
        "product": "prod-278",
        "title": "Student Pack: Amul Butter 500g Pack",
        "quantity": 1,
        "price": 344
      }
    ],
    "totalAmount": 800,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 305",
    "orderDate": "2026-05-28T06:03:00.000Z"
  },
  {
    "id": "ord-1112",
    "userId": "usr-113",
    "orderedProducts": [
      {
        "product": "prod-337",
        "title": "Ultra Edition: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 389
      },
      {
        "product": "prod-285",
        "title": "Student Pack: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 2,
        "price": 436
      }
    ],
    "totalAmount": 1261,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-9, Room 406",
    "orderDate": "2026-06-01T07:06:00.000Z"
  },
  {
    "id": "ord-1113",
    "userId": "usr-114",
    "orderedProducts": [
      {
        "product": "prod-340",
        "title": "Ultra Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 324
      },
      {
        "product": "prod-292",
        "title": "Student Pack: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 3,
        "price": 275
      }
    ],
    "totalAmount": 1473,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 507",
    "orderDate": "2026-07-02T08:09:00.000Z"
  },
  {
    "id": "ord-1114",
    "userId": "usr-115",
    "orderedProducts": [
      {
        "product": "prod-343",
        "title": "Ultra Edition: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1689
      },
      {
        "product": "prod-299",
        "title": "Student Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 374
      }
    ],
    "totalAmount": 2063,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
    "orderDate": "2026-02-03T09:12:00.000Z"
  },
  {
    "id": "ord-1115",
    "userId": "usr-116",
    "orderedProducts": [
      {
        "product": "prod-346",
        "title": "Ultra Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 32499
      },
      {
        "product": "prod-306",
        "title": "Ultra Edition: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 259
      }
    ],
    "totalAmount": 65516,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
    "orderDate": "2026-03-04T10:15:00.000Z"
  },
  {
    "id": "ord-1116",
    "userId": "usr-117",
    "orderedProducts": [
      {
        "product": "prod-349",
        "title": "Ultra Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 389
      },
      {
        "product": "prod-313",
        "title": "Ultra Edition: Logitech M220 Silent Wireless Mouse",
        "quantity": 3,
        "price": 909
      }
    ],
    "totalAmount": 3116,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
    "orderDate": "2026-04-05T11:18:00.000Z"
  },
  {
    "id": "ord-1117",
    "userId": "usr-118",
    "orderedProducts": [
      {
        "product": "prod-352",
        "title": "Bundle Pack: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 243
      },
      {
        "product": "prod-320",
        "title": "Ultra Edition: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 1,
        "price": 649
      }
    ],
    "totalAmount": 1135,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 402",
    "orderDate": "2026-05-06T12:21:00.000Z"
  },
  {
    "id": "ord-1118",
    "userId": "usr-119",
    "orderedProducts": [
      {
        "product": "prod-355",
        "title": "Bundle Pack: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 162
      },
      {
        "product": "prod-327",
        "title": "Ultra Edition: MyFitness Peanut Butter Smooth 500g",
        "quantity": 2,
        "price": 389
      }
    ],
    "totalAmount": 940,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 503",
    "orderDate": "2026-06-07T13:24:00.000Z"
  },
  {
    "id": "ord-1119",
    "userId": "usr-120",
    "orderedProducts": [
      {
        "product": "prod-358",
        "title": "Bundle Pack: A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 674
      },
      {
        "product": "prod-334",
        "title": "Ultra Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 3,
        "price": 228
      }
    ],
    "totalAmount": 2032,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 104",
    "orderDate": "2026-07-08T14:27:00.000Z"
  },
  {
    "id": "ord-1120",
    "userId": "usr-121",
    "orderedProducts": [
      {
        "product": "prod-361",
        "title": "Bundle Pack: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 473
      },
      {
        "product": "prod-341",
        "title": "Ultra Edition: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 649
      }
    ],
    "totalAmount": 1122,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 205",
    "orderDate": "2026-02-09T02:30:00.000Z"
  },
  {
    "id": "ord-1121",
    "userId": "usr-122",
    "orderedProducts": [
      {
        "product": "prod-364",
        "title": "Bundle Pack: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 1079
      },
      {
        "product": "prod-348",
        "title": "Ultra Edition: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 1949
      }
    ],
    "totalAmount": 6056,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 306",
    "orderDate": "2026-03-10T03:33:00.000Z"
  },
  {
    "id": "ord-1122",
    "userId": "usr-123",
    "orderedProducts": [
      {
        "product": "prod-367",
        "title": "Bundle Pack: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1619
      },
      {
        "product": "prod-355",
        "title": "Bundle Pack: Hardbound Grid-Line Engineering Journal",
        "quantity": 3,
        "price": 162
      }
    ],
    "totalAmount": 2105,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 407",
    "orderDate": "2026-04-11T04:36:00.000Z"
  },
  {
    "id": "ord-1123",
    "userId": "usr-124",
    "orderedProducts": [
      {
        "product": "prod-370",
        "title": "Bundle Pack: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 674
      },
      {
        "product": "prod-362",
        "title": "Bundle Pack: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 1,
        "price": 108
      }
    ],
    "totalAmount": 1456,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 508",
    "orderDate": "2026-05-12T05:39:00.000Z"
  },
  {
    "id": "ord-1124",
    "userId": "usr-125",
    "orderedProducts": [
      {
        "product": "prod-373",
        "title": "Bundle Pack: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 227
      },
      {
        "product": "prod-369",
        "title": "Bundle Pack: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 2,
        "price": 1349
      }
    ],
    "totalAmount": 2925,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 109",
    "orderDate": "2026-06-13T06:42:00.000Z"
  },
  {
    "id": "ord-1125",
    "userId": "usr-126",
    "orderedProducts": [
      {
        "product": "prod-376",
        "title": "Bundle Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 162
      },
      {
        "product": "prod-376",
        "title": "Bundle Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 3,
        "price": 162
      }
    ],
    "totalAmount": 810,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 201",
    "orderDate": "2026-07-14T07:45:00.000Z"
  },
  {
    "id": "ord-1126",
    "userId": "usr-127",
    "orderedProducts": [
      {
        "product": "prod-379",
        "title": "Bundle Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 203
      },
      {
        "product": "prod-383",
        "title": "Bundle Pack: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 336
      }
    ],
    "totalAmount": 539,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 302",
    "orderDate": "2026-02-15T08:48:00.000Z"
  },
  {
    "id": "ord-1127",
    "userId": "usr-128",
    "orderedProducts": [
      {
        "product": "prod-382",
        "title": "Bundle Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 243
      },
      {
        "product": "prod-390",
        "title": "Bundle Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 336
      }
    ],
    "totalAmount": 1158,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 403",
    "orderDate": "2026-03-16T09:51:00.000Z"
  },
  {
    "id": "ord-1128",
    "userId": "usr-129",
    "orderedProducts": [
      {
        "product": "prod-385",
        "title": "Bundle Pack: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 471
      },
      {
        "product": "prod-397",
        "title": "Bundle Pack: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 3,
        "price": 4724
      }
    ],
    "totalAmount": 14643,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-10, Room 504",
    "orderDate": "2026-04-17T10:54:00.000Z"
  },
  {
    "id": "ord-1129",
    "userId": "usr-130",
    "orderedProducts": [
      {
        "product": "prod-388",
        "title": "Bundle Pack: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 539
      },
      {
        "product": "prod-404",
        "title": "Special Edition: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 1,
        "price": 224
      }
    ],
    "totalAmount": 1302,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 105",
    "orderDate": "2026-05-18T11:57:00.000Z"
  },
  {
    "id": "ord-1130",
    "userId": "usr-131",
    "orderedProducts": [
      {
        "product": "prod-391",
        "title": "Bundle Pack: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 674
      },
      {
        "product": "prod-411",
        "title": "Special Edition: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 2,
        "price": 490
      }
    ],
    "totalAmount": 1654,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 206",
    "orderDate": "2026-06-19T13:00:00.000Z"
  },
  {
    "id": "ord-1131",
    "userId": "usr-132",
    "orderedProducts": [
      {
        "product": "prod-394",
        "title": "Bundle Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 674
      },
      {
        "product": "prod-418",
        "title": "Special Edition: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 3,
        "price": 1189
      }
    ],
    "totalAmount": 4915,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 307",
    "orderDate": "2026-07-20T14:03:00.000Z"
  },
  {
    "id": "ord-1132",
    "userId": "usr-133",
    "orderedProducts": [
      {
        "product": "prod-397",
        "title": "Bundle Pack: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 4724
      },
      {
        "product": "prod-425",
        "title": "Special Edition: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 489
      }
    ],
    "totalAmount": 5213,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-4, Room 408",
    "orderDate": "2026-02-21T03:06:00.000Z"
  },
  {
    "id": "ord-1133",
    "userId": "usr-134",
    "orderedProducts": [
      {
        "product": "prod-400",
        "title": "Bundle Pack: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 269
      },
      {
        "product": "prod-432",
        "title": "Special Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 252
      }
    ],
    "totalAmount": 1042,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 509",
    "orderDate": "2026-03-22T04:09:00.000Z"
  },
  {
    "id": "ord-1134",
    "userId": "usr-135",
    "orderedProducts": [
      {
        "product": "prod-403",
        "title": "Special Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 419
      },
      {
        "product": "prod-439",
        "title": "Special Edition: Foldable Laundry Mesh Basket",
        "quantity": 3,
        "price": 279
      }
    ],
    "totalAmount": 1256,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 101",
    "orderDate": "2026-04-23T05:12:00.000Z"
  },
  {
    "id": "ord-1135",
    "userId": "usr-136",
    "orderedProducts": [
      {
        "product": "prod-406",
        "title": "Special Edition: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 279
      },
      {
        "product": "prod-446",
        "title": "Special Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 1,
        "price": 34999
      }
    ],
    "totalAmount": 35557,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 202",
    "orderDate": "2026-05-24T06:15:00.000Z"
  },
  {
    "id": "ord-1136",
    "userId": "usr-137",
    "orderedProducts": [
      {
        "product": "prod-409",
        "title": "Special Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 489
      },
      {
        "product": "prod-453",
        "title": "Mega Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 2,
        "price": 434
      }
    ],
    "totalAmount": 1357,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 303",
    "orderDate": "2026-06-25T07:18:00.000Z"
  },
  {
    "id": "ord-1137",
    "userId": "usr-138",
    "orderedProducts": [
      {
        "product": "prod-412",
        "title": "Special Edition: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 112
      },
      {
        "product": "prod-460",
        "title": "Mega Pack: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 3,
        "price": 261
      }
    ],
    "totalAmount": 1007,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 404",
    "orderDate": "2026-07-26T08:21:00.000Z"
  },
  {
    "id": "ord-1138",
    "userId": "usr-139",
    "orderedProducts": [
      {
        "product": "prod-415",
        "title": "Special Edition: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1819
      },
      {
        "product": "prod-467",
        "title": "Mega Pack: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1739
      }
    ],
    "totalAmount": 3558,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-02-27T09:24:00.000Z"
  },
  {
    "id": "ord-1139",
    "userId": "usr-140",
    "orderedProducts": [
      {
        "product": "prod-418",
        "title": "Special Edition: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 1189
      },
      {
        "product": "prod-474",
        "title": "Mega Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 289
      }
    ],
    "totalAmount": 2956,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-03-28T10:27:00.000Z"
  },
  {
    "id": "ord-1140",
    "userId": "usr-141",
    "orderedProducts": [
      {
        "product": "prod-421",
        "title": "Special Edition: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 2030
      },
      {
        "product": "prod-481",
        "title": "Mega Pack: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 3,
        "price": 724
      }
    ],
    "totalAmount": 4202,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-04-01T10:30:00.000Z"
  },
  {
    "id": "ord-1141",
    "userId": "usr-142",
    "orderedProducts": [
      {
        "product": "prod-424",
        "title": "Special Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 279
      },
      {
        "product": "prod-488",
        "title": "Mega Pack: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 1,
        "price": 579
      }
    ],
    "totalAmount": 1137,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-05-02T11:33:00.000Z"
  },
  {
    "id": "ord-1142",
    "userId": "usr-143",
    "orderedProducts": [
      {
        "product": "prod-427",
        "title": "Special Edition: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 419
      },
      {
        "product": "prod-495",
        "title": "Mega Pack: Embroidered Campus Baseball Cap",
        "quantity": 2,
        "price": 434
      }
    ],
    "totalAmount": 1287,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-06-03T12:36:00.000Z"
  },
  {
    "id": "ord-1143",
    "userId": "usr-144",
    "orderedProducts": [
      {
        "product": "prod-430",
        "title": "Special Edition: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 644
      },
      {
        "product": "prod-2",
        "title": "Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 3,
        "price": 180
      }
    ],
    "totalAmount": 1828,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-07-04T13:39:00.000Z"
  },
  {
    "id": "ord-1144",
    "userId": "usr-145",
    "orderedProducts": [
      {
        "product": "prod-433",
        "title": "Special Edition: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 349
      },
      {
        "product": "prod-9",
        "title": "Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 349
      }
    ],
    "totalAmount": 698,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-02-05T02:42:00.000Z"
  },
  {
    "id": "ord-1145",
    "userId": "usr-146",
    "orderedProducts": [
      {
        "product": "prod-436",
        "title": "Special Edition: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 279
      },
      {
        "product": "prod-16",
        "title": "Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1499
      }
    ],
    "totalAmount": 3556,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-03-06T03:45:00.000Z"
  },
  {
    "id": "ord-1146",
    "userId": "usr-147",
    "orderedProducts": [
      {
        "product": "prod-439",
        "title": "Special Edition: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 279
      },
      {
        "product": "prod-23",
        "title": "Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 3,
        "price": 168
      }
    ],
    "totalAmount": 783,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-04-07T04:48:00.000Z"
  },
  {
    "id": "ord-1147",
    "userId": "usr-148",
    "orderedProducts": [
      {
        "product": "prod-442",
        "title": "Special Edition: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 308
      },
      {
        "product": "prod-30",
        "title": "Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 1,
        "price": 460
      }
    ],
    "totalAmount": 1076,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-05-08T05:51:00.000Z"
  },
  {
    "id": "ord-1148",
    "userId": "usr-149",
    "orderedProducts": [
      {
        "product": "prod-445",
        "title": "Special Edition: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 419
      },
      {
        "product": "prod-37",
        "title": "Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 2,
        "price": 299
      }
    ],
    "totalAmount": 1017,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-06-09T06:54:00.000Z"
  },
  {
    "id": "ord-1149",
    "userId": "usr-150",
    "orderedProducts": [
      {
        "product": "prod-448",
        "title": "Special Edition: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 2099
      },
      {
        "product": "prod-44",
        "title": "Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 3,
        "price": 499
      }
    ],
    "totalAmount": 5695,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-07-10T07:57:00.000Z"
  },
  {
    "id": "ord-1150",
    "userId": "usr-151",
    "orderedProducts": [
      {
        "product": "prod-451",
        "title": "Mega Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1884
      },
      {
        "product": "prod-51",
        "title": "Pro Edition: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1364
      }
    ],
    "totalAmount": 3248,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-02-11T09:00:00.000Z"
  },
  {
    "id": "ord-1151",
    "userId": "usr-152",
    "orderedProducts": [
      {
        "product": "prod-454",
        "title": "Mega Pack: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 232
      },
      {
        "product": "prod-58",
        "title": "Pro Edition: A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 524
      }
    ],
    "totalAmount": 1512,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-03-12T10:03:00.000Z"
  },
  {
    "id": "ord-1152",
    "userId": "usr-153",
    "orderedProducts": [
      {
        "product": "prod-457",
        "title": "Mega Pack: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 218
      },
      {
        "product": "prod-65",
        "title": "Pro Edition: Anker PowerCore 10000mAh Power Bank",
        "quantity": 3,
        "price": 1364
      }
    ],
    "totalAmount": 4310,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-04-13T11:06:00.000Z"
  },
  {
    "id": "ord-1153",
    "userId": "usr-154",
    "orderedProducts": [
      {
        "product": "prod-460",
        "title": "Mega Pack: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 261
      },
      {
        "product": "prod-72",
        "title": "Pro Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 1,
        "price": 944
      }
    ],
    "totalAmount": 1466,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-05-14T12:09:00.000Z"
  },
  {
    "id": "ord-1154",
    "userId": "usr-155",
    "orderedProducts": [
      {
        "product": "prod-463",
        "title": "Mega Pack: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 1014
      },
      {
        "product": "prod-79",
        "title": "Pro Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 2,
        "price": 158
      }
    ],
    "totalAmount": 1330,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-06-15T13:12:00.000Z"
  },
  {
    "id": "ord-1155",
    "userId": "usr-156",
    "orderedProducts": [
      {
        "product": "prod-466",
        "title": "Mega Pack: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 2174
      },
      {
        "product": "prod-86",
        "title": "Pro Edition: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 3,
        "price": 209
      }
    ],
    "totalAmount": 4975,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 204",
    "orderDate": "2026-07-16T14:15:00.000Z"
  },
  {
    "id": "ord-1156",
    "userId": "usr-157",
    "orderedProducts": [
      {
        "product": "prod-469",
        "title": "Mega Pack: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1449
      },
      {
        "product": "prod-93",
        "title": "Pro Edition: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1364
      }
    ],
    "totalAmount": 2813,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 305",
    "orderDate": "2026-02-17T03:18:00.000Z"
  },
  {
    "id": "ord-1157",
    "userId": "usr-158",
    "orderedProducts": [
      {
        "product": "prod-472",
        "title": "Mega Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 1304
      },
      {
        "product": "prod-100",
        "title": "Pro Edition: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 209
      }
    ],
    "totalAmount": 3026,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 406",
    "orderDate": "2026-03-18T04:21:00.000Z"
  },
  {
    "id": "ord-1158",
    "userId": "usr-159",
    "orderedProducts": [
      {
        "product": "prod-475",
        "title": "Mega Pack: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 506
      },
      {
        "product": "prod-107",
        "title": "Deluxe Pack: Camlin Geometry Box with Metal Compass",
        "quantity": 3,
        "price": 165
      }
    ],
    "totalAmount": 1001,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 507",
    "orderDate": "2026-04-19T05:24:00.000Z"
  },
  {
    "id": "ord-1159",
    "userId": "usr-160",
    "orderedProducts": [
      {
        "product": "prod-478",
        "title": "Mega Pack: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 399
      },
      {
        "product": "prod-114",
        "title": "Deluxe Pack: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 1,
        "price": 879
      }
    ],
    "totalAmount": 1677,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
    "orderDate": "2026-05-20T06:27:00.000Z"
  },
  {
    "id": "ord-1160",
    "userId": "usr-161",
    "orderedProducts": [
      {
        "product": "prod-481",
        "title": "Mega Pack: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 724
      },
      {
        "product": "prod-121",
        "title": "Deluxe Pack: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 2,
        "price": 1595
      }
    ],
    "totalAmount": 3914,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
    "orderDate": "2026-06-21T06:30:00.000Z"
  },
  {
    "id": "ord-1161",
    "userId": "usr-162",
    "orderedProducts": [
      {
        "product": "prod-484",
        "title": "Mega Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 254
      },
      {
        "product": "prod-128",
        "title": "Deluxe Pack: Amul Butter 500g Pack",
        "quantity": 3,
        "price": 303
      }
    ],
    "totalAmount": 1417,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
    "orderDate": "2026-07-22T07:33:00.000Z"
  },
  {
    "id": "ord-1162",
    "userId": "usr-163",
    "orderedProducts": [
      {
        "product": "prod-487",
        "title": "Mega Pack: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 434
      },
      {
        "product": "prod-135",
        "title": "Deluxe Pack: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 384
      }
    ],
    "totalAmount": 818,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 402",
    "orderDate": "2026-02-23T08:36:00.000Z"
  },
  {
    "id": "ord-1163",
    "userId": "usr-164",
    "orderedProducts": [
      {
        "product": "prod-490",
        "title": "Mega Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 361
      },
      {
        "product": "prod-142",
        "title": "Deluxe Pack: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 242
      }
    ],
    "totalAmount": 1206,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 503",
    "orderDate": "2026-03-24T09:39:00.000Z"
  },
  {
    "id": "ord-1164",
    "userId": "usr-165",
    "orderedProducts": [
      {
        "product": "prod-493",
        "title": "Mega Pack: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1884
      },
      {
        "product": "prod-149",
        "title": "Deluxe Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 3,
        "price": 329
      }
    ],
    "totalAmount": 2871,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-1, Room 104",
    "orderDate": "2026-04-25T10:42:00.000Z"
  },
  {
    "id": "ord-1165",
    "userId": "usr-166",
    "orderedProducts": [
      {
        "product": "prod-496",
        "title": "Mega Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 36249
      },
      {
        "product": "prod-156",
        "title": "Campus Special: Post-it Super Sticky Notes Color Pack",
        "quantity": 1,
        "price": 229
      }
    ],
    "totalAmount": 72727,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 205",
    "orderDate": "2026-05-26T11:45:00.000Z"
  },
  {
    "id": "ord-1166",
    "userId": "usr-167",
    "orderedProducts": [
      {
        "product": "prod-499",
        "title": "Mega Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 434
      },
      {
        "product": "prod-163",
        "title": "Campus Special: Logitech M220 Silent Wireless Mouse",
        "quantity": 2,
        "price": 804
      }
    ],
    "totalAmount": 2042,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 306",
    "orderDate": "2026-06-27T12:48:00.000Z"
  },
  {
    "id": "ord-1167",
    "userId": "usr-168",
    "orderedProducts": [
      {
        "product": "prod-2",
        "title": "Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 180
      },
      {
        "product": "prod-170",
        "title": "Campus Special: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 3,
        "price": 574
      }
    ],
    "totalAmount": 2082,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 407",
    "orderDate": "2026-07-28T13:51:00.000Z"
  },
  {
    "id": "ord-1168",
    "userId": "usr-169",
    "orderedProducts": [
      {
        "product": "prod-5",
        "title": "Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 120
      },
      {
        "product": "prod-177",
        "title": "Campus Special: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 344
      }
    ],
    "totalAmount": 464,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-5, Room 508",
    "orderDate": "2026-02-01T02:54:00.000Z"
  },
  {
    "id": "ord-1169",
    "userId": "usr-170",
    "orderedProducts": [
      {
        "product": "prod-8",
        "title": "A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 499
      },
      {
        "product": "prod-184",
        "title": "Campus Special: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 201
      }
    ],
    "totalAmount": 1400,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 109",
    "orderDate": "2026-03-02T03:57:00.000Z"
  },
  {
    "id": "ord-1170",
    "userId": "usr-171",
    "orderedProducts": [
      {
        "product": "prod-11",
        "title": "White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 350
      },
      {
        "product": "prod-191",
        "title": "Campus Special: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 3,
        "price": 574
      }
    ],
    "totalAmount": 2072,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 201",
    "orderDate": "2026-04-03T05:00:00.000Z"
  },
  {
    "id": "ord-1171",
    "userId": "usr-172",
    "orderedProducts": [
      {
        "product": "prod-14",
        "title": "Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 799
      },
      {
        "product": "prod-198",
        "title": "Campus Special: Ergonomic Mesh Office Chair for Study",
        "quantity": 1,
        "price": 1724
      }
    ],
    "totalAmount": 3322,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 302",
    "orderDate": "2026-05-04T06:03:00.000Z"
  },
  {
    "id": "ord-1172",
    "userId": "usr-173",
    "orderedProducts": [
      {
        "product": "prod-17",
        "title": "Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1199
      },
      {
        "product": "prod-205",
        "title": "Premium Series: Hardbound Grid-Line Engineering Journal",
        "quantity": 2,
        "price": 144
      }
    ],
    "totalAmount": 1487,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-9, Room 403",
    "orderDate": "2026-06-05T07:06:00.000Z"
  },
  {
    "id": "ord-1173",
    "userId": "usr-174",
    "orderedProducts": [
      {
        "product": "prod-20",
        "title": "Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 499
      },
      {
        "product": "prod-212",
        "title": "Premium Series: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 3,
        "price": 96
      }
    ],
    "totalAmount": 1286,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 504",
    "orderDate": "2026-07-06T08:09:00.000Z"
  },
  {
    "id": "ord-1174",
    "userId": "usr-175",
    "orderedProducts": [
      {
        "product": "prod-23",
        "title": "Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 168
      },
      {
        "product": "prod-219",
        "title": "Premium Series: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1199
      }
    ],
    "totalAmount": 1367,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 105",
    "orderDate": "2026-02-07T09:12:00.000Z"
  },
  {
    "id": "ord-1175",
    "userId": "usr-176",
    "orderedProducts": [
      {
        "product": "prod-26",
        "title": "Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 120
      },
      {
        "product": "prod-226",
        "title": "Premium Series: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 144
      }
    ],
    "totalAmount": 528,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 206",
    "orderDate": "2026-03-08T10:15:00.000Z"
  },
  {
    "id": "ord-1176",
    "userId": "usr-177",
    "orderedProducts": [
      {
        "product": "prod-29",
        "title": "Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 150
      },
      {
        "product": "prod-233",
        "title": "Premium Series: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 3,
        "price": 299
      }
    ],
    "totalAmount": 1047,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-3, Room 307",
    "orderDate": "2026-04-09T11:18:00.000Z"
  },
  {
    "id": "ord-1177",
    "userId": "usr-178",
    "orderedProducts": [
      {
        "product": "prod-32",
        "title": "Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 180
      },
      {
        "product": "prod-240",
        "title": "Premium Series: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 1,
        "price": 299
      }
    ],
    "totalAmount": 659,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 408",
    "orderDate": "2026-05-10T12:21:00.000Z"
  },
  {
    "id": "ord-1178",
    "userId": "usr-179",
    "orderedProducts": [
      {
        "product": "prod-35",
        "title": "Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 349
      },
      {
        "product": "prod-247",
        "title": "Premium Series: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 2,
        "price": 4199
      }
    ],
    "totalAmount": 8747,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 509",
    "orderDate": "2026-06-11T13:24:00.000Z"
  },
  {
    "id": "ord-1179",
    "userId": "usr-180",
    "orderedProducts": [
      {
        "product": "prod-38",
        "title": "100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 399
      },
      {
        "product": "prod-254",
        "title": "Student Pack: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 3,
        "price": 200
      }
    ],
    "totalAmount": 1398,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 101",
    "orderDate": "2026-07-12T14:27:00.000Z"
  },
  {
    "id": "ord-1180",
    "userId": "usr-181",
    "orderedProducts": [
      {
        "product": "prod-41",
        "title": "Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 499
      },
      {
        "product": "prod-261",
        "title": "Student Pack: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 438
      }
    ],
    "totalAmount": 937,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 202",
    "orderDate": "2026-02-13T02:30:00.000Z"
  },
  {
    "id": "ord-1181",
    "userId": "usr-182",
    "orderedProducts": [
      {
        "product": "prod-44",
        "title": "Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 499
      },
      {
        "product": "prod-268",
        "title": "Student Pack: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 1061
      }
    ],
    "totalAmount": 3120,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 303",
    "orderDate": "2026-03-14T03:33:00.000Z"
  },
  {
    "id": "ord-1182",
    "userId": "usr-183",
    "orderedProducts": [
      {
        "product": "prod-47",
        "title": "Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 3499
      },
      {
        "product": "prod-275",
        "title": "Student Pack: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 3,
        "price": 436
      }
    ],
    "totalAmount": 4807,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 404",
    "orderDate": "2026-04-15T04:36:00.000Z"
  },
  {
    "id": "ord-1183",
    "userId": "usr-184",
    "orderedProducts": [
      {
        "product": "prod-50",
        "title": "Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 199
      },
      {
        "product": "prod-282",
        "title": "Student Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 1,
        "price": 225
      }
    ],
    "totalAmount": 623,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-05-16T05:39:00.000Z"
  },
  {
    "id": "ord-1184",
    "userId": "usr-185",
    "orderedProducts": [
      {
        "product": "prod-53",
        "title": "Pro Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 314
      },
      {
        "product": "prod-289",
        "title": "Student Pack: Foldable Laundry Mesh Basket",
        "quantity": 2,
        "price": 249
      }
    ],
    "totalAmount": 812,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-06-17T06:42:00.000Z"
  },
  {
    "id": "ord-1185",
    "userId": "usr-186",
    "orderedProducts": [
      {
        "product": "prod-56",
        "title": "Pro Edition: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 209
      },
      {
        "product": "prod-296",
        "title": "Student Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 3,
        "price": 31249
      }
    ],
    "totalAmount": 94165,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-07-18T07:45:00.000Z"
  },
  {
    "id": "ord-1186",
    "userId": "usr-187",
    "orderedProducts": [
      {
        "product": "prod-59",
        "title": "Pro Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 366
      },
      {
        "product": "prod-303",
        "title": "Ultra Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 389
      }
    ],
    "totalAmount": 755,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-02-19T08:48:00.000Z"
  },
  {
    "id": "ord-1187",
    "userId": "usr-188",
    "orderedProducts": [
      {
        "product": "prod-62",
        "title": "Pro Edition: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 84
      },
      {
        "product": "prod-310",
        "title": "Ultra Edition: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 234
      }
    ],
    "totalAmount": 636,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-03-20T09:51:00.000Z"
  },
  {
    "id": "ord-1188",
    "userId": "usr-189",
    "orderedProducts": [
      {
        "product": "prod-65",
        "title": "Pro Edition: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1364
      },
      {
        "product": "prod-317",
        "title": "Ultra Edition: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 3,
        "price": 1559
      }
    ],
    "totalAmount": 6041,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-04-21T10:54:00.000Z"
  },
  {
    "id": "ord-1189",
    "userId": "usr-190",
    "orderedProducts": [
      {
        "product": "prod-68",
        "title": "Pro Edition: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 891
      },
      {
        "product": "prod-324",
        "title": "Ultra Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 1,
        "price": 259
      }
    ],
    "totalAmount": 2041,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-05-22T11:57:00.000Z"
  },
  {
    "id": "ord-1190",
    "userId": "usr-191",
    "orderedProducts": [
      {
        "product": "prod-71",
        "title": "Pro Edition: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1523
      },
      {
        "product": "prod-331",
        "title": "Ultra Edition: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 2,
        "price": 649
      }
    ],
    "totalAmount": 2821,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-06-23T13:00:00.000Z"
  },
  {
    "id": "ord-1191",
    "userId": "usr-192",
    "orderedProducts": [
      {
        "product": "prod-74",
        "title": "Pro Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 209
      },
      {
        "product": "prod-338",
        "title": "Ultra Edition: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 3,
        "price": 519
      }
    ],
    "totalAmount": 1975,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-07-24T14:03:00.000Z"
  },
  {
    "id": "ord-1192",
    "userId": "usr-193",
    "orderedProducts": [
      {
        "product": "prod-77",
        "title": "Pro Edition: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 314
      },
      {
        "product": "prod-345",
        "title": "Ultra Edition: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 389
      }
    ],
    "totalAmount": 703,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-02-25T03:06:00.000Z"
  },
  {
    "id": "ord-1193",
    "userId": "usr-194",
    "orderedProducts": [
      {
        "product": "prod-80",
        "title": "Pro Edition: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 483
      },
      {
        "product": "prod-352",
        "title": "Bundle Pack: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 243
      }
    ],
    "totalAmount": 1452,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-03-26T04:09:00.000Z"
  },
  {
    "id": "ord-1194",
    "userId": "usr-195",
    "orderedProducts": [
      {
        "product": "prod-83",
        "title": "Pro Edition: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 261
      },
      {
        "product": "prod-359",
        "title": "Bundle Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 3,
        "price": 471
      }
    ],
    "totalAmount": 1674,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-04-27T05:12:00.000Z"
  },
  {
    "id": "ord-1195",
    "userId": "usr-196",
    "orderedProducts": [
      {
        "product": "prod-86",
        "title": "Pro Edition: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 209
      },
      {
        "product": "prod-366",
        "title": "Bundle Pack: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 1,
        "price": 2024
      }
    ],
    "totalAmount": 2442,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-05-28T06:15:00.000Z"
  },
  {
    "id": "ord-1196",
    "userId": "usr-197",
    "orderedProducts": [
      {
        "product": "prod-89",
        "title": "Pro Edition: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 209
      },
      {
        "product": "prod-373",
        "title": "Bundle Pack: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 2,
        "price": 227
      }
    ],
    "totalAmount": 663,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-06-01T07:18:00.000Z"
  },
  {
    "id": "ord-1197",
    "userId": "usr-198",
    "orderedProducts": [
      {
        "product": "prod-92",
        "title": "Pro Edition: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 231
      },
      {
        "product": "prod-380",
        "title": "Bundle Pack: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 3,
        "price": 621
      }
    ],
    "totalAmount": 2325,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-07-02T08:21:00.000Z"
  },
  {
    "id": "ord-1198",
    "userId": "usr-199",
    "orderedProducts": [
      {
        "product": "prod-95",
        "title": "Pro Edition: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 314
      },
      {
        "product": "prod-387",
        "title": "Bundle Pack: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 404
      }
    ],
    "totalAmount": 718,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-02-03T09:24:00.000Z"
  },
  {
    "id": "ord-1199",
    "userId": "usr-200",
    "orderedProducts": [
      {
        "product": "prod-98",
        "title": "Pro Edition: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 1574
      },
      {
        "product": "prod-394",
        "title": "Bundle Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 674
      }
    ],
    "totalAmount": 4496,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-03-04T10:27:00.000Z"
  },
  {
    "id": "ord-1200",
    "userId": "usr-student-1",
    "orderedProducts": [
      {
        "product": "prod-101",
        "title": "Deluxe Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1429
      },
      {
        "product": "prod-401",
        "title": "Special Edition: Casio FX-991EX Scientific Calculator",
        "quantity": 3,
        "price": 1819
      }
    ],
    "totalAmount": 6886,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-4, Room 302",
    "orderDate": "2026-04-05T10:30:00.000Z"
  },
  {
    "id": "ord-1201",
    "userId": "usr-seller-1",
    "orderedProducts": [
      {
        "product": "prod-104",
        "title": "Deluxe Pack: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 176
      },
      {
        "product": "prod-408",
        "title": "Special Edition: A3 Size Engineering Drawing Board",
        "quantity": 1,
        "price": 699
      }
    ],
    "totalAmount": 1051,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Market Complex, Room Shop #12",
    "orderDate": "2026-05-06T11:33:00.000Z"
  },
  {
    "id": "ord-1202",
    "userId": "usr-admin-1",
    "orderedProducts": [
      {
        "product": "prod-107",
        "title": "Deluxe Pack: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 165
      },
      {
        "product": "prod-415",
        "title": "Special Edition: Anker PowerCore 10000mAh Power Bank",
        "quantity": 2,
        "price": 1819
      }
    ],
    "totalAmount": 3803,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Admin Block, Room A-101",
    "orderDate": "2026-06-07T12:36:00.000Z"
  },
  {
    "id": "ord-1203",
    "userId": "usr-4",
    "orderedProducts": [
      {
        "product": "prod-110",
        "title": "Deluxe Pack: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 198
      },
      {
        "product": "prod-422",
        "title": "Special Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 3,
        "price": 1259
      }
    ],
    "totalAmount": 4173,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-07-08T13:39:00.000Z"
  },
  {
    "id": "ord-1204",
    "userId": "usr-5",
    "orderedProducts": [
      {
        "product": "prod-113",
        "title": "Deluxe Pack: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 769
      },
      {
        "product": "prod-429",
        "title": "Special Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 210
      }
    ],
    "totalAmount": 979,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-02-09T02:42:00.000Z"
  },
  {
    "id": "ord-1205",
    "userId": "usr-6",
    "orderedProducts": [
      {
        "product": "prod-116",
        "title": "Deluxe Pack: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1649
      },
      {
        "product": "prod-436",
        "title": "Special Edition: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 279
      }
    ],
    "totalAmount": 3856,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-03-10T03:45:00.000Z"
  },
  {
    "id": "ord-1206",
    "userId": "usr-7",
    "orderedProducts": [
      {
        "product": "prod-119",
        "title": "Deluxe Pack: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1099
      },
      {
        "product": "prod-443",
        "title": "Special Edition: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 3,
        "price": 1819
      }
    ],
    "totalAmount": 6556,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-04-11T04:48:00.000Z"
  },
  {
    "id": "ord-1207",
    "userId": "usr-8",
    "orderedProducts": [
      {
        "product": "prod-122",
        "title": "Deluxe Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 989
      },
      {
        "product": "prod-450",
        "title": "Special Edition: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 1,
        "price": 279
      }
    ],
    "totalAmount": 2257,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-05-12T05:51:00.000Z"
  },
  {
    "id": "ord-1208",
    "userId": "usr-9",
    "orderedProducts": [
      {
        "product": "prod-125",
        "title": "Deluxe Pack: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 384
      },
      {
        "product": "prod-457",
        "title": "Mega Pack: Camlin Geometry Box with Metal Compass",
        "quantity": 2,
        "price": 218
      }
    ],
    "totalAmount": 820,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-06-13T06:54:00.000Z"
  },
  {
    "id": "ord-1209",
    "userId": "usr-10",
    "orderedProducts": [
      {
        "product": "prod-128",
        "title": "Deluxe Pack: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 303
      },
      {
        "product": "prod-464",
        "title": "Mega Pack: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 3,
        "price": 1159
      }
    ],
    "totalAmount": 4083,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-07-14T07:57:00.000Z"
  },
  {
    "id": "ord-1210",
    "userId": "usr-11",
    "orderedProducts": [
      {
        "product": "prod-131",
        "title": "Deluxe Pack: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 549
      },
      {
        "product": "prod-471",
        "title": "Mega Pack: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 2103
      }
    ],
    "totalAmount": 2652,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-02-15T09:00:00.000Z"
  },
  {
    "id": "ord-1211",
    "userId": "usr-12",
    "orderedProducts": [
      {
        "product": "prod-134",
        "title": "Deluxe Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 193
      },
      {
        "product": "prod-478",
        "title": "Mega Pack: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 399
      }
    ],
    "totalAmount": 1184,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-03-16T10:03:00.000Z"
  },
  {
    "id": "ord-1212",
    "userId": "usr-13",
    "orderedProducts": [
      {
        "product": "prod-137",
        "title": "Deluxe Pack: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-485",
        "title": "Mega Pack: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 3,
        "price": 506
      }
    ],
    "totalAmount": 1847,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-04-17T11:06:00.000Z"
  },
  {
    "id": "ord-1213",
    "userId": "usr-14",
    "orderedProducts": [
      {
        "product": "prod-140",
        "title": "Deluxe Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 274
      },
      {
        "product": "prod-492",
        "title": "Mega Pack: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 1,
        "price": 319
      }
    ],
    "totalAmount": 867,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-05-18T12:09:00.000Z"
  },
  {
    "id": "ord-1214",
    "userId": "usr-15",
    "orderedProducts": [
      {
        "product": "prod-143",
        "title": "Deluxe Pack: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1429
      },
      {
        "product": "prod-499",
        "title": "Mega Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 2,
        "price": 434
      }
    ],
    "totalAmount": 2297,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-06-19T13:12:00.000Z"
  },
  {
    "id": "ord-1215",
    "userId": "usr-16",
    "orderedProducts": [
      {
        "product": "prod-146",
        "title": "Deluxe Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 27499
      },
      {
        "product": "prod-6",
        "title": "Post-it Super Sticky Notes Color Pack",
        "quantity": 3,
        "price": 199
      }
    ],
    "totalAmount": 55595,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-07-20T14:15:00.000Z"
  },
  {
    "id": "ord-1216",
    "userId": "usr-17",
    "orderedProducts": [
      {
        "product": "prod-149",
        "title": "Deluxe Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-13",
        "title": "Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 699
      }
    ],
    "totalAmount": 1028,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-02-21T03:18:00.000Z"
  },
  {
    "id": "ord-1217",
    "userId": "usr-18",
    "orderedProducts": [
      {
        "product": "prod-152",
        "title": "Campus Special: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 207
      },
      {
        "product": "prod-20",
        "title": "Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 499
      }
    ],
    "totalAmount": 1412,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-03-22T04:21:00.000Z"
  },
  {
    "id": "ord-1218",
    "userId": "usr-19",
    "orderedProducts": [
      {
        "product": "prod-155",
        "title": "Campus Special: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 138
      },
      {
        "product": "prod-27",
        "title": "MyFitness Peanut Butter Smooth 500g",
        "quantity": 3,
        "price": 299
      }
    ],
    "totalAmount": 1035,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-04-23T05:24:00.000Z"
  },
  {
    "id": "ord-1219",
    "userId": "usr-20",
    "orderedProducts": [
      {
        "product": "prod-158",
        "title": "Campus Special: A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 574
      },
      {
        "product": "prod-34",
        "title": "Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 1,
        "price": 175
      }
    ],
    "totalAmount": 1323,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-05-24T06:27:00.000Z"
  },
  {
    "id": "ord-1220",
    "userId": "usr-21",
    "orderedProducts": [
      {
        "product": "prod-161",
        "title": "Campus Special: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 402
      },
      {
        "product": "prod-41",
        "title": "Rechargeable LED Study Lamp with Touch Control",
        "quantity": 2,
        "price": 499
      }
    ],
    "totalAmount": 1400,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 204",
    "orderDate": "2026-06-25T06:30:00.000Z"
  },
  {
    "id": "ord-1221",
    "userId": "usr-22",
    "orderedProducts": [
      {
        "product": "prod-164",
        "title": "Campus Special: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 919
      },
      {
        "product": "prod-48",
        "title": "Ergonomic Mesh Office Chair for Study",
        "quantity": 3,
        "price": 1499
      }
    ],
    "totalAmount": 6335,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 305",
    "orderDate": "2026-07-26T07:33:00.000Z"
  },
  {
    "id": "ord-1222",
    "userId": "usr-23",
    "orderedProducts": [
      {
        "product": "prod-167",
        "title": "Campus Special: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1379
      },
      {
        "product": "prod-55",
        "title": "Pro Edition: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 126
      }
    ],
    "totalAmount": 1505,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 406",
    "orderDate": "2026-02-27T08:36:00.000Z"
  },
  {
    "id": "ord-1223",
    "userId": "usr-24",
    "orderedProducts": [
      {
        "product": "prod-170",
        "title": "Campus Special: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 574
      },
      {
        "product": "prod-62",
        "title": "Pro Edition: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 84
      }
    ],
    "totalAmount": 1316,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 507",
    "orderDate": "2026-03-28T09:39:00.000Z"
  },
  {
    "id": "ord-1224",
    "userId": "usr-25",
    "orderedProducts": [
      {
        "product": "prod-173",
        "title": "Campus Special: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 193
      },
      {
        "product": "prod-69",
        "title": "Pro Edition: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 3,
        "price": 1049
      }
    ],
    "totalAmount": 3340,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
    "orderDate": "2026-04-01T10:42:00.000Z"
  },
  {
    "id": "ord-1225",
    "userId": "usr-26",
    "orderedProducts": [
      {
        "product": "prod-176",
        "title": "Campus Special: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 138
      },
      {
        "product": "prod-76",
        "title": "Pro Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 1,
        "price": 126
      }
    ],
    "totalAmount": 402,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
    "orderDate": "2026-05-02T11:45:00.000Z"
  },
  {
    "id": "ord-1226",
    "userId": "usr-27",
    "orderedProducts": [
      {
        "product": "prod-179",
        "title": "Campus Special: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 173
      },
      {
        "product": "prod-83",
        "title": "Pro Edition: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 2,
        "price": 261
      }
    ],
    "totalAmount": 695,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
    "orderDate": "2026-06-03T12:48:00.000Z"
  },
  {
    "id": "ord-1227",
    "userId": "usr-28",
    "orderedProducts": [
      {
        "product": "prod-182",
        "title": "Campus Special: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 207
      },
      {
        "product": "prod-90",
        "title": "Pro Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 3,
        "price": 261
      }
    ],
    "totalAmount": 1197,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 402",
    "orderDate": "2026-07-04T13:51:00.000Z"
  },
  {
    "id": "ord-1228",
    "userId": "usr-29",
    "orderedProducts": [
      {
        "product": "prod-185",
        "title": "Campus Special: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 401
      },
      {
        "product": "prod-97",
        "title": "Pro Edition: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 3674
      }
    ],
    "totalAmount": 4075,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-5, Room 503",
    "orderDate": "2026-02-05T02:54:00.000Z"
  },
  {
    "id": "ord-1229",
    "userId": "usr-30",
    "orderedProducts": [
      {
        "product": "prod-188",
        "title": "Campus Special: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 459
      },
      {
        "product": "prod-104",
        "title": "Deluxe Pack: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 176
      }
    ],
    "totalAmount": 1270,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 104",
    "orderDate": "2026-03-06T03:57:00.000Z"
  },
  {
    "id": "ord-1230",
    "userId": "usr-31",
    "orderedProducts": [
      {
        "product": "prod-191",
        "title": "Campus Special: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 574
      },
      {
        "product": "prod-111",
        "title": "Deluxe Pack: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 3,
        "price": 385
      }
    ],
    "totalAmount": 1729,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 205",
    "orderDate": "2026-04-07T05:00:00.000Z"
  },
  {
    "id": "ord-1231",
    "userId": "usr-32",
    "orderedProducts": [
      {
        "product": "prod-194",
        "title": "Campus Special: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 574
      },
      {
        "product": "prod-118",
        "title": "Deluxe Pack: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 1,
        "price": 934
      }
    ],
    "totalAmount": 2082,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 306",
    "orderDate": "2026-05-08T06:03:00.000Z"
  },
  {
    "id": "ord-1232",
    "userId": "usr-33",
    "orderedProducts": [
      {
        "product": "prod-197",
        "title": "Campus Special: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 4024
      },
      {
        "product": "prod-125",
        "title": "Deluxe Pack: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 2,
        "price": 384
      }
    ],
    "totalAmount": 4792,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 407",
    "orderDate": "2026-06-09T07:06:00.000Z"
  },
  {
    "id": "ord-1233",
    "userId": "usr-34",
    "orderedProducts": [
      {
        "product": "prod-200",
        "title": "Campus Special: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 229
      },
      {
        "product": "prod-132",
        "title": "Deluxe Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 3,
        "price": 198
      }
    ],
    "totalAmount": 1052,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 508",
    "orderDate": "2026-07-10T08:09:00.000Z"
  },
  {
    "id": "ord-1234",
    "userId": "usr-35",
    "orderedProducts": [
      {
        "product": "prod-203",
        "title": "Premium Series: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 359
      },
      {
        "product": "prod-139",
        "title": "Deluxe Pack: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 219
      }
    ],
    "totalAmount": 578,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 109",
    "orderDate": "2026-02-11T09:12:00.000Z"
  },
  {
    "id": "ord-1235",
    "userId": "usr-36",
    "orderedProducts": [
      {
        "product": "prod-206",
        "title": "Premium Series: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 239
      },
      {
        "product": "prod-146",
        "title": "Deluxe Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 27499
      }
    ],
    "totalAmount": 55476,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 201",
    "orderDate": "2026-03-12T10:15:00.000Z"
  },
  {
    "id": "ord-1236",
    "userId": "usr-37",
    "orderedProducts": [
      {
        "product": "prod-209",
        "title": "Premium Series: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 419
      },
      {
        "product": "prod-153",
        "title": "Campus Special: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 3,
        "price": 344
      }
    ],
    "totalAmount": 1451,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 302",
    "orderDate": "2026-04-13T11:18:00.000Z"
  },
  {
    "id": "ord-1237",
    "userId": "usr-38",
    "orderedProducts": [
      {
        "product": "prod-212",
        "title": "Premium Series: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 96
      },
      {
        "product": "prod-160",
        "title": "Campus Special: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 1,
        "price": 207
      }
    ],
    "totalAmount": 399,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 403",
    "orderDate": "2026-05-14T12:21:00.000Z"
  },
  {
    "id": "ord-1238",
    "userId": "usr-39",
    "orderedProducts": [
      {
        "product": "prod-215",
        "title": "Premium Series: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1559
      },
      {
        "product": "prod-167",
        "title": "Campus Special: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 2,
        "price": 1379
      }
    ],
    "totalAmount": 4317,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 504",
    "orderDate": "2026-06-15T13:24:00.000Z"
  },
  {
    "id": "ord-1239",
    "userId": "usr-40",
    "orderedProducts": [
      {
        "product": "prod-218",
        "title": "Premium Series: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 1019
      },
      {
        "product": "prod-174",
        "title": "Campus Special: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 3,
        "price": 229
      }
    ],
    "totalAmount": 2725,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 105",
    "orderDate": "2026-07-16T14:27:00.000Z"
  },
  {
    "id": "ord-1240",
    "userId": "usr-41",
    "orderedProducts": [
      {
        "product": "prod-221",
        "title": "Premium Series: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1740
      },
      {
        "product": "prod-181",
        "title": "Campus Special: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 574
      }
    ],
    "totalAmount": 2314,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 206",
    "orderDate": "2026-02-17T02:30:00.000Z"
  },
  {
    "id": "ord-1241",
    "userId": "usr-42",
    "orderedProducts": [
      {
        "product": "prod-224",
        "title": "Premium Series: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 239
      },
      {
        "product": "prod-188",
        "title": "Campus Special: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 459
      }
    ],
    "totalAmount": 1396,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 307",
    "orderDate": "2026-03-18T03:33:00.000Z"
  },
  {
    "id": "ord-1242",
    "userId": "usr-43",
    "orderedProducts": [
      {
        "product": "prod-227",
        "title": "Premium Series: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 359
      },
      {
        "product": "prod-195",
        "title": "Campus Special: Embroidered Campus Baseball Cap",
        "quantity": 3,
        "price": 344
      }
    ],
    "totalAmount": 1391,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 408",
    "orderDate": "2026-04-19T04:36:00.000Z"
  },
  {
    "id": "ord-1243",
    "userId": "usr-44",
    "orderedProducts": [
      {
        "product": "prod-230",
        "title": "Premium Series: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 552
      },
      {
        "product": "prod-202",
        "title": "Premium Series: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 1,
        "price": 216
      }
    ],
    "totalAmount": 1320,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 509",
    "orderDate": "2026-05-20T05:39:00.000Z"
  },
  {
    "id": "ord-1244",
    "userId": "usr-45",
    "orderedProducts": [
      {
        "product": "prod-233",
        "title": "Premium Series: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 299
      },
      {
        "product": "prod-209",
        "title": "Premium Series: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 2,
        "price": 419
      }
    ],
    "totalAmount": 1137,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-1, Room 101",
    "orderDate": "2026-06-21T06:42:00.000Z"
  },
  {
    "id": "ord-1245",
    "userId": "usr-46",
    "orderedProducts": [
      {
        "product": "prod-236",
        "title": "Premium Series: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 239
      },
      {
        "product": "prod-216",
        "title": "Premium Series: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 3,
        "price": 1799
      }
    ],
    "totalAmount": 5875,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 202",
    "orderDate": "2026-07-22T07:45:00.000Z"
  },
  {
    "id": "ord-1246",
    "userId": "usr-47",
    "orderedProducts": [
      {
        "product": "prod-239",
        "title": "Premium Series: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 239
      },
      {
        "product": "prod-223",
        "title": "Premium Series: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 202
      }
    ],
    "totalAmount": 441,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 303",
    "orderDate": "2026-02-23T08:48:00.000Z"
  },
  {
    "id": "ord-1247",
    "userId": "usr-48",
    "orderedProducts": [
      {
        "product": "prod-242",
        "title": "Premium Series: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 264
      },
      {
        "product": "prod-230",
        "title": "Premium Series: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 552
      }
    ],
    "totalAmount": 1632,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 404",
    "orderDate": "2026-03-24T09:51:00.000Z"
  },
  {
    "id": "ord-1248",
    "userId": "usr-49",
    "orderedProducts": [
      {
        "product": "prod-245",
        "title": "Premium Series: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 359
      },
      {
        "product": "prod-237",
        "title": "Premium Series: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 3,
        "price": 359
      }
    ],
    "totalAmount": 1436,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-04-25T10:54:00.000Z"
  },
  {
    "id": "ord-1249",
    "userId": "usr-50",
    "orderedProducts": [
      {
        "product": "prod-248",
        "title": "Premium Series: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 1799
      },
      {
        "product": "prod-244",
        "title": "Premium Series: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 1,
        "price": 599
      }
    ],
    "totalAmount": 4197,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-05-26T11:57:00.000Z"
  },
  {
    "id": "ord-1250",
    "userId": "usr-51",
    "orderedProducts": [
      {
        "product": "prod-251",
        "title": "Student Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1624
      },
      {
        "product": "prod-251",
        "title": "Student Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 2,
        "price": 1624
      }
    ],
    "totalAmount": 4872,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-06-27T13:00:00.000Z"
  },
  {
    "id": "ord-1251",
    "userId": "usr-52",
    "orderedProducts": [
      {
        "product": "prod-254",
        "title": "Student Pack: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 200
      },
      {
        "product": "prod-258",
        "title": "Student Pack: A3 Size Engineering Drawing Board",
        "quantity": 3,
        "price": 624
      }
    ],
    "totalAmount": 2272,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-07-28T14:03:00.000Z"
  },
  {
    "id": "ord-1252",
    "userId": "usr-53",
    "orderedProducts": [
      {
        "product": "prod-257",
        "title": "Student Pack: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 188
      },
      {
        "product": "prod-265",
        "title": "Student Pack: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1624
      }
    ],
    "totalAmount": 1812,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-02-01T03:06:00.000Z"
  },
  {
    "id": "ord-1253",
    "userId": "usr-54",
    "orderedProducts": [
      {
        "product": "prod-260",
        "title": "Student Pack: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 225
      },
      {
        "product": "prod-272",
        "title": "Student Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 1124
      }
    ],
    "totalAmount": 2698,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-03-02T04:09:00.000Z"
  },
  {
    "id": "ord-1254",
    "userId": "usr-55",
    "orderedProducts": [
      {
        "product": "prod-263",
        "title": "Student Pack: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 874
      },
      {
        "product": "prod-279",
        "title": "Student Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 3,
        "price": 188
      }
    ],
    "totalAmount": 1438,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-04-03T05:12:00.000Z"
  },
  {
    "id": "ord-1255",
    "userId": "usr-56",
    "orderedProducts": [
      {
        "product": "prod-266",
        "title": "Student Pack: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1874
      },
      {
        "product": "prod-286",
        "title": "Student Pack: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 1,
        "price": 249
      }
    ],
    "totalAmount": 3997,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-05-04T06:15:00.000Z"
  },
  {
    "id": "ord-1256",
    "userId": "usr-57",
    "orderedProducts": [
      {
        "product": "prod-269",
        "title": "Student Pack: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1249
      },
      {
        "product": "prod-293",
        "title": "Student Pack: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 2,
        "price": 1624
      }
    ],
    "totalAmount": 4497,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-3, Room 304",
    "orderDate": "2026-06-05T07:18:00.000Z"
  },
  {
    "id": "ord-1257",
    "userId": "usr-58",
    "orderedProducts": [
      {
        "product": "prod-272",
        "title": "Student Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 2,
        "price": 1124
      },
      {
        "product": "prod-300",
        "title": "Student Pack: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 3,
        "price": 249
      }
    ],
    "totalAmount": 2995,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 405",
    "orderDate": "2026-07-06T08:21:00.000Z"
  },
  {
    "id": "ord-1258",
    "userId": "usr-59",
    "orderedProducts": [
      {
        "product": "prod-275",
        "title": "Student Pack: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 436
      },
      {
        "product": "prod-307",
        "title": "Ultra Edition: Camlin Geometry Box with Metal Compass",
        "quantity": 1,
        "price": 195
      }
    ],
    "totalAmount": 631,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 506",
    "orderDate": "2026-02-07T09:24:00.000Z"
  },
  {
    "id": "ord-1259",
    "userId": "usr-60",
    "orderedProducts": [
      {
        "product": "prod-278",
        "title": "Student Pack: Amul Butter 500g Pack",
        "quantity": 2,
        "price": 344
      },
      {
        "product": "prod-314",
        "title": "Ultra Edition: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 1039
      }
    ],
    "totalAmount": 2766,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 107",
    "orderDate": "2026-03-08T10:27:00.000Z"
  },
  {
    "id": "ord-1260",
    "userId": "usr-61",
    "orderedProducts": [
      {
        "product": "prod-281",
        "title": "Student Pack: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 624
      },
      {
        "product": "prod-321",
        "title": "Ultra Edition: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 3,
        "price": 1885
      }
    ],
    "totalAmount": 6279,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 208",
    "orderDate": "2026-04-09T10:30:00.000Z"
  },
  {
    "id": "ord-1261",
    "userId": "usr-62",
    "orderedProducts": [
      {
        "product": "prod-284",
        "title": "Student Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-328",
        "title": "Ultra Edition: Amul Butter 500g Pack",
        "quantity": 1,
        "price": 358
      }
    ],
    "totalAmount": 796,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 309",
    "orderDate": "2026-05-10T11:33:00.000Z"
  },
  {
    "id": "ord-1262",
    "userId": "usr-63",
    "orderedProducts": [
      {
        "product": "prod-287",
        "title": "Student Pack: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 374
      },
      {
        "product": "prod-335",
        "title": "Ultra Edition: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 2,
        "price": 454
      }
    ],
    "totalAmount": 1282,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 401",
    "orderDate": "2026-06-11T12:36:00.000Z"
  },
  {
    "id": "ord-1263",
    "userId": "usr-64",
    "orderedProducts": [
      {
        "product": "prod-290",
        "title": "Student Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 311
      },
      {
        "product": "prod-342",
        "title": "Ultra Edition: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 3,
        "price": 286
      }
    ],
    "totalAmount": 1480,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 502",
    "orderDate": "2026-07-12T13:39:00.000Z"
  },
  {
    "id": "ord-1264",
    "userId": "usr-65",
    "orderedProducts": [
      {
        "product": "prod-293",
        "title": "Student Pack: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 1,
        "price": 1624
      },
      {
        "product": "prod-349",
        "title": "Ultra Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 389
      }
    ],
    "totalAmount": 2013,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 103",
    "orderDate": "2026-02-13T02:42:00.000Z"
  },
  {
    "id": "ord-1265",
    "userId": "usr-66",
    "orderedProducts": [
      {
        "product": "prod-296",
        "title": "Student Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 31249
      },
      {
        "product": "prod-356",
        "title": "Bundle Pack: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 269
      }
    ],
    "totalAmount": 63036,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 204",
    "orderDate": "2026-03-14T03:45:00.000Z"
  },
  {
    "id": "ord-1266",
    "userId": "usr-67",
    "orderedProducts": [
      {
        "product": "prod-299",
        "title": "Student Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 1,
        "price": 374
      },
      {
        "product": "prod-363",
        "title": "Bundle Pack: Logitech M220 Silent Wireless Mouse",
        "quantity": 3,
        "price": 944
      }
    ],
    "totalAmount": 3206,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 305",
    "orderDate": "2026-04-15T04:48:00.000Z"
  },
  {
    "id": "ord-1267",
    "userId": "usr-68",
    "orderedProducts": [
      {
        "product": "prod-302",
        "title": "Ultra Edition: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 234
      },
      {
        "product": "prod-370",
        "title": "Bundle Pack: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 1,
        "price": 674
      }
    ],
    "totalAmount": 1142,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 406",
    "orderDate": "2026-05-16T05:51:00.000Z"
  },
  {
    "id": "ord-1268",
    "userId": "usr-69",
    "orderedProducts": [
      {
        "product": "prod-305",
        "title": "Ultra Edition: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 156
      },
      {
        "product": "prod-377",
        "title": "Bundle Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 2,
        "price": 404
      }
    ],
    "totalAmount": 964,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-10, Room 507",
    "orderDate": "2026-06-17T06:54:00.000Z"
  },
  {
    "id": "ord-1269",
    "userId": "usr-70",
    "orderedProducts": [
      {
        "product": "prod-308",
        "title": "Ultra Edition: A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 649
      },
      {
        "product": "prod-384",
        "title": "Bundle Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 3,
        "price": 236
      }
    ],
    "totalAmount": 2006,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
    "orderDate": "2026-07-18T07:57:00.000Z"
  },
  {
    "id": "ord-1270",
    "userId": "usr-71",
    "orderedProducts": [
      {
        "product": "prod-311",
        "title": "Ultra Edition: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 455
      },
      {
        "product": "prod-391",
        "title": "Bundle Pack: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 674
      }
    ],
    "totalAmount": 1129,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
    "orderDate": "2026-02-19T09:00:00.000Z"
  },
  {
    "id": "ord-1271",
    "userId": "usr-72",
    "orderedProducts": [
      {
        "product": "prod-314",
        "title": "Ultra Edition: Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 1039
      },
      {
        "product": "prod-398",
        "title": "Bundle Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 2024
      }
    ],
    "totalAmount": 6126,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
    "orderDate": "2026-03-20T10:03:00.000Z"
  },
  {
    "id": "ord-1272",
    "userId": "usr-73",
    "orderedProducts": [
      {
        "product": "prod-317",
        "title": "Ultra Edition: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1559
      },
      {
        "product": "prod-405",
        "title": "Special Edition: Hardbound Grid-Line Engineering Journal",
        "quantity": 3,
        "price": 168
      }
    ],
    "totalAmount": 2063,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-4, Room 402",
    "orderDate": "2026-04-21T11:06:00.000Z"
  },
  {
    "id": "ord-1273",
    "userId": "usr-74",
    "orderedProducts": [
      {
        "product": "prod-320",
        "title": "Ultra Edition: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 649
      },
      {
        "product": "prod-412",
        "title": "Special Edition: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 1,
        "price": 112
      }
    ],
    "totalAmount": 1410,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-5, Room 503",
    "orderDate": "2026-05-22T12:09:00.000Z"
  },
  {
    "id": "ord-1274",
    "userId": "usr-75",
    "orderedProducts": [
      {
        "product": "prod-323",
        "title": "Ultra Edition: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 218
      },
      {
        "product": "prod-419",
        "title": "Special Edition: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 2,
        "price": 1399
      }
    ],
    "totalAmount": 3016,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 104",
    "orderDate": "2026-06-23T13:12:00.000Z"
  },
  {
    "id": "ord-1275",
    "userId": "usr-76",
    "orderedProducts": [
      {
        "product": "prod-326",
        "title": "Ultra Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 156
      },
      {
        "product": "prod-426",
        "title": "Special Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 3,
        "price": 168
      }
    ],
    "totalAmount": 816,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 205",
    "orderDate": "2026-07-24T14:15:00.000Z"
  },
  {
    "id": "ord-1276",
    "userId": "usr-77",
    "orderedProducts": [
      {
        "product": "prod-329",
        "title": "Ultra Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 195
      },
      {
        "product": "prod-433",
        "title": "Special Edition: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 349
      }
    ],
    "totalAmount": 544,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 306",
    "orderDate": "2026-02-25T03:18:00.000Z"
  },
  {
    "id": "ord-1277",
    "userId": "usr-78",
    "orderedProducts": [
      {
        "product": "prod-332",
        "title": "Ultra Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 234
      },
      {
        "product": "prod-440",
        "title": "Special Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 2,
        "price": 349
      }
    ],
    "totalAmount": 1166,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 407",
    "orderDate": "2026-03-26T04:21:00.000Z"
  },
  {
    "id": "ord-1278",
    "userId": "usr-79",
    "orderedProducts": [
      {
        "product": "prod-335",
        "title": "Ultra Edition: Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 454
      },
      {
        "product": "prod-447",
        "title": "Special Edition: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 3,
        "price": 4899
      }
    ],
    "totalAmount": 15151,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 508",
    "orderDate": "2026-04-27T05:24:00.000Z"
  },
  {
    "id": "ord-1279",
    "userId": "usr-80",
    "orderedProducts": [
      {
        "product": "prod-338",
        "title": "Ultra Edition: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 519
      },
      {
        "product": "prod-454",
        "title": "Mega Pack: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 1,
        "price": 232
      }
    ],
    "totalAmount": 1270,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 109",
    "orderDate": "2026-05-28T06:27:00.000Z"
  },
  {
    "id": "ord-1280",
    "userId": "usr-81",
    "orderedProducts": [
      {
        "product": "prod-341",
        "title": "Ultra Edition: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 649
      },
      {
        "product": "prod-461",
        "title": "Mega Pack: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 2,
        "price": 508
      }
    ],
    "totalAmount": 1665,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 201",
    "orderDate": "2026-06-01T06:30:00.000Z"
  },
  {
    "id": "ord-1281",
    "userId": "usr-82",
    "orderedProducts": [
      {
        "product": "prod-344",
        "title": "Ultra Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 649
      },
      {
        "product": "prod-468",
        "title": "Mega Pack: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 3,
        "price": 1231
      }
    ],
    "totalAmount": 4991,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 302",
    "orderDate": "2026-07-02T07:33:00.000Z"
  },
  {
    "id": "ord-1282",
    "userId": "usr-83",
    "orderedProducts": [
      {
        "product": "prod-347",
        "title": "Ultra Edition: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 4549
      },
      {
        "product": "prod-475",
        "title": "Mega Pack: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 1,
        "price": 506
      }
    ],
    "totalAmount": 5055,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 403",
    "orderDate": "2026-02-03T08:36:00.000Z"
  },
  {
    "id": "ord-1283",
    "userId": "usr-84",
    "orderedProducts": [
      {
        "product": "prod-350",
        "title": "Ultra Edition: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 259
      },
      {
        "product": "prod-482",
        "title": "Mega Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 261
      }
    ],
    "totalAmount": 1040,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 504",
    "orderDate": "2026-03-04T09:39:00.000Z"
  },
  {
    "id": "ord-1284",
    "userId": "usr-85",
    "orderedProducts": [
      {
        "product": "prod-353",
        "title": "Bundle Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 404
      },
      {
        "product": "prod-489",
        "title": "Mega Pack: Foldable Laundry Mesh Basket",
        "quantity": 3,
        "price": 289
      }
    ],
    "totalAmount": 1271,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-1, Room 105",
    "orderDate": "2026-04-05T10:42:00.000Z"
  },
  {
    "id": "ord-1285",
    "userId": "usr-86",
    "orderedProducts": [
      {
        "product": "prod-356",
        "title": "Bundle Pack: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 269
      },
      {
        "product": "prod-496",
        "title": "Mega Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 1,
        "price": 36249
      }
    ],
    "totalAmount": 36787,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 206",
    "orderDate": "2026-05-06T11:45:00.000Z"
  },
  {
    "id": "ord-1286",
    "userId": "usr-87",
    "orderedProducts": [
      {
        "product": "prod-359",
        "title": "Bundle Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 471
      },
      {
        "product": "prod-3",
        "title": "Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 2,
        "price": 299
      }
    ],
    "totalAmount": 1069,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 307",
    "orderDate": "2026-06-07T12:48:00.000Z"
  },
  {
    "id": "ord-1287",
    "userId": "usr-88",
    "orderedProducts": [
      {
        "product": "prod-362",
        "title": "Bundle Pack: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 108
      },
      {
        "product": "prod-10",
        "title": "Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 3,
        "price": 180
      }
    ],
    "totalAmount": 756,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-4, Room 408",
    "orderDate": "2026-07-08T13:51:00.000Z"
  },
  {
    "id": "ord-1288",
    "userId": "usr-89",
    "orderedProducts": [
      {
        "product": "prod-365",
        "title": "Bundle Pack: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1754
      },
      {
        "product": "prod-17",
        "title": "Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1199
      }
    ],
    "totalAmount": 2953,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-5, Room 509",
    "orderDate": "2026-02-09T02:54:00.000Z"
  },
  {
    "id": "ord-1289",
    "userId": "usr-90",
    "orderedProducts": [
      {
        "product": "prod-368",
        "title": "Bundle Pack: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 1146
      },
      {
        "product": "prod-24",
        "title": "Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 199
      }
    ],
    "totalAmount": 2690,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 101",
    "orderDate": "2026-03-10T03:57:00.000Z"
  },
  {
    "id": "ord-1290",
    "userId": "usr-91",
    "orderedProducts": [
      {
        "product": "prod-371",
        "title": "Bundle Pack: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1958
      },
      {
        "product": "prod-31",
        "title": "Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 3,
        "price": 499
      }
    ],
    "totalAmount": 3455,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-2, Room 202",
    "orderDate": "2026-04-11T05:00:00.000Z"
  },
  {
    "id": "ord-1291",
    "userId": "usr-92",
    "orderedProducts": [
      {
        "product": "prod-374",
        "title": "Bundle Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 269
      },
      {
        "product": "prod-38",
        "title": "100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 1,
        "price": 399
      }
    ],
    "totalAmount": 937,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 303",
    "orderDate": "2026-05-12T06:03:00.000Z"
  },
  {
    "id": "ord-1292",
    "userId": "usr-93",
    "orderedProducts": [
      {
        "product": "prod-377",
        "title": "Bundle Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 404
      },
      {
        "product": "prod-45",
        "title": "Embroidered Campus Baseball Cap",
        "quantity": 2,
        "price": 299
      }
    ],
    "totalAmount": 1002,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 404",
    "orderDate": "2026-06-13T07:06:00.000Z"
  },
  {
    "id": "ord-1293",
    "userId": "usr-94",
    "orderedProducts": [
      {
        "product": "prod-380",
        "title": "Bundle Pack: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 621
      },
      {
        "product": "prod-52",
        "title": "Pro Edition: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 3,
        "price": 189
      }
    ],
    "totalAmount": 1809,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 505",
    "orderDate": "2026-07-14T08:09:00.000Z"
  },
  {
    "id": "ord-1294",
    "userId": "usr-95",
    "orderedProducts": [
      {
        "product": "prod-383",
        "title": "Bundle Pack: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 336
      },
      {
        "product": "prod-59",
        "title": "Pro Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 366
      }
    ],
    "totalAmount": 702,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 106",
    "orderDate": "2026-02-15T09:12:00.000Z"
  },
  {
    "id": "ord-1295",
    "userId": "usr-96",
    "orderedProducts": [
      {
        "product": "prod-386",
        "title": "Bundle Pack: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 269
      },
      {
        "product": "prod-66",
        "title": "Pro Edition: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 2,
        "price": 1574
      }
    ],
    "totalAmount": 3686,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 207",
    "orderDate": "2026-03-16T10:15:00.000Z"
  },
  {
    "id": "ord-1296",
    "userId": "usr-97",
    "orderedProducts": [
      {
        "product": "prod-389",
        "title": "Bundle Pack: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 269
      },
      {
        "product": "prod-73",
        "title": "Pro Edition: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 3,
        "price": 176
      }
    ],
    "totalAmount": 797,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 308",
    "orderDate": "2026-04-17T11:18:00.000Z"
  },
  {
    "id": "ord-1297",
    "userId": "usr-98",
    "orderedProducts": [
      {
        "product": "prod-392",
        "title": "Bundle Pack: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 297
      },
      {
        "product": "prod-80",
        "title": "Pro Edition: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 1,
        "price": 483
      }
    ],
    "totalAmount": 1077,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-9, Room 409",
    "orderDate": "2026-05-18T12:21:00.000Z"
  },
  {
    "id": "ord-1298",
    "userId": "usr-99",
    "orderedProducts": [
      {
        "product": "prod-395",
        "title": "Bundle Pack: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 404
      },
      {
        "product": "prod-87",
        "title": "Pro Edition: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 2,
        "price": 314
      }
    ],
    "totalAmount": 1032,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-10, Room 501",
    "orderDate": "2026-06-19T13:24:00.000Z"
  },
  {
    "id": "ord-1299",
    "userId": "usr-100",
    "orderedProducts": [
      {
        "product": "prod-398",
        "title": "Bundle Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 2024
      },
      {
        "product": "prod-94",
        "title": "Pro Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 3,
        "price": 524
      }
    ],
    "totalAmount": 5620,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 102",
    "orderDate": "2026-07-20T14:27:00.000Z"
  },
  {
    "id": "ord-1300",
    "userId": "usr-101",
    "orderedProducts": [
      {
        "product": "prod-401",
        "title": "Special Edition: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1819
      },
      {
        "product": "prod-101",
        "title": "Deluxe Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1429
      }
    ],
    "totalAmount": 3248,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 203",
    "orderDate": "2026-02-21T02:30:00.000Z"
  }
];
