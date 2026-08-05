/**
 * CampusHub Comprehensive Seed Data
 * Total Entries: 200 Products, 20 Stores, 100 Users, 100 Orders
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
    "description": "Official campus partner offering premium quality electronics and hostel delivery.",
    "sellerId": "usr-seller-2",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-2",
    "storeName": "Hostel Night Canteen",
    "description": "Official campus partner offering premium quality food and hostel delivery.",
    "sellerId": "usr-seller-3",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-3",
    "storeName": "TechHub Accessories & Repairs",
    "description": "Official campus partner offering premium quality personal and hostel delivery.",
    "sellerId": "usr-seller-4",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-4",
    "storeName": "Scholar Books & Stationery",
    "description": "Official campus partner offering premium quality hostel and hostel delivery.",
    "sellerId": "usr-seller-5",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-5",
    "storeName": "Campus Print & Binding Hub",
    "description": "Official campus partner offering premium quality college and hostel delivery.",
    "sellerId": "usr-seller-1",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-6",
    "storeName": "Hostel SuperStore",
    "description": "Official campus partner offering premium quality second-hand and hostel delivery.",
    "sellerId": "usr-seller-2",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-7",
    "storeName": "Electronics Corner",
    "description": "Official campus partner offering premium quality campus and hostel delivery.",
    "sellerId": "usr-seller-3",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-8",
    "storeName": "Late Night Bites",
    "description": "Official campus partner offering premium quality student and hostel delivery.",
    "sellerId": "usr-seller-4",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-9",
    "storeName": "Campus Wear & Merch",
    "description": "Official campus partner offering premium quality study and hostel delivery.",
    "sellerId": "usr-seller-5",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-10",
    "storeName": "Student Exchange Market",
    "description": "Official campus partner offering premium quality electronics and hostel delivery.",
    "sellerId": "usr-seller-1",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Pending"
  },
  {
    "id": "str-11",
    "storeName": "Green Grocery Hostel Hub",
    "description": "Official campus partner offering premium quality food and hostel delivery.",
    "sellerId": "usr-seller-2",
    "logo": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-12",
    "storeName": "Daily Dairy & Snacks",
    "description": "Official campus partner offering premium quality personal and hostel delivery.",
    "sellerId": "usr-seller-3",
    "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-13",
    "storeName": "Campus Pharmacy & Care",
    "description": "Official campus partner offering premium quality hostel and hostel delivery.",
    "sellerId": "usr-seller-4",
    "logo": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800",
    "rating": 4.7,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-14",
    "storeName": "Book Worm Outlet",
    "description": "Official campus partner offering premium quality college and hostel delivery.",
    "sellerId": "usr-seller-5",
    "logo": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "rating": 4.8,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-15",
    "storeName": "Digital Fix Tech Hub",
    "description": "Official campus partner offering premium quality second-hand and hostel delivery.",
    "sellerId": "usr-seller-1",
    "logo": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    "rating": 4.9,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-16",
    "storeName": "Dorm Room Decor Store",
    "description": "Official campus partner offering premium quality campus and hostel delivery.",
    "sellerId": "usr-seller-2",
    "logo": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800",
    "rating": 4.2,
    "verificationStatus": false,
    "status": "Active"
  },
  {
    "id": "str-17",
    "storeName": "Cycle Repair & Rental",
    "description": "Official campus partner offering premium quality student and hostel delivery.",
    "sellerId": "usr-seller-3",
    "logo": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    "rating": 4.3,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-18",
    "storeName": "Campus Laundry Drop",
    "description": "Official campus partner offering premium quality study and hostel delivery.",
    "sellerId": "usr-seller-4",
    "logo": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    "rating": 4.4,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-19",
    "storeName": "Fitness & Nutrition Corner",
    "description": "Official campus partner offering premium quality electronics and hostel delivery.",
    "sellerId": "usr-seller-5",
    "logo": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    "rating": 4.5,
    "verificationStatus": true,
    "status": "Active"
  },
  {
    "id": "str-20",
    "storeName": "Gadget Universe",
    "description": "Official campus partner offering premium quality food and hostel delivery.",
    "sellerId": "usr-seller-1",
    "logo": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200",
    "banner": "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    "rating": 4.6,
    "verificationStatus": false,
    "status": "Pending"
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
    "roomNumber": "105",
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
    "roomNumber": "206",
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
    "roomNumber": "307",
    "createdAt": "2026-01-07T04:36:00.000Z"
  },
  {
    "id": "usr-7",
    "name": "Kavya Verma",
    "email": "kavya.verma7@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_7",
    "phone": "+91 9800008638",
    "role": "Seller",
    "hostelBlock": "Block H-8",
    "roomNumber": "408",
    "createdAt": "2026-01-08T04:37:00.000Z"
  },
  {
    "id": "usr-8",
    "name": "Vikram Singh",
    "email": "vikram.singh8@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_8",
    "phone": "+91 9800009872",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "109",
    "createdAt": "2026-01-09T04:38:00.000Z"
  },
  {
    "id": "usr-9",
    "name": "Neha Nair",
    "email": "neha.nair9@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_9",
    "phone": "+91 9800011106",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "201",
    "createdAt": "2026-01-10T04:39:00.000Z"
  },
  {
    "id": "usr-10",
    "name": "Siddharth Malhotra",
    "email": "siddharth.malhotra10@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_10",
    "phone": "+91 9800012340",
    "role": "Seller",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "302",
    "createdAt": "2026-01-11T04:40:00.000Z"
  },
  {
    "id": "usr-11",
    "name": "Meera Deshmukh",
    "email": "meera.deshmukh11@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_11",
    "phone": "+91 9800013574",
    "role": "Seller",
    "hostelBlock": "Block H-1",
    "roomNumber": "403",
    "createdAt": "2026-01-12T04:41:00.000Z"
  },
  {
    "id": "usr-12",
    "name": "Dev Sen",
    "email": "dev.sen12@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_12",
    "phone": "+91 9800014808",
    "role": "Seller",
    "hostelBlock": "Block H-2",
    "roomNumber": "104",
    "createdAt": "2026-01-13T04:42:00.000Z"
  },
  {
    "id": "usr-13",
    "name": "Ishita Agrawal",
    "email": "ishita.agrawal13@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_13",
    "phone": "+91 9800016042",
    "role": "Seller",
    "hostelBlock": "Block H-3",
    "roomNumber": "205",
    "createdAt": "2026-01-14T04:43:00.000Z"
  },
  {
    "id": "usr-14",
    "name": "Arjun Patel",
    "email": "arjun.patel14@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_14",
    "phone": "+91 9800017276",
    "role": "Seller",
    "hostelBlock": "Block H-4",
    "roomNumber": "306",
    "createdAt": "2026-01-15T04:44:00.000Z"
  },
  {
    "id": "usr-15",
    "name": "Riya Kumar",
    "email": "riya.kumar15@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_15",
    "phone": "+91 9800018510",
    "role": "Seller",
    "hostelBlock": "Block H-5",
    "roomNumber": "407",
    "createdAt": "2026-01-16T04:45:00.000Z"
  },
  {
    "id": "usr-16",
    "name": "Karan Joshi",
    "email": "karan.joshi16@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_16",
    "phone": "+91 9800019744",
    "role": "Admin",
    "hostelBlock": "Block H-6",
    "roomNumber": "108",
    "createdAt": "2026-01-17T04:46:00.000Z"
  },
  {
    "id": "usr-17",
    "name": "Tanvi Rao",
    "email": "tanvi.rao17@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_17",
    "phone": "+91 9800020978",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "209",
    "createdAt": "2026-01-18T04:47:00.000Z"
  },
  {
    "id": "usr-18",
    "name": "Varun Mehta",
    "email": "varun.mehta18@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_18",
    "phone": "+91 9800022212",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "301",
    "createdAt": "2026-01-19T04:48:00.000Z"
  },
  {
    "id": "usr-19",
    "name": "Pooja Dutta",
    "email": "pooja.dutta19@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_19",
    "phone": "+91 9800023446",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "402",
    "createdAt": "2026-01-20T04:49:00.000Z"
  },
  {
    "id": "usr-20",
    "name": "Yash Sharma",
    "email": "yash.sharma20@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_20",
    "phone": "+91 9800024680",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "103",
    "createdAt": "2026-01-21T04:50:00.000Z"
  },
  {
    "id": "usr-21",
    "name": "Shruti Gupta",
    "email": "shruti.gupta21@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_21",
    "phone": "+91 9800025914",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "204",
    "createdAt": "2026-01-22T04:51:00.000Z"
  },
  {
    "id": "usr-22",
    "name": "Kabir Reddy",
    "email": "kabir.reddy22@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_22",
    "phone": "+91 9800027148",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "305",
    "createdAt": "2026-01-23T04:52:00.000Z"
  },
  {
    "id": "usr-23",
    "name": "Simran Chopra",
    "email": "simran.chopra23@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_23",
    "phone": "+91 9800028382",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "406",
    "createdAt": "2026-01-24T04:53:00.000Z"
  },
  {
    "id": "usr-24",
    "name": "Nikhil Bhat",
    "email": "nikhil.bhat24@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_24",
    "phone": "+91 9800029616",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "107",
    "createdAt": "2026-01-25T04:54:00.000Z"
  },
  {
    "id": "usr-25",
    "name": "Diya Kulkarni",
    "email": "diya.kulkarni25@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_25",
    "phone": "+91 9800030850",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "208",
    "createdAt": "2026-01-26T04:55:00.000Z"
  },
  {
    "id": "usr-26",
    "name": "Amit Saxena",
    "email": "amit.saxena26@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_26",
    "phone": "+91 9800032084",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "309",
    "createdAt": "2026-01-27T04:56:00.000Z"
  },
  {
    "id": "usr-27",
    "name": "Divya Verma",
    "email": "divya.verma27@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_27",
    "phone": "+91 9800033318",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "401",
    "createdAt": "2026-01-28T04:57:00.000Z"
  },
  {
    "id": "usr-28",
    "name": "Gaurav Singh",
    "email": "gaurav.singh28@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_28",
    "phone": "+91 9800034552",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "102",
    "createdAt": "2026-01-01T04:58:00.000Z"
  },
  {
    "id": "usr-29",
    "name": "Anushka Nair",
    "email": "anushka.nair29@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_29",
    "phone": "+91 9800035786",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "203",
    "createdAt": "2026-01-02T04:59:00.000Z"
  },
  {
    "id": "usr-30",
    "name": "Aarav Malhotra",
    "email": "aarav.malhotra30@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_30",
    "phone": "+91 9800037020",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "304",
    "createdAt": "2026-01-03T05:00:00.000Z"
  },
  {
    "id": "usr-31",
    "name": "Ananya Deshmukh",
    "email": "ananya.deshmukh31@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_31",
    "phone": "+91 9800038254",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "405",
    "createdAt": "2026-01-04T05:01:00.000Z"
  },
  {
    "id": "usr-32",
    "name": "Rohan Sen",
    "email": "rohan.sen32@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_32",
    "phone": "+91 9800039488",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "106",
    "createdAt": "2026-01-05T05:02:00.000Z"
  },
  {
    "id": "usr-33",
    "name": "Priya Agrawal",
    "email": "priya.agrawal33@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_33",
    "phone": "+91 9800040722",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "207",
    "createdAt": "2026-01-06T05:03:00.000Z"
  },
  {
    "id": "usr-34",
    "name": "Aditya Patel",
    "email": "aditya.patel34@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_34",
    "phone": "+91 9800041956",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "308",
    "createdAt": "2026-01-07T05:04:00.000Z"
  },
  {
    "id": "usr-35",
    "name": "Sneha Kumar",
    "email": "sneha.kumar35@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_35",
    "phone": "+91 9800043190",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "409",
    "createdAt": "2026-01-08T05:05:00.000Z"
  },
  {
    "id": "usr-36",
    "name": "Rahul Joshi",
    "email": "rahul.joshi36@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_36",
    "phone": "+91 9800044424",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "101",
    "createdAt": "2026-01-09T05:06:00.000Z"
  },
  {
    "id": "usr-37",
    "name": "Kavya Rao",
    "email": "kavya.rao37@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_37",
    "phone": "+91 9800045658",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "202",
    "createdAt": "2026-01-10T05:07:00.000Z"
  },
  {
    "id": "usr-38",
    "name": "Vikram Mehta",
    "email": "vikram.mehta38@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_38",
    "phone": "+91 9800046892",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "303",
    "createdAt": "2026-01-11T05:08:00.000Z"
  },
  {
    "id": "usr-39",
    "name": "Neha Dutta",
    "email": "neha.dutta39@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_39",
    "phone": "+91 9800048126",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "404",
    "createdAt": "2026-01-12T05:09:00.000Z"
  },
  {
    "id": "usr-40",
    "name": "Siddharth Sharma",
    "email": "siddharth.sharma40@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_40",
    "phone": "+91 9800049360",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "105",
    "createdAt": "2026-01-13T05:10:00.000Z"
  },
  {
    "id": "usr-41",
    "name": "Meera Gupta",
    "email": "meera.gupta41@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_41",
    "phone": "+91 9800050594",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "206",
    "createdAt": "2026-01-14T05:11:00.000Z"
  },
  {
    "id": "usr-42",
    "name": "Dev Reddy",
    "email": "dev.reddy42@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_42",
    "phone": "+91 9800051828",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "307",
    "createdAt": "2026-01-15T05:12:00.000Z"
  },
  {
    "id": "usr-43",
    "name": "Ishita Chopra",
    "email": "ishita.chopra43@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_43",
    "phone": "+91 9800053062",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "408",
    "createdAt": "2026-01-16T05:13:00.000Z"
  },
  {
    "id": "usr-44",
    "name": "Arjun Bhat",
    "email": "arjun.bhat44@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_44",
    "phone": "+91 9800054296",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "109",
    "createdAt": "2026-01-17T05:14:00.000Z"
  },
  {
    "id": "usr-45",
    "name": "Riya Kulkarni",
    "email": "riya.kulkarni45@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_45",
    "phone": "+91 9800055530",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "201",
    "createdAt": "2026-01-18T05:15:00.000Z"
  },
  {
    "id": "usr-46",
    "name": "Karan Saxena",
    "email": "karan.saxena46@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_46",
    "phone": "+91 9800056764",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "302",
    "createdAt": "2026-01-19T05:16:00.000Z"
  },
  {
    "id": "usr-47",
    "name": "Tanvi Verma",
    "email": "tanvi.verma47@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_47",
    "phone": "+91 9800057998",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "403",
    "createdAt": "2026-01-20T05:17:00.000Z"
  },
  {
    "id": "usr-48",
    "name": "Varun Singh",
    "email": "varun.singh48@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_48",
    "phone": "+91 9800059232",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "104",
    "createdAt": "2026-01-21T05:18:00.000Z"
  },
  {
    "id": "usr-49",
    "name": "Pooja Nair",
    "email": "pooja.nair49@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_49",
    "phone": "+91 9800060466",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "205",
    "createdAt": "2026-01-22T05:19:00.000Z"
  },
  {
    "id": "usr-50",
    "name": "Yash Malhotra",
    "email": "yash.malhotra50@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_50",
    "phone": "+91 9800061700",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "306",
    "createdAt": "2026-01-23T05:20:00.000Z"
  },
  {
    "id": "usr-51",
    "name": "Shruti Deshmukh",
    "email": "shruti.deshmukh51@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_51",
    "phone": "+91 9800062934",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "407",
    "createdAt": "2026-01-24T05:21:00.000Z"
  },
  {
    "id": "usr-52",
    "name": "Kabir Sen",
    "email": "kabir.sen52@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_52",
    "phone": "+91 9800064168",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "108",
    "createdAt": "2026-01-25T05:22:00.000Z"
  },
  {
    "id": "usr-53",
    "name": "Simran Agrawal",
    "email": "simran.agrawal53@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_53",
    "phone": "+91 9800065402",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "209",
    "createdAt": "2026-01-26T05:23:00.000Z"
  },
  {
    "id": "usr-54",
    "name": "Nikhil Patel",
    "email": "nikhil.patel54@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_54",
    "phone": "+91 9800066636",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "301",
    "createdAt": "2026-01-27T05:24:00.000Z"
  },
  {
    "id": "usr-55",
    "name": "Diya Kumar",
    "email": "diya.kumar55@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_55",
    "phone": "+91 9800067870",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "402",
    "createdAt": "2026-01-28T05:25:00.000Z"
  },
  {
    "id": "usr-56",
    "name": "Amit Joshi",
    "email": "amit.joshi56@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_56",
    "phone": "+91 9800069104",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "103",
    "createdAt": "2026-01-01T05:26:00.000Z"
  },
  {
    "id": "usr-57",
    "name": "Divya Rao",
    "email": "divya.rao57@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_57",
    "phone": "+91 9800070338",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "204",
    "createdAt": "2026-01-02T05:27:00.000Z"
  },
  {
    "id": "usr-58",
    "name": "Gaurav Mehta",
    "email": "gaurav.mehta58@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_58",
    "phone": "+91 9800071572",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "305",
    "createdAt": "2026-01-03T05:28:00.000Z"
  },
  {
    "id": "usr-59",
    "name": "Anushka Dutta",
    "email": "anushka.dutta59@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_59",
    "phone": "+91 9800072806",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "406",
    "createdAt": "2026-01-04T05:29:00.000Z"
  },
  {
    "id": "usr-60",
    "name": "Aarav Sharma",
    "email": "aarav.sharma60@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_60",
    "phone": "+91 9800074040",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "107",
    "createdAt": "2026-01-05T04:30:00.000Z"
  },
  {
    "id": "usr-61",
    "name": "Ananya Gupta",
    "email": "ananya.gupta61@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_61",
    "phone": "+91 9800075274",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "208",
    "createdAt": "2026-01-06T04:31:00.000Z"
  },
  {
    "id": "usr-62",
    "name": "Rohan Reddy",
    "email": "rohan.reddy62@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_62",
    "phone": "+91 9800076508",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "309",
    "createdAt": "2026-01-07T04:32:00.000Z"
  },
  {
    "id": "usr-63",
    "name": "Priya Chopra",
    "email": "priya.chopra63@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_63",
    "phone": "+91 9800077742",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "401",
    "createdAt": "2026-01-08T04:33:00.000Z"
  },
  {
    "id": "usr-64",
    "name": "Aditya Bhat",
    "email": "aditya.bhat64@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_64",
    "phone": "+91 9800078976",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "102",
    "createdAt": "2026-01-09T04:34:00.000Z"
  },
  {
    "id": "usr-65",
    "name": "Sneha Kulkarni",
    "email": "sneha.kulkarni65@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_65",
    "phone": "+91 9800080210",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "203",
    "createdAt": "2026-01-10T04:35:00.000Z"
  },
  {
    "id": "usr-66",
    "name": "Rahul Saxena",
    "email": "rahul.saxena66@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_66",
    "phone": "+91 9800081444",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "304",
    "createdAt": "2026-01-11T04:36:00.000Z"
  },
  {
    "id": "usr-67",
    "name": "Kavya Verma",
    "email": "kavya.verma67@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_67",
    "phone": "+91 9800082678",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "405",
    "createdAt": "2026-01-12T04:37:00.000Z"
  },
  {
    "id": "usr-68",
    "name": "Vikram Singh",
    "email": "vikram.singh68@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_68",
    "phone": "+91 9800083912",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "106",
    "createdAt": "2026-01-13T04:38:00.000Z"
  },
  {
    "id": "usr-69",
    "name": "Neha Nair",
    "email": "neha.nair69@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_69",
    "phone": "+91 9800085146",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "207",
    "createdAt": "2026-01-14T04:39:00.000Z"
  },
  {
    "id": "usr-70",
    "name": "Siddharth Malhotra",
    "email": "siddharth.malhotra70@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_70",
    "phone": "+91 9800086380",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "308",
    "createdAt": "2026-01-15T04:40:00.000Z"
  },
  {
    "id": "usr-71",
    "name": "Meera Deshmukh",
    "email": "meera.deshmukh71@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_71",
    "phone": "+91 9800087614",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "409",
    "createdAt": "2026-01-16T04:41:00.000Z"
  },
  {
    "id": "usr-72",
    "name": "Dev Sen",
    "email": "dev.sen72@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_72",
    "phone": "+91 9800088848",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "101",
    "createdAt": "2026-01-17T04:42:00.000Z"
  },
  {
    "id": "usr-73",
    "name": "Ishita Agrawal",
    "email": "ishita.agrawal73@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_73",
    "phone": "+91 9800090082",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "202",
    "createdAt": "2026-01-18T04:43:00.000Z"
  },
  {
    "id": "usr-74",
    "name": "Arjun Patel",
    "email": "arjun.patel74@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_74",
    "phone": "+91 9800091316",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "303",
    "createdAt": "2026-01-19T04:44:00.000Z"
  },
  {
    "id": "usr-75",
    "name": "Riya Kumar",
    "email": "riya.kumar75@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_75",
    "phone": "+91 9800092550",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "404",
    "createdAt": "2026-01-20T04:45:00.000Z"
  },
  {
    "id": "usr-76",
    "name": "Karan Joshi",
    "email": "karan.joshi76@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_76",
    "phone": "+91 9800093784",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "105",
    "createdAt": "2026-01-21T04:46:00.000Z"
  },
  {
    "id": "usr-77",
    "name": "Tanvi Rao",
    "email": "tanvi.rao77@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_77",
    "phone": "+91 9800095018",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "206",
    "createdAt": "2026-01-22T04:47:00.000Z"
  },
  {
    "id": "usr-78",
    "name": "Varun Mehta",
    "email": "varun.mehta78@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_78",
    "phone": "+91 9800096252",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "307",
    "createdAt": "2026-01-23T04:48:00.000Z"
  },
  {
    "id": "usr-79",
    "name": "Pooja Dutta",
    "email": "pooja.dutta79@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_79",
    "phone": "+91 9800097486",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "408",
    "createdAt": "2026-01-24T04:49:00.000Z"
  },
  {
    "id": "usr-80",
    "name": "Yash Sharma",
    "email": "yash.sharma80@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_80",
    "phone": "+91 9800098720",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "109",
    "createdAt": "2026-01-25T04:50:00.000Z"
  },
  {
    "id": "usr-81",
    "name": "Shruti Gupta",
    "email": "shruti.gupta81@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_81",
    "phone": "+91 9800099954",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "201",
    "createdAt": "2026-01-26T04:51:00.000Z"
  },
  {
    "id": "usr-82",
    "name": "Kabir Reddy",
    "email": "kabir.reddy82@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_82",
    "phone": "+91 9800101188",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "302",
    "createdAt": "2026-01-27T04:52:00.000Z"
  },
  {
    "id": "usr-83",
    "name": "Simran Chopra",
    "email": "simran.chopra83@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_83",
    "phone": "+91 9800102422",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "403",
    "createdAt": "2026-01-28T04:53:00.000Z"
  },
  {
    "id": "usr-84",
    "name": "Nikhil Bhat",
    "email": "nikhil.bhat84@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_84",
    "phone": "+91 9800103656",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "104",
    "createdAt": "2026-01-01T04:54:00.000Z"
  },
  {
    "id": "usr-85",
    "name": "Diya Kulkarni",
    "email": "diya.kulkarni85@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_85",
    "phone": "+91 9800104890",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "205",
    "createdAt": "2026-01-02T04:55:00.000Z"
  },
  {
    "id": "usr-86",
    "name": "Amit Saxena",
    "email": "amit.saxena86@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_86",
    "phone": "+91 9800106124",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "306",
    "createdAt": "2026-01-03T04:56:00.000Z"
  },
  {
    "id": "usr-87",
    "name": "Divya Verma",
    "email": "divya.verma87@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_87",
    "phone": "+91 9800107358",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "407",
    "createdAt": "2026-01-04T04:57:00.000Z"
  },
  {
    "id": "usr-88",
    "name": "Gaurav Singh",
    "email": "gaurav.singh88@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_88",
    "phone": "+91 9800108592",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "108",
    "createdAt": "2026-01-05T04:58:00.000Z"
  },
  {
    "id": "usr-89",
    "name": "Anushka Nair",
    "email": "anushka.nair89@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_89",
    "phone": "+91 9800109826",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "209",
    "createdAt": "2026-01-06T04:59:00.000Z"
  },
  {
    "id": "usr-90",
    "name": "Aarav Malhotra",
    "email": "aarav.malhotra90@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_90",
    "phone": "+91 9800111060",
    "role": "Student",
    "hostelBlock": "Block H-3",
    "roomNumber": "301",
    "createdAt": "2026-01-07T05:00:00.000Z"
  },
  {
    "id": "usr-91",
    "name": "Ananya Deshmukh",
    "email": "ananya.deshmukh91@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_91",
    "phone": "+91 9800112294",
    "role": "Student",
    "hostelBlock": "Block H-4",
    "roomNumber": "402",
    "createdAt": "2026-01-08T05:01:00.000Z"
  },
  {
    "id": "usr-92",
    "name": "Rohan Sen",
    "email": "rohan.sen92@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_92",
    "phone": "+91 9800113528",
    "role": "Student",
    "hostelBlock": "Block H-5",
    "roomNumber": "103",
    "createdAt": "2026-01-09T05:02:00.000Z"
  },
  {
    "id": "usr-93",
    "name": "Priya Agrawal",
    "email": "priya.agrawal93@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_93",
    "phone": "+91 9800114762",
    "role": "Student",
    "hostelBlock": "Block H-6",
    "roomNumber": "204",
    "createdAt": "2026-01-10T05:03:00.000Z"
  },
  {
    "id": "usr-94",
    "name": "Aditya Patel",
    "email": "aditya.patel94@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_94",
    "phone": "+91 9800115996",
    "role": "Student",
    "hostelBlock": "Block H-7",
    "roomNumber": "305",
    "createdAt": "2026-01-11T05:04:00.000Z"
  },
  {
    "id": "usr-95",
    "name": "Sneha Kumar",
    "email": "sneha.kumar95@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_95",
    "phone": "+91 9800117230",
    "role": "Student",
    "hostelBlock": "Block H-8",
    "roomNumber": "406",
    "createdAt": "2026-01-12T05:05:00.000Z"
  },
  {
    "id": "usr-96",
    "name": "Rahul Joshi",
    "email": "rahul.joshi96@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_96",
    "phone": "+91 9800118464",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-1",
    "roomNumber": "107",
    "createdAt": "2026-01-13T05:06:00.000Z"
  },
  {
    "id": "usr-97",
    "name": "Kavya Rao",
    "email": "kavya.rao97@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_97",
    "phone": "+91 9800119698",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-2",
    "roomNumber": "208",
    "createdAt": "2026-01-14T05:07:00.000Z"
  },
  {
    "id": "usr-98",
    "name": "Vikram Mehta",
    "email": "vikram.mehta98@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_98",
    "phone": "+91 9800120932",
    "role": "Student",
    "hostelBlock": "Girls Hostel G-3",
    "roomNumber": "309",
    "createdAt": "2026-01-15T05:08:00.000Z"
  },
  {
    "id": "usr-99",
    "name": "Neha Dutta",
    "email": "neha.dutta99@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_99",
    "phone": "+91 9800122166",
    "role": "Student",
    "hostelBlock": "Block H-1",
    "roomNumber": "401",
    "createdAt": "2026-01-16T05:09:00.000Z"
  },
  {
    "id": "usr-100",
    "name": "Siddharth Sharma",
    "email": "siddharth.sharma100@campushub.edu",
    "password": "$2a$10$encryptedHashPasswordUser_100",
    "phone": "+91 9800123400",
    "role": "Student",
    "hostelBlock": "Block H-2",
    "roomNumber": "102",
    "createdAt": "2026-01-17T05:10:00.000Z"
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
    "rating": 4.4,
    "reviewsCount": 22,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
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
    "rating": 4.7,
    "reviewsCount": 29,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
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
    "rating": 4.1,
    "reviewsCount": 36,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-04T05:30:00.000Z"
  },
  {
    "id": "prod-4",
    "title": "Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 160,
    "originalPrice": 200,
    "rating": 4.4,
    "reviewsCount": 43,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-05T06:30:00.000Z"
  },
  {
    "id": "prod-5",
    "title": "Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 120,
    "originalPrice": 150,
    "rating": 4.7,
    "reviewsCount": 50,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-06T07:30:00.000Z"
  },
  {
    "id": "prod-6",
    "title": "Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 199,
    "originalPrice": 250,
    "rating": 4.1,
    "reviewsCount": 57,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Electronics Corner",
    "createdAt": "2026-02-07T08:30:00.000Z"
  },
  {
    "id": "prod-7",
    "title": "Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 150,
    "originalPrice": 180,
    "rating": 4.4,
    "reviewsCount": 64,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Late Night Bites",
    "createdAt": "2026-02-08T09:30:00.000Z"
  },
  {
    "id": "prod-8",
    "title": "A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.7,
    "reviewsCount": 71,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-09T10:30:00.000Z"
  },
  {
    "id": "prod-9",
    "title": "Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 349,
    "originalPrice": 499,
    "rating": 4.1,
    "reviewsCount": 78,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-10T11:30:00.000Z"
  },
  {
    "id": "prod-10",
    "title": "Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 180,
    "originalPrice": 250,
    "rating": 4.4,
    "reviewsCount": 85,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-11T12:30:00.000Z"
  },
  {
    "id": "prod-11",
    "title": "White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 350,
    "originalPrice": 450,
    "rating": 4.7,
    "reviewsCount": 92,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-12T13:30:00.000Z"
  },
  {
    "id": "prod-12",
    "title": "Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 80,
    "originalPrice": 120,
    "rating": 4.1,
    "reviewsCount": 99,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-13T02:30:00.000Z"
  },
  {
    "id": "prod-13",
    "title": "Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 699,
    "originalPrice": 999,
    "rating": 4.4,
    "reviewsCount": 106,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-14T03:30:00.000Z"
  },
  {
    "id": "prod-14",
    "title": "Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 799,
    "originalPrice": 999,
    "rating": 4.7,
    "reviewsCount": 113,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-15T04:30:00.000Z"
  },
  {
    "id": "prod-15",
    "title": "Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1299,
    "originalPrice": 1799,
    "rating": 4.1,
    "reviewsCount": 120,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-16T05:30:00.000Z"
  },
  {
    "id": "prod-16",
    "title": "Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1499,
    "originalPrice": 2990,
    "rating": 4.4,
    "reviewsCount": 127,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-17T06:30:00.000Z"
  },
  {
    "id": "prod-17",
    "title": "Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1199,
    "originalPrice": 1699,
    "rating": 4.7,
    "reviewsCount": 134,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-18T07:30:00.000Z"
  },
  {
    "id": "prod-18",
    "title": "SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 849,
    "originalPrice": 1200,
    "rating": 4.1,
    "reviewsCount": 141,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-19T08:30:00.000Z"
  },
  {
    "id": "prod-19",
    "title": "Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 999,
    "originalPrice": 1499,
    "rating": 4.4,
    "reviewsCount": 148,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Gadget Universe",
    "createdAt": "2026-02-20T09:30:00.000Z"
  },
  {
    "id": "prod-20",
    "title": "Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 499,
    "originalPrice": 799,
    "rating": 4.7,
    "reviewsCount": 155,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-21T10:30:00.000Z"
  },
  {
    "id": "prod-21",
    "title": "Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1450,
    "originalPrice": 2200,
    "rating": 4.1,
    "reviewsCount": 162,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-22T11:30:00.000Z"
  },
  {
    "id": "prod-22",
    "title": "Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 899,
    "originalPrice": 1299,
    "rating": 4.4,
    "reviewsCount": 169,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-23T12:30:00.000Z"
  },
  {
    "id": "prod-23",
    "title": "Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 168,
    "originalPrice": 180,
    "rating": 4.7,
    "reviewsCount": 176,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-24T13:30:00.000Z"
  },
  {
    "id": "prod-24",
    "title": "Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 199,
    "originalPrice": 240,
    "rating": 4.1,
    "reviewsCount": 183,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-25T02:30:00.000Z"
  },
  {
    "id": "prod-25",
    "title": "Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 349,
    "originalPrice": 420,
    "rating": 4.4,
    "reviewsCount": 190,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-01T03:30:00.000Z"
  },
  {
    "id": "prod-26",
    "title": "Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 120,
    "originalPrice": 120,
    "rating": 4.7,
    "reviewsCount": 197,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Electronics Corner",
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
    "reviewsCount": 204,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Late Night Bites",
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
    "reviewsCount": 211,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Campus Wear & Merch",
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
    "reviewsCount": 218,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-05T07:30:00.000Z"
  },
  {
    "id": "prod-30",
    "title": "Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 460,
    "originalPrice": 500,
    "rating": 4.1,
    "reviewsCount": 225,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-06T08:30:00.000Z"
  },
  {
    "id": "prod-31",
    "title": "Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.4,
    "reviewsCount": 232,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-07T09:30:00.000Z"
  },
  {
    "id": "prod-32",
    "title": "Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 180,
    "originalPrice": 220,
    "rating": 4.7,
    "reviewsCount": 239,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-08T10:30:00.000Z"
  },
  {
    "id": "prod-33",
    "title": "Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 249,
    "originalPrice": 299,
    "rating": 4.1,
    "reviewsCount": 246,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-09T11:30:00.000Z"
  },
  {
    "id": "prod-34",
    "title": "Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 175,
    "originalPrice": 210,
    "rating": 4.4,
    "reviewsCount": 253,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-10T12:30:00.000Z"
  },
  {
    "id": "prod-35",
    "title": "Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 349,
    "originalPrice": 425,
    "rating": 4.7,
    "reviewsCount": 260,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-11T13:30:00.000Z"
  },
  {
    "id": "prod-36",
    "title": "Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 199,
    "originalPrice": 250,
    "rating": 4.1,
    "reviewsCount": 267,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-12T02:30:00.000Z"
  },
  {
    "id": "prod-37",
    "title": "Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.4,
    "reviewsCount": 274,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-13T03:30:00.000Z"
  },
  {
    "id": "prod-38",
    "title": "100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 399,
    "originalPrice": 599,
    "rating": 4.7,
    "reviewsCount": 281,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-14T04:30:00.000Z"
  },
  {
    "id": "prod-39",
    "title": "Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 199,
    "originalPrice": 299,
    "rating": 4.1,
    "reviewsCount": 288,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Gadget Universe",
    "createdAt": "2026-02-15T05:30:00.000Z"
  },
  {
    "id": "prod-40",
    "title": "Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 249,
    "originalPrice": 320,
    "rating": 4.4,
    "reviewsCount": 295,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-16T06:30:00.000Z"
  },
  {
    "id": "prod-41",
    "title": "Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 499,
    "originalPrice": 799,
    "rating": 4.7,
    "reviewsCount": 302,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-17T07:30:00.000Z"
  },
  {
    "id": "prod-42",
    "title": "Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 220,
    "originalPrice": 299,
    "rating": 4.1,
    "reviewsCount": 309,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-18T08:30:00.000Z"
  },
  {
    "id": "prod-43",
    "title": "Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1299,
    "originalPrice": 1799,
    "rating": 4.4,
    "reviewsCount": 316,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-19T09:30:00.000Z"
  },
  {
    "id": "prod-44",
    "title": "Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 499,
    "originalPrice": 699,
    "rating": 4.7,
    "reviewsCount": 323,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-20T10:30:00.000Z"
  },
  {
    "id": "prod-45",
    "title": "Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 299,
    "originalPrice": 399,
    "rating": 4.1,
    "reviewsCount": 330,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-21T11:30:00.000Z"
  },
  {
    "id": "prod-46",
    "title": "Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 24999,
    "originalPrice": 55000,
    "rating": 4.4,
    "reviewsCount": 337,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "Electronics Corner",
    "createdAt": "2026-02-22T12:30:00.000Z"
  },
  {
    "id": "prod-47",
    "title": "Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 3499,
    "originalPrice": 8500,
    "rating": 4.7,
    "reviewsCount": 344,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Late Night Bites",
    "createdAt": "2026-02-23T13:30:00.000Z"
  },
  {
    "id": "prod-48",
    "title": "Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1499,
    "originalPrice": 3500,
    "rating": 4.1,
    "reviewsCount": 351,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-24T02:30:00.000Z"
  },
  {
    "id": "prod-49",
    "title": "Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 299,
    "originalPrice": 499,
    "rating": 4.4,
    "reviewsCount": 358,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-25T03:30:00.000Z"
  },
  {
    "id": "prod-50",
    "title": "Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 199,
    "originalPrice": 349,
    "rating": 4.7,
    "reviewsCount": 15,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-01T04:30:00.000Z"
  },
  {
    "id": "prod-51",
    "title": "Pro Edition: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1429,
    "originalPrice": 1759,
    "rating": 4.1,
    "reviewsCount": 22,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-02T05:30:00.000Z"
  },
  {
    "id": "prod-52",
    "title": "Pro Edition: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 198,
    "originalPrice": 264,
    "rating": 4.4,
    "reviewsCount": 29,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-03T06:30:00.000Z"
  },
  {
    "id": "prod-53",
    "title": "Pro Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 329,
    "originalPrice": 385,
    "rating": 4.7,
    "reviewsCount": 36,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-04T07:30:00.000Z"
  },
  {
    "id": "prod-54",
    "title": "Pro Edition: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 176,
    "originalPrice": 220,
    "rating": 4.1,
    "reviewsCount": 43,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-05T08:30:00.000Z"
  },
  {
    "id": "prod-55",
    "title": "Pro Edition: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 132,
    "originalPrice": 165,
    "rating": 4.4,
    "reviewsCount": 50,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-06T09:30:00.000Z"
  },
  {
    "id": "prod-56",
    "title": "Pro Edition: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 219,
    "originalPrice": 275,
    "rating": 4.7,
    "reviewsCount": 57,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-07T10:30:00.000Z"
  },
  {
    "id": "prod-57",
    "title": "Pro Edition: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 165,
    "originalPrice": 198,
    "rating": 4.1,
    "reviewsCount": 64,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-08T11:30:00.000Z"
  },
  {
    "id": "prod-58",
    "title": "Pro Edition: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 549,
    "originalPrice": 769,
    "rating": 4.4,
    "reviewsCount": 71,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-09T12:30:00.000Z"
  },
  {
    "id": "prod-59",
    "title": "Pro Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 384,
    "originalPrice": 549,
    "rating": 4.7,
    "reviewsCount": 78,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Gadget Universe",
    "createdAt": "2026-02-10T13:30:00.000Z"
  },
  {
    "id": "prod-60",
    "title": "Pro Edition: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 198,
    "originalPrice": 275,
    "rating": 4.1,
    "reviewsCount": 85,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-11T02:30:00.000Z"
  },
  {
    "id": "prod-61",
    "title": "Pro Edition: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 385,
    "originalPrice": 495,
    "rating": 4.4,
    "reviewsCount": 92,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-12T03:30:00.000Z"
  },
  {
    "id": "prod-62",
    "title": "Pro Edition: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 88,
    "originalPrice": 132,
    "rating": 4.7,
    "reviewsCount": 99,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-13T04:30:00.000Z"
  },
  {
    "id": "prod-63",
    "title": "Pro Edition: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 769,
    "originalPrice": 1099,
    "rating": 4.1,
    "reviewsCount": 106,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-14T05:30:00.000Z"
  },
  {
    "id": "prod-64",
    "title": "Pro Edition: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 879,
    "originalPrice": 1099,
    "rating": 4.4,
    "reviewsCount": 113,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-15T06:30:00.000Z"
  },
  {
    "id": "prod-65",
    "title": "Pro Edition: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1429,
    "originalPrice": 1979,
    "rating": 4.7,
    "reviewsCount": 120,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-16T07:30:00.000Z"
  },
  {
    "id": "prod-66",
    "title": "Pro Edition: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1649,
    "originalPrice": 3289,
    "rating": 4.1,
    "reviewsCount": 127,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Electronics Corner",
    "createdAt": "2026-02-17T08:30:00.000Z"
  },
  {
    "id": "prod-67",
    "title": "Pro Edition: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1319,
    "originalPrice": 1869,
    "rating": 4.4,
    "reviewsCount": 134,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Late Night Bites",
    "createdAt": "2026-02-18T09:30:00.000Z"
  },
  {
    "id": "prod-68",
    "title": "Pro Edition: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 934,
    "originalPrice": 1320,
    "rating": 4.7,
    "reviewsCount": 141,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-19T10:30:00.000Z"
  },
  {
    "id": "prod-69",
    "title": "Pro Edition: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1099,
    "originalPrice": 1649,
    "rating": 4.1,
    "reviewsCount": 148,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-20T11:30:00.000Z"
  },
  {
    "id": "prod-70",
    "title": "Pro Edition: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 549,
    "originalPrice": 879,
    "rating": 4.4,
    "reviewsCount": 155,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-21T12:30:00.000Z"
  },
  {
    "id": "prod-71",
    "title": "Pro Edition: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1595,
    "originalPrice": 2420,
    "rating": 4.7,
    "reviewsCount": 162,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-22T13:30:00.000Z"
  },
  {
    "id": "prod-72",
    "title": "Pro Edition: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 989,
    "originalPrice": 1429,
    "rating": 4.1,
    "reviewsCount": 169,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-23T02:30:00.000Z"
  },
  {
    "id": "prod-73",
    "title": "Pro Edition: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 185,
    "originalPrice": 198,
    "rating": 4.4,
    "reviewsCount": 176,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-24T03:30:00.000Z"
  },
  {
    "id": "prod-74",
    "title": "Pro Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 219,
    "originalPrice": 264,
    "rating": 4.7,
    "reviewsCount": 183,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-25T04:30:00.000Z"
  },
  {
    "id": "prod-75",
    "title": "Pro Edition: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 384,
    "originalPrice": 462,
    "rating": 4.1,
    "reviewsCount": 190,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-01T05:30:00.000Z"
  },
  {
    "id": "prod-76",
    "title": "Pro Edition: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 132,
    "originalPrice": 132,
    "rating": 4.4,
    "reviewsCount": 197,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-02T06:30:00.000Z"
  },
  {
    "id": "prod-77",
    "title": "Pro Edition: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 329,
    "originalPrice": 439,
    "rating": 4.7,
    "reviewsCount": 204,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-03T07:30:00.000Z"
  },
  {
    "id": "prod-78",
    "title": "Pro Edition: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 303,
    "originalPrice": 314,
    "rating": 4.1,
    "reviewsCount": 211,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-04T08:30:00.000Z"
  },
  {
    "id": "prod-79",
    "title": "Pro Edition: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 165,
    "originalPrice": 198,
    "rating": 4.4,
    "reviewsCount": 218,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Gadget Universe",
    "createdAt": "2026-02-05T09:30:00.000Z"
  },
  {
    "id": "prod-80",
    "title": "Pro Edition: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 506,
    "originalPrice": 550,
    "rating": 4.7,
    "reviewsCount": 225,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-06T10:30:00.000Z"
  },
  {
    "id": "prod-81",
    "title": "Pro Edition: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 549,
    "originalPrice": 769,
    "rating": 4.1,
    "reviewsCount": 232,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-07T11:30:00.000Z"
  },
  {
    "id": "prod-82",
    "title": "Pro Edition: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 198,
    "originalPrice": 242,
    "rating": 4.4,
    "reviewsCount": 239,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-08T12:30:00.000Z"
  },
  {
    "id": "prod-83",
    "title": "Pro Edition: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 274,
    "originalPrice": 329,
    "rating": 4.7,
    "reviewsCount": 246,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-09T13:30:00.000Z"
  },
  {
    "id": "prod-84",
    "title": "Pro Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 193,
    "originalPrice": 231,
    "rating": 4.1,
    "reviewsCount": 253,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-10T02:30:00.000Z"
  },
  {
    "id": "prod-85",
    "title": "Pro Edition: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 384,
    "originalPrice": 468,
    "rating": 4.4,
    "reviewsCount": 260,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-11T03:30:00.000Z"
  },
  {
    "id": "prod-86",
    "title": "Pro Edition: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 219,
    "originalPrice": 275,
    "rating": 4.7,
    "reviewsCount": 267,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Electronics Corner",
    "createdAt": "2026-02-12T04:30:00.000Z"
  },
  {
    "id": "prod-87",
    "title": "Pro Edition: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 329,
    "originalPrice": 439,
    "rating": 4.1,
    "reviewsCount": 274,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Late Night Bites",
    "createdAt": "2026-02-13T05:30:00.000Z"
  },
  {
    "id": "prod-88",
    "title": "Pro Edition: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 439,
    "originalPrice": 659,
    "rating": 4.4,
    "reviewsCount": 281,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-14T06:30:00.000Z"
  },
  {
    "id": "prod-89",
    "title": "Pro Edition: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 219,
    "originalPrice": 329,
    "rating": 4.7,
    "reviewsCount": 288,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-15T07:30:00.000Z"
  },
  {
    "id": "prod-90",
    "title": "Pro Edition: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 274,
    "originalPrice": 352,
    "rating": 4.1,
    "reviewsCount": 295,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-16T08:30:00.000Z"
  },
  {
    "id": "prod-91",
    "title": "Pro Edition: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 549,
    "originalPrice": 879,
    "rating": 4.4,
    "reviewsCount": 302,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-17T09:30:00.000Z"
  },
  {
    "id": "prod-92",
    "title": "Pro Edition: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 242,
    "originalPrice": 329,
    "rating": 4.7,
    "reviewsCount": 309,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-18T10:30:00.000Z"
  },
  {
    "id": "prod-93",
    "title": "Pro Edition: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1429,
    "originalPrice": 1979,
    "rating": 4.1,
    "reviewsCount": 316,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-19T11:30:00.000Z"
  },
  {
    "id": "prod-94",
    "title": "Pro Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 549,
    "originalPrice": 769,
    "rating": 4.4,
    "reviewsCount": 323,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-20T12:30:00.000Z"
  },
  {
    "id": "prod-95",
    "title": "Pro Edition: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 329,
    "originalPrice": 439,
    "rating": 4.7,
    "reviewsCount": 330,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-21T13:30:00.000Z"
  },
  {
    "id": "prod-96",
    "title": "Pro Edition: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 27499,
    "originalPrice": 60500,
    "rating": 4.1,
    "reviewsCount": 337,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-22T02:30:00.000Z"
  },
  {
    "id": "prod-97",
    "title": "Pro Edition: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 3849,
    "originalPrice": 9350,
    "rating": 4.4,
    "reviewsCount": 344,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-23T03:30:00.000Z"
  },
  {
    "id": "prod-98",
    "title": "Pro Edition: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1649,
    "originalPrice": 3850,
    "rating": 4.7,
    "reviewsCount": 351,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-24T04:30:00.000Z"
  },
  {
    "id": "prod-99",
    "title": "Pro Edition: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 329,
    "originalPrice": 549,
    "rating": 4.1,
    "reviewsCount": 358,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Gadget Universe",
    "createdAt": "2026-02-25T05:30:00.000Z"
  },
  {
    "id": "prod-100",
    "title": "Pro Edition: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 219,
    "originalPrice": 384,
    "rating": 4.4,
    "reviewsCount": 15,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-01T06:30:00.000Z"
  },
  {
    "id": "prod-101",
    "title": "Deluxe Pack: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1559,
    "originalPrice": 1919,
    "rating": 4.7,
    "reviewsCount": 22,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-02T07:30:00.000Z"
  },
  {
    "id": "prod-102",
    "title": "Deluxe Pack: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 216,
    "originalPrice": 288,
    "rating": 4.1,
    "reviewsCount": 29,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-03T08:30:00.000Z"
  },
  {
    "id": "prod-103",
    "title": "Deluxe Pack: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 359,
    "originalPrice": 420,
    "rating": 4.4,
    "reviewsCount": 36,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-04T09:30:00.000Z"
  },
  {
    "id": "prod-104",
    "title": "Deluxe Pack: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 192,
    "originalPrice": 240,
    "rating": 4.7,
    "reviewsCount": 43,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-05T10:30:00.000Z"
  },
  {
    "id": "prod-105",
    "title": "Deluxe Pack: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 144,
    "originalPrice": 180,
    "rating": 4.1,
    "reviewsCount": 50,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-06T11:30:00.000Z"
  },
  {
    "id": "prod-106",
    "title": "Deluxe Pack: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 239,
    "originalPrice": 300,
    "rating": 4.4,
    "reviewsCount": 57,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Electronics Corner",
    "createdAt": "2026-02-07T12:30:00.000Z"
  },
  {
    "id": "prod-107",
    "title": "Deluxe Pack: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 180,
    "originalPrice": 216,
    "rating": 4.7,
    "reviewsCount": 64,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Late Night Bites",
    "createdAt": "2026-02-08T13:30:00.000Z"
  },
  {
    "id": "prod-108",
    "title": "Deluxe Pack: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 599,
    "originalPrice": 839,
    "rating": 4.1,
    "reviewsCount": 71,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-09T02:30:00.000Z"
  },
  {
    "id": "prod-109",
    "title": "Deluxe Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 419,
    "originalPrice": 599,
    "rating": 4.4,
    "reviewsCount": 78,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-10T03:30:00.000Z"
  },
  {
    "id": "prod-110",
    "title": "Deluxe Pack: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 216,
    "originalPrice": 300,
    "rating": 4.7,
    "reviewsCount": 85,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-11T04:30:00.000Z"
  },
  {
    "id": "prod-111",
    "title": "Deluxe Pack: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 420,
    "originalPrice": 540,
    "rating": 4.1,
    "reviewsCount": 92,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-12T05:30:00.000Z"
  },
  {
    "id": "prod-112",
    "title": "Deluxe Pack: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 96,
    "originalPrice": 144,
    "rating": 4.4,
    "reviewsCount": 99,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-13T06:30:00.000Z"
  },
  {
    "id": "prod-113",
    "title": "Deluxe Pack: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 839,
    "originalPrice": 1199,
    "rating": 4.7,
    "reviewsCount": 106,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-14T07:30:00.000Z"
  },
  {
    "id": "prod-114",
    "title": "Deluxe Pack: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 959,
    "originalPrice": 1199,
    "rating": 4.1,
    "reviewsCount": 113,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-15T08:30:00.000Z"
  },
  {
    "id": "prod-115",
    "title": "Deluxe Pack: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1559,
    "originalPrice": 2159,
    "rating": 4.4,
    "reviewsCount": 120,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-16T09:30:00.000Z"
  },
  {
    "id": "prod-116",
    "title": "Deluxe Pack: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1799,
    "originalPrice": 3588,
    "rating": 4.7,
    "reviewsCount": 127,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-17T10:30:00.000Z"
  },
  {
    "id": "prod-117",
    "title": "Deluxe Pack: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1439,
    "originalPrice": 2039,
    "rating": 4.1,
    "reviewsCount": 134,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-18T11:30:00.000Z"
  },
  {
    "id": "prod-118",
    "title": "Deluxe Pack: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1019,
    "originalPrice": 1440,
    "rating": 4.4,
    "reviewsCount": 141,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-19T12:30:00.000Z"
  },
  {
    "id": "prod-119",
    "title": "Deluxe Pack: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1199,
    "originalPrice": 1799,
    "rating": 4.7,
    "reviewsCount": 148,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Gadget Universe",
    "createdAt": "2026-02-20T13:30:00.000Z"
  },
  {
    "id": "prod-120",
    "title": "Deluxe Pack: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 599,
    "originalPrice": 959,
    "rating": 4.1,
    "reviewsCount": 155,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-21T02:30:00.000Z"
  },
  {
    "id": "prod-121",
    "title": "Deluxe Pack: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1740,
    "originalPrice": 2640,
    "rating": 4.4,
    "reviewsCount": 162,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 56,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-22T03:30:00.000Z"
  },
  {
    "id": "prod-122",
    "title": "Deluxe Pack: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1079,
    "originalPrice": 1559,
    "rating": 4.7,
    "reviewsCount": 169,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 67,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-23T04:30:00.000Z"
  },
  {
    "id": "prod-123",
    "title": "Deluxe Pack: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 202,
    "originalPrice": 216,
    "rating": 4.1,
    "reviewsCount": 176,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 78,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-24T05:30:00.000Z"
  },
  {
    "id": "prod-124",
    "title": "Deluxe Pack: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 239,
    "originalPrice": 288,
    "rating": 4.4,
    "reviewsCount": 183,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 9,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-25T06:30:00.000Z"
  },
  {
    "id": "prod-125",
    "title": "Deluxe Pack: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 419,
    "originalPrice": 504,
    "rating": 4.7,
    "reviewsCount": 190,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 20,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-01T07:30:00.000Z"
  },
  {
    "id": "prod-126",
    "title": "Deluxe Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 144,
    "originalPrice": 144,
    "rating": 4.1,
    "reviewsCount": 197,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 31,
    "store": "Electronics Corner",
    "createdAt": "2026-02-02T08:30:00.000Z"
  },
  {
    "id": "prod-127",
    "title": "Deluxe Pack: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 359,
    "originalPrice": 479,
    "rating": 4.4,
    "reviewsCount": 204,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 42,
    "store": "Late Night Bites",
    "createdAt": "2026-02-03T09:30:00.000Z"
  },
  {
    "id": "prod-128",
    "title": "Deluxe Pack: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 330,
    "originalPrice": 342,
    "rating": 4.7,
    "reviewsCount": 211,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 53,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-04T10:30:00.000Z"
  },
  {
    "id": "prod-129",
    "title": "Deluxe Pack: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 180,
    "originalPrice": 216,
    "rating": 4.1,
    "reviewsCount": 218,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 64,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-05T11:30:00.000Z"
  },
  {
    "id": "prod-130",
    "title": "Deluxe Pack: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 552,
    "originalPrice": 600,
    "rating": 4.4,
    "reviewsCount": 225,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 75,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-06T12:30:00.000Z"
  },
  {
    "id": "prod-131",
    "title": "Deluxe Pack: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 599,
    "originalPrice": 839,
    "rating": 4.7,
    "reviewsCount": 232,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 6,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-07T13:30:00.000Z"
  },
  {
    "id": "prod-132",
    "title": "Deluxe Pack: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 216,
    "originalPrice": 264,
    "rating": 4.1,
    "reviewsCount": 239,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 17,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-08T02:30:00.000Z"
  },
  {
    "id": "prod-133",
    "title": "Deluxe Pack: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 299,
    "originalPrice": 359,
    "rating": 4.4,
    "reviewsCount": 246,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 28,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-09T03:30:00.000Z"
  },
  {
    "id": "prod-134",
    "title": "Deluxe Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 210,
    "originalPrice": 252,
    "rating": 4.7,
    "reviewsCount": 253,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 39,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-10T04:30:00.000Z"
  },
  {
    "id": "prod-135",
    "title": "Deluxe Pack: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 419,
    "originalPrice": 510,
    "rating": 4.1,
    "reviewsCount": 260,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 50,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-11T05:30:00.000Z"
  },
  {
    "id": "prod-136",
    "title": "Deluxe Pack: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 239,
    "originalPrice": 300,
    "rating": 4.4,
    "reviewsCount": 267,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 61,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-12T06:30:00.000Z"
  },
  {
    "id": "prod-137",
    "title": "Deluxe Pack: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 359,
    "originalPrice": 479,
    "rating": 4.7,
    "reviewsCount": 274,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 72,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-13T07:30:00.000Z"
  },
  {
    "id": "prod-138",
    "title": "Deluxe Pack: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 479,
    "originalPrice": 719,
    "rating": 4.1,
    "reviewsCount": 281,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 83,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-14T08:30:00.000Z"
  },
  {
    "id": "prod-139",
    "title": "Deluxe Pack: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 239,
    "originalPrice": 359,
    "rating": 4.4,
    "reviewsCount": 288,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 14,
    "store": "Gadget Universe",
    "createdAt": "2026-02-15T09:30:00.000Z"
  },
  {
    "id": "prod-140",
    "title": "Deluxe Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 299,
    "originalPrice": 384,
    "rating": 4.7,
    "reviewsCount": 295,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 25,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-16T10:30:00.000Z"
  },
  {
    "id": "prod-141",
    "title": "Deluxe Pack: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 599,
    "originalPrice": 959,
    "rating": 4.1,
    "reviewsCount": 302,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 36,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-17T11:30:00.000Z"
  },
  {
    "id": "prod-142",
    "title": "Deluxe Pack: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 264,
    "originalPrice": 359,
    "rating": 4.4,
    "reviewsCount": 309,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 47,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-18T12:30:00.000Z"
  },
  {
    "id": "prod-143",
    "title": "Deluxe Pack: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1559,
    "originalPrice": 2159,
    "rating": 4.7,
    "reviewsCount": 316,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 58,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-19T13:30:00.000Z"
  },
  {
    "id": "prod-144",
    "title": "Deluxe Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 599,
    "originalPrice": 839,
    "rating": 4.1,
    "reviewsCount": 323,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 69,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-20T02:30:00.000Z"
  },
  {
    "id": "prod-145",
    "title": "Deluxe Pack: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 359,
    "originalPrice": 479,
    "rating": 4.4,
    "reviewsCount": 330,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 80,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-21T03:30:00.000Z"
  },
  {
    "id": "prod-146",
    "title": "Deluxe Pack: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 29999,
    "originalPrice": 66000,
    "rating": 4.7,
    "reviewsCount": 337,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 11,
    "store": "Electronics Corner",
    "createdAt": "2026-02-22T04:30:00.000Z"
  },
  {
    "id": "prod-147",
    "title": "Deluxe Pack: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4199,
    "originalPrice": 10200,
    "rating": 4.1,
    "reviewsCount": 344,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 22,
    "store": "Late Night Bites",
    "createdAt": "2026-02-23T05:30:00.000Z"
  },
  {
    "id": "prod-148",
    "title": "Deluxe Pack: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1799,
    "originalPrice": 4200,
    "rating": 4.4,
    "reviewsCount": 351,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 33,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-24T06:30:00.000Z"
  },
  {
    "id": "prod-149",
    "title": "Deluxe Pack: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 359,
    "originalPrice": 599,
    "rating": 4.7,
    "reviewsCount": 358,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 44,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-25T07:30:00.000Z"
  },
  {
    "id": "prod-150",
    "title": "Deluxe Pack: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 239,
    "originalPrice": 419,
    "rating": 4.1,
    "reviewsCount": 15,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 55,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-01T08:30:00.000Z"
  },
  {
    "id": "prod-151",
    "title": "Campus Special: Casio FX-991EX Scientific Calculator",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 1689,
    "originalPrice": 2079,
    "rating": 4.4,
    "reviewsCount": 22,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600",
    "stock": 66,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-02T09:30:00.000Z"
  },
  {
    "id": "prod-152",
    "title": "Campus Special: Classmate Pulse Notebooks (Pack of 6)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 234,
    "originalPrice": 312,
    "rating": 4.7,
    "reviewsCount": 29,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600",
    "stock": 77,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-03T10:30:00.000Z"
  },
  {
    "id": "prod-153",
    "title": "Campus Special: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 389,
    "originalPrice": 455,
    "rating": 4.1,
    "reviewsCount": 36,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600",
    "stock": 8,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-04T11:30:00.000Z"
  },
  {
    "id": "prod-154",
    "title": "Campus Special: Faber-Castell Pastel Highlighters Set of 4",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 208,
    "originalPrice": 260,
    "rating": 4.4,
    "reviewsCount": 43,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600",
    "stock": 19,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-05T12:30:00.000Z"
  },
  {
    "id": "prod-155",
    "title": "Campus Special: Hardbound Grid-Line Engineering Journal",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 156,
    "originalPrice": 195,
    "rating": 4.7,
    "reviewsCount": 50,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    "stock": 30,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-06T13:30:00.000Z"
  },
  {
    "id": "prod-156",
    "title": "Campus Special: Post-it Super Sticky Notes Color Pack",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 259,
    "originalPrice": 325,
    "rating": 4.1,
    "reviewsCount": 57,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600",
    "stock": 41,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-07T02:30:00.000Z"
  },
  {
    "id": "prod-157",
    "title": "Campus Special: Camlin Geometry Box with Metal Compass",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 195,
    "originalPrice": 234,
    "rating": 4.4,
    "reviewsCount": 64,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
    "stock": 52,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-08T03:30:00.000Z"
  },
  {
    "id": "prod-158",
    "title": "Campus Special: A3 Size Engineering Drawing Board",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 649,
    "originalPrice": 909,
    "rating": 4.7,
    "reviewsCount": 71,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600",
    "stock": 63,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-09T04:30:00.000Z"
  },
  {
    "id": "prod-159",
    "title": "Campus Special: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 454,
    "originalPrice": 649,
    "rating": 4.1,
    "reviewsCount": 78,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    "stock": 74,
    "store": "Gadget Universe",
    "createdAt": "2026-02-10T05:30:00.000Z"
  },
  {
    "id": "prod-160",
    "title": "Campus Special: Heavy Duty Document File Folder with 20 Pockets",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 234,
    "originalPrice": 325,
    "rating": 4.4,
    "reviewsCount": 85,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    "stock": 5,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-11T06:30:00.000Z"
  },
  {
    "id": "prod-161",
    "title": "Campus Special: White Cotton Unisex Lab Coat (Size L)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 455,
    "originalPrice": 585,
    "rating": 4.7,
    "reviewsCount": 92,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "stock": 16,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-12T07:30:00.000Z"
  },
  {
    "id": "prod-162",
    "title": "Campus Special: Graph Paper Pad A4 (100 Sheets)",
    "category": "study",
    "categoryLabel": "Study Essentials",
    "price": 104,
    "originalPrice": 156,
    "rating": 4.1,
    "reviewsCount": 99,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600",
    "stock": 27,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-13T08:30:00.000Z"
  },
  {
    "id": "prod-163",
    "title": "Campus Special: Logitech M220 Silent Wireless Mouse",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 909,
    "originalPrice": 1299,
    "rating": 4.4,
    "reviewsCount": 106,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 38,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-14T09:30:00.000Z"
  },
  {
    "id": "prod-164",
    "title": "Campus Special: Ergonomic Aluminum Foldable Laptop Stand",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1039,
    "originalPrice": 1299,
    "rating": 4.7,
    "reviewsCount": 113,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    "stock": 49,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-15T10:30:00.000Z"
  },
  {
    "id": "prod-165",
    "title": "Campus Special: Anker PowerCore 10000mAh Power Bank",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1689,
    "originalPrice": 2339,
    "rating": 4.1,
    "reviewsCount": 120,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600",
    "stock": 60,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-16T11:30:00.000Z"
  },
  {
    "id": "prod-166",
    "title": "Campus Special: Boat Rockerz 450 Bluetooth Headphones",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1949,
    "originalPrice": 3887,
    "rating": 4.4,
    "reviewsCount": 127,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    "stock": 71,
    "store": "Electronics Corner",
    "createdAt": "2026-02-17T12:30:00.000Z"
  },
  {
    "id": "prod-167",
    "title": "Campus Special: Type-C 7-in-1 USB Hub Adapter",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1559,
    "originalPrice": 2209,
    "rating": 4.7,
    "reviewsCount": 134,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600",
    "stock": 82,
    "store": "Late Night Bites",
    "createdAt": "2026-02-18T13:30:00.000Z"
  },
  {
    "id": "prod-168",
    "title": "Campus Special: SanDisk 128GB Ultra Dual USB Drive",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1104,
    "originalPrice": 1560,
    "rating": 4.1,
    "reviewsCount": 141,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600",
    "stock": 13,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-19T02:30:00.000Z"
  },
  {
    "id": "prod-169",
    "title": "Campus Special: Wired Gaming Keyboard with RGB Backlight",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1299,
    "originalPrice": 1949,
    "rating": 4.4,
    "reviewsCount": 148,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600",
    "stock": 24,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-20T03:30:00.000Z"
  },
  {
    "id": "prod-170",
    "title": "Campus Special: Portronics 6-Socket Surge Protector Power Strip",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 649,
    "originalPrice": 1039,
    "rating": 4.7,
    "reviewsCount": 155,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600",
    "stock": 35,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-21T04:30:00.000Z"
  },
  {
    "id": "prod-171",
    "title": "Campus Special: Full HD 1080p Webcam with Built-in Mic",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1885,
    "originalPrice": 2860,
    "rating": 4.1,
    "reviewsCount": 162,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600",
    "stock": 46,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-22T05:30:00.000Z"
  },
  {
    "id": "prod-172",
    "title": "Campus Special: Laptop Cooling Pad with 4 Quiet LED Fans",
    "category": "electronics",
    "categoryLabel": "Electronics & Accessories",
    "price": 1169,
    "originalPrice": 1689,
    "rating": 4.4,
    "reviewsCount": 169,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600",
    "stock": 57,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-23T06:30:00.000Z"
  },
  {
    "id": "prod-173",
    "title": "Campus Special: Nestle Maggi Masala Noodles (Pack of 12)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 218,
    "originalPrice": 234,
    "rating": 4.7,
    "reviewsCount": 176,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600",
    "stock": 68,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-24T07:30:00.000Z"
  },
  {
    "id": "prod-174",
    "title": "Campus Special: Nissin Cup Noodles Peri Peri (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 259,
    "originalPrice": 312,
    "rating": 4.1,
    "reviewsCount": 183,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600",
    "stock": 79,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-25T08:30:00.000Z"
  },
  {
    "id": "prod-175",
    "title": "Campus Special: Nescafe Classic Instant Coffee 200g Jar",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 454,
    "originalPrice": 546,
    "rating": 4.4,
    "reviewsCount": 190,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600",
    "stock": 10,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-01T09:30:00.000Z"
  },
  {
    "id": "prod-176",
    "title": "Campus Special: Lays Potato Chips Magic Masala 50g (Pack of 6)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 156,
    "originalPrice": 156,
    "rating": 4.7,
    "reviewsCount": 197,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600",
    "stock": 21,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-02T10:30:00.000Z"
  },
  {
    "id": "prod-177",
    "title": "Campus Special: MyFitness Peanut Butter Smooth 500g",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 389,
    "originalPrice": 519,
    "rating": 4.1,
    "reviewsCount": 204,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    "stock": 32,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-03T11:30:00.000Z"
  },
  {
    "id": "prod-178",
    "title": "Campus Special: Amul Butter 500g Pack",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 358,
    "originalPrice": 371,
    "rating": 4.4,
    "reviewsCount": 211,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600",
    "stock": 43,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-04T12:30:00.000Z"
  },
  {
    "id": "prod-179",
    "title": "Campus Special: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 195,
    "originalPrice": 234,
    "rating": 4.7,
    "reviewsCount": 218,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600",
    "stock": 54,
    "store": "Gadget Universe",
    "createdAt": "2026-02-05T13:30:00.000Z"
  },
  {
    "id": "prod-180",
    "title": "Campus Special: Red Bull Energy Drink 250ml (Pack of 4)",
    "category": "food",
    "categoryLabel": "Food & Snacks",
    "price": 598,
    "originalPrice": 650,
    "rating": 4.1,
    "reviewsCount": 225,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600",
    "stock": 65,
    "store": "Campus Mart Express",
    "createdAt": "2026-02-06T02:30:00.000Z"
  },
  {
    "id": "prod-181",
    "title": "Campus Special: Organic Lavender Hostel Aromatherapy Diffuser",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 649,
    "originalPrice": 909,
    "rating": 4.4,
    "reviewsCount": 232,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 76,
    "store": "Hostel Night Canteen",
    "createdAt": "2026-02-07T03:30:00.000Z"
  },
  {
    "id": "prod-182",
    "title": "Campus Special: Nivea Men Dark Spot Reduction Face Wash 100g",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 234,
    "originalPrice": 286,
    "rating": 4.7,
    "reviewsCount": 239,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600",
    "stock": 7,
    "store": "TechHub Accessories & Repairs",
    "createdAt": "2026-02-08T04:30:00.000Z"
  },
  {
    "id": "prod-183",
    "title": "Campus Special: Wild Stone CODE Body Spray Deodorant 150ml",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 324,
    "originalPrice": 389,
    "rating": 4.1,
    "reviewsCount": 246,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    "stock": 18,
    "store": "Scholar Books & Stationery",
    "createdAt": "2026-02-09T05:30:00.000Z"
  },
  {
    "id": "prod-184",
    "title": "Campus Special: Colgate MaxFresh Toothpaste (Pack of 2)",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 228,
    "originalPrice": 273,
    "rating": 4.4,
    "reviewsCount": 253,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600",
    "stock": 29,
    "store": "Campus Print & Binding Hub",
    "createdAt": "2026-02-10T06:30:00.000Z"
  },
  {
    "id": "prod-185",
    "title": "Campus Special: Gillette Mach3 Turbo Razor with 2 Blades",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 454,
    "originalPrice": 553,
    "rating": 4.7,
    "reviewsCount": 260,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600",
    "stock": 40,
    "store": "Hostel SuperStore",
    "createdAt": "2026-02-11T07:30:00.000Z"
  },
  {
    "id": "prod-186",
    "title": "Campus Special: Dettol Instant Hand Sanitizer 500ml Pump",
    "category": "personal",
    "categoryLabel": "Personal Care",
    "price": 259,
    "originalPrice": 325,
    "rating": 4.1,
    "reviewsCount": 267,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    "stock": 51,
    "store": "Electronics Corner",
    "createdAt": "2026-02-12T08:30:00.000Z"
  },
  {
    "id": "prod-187",
    "title": "Campus Special: Heavy Duty Metal Mesh Desk Organizer",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 389,
    "originalPrice": 519,
    "rating": 4.4,
    "reviewsCount": 274,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600",
    "stock": 62,
    "store": "Late Night Bites",
    "createdAt": "2026-02-13T09:30:00.000Z"
  },
  {
    "id": "prod-188",
    "title": "Campus Special: 100% Cotton Single Bedsheet with Pillow Cover",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 519,
    "originalPrice": 779,
    "rating": 4.7,
    "reviewsCount": 281,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
    "stock": 73,
    "store": "Campus Wear & Merch",
    "createdAt": "2026-02-14T10:30:00.000Z"
  },
  {
    "id": "prod-189",
    "title": "Campus Special: Foldable Laundry Mesh Basket",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 259,
    "originalPrice": 389,
    "rating": 4.1,
    "reviewsCount": 288,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600",
    "stock": 84,
    "store": "Student Exchange Market",
    "createdAt": "2026-02-15T11:30:00.000Z"
  },
  {
    "id": "prod-190",
    "title": "Campus Special: Godrej Nav-Tal 7 Levers Brass Padlock",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 324,
    "originalPrice": 416,
    "rating": 4.4,
    "reviewsCount": 295,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600",
    "stock": 15,
    "store": "Green Grocery Hostel Hub",
    "createdAt": "2026-02-16T12:30:00.000Z"
  },
  {
    "id": "prod-191",
    "title": "Campus Special: Rechargeable LED Study Lamp with Touch Control",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 649,
    "originalPrice": 1039,
    "rating": 4.7,
    "reviewsCount": 302,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600",
    "stock": 26,
    "store": "Daily Dairy & Snacks",
    "createdAt": "2026-02-17T13:30:00.000Z"
  },
  {
    "id": "prod-192",
    "title": "Campus Special: Plastic Bathing Bucket 20L + Mug Set",
    "category": "hostel",
    "categoryLabel": "Hostel Essentials",
    "price": 286,
    "originalPrice": 389,
    "rating": 4.1,
    "reviewsCount": 309,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
    "stock": 37,
    "store": "Campus Pharmacy & Care",
    "createdAt": "2026-02-18T02:30:00.000Z"
  },
  {
    "id": "prod-193",
    "title": "Campus Special: Official CampusHub Fleece Varsity Hoodie",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 1689,
    "originalPrice": 2339,
    "rating": 4.4,
    "reviewsCount": 316,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
    "stock": 48,
    "store": "Book Worm Outlet",
    "createdAt": "2026-02-19T03:30:00.000Z"
  },
  {
    "id": "prod-194",
    "title": "Campus Special: Campus Edition Stainless Steel Insulated Flask 750ml",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 649,
    "originalPrice": 909,
    "rating": 4.7,
    "reviewsCount": 323,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600",
    "stock": 59,
    "store": "Digital Fix Tech Hub",
    "createdAt": "2026-02-20T04:30:00.000Z"
  },
  {
    "id": "prod-195",
    "title": "Campus Special: Embroidered Campus Baseball Cap",
    "category": "merchandise",
    "categoryLabel": "College Merchandise",
    "price": 389,
    "originalPrice": 519,
    "rating": 4.1,
    "reviewsCount": 330,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    "stock": 70,
    "store": "Dorm Room Decor Store",
    "createdAt": "2026-02-21T05:30:00.000Z"
  },
  {
    "id": "prod-196",
    "title": "Campus Special: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 32499,
    "originalPrice": 71500,
    "rating": 4.4,
    "reviewsCount": 337,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600",
    "stock": 81,
    "store": "Cycle Repair & Rental",
    "createdAt": "2026-02-22T06:30:00.000Z"
  },
  {
    "id": "prod-197",
    "title": "Campus Special: Hero Sprint 21-Speed Mountain Bicycle",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 4549,
    "originalPrice": 11050,
    "rating": 4.7,
    "reviewsCount": 344,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600",
    "stock": 12,
    "store": "Campus Laundry Drop",
    "createdAt": "2026-02-23T07:30:00.000Z"
  },
  {
    "id": "prod-198",
    "title": "Campus Special: Ergonomic Mesh Office Chair for Study",
    "category": "marketplace",
    "categoryLabel": "Second-Hand Market",
    "price": 1949,
    "originalPrice": 4550,
    "rating": 4.1,
    "reviewsCount": 351,
    "deliveryTime": "Delivery in 30 mins",
    "image": "https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600",
    "stock": 23,
    "store": "Fitness & Nutrition Corner",
    "createdAt": "2026-02-24T08:30:00.000Z"
  },
  {
    "id": "prod-199",
    "title": "Campus Special: Full Laptop Deep Cleaning & Thermal Paste Service",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 389,
    "originalPrice": 649,
    "rating": 4.4,
    "reviewsCount": 358,
    "deliveryTime": "Delivery today",
    "image": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600",
    "stock": 34,
    "store": "Gadget Universe",
    "createdAt": "2026-02-25T09:30:00.000Z"
  },
  {
    "id": "prod-200",
    "title": "Campus Special: Hostel Room Deep Sanitization & Cleaning",
    "category": "services",
    "categoryLabel": "Campus Services",
    "price": 259,
    "originalPrice": 454,
    "rating": 4.7,
    "reviewsCount": 15,
    "deliveryTime": "Delivery in 1 hr",
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600",
    "stock": 45,
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
    "deliveryAddress": "Block H-5, Room 105",
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
    "deliveryAddress": "Block H-6, Room 206",
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
    "deliveryAddress": "Block H-7, Room 307",
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
    "deliveryAddress": "Block H-8, Room 408",
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
    "deliveryAddress": "Girls Hostel G-1, Room 109",
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
        "price": 165
      }
    ],
    "totalAmount": 844,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-2, Room 201",
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
        "price": 879
      }
    ],
    "totalAmount": 1429,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 302",
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
        "price": 1595
      }
    ],
    "totalAmount": 3689,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-1, Room 403",
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
        "price": 303
      }
    ],
    "totalAmount": 1259,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 104",
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
        "price": 384
      }
    ],
    "totalAmount": 683,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 205",
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
        "price": 242
      }
    ],
    "totalAmount": 982,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 306",
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
        "price": 329
      }
    ],
    "totalAmount": 2286,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 407",
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
        "price": 239
      }
    ],
    "totalAmount": 50237,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 108",
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
        "price": 839
      }
    ],
    "totalAmount": 1977,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-7, Room 209",
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
        "price": 198
      },
      {
        "product": "prod-120",
        "title": "Deluxe Pack: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 3,
        "price": 599
      }
    ],
    "totalAmount": 2193,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 301",
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
        "price": 132
      },
      {
        "product": "prod-127",
        "title": "Deluxe Pack: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 359
      }
    ],
    "totalAmount": 491,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 402",
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
        "price": 549
      },
      {
        "product": "prod-134",
        "title": "Deluxe Pack: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 2,
        "price": 210
      }
    ],
    "totalAmount": 1518,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 103",
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
        "price": 385
      },
      {
        "product": "prod-141",
        "title": "Deluxe Pack: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 3,
        "price": 599
      }
    ],
    "totalAmount": 2182,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-3, Room 204",
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
        "price": 879
      },
      {
        "product": "prod-148",
        "title": "Deluxe Pack: Ergonomic Mesh Office Chair for Study",
        "quantity": 1,
        "price": 1799
      }
    ],
    "totalAmount": 3557,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 305",
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
        "price": 1319
      },
      {
        "product": "prod-155",
        "title": "Campus Special: Hardbound Grid-Line Engineering Journal",
        "quantity": 2,
        "price": 156
      }
    ],
    "totalAmount": 1631,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 406",
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
        "price": 549
      },
      {
        "product": "prod-162",
        "title": "Campus Special: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 3,
        "price": 104
      }
    ],
    "totalAmount": 1410,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 107",
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
        "price": 185
      },
      {
        "product": "prod-169",
        "title": "Campus Special: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 1,
        "price": 1299
      }
    ],
    "totalAmount": 1484,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 208",
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
        "price": 132
      },
      {
        "product": "prod-176",
        "title": "Campus Special: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 156
      }
    ],
    "totalAmount": 576,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 309",
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
        "price": 165
      },
      {
        "product": "prod-183",
        "title": "Campus Special: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 3,
        "price": 324
      }
    ],
    "totalAmount": 1137,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 401",
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
        "price": 198
      },
      {
        "product": "prod-190",
        "title": "Campus Special: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 1,
        "price": 324
      }
    ],
    "totalAmount": 720,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 102",
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
        "price": 384
      },
      {
        "product": "prod-197",
        "title": "Campus Special: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 2,
        "price": 4549
      }
    ],
    "totalAmount": 9482,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 203",
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
        "price": 439
      },
      {
        "product": "prod-4",
        "title": "Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 3,
        "price": 160
      }
    ],
    "totalAmount": 1358,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 304",
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
        "price": 549
      },
      {
        "product": "prod-11",
        "title": "White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 350
      }
    ],
    "totalAmount": 899,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-2, Room 405",
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
        "price": 549
      },
      {
        "product": "prod-18",
        "title": "SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 849
      }
    ],
    "totalAmount": 2796,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 106",
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
        "price": 3849
      },
      {
        "product": "prod-25",
        "title": "Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 3,
        "price": 349
      }
    ],
    "totalAmount": 4896,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-1, Room 207",
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
        "price": 219
      },
      {
        "product": "prod-32",
        "title": "Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 1,
        "price": 180
      }
    ],
    "totalAmount": 618,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 308",
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
        "price": 359
      },
      {
        "product": "prod-39",
        "title": "Foldable Laundry Mesh Basket",
        "quantity": 2,
        "price": 199
      }
    ],
    "totalAmount": 757,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 409",
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
        "price": 239
      },
      {
        "product": "prod-46",
        "title": "Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 3,
        "price": 24999
      }
    ],
    "totalAmount": 75475,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 101",
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
        "price": 419
      },
      {
        "product": "prod-53",
        "title": "Pro Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 329
      }
    ],
    "totalAmount": 748,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-5, Room 202",
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
        "price": 96
      },
      {
        "product": "prod-60",
        "title": "Pro Edition: Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 2,
        "price": 198
      }
    ],
    "totalAmount": 588,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 303",
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
        "price": 1559
      },
      {
        "product": "prod-67",
        "title": "Pro Edition: Type-C 7-in-1 USB Hub Adapter",
        "quantity": 3,
        "price": 1319
      }
    ],
    "totalAmount": 5516,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 404",
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
        "price": 1019
      },
      {
        "product": "prod-74",
        "title": "Pro Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 1,
        "price": 219
      }
    ],
    "totalAmount": 2257,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 105",
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
        "price": 1740
      },
      {
        "product": "prod-81",
        "title": "Pro Edition: Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 2,
        "price": 549
      }
    ],
    "totalAmount": 2838,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Girls Hostel G-1, Room 206",
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
        "price": 239
      },
      {
        "product": "prod-88",
        "title": "Pro Edition: 100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 3,
        "price": 439
      }
    ],
    "totalAmount": 1795,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 307",
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
        "price": 359
      },
      {
        "product": "prod-95",
        "title": "Pro Edition: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 329
      }
    ],
    "totalAmount": 688,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 408",
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
        "price": 552
      },
      {
        "product": "prod-102",
        "title": "Deluxe Pack: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 216
      }
    ],
    "totalAmount": 1536,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 109",
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
        "price": 299
      },
      {
        "product": "prod-109",
        "title": "Deluxe Pack: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 3,
        "price": 419
      }
    ],
    "totalAmount": 1556,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-2, Room 201",
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
        "price": 239
      },
      {
        "product": "prod-116",
        "title": "Deluxe Pack: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 1,
        "price": 1799
      }
    ],
    "totalAmount": 2277,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 302",
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
        "price": 239
      },
      {
        "product": "prod-123",
        "title": "Deluxe Pack: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 2,
        "price": 202
      }
    ],
    "totalAmount": 643,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 403",
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
        "price": 264
      },
      {
        "product": "prod-130",
        "title": "Deluxe Pack: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 3,
        "price": 552
      }
    ],
    "totalAmount": 2184,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 104",
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
        "price": 359
      },
      {
        "product": "prod-137",
        "title": "Deluxe Pack: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 1,
        "price": 359
      }
    ],
    "totalAmount": 718,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 205",
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
        "price": 1799
      },
      {
        "product": "prod-144",
        "title": "Deluxe Pack: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 599
      }
    ],
    "totalAmount": 4796,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 306",
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
        "price": 1689
      },
      {
        "product": "prod-151",
        "title": "Campus Special: Casio FX-991EX Scientific Calculator",
        "quantity": 3,
        "price": 1689
      }
    ],
    "totalAmount": 6756,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-8, Room 407",
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
        "price": 208
      },
      {
        "product": "prod-158",
        "title": "Campus Special: A3 Size Engineering Drawing Board",
        "quantity": 1,
        "price": 649
      }
    ],
    "totalAmount": 1065,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 108",
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
        "price": 195
      },
      {
        "product": "prod-165",
        "title": "Campus Special: Anker PowerCore 10000mAh Power Bank",
        "quantity": 2,
        "price": 1689
      }
    ],
    "totalAmount": 3573,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-2, Room 209",
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
        "price": 234
      },
      {
        "product": "prod-172",
        "title": "Campus Special: Laptop Cooling Pad with 4 Quiet LED Fans",
        "quantity": 3,
        "price": 1169
      }
    ],
    "totalAmount": 3975,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 301",
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
        "price": 909
      },
      {
        "product": "prod-179",
        "title": "Campus Special: Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 195
      }
    ],
    "totalAmount": 1104,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 402",
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
        "price": 1949
      },
      {
        "product": "prod-186",
        "title": "Campus Special: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 259
      }
    ],
    "totalAmount": 4416,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 103",
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
        "price": 1299
      },
      {
        "product": "prod-193",
        "title": "Campus Special: Official CampusHub Fleece Varsity Hoodie",
        "quantity": 3,
        "price": 1689
      }
    ],
    "totalAmount": 6366,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-3, Room 204",
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
        "price": 1169
      },
      {
        "product": "prod-200",
        "title": "Campus Special: Hostel Room Deep Sanitization & Cleaning",
        "quantity": 1,
        "price": 259
      }
    ],
    "totalAmount": 2597,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 305",
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
        "price": 454
      },
      {
        "product": "prod-7",
        "title": "Camlin Geometry Box with Metal Compass",
        "quantity": 2,
        "price": 150
      }
    ],
    "totalAmount": 754,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 406",
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
        "price": 358
      },
      {
        "product": "prod-14",
        "title": "Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 3,
        "price": 799
      }
    ],
    "totalAmount": 3113,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 107",
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
        "price": 649
      },
      {
        "product": "prod-21",
        "title": "Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1450
      }
    ],
    "totalAmount": 2099,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-7, Room 208",
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
        "price": 228
      },
      {
        "product": "prod-28",
        "title": "Amul Butter 500g Pack",
        "quantity": 2,
        "price": 275
      }
    ],
    "totalAmount": 1006,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 309",
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
        "price": 389
      },
      {
        "product": "prod-35",
        "title": "Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 3,
        "price": 349
      }
    ],
    "totalAmount": 1436,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 401",
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
        "price": 324
      },
      {
        "product": "prod-42",
        "title": "Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 1,
        "price": 220
      }
    ],
    "totalAmount": 868,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 102",
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
        "price": 1689
      },
      {
        "product": "prod-49",
        "title": "Full Laptop Deep Cleaning & Thermal Paste Service",
        "quantity": 2,
        "price": 299
      }
    ],
    "totalAmount": 2287,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-3, Room 203",
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
        "price": 32499
      },
      {
        "product": "prod-56",
        "title": "Pro Edition: Post-it Super Sticky Notes Color Pack",
        "quantity": 3,
        "price": 219
      }
    ],
    "totalAmount": 65655,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 304",
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
        "price": 389
      },
      {
        "product": "prod-63",
        "title": "Pro Edition: Logitech M220 Silent Wireless Mouse",
        "quantity": 1,
        "price": 769
      }
    ],
    "totalAmount": 1158,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 405",
    "orderDate": "2026-02-11T08:48:00.000Z"
  },
  {
    "id": "ord-1067",
    "userId": "usr-68",
    "orderedProducts": [
      {
        "product": "prod-2",
        "title": "Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 2,
        "price": 180
      },
      {
        "product": "prod-70",
        "title": "Pro Edition: Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 549
      }
    ],
    "totalAmount": 1458,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 106",
    "orderDate": "2026-03-12T09:51:00.000Z"
  },
  {
    "id": "ord-1068",
    "userId": "usr-69",
    "orderedProducts": [
      {
        "product": "prod-5",
        "title": "Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 120
      },
      {
        "product": "prod-77",
        "title": "Pro Edition: MyFitness Peanut Butter Smooth 500g",
        "quantity": 3,
        "price": 329
      }
    ],
    "totalAmount": 1107,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-4, Room 207",
    "orderDate": "2026-04-13T10:54:00.000Z"
  },
  {
    "id": "ord-1069",
    "userId": "usr-70",
    "orderedProducts": [
      {
        "product": "prod-8",
        "title": "A3 Size Engineering Drawing Board",
        "quantity": 2,
        "price": 499
      },
      {
        "product": "prod-84",
        "title": "Pro Edition: Colgate MaxFresh Toothpaste (Pack of 2)",
        "quantity": 1,
        "price": 193
      }
    ],
    "totalAmount": 1191,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 308",
    "orderDate": "2026-05-14T11:57:00.000Z"
  },
  {
    "id": "ord-1070",
    "userId": "usr-71",
    "orderedProducts": [
      {
        "product": "prod-11",
        "title": "White Cotton Unisex Lab Coat (Size L)",
        "quantity": 1,
        "price": 350
      },
      {
        "product": "prod-91",
        "title": "Pro Edition: Rechargeable LED Study Lamp with Touch Control",
        "quantity": 2,
        "price": 549
      }
    ],
    "totalAmount": 1448,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-6, Room 409",
    "orderDate": "2026-06-15T13:00:00.000Z"
  },
  {
    "id": "ord-1071",
    "userId": "usr-72",
    "orderedProducts": [
      {
        "product": "prod-14",
        "title": "Ergonomic Aluminum Foldable Laptop Stand",
        "quantity": 2,
        "price": 799
      },
      {
        "product": "prod-98",
        "title": "Pro Edition: Ergonomic Mesh Office Chair for Study",
        "quantity": 3,
        "price": 1649
      }
    ],
    "totalAmount": 6545,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 101",
    "orderDate": "2026-07-16T14:03:00.000Z"
  },
  {
    "id": "ord-1072",
    "userId": "usr-73",
    "orderedProducts": [
      {
        "product": "prod-17",
        "title": "Type-C 7-in-1 USB Hub Adapter",
        "quantity": 1,
        "price": 1199
      },
      {
        "product": "prod-105",
        "title": "Deluxe Pack: Hardbound Grid-Line Engineering Journal",
        "quantity": 1,
        "price": 144
      }
    ],
    "totalAmount": 1343,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-8, Room 202",
    "orderDate": "2026-02-17T03:06:00.000Z"
  },
  {
    "id": "ord-1073",
    "userId": "usr-74",
    "orderedProducts": [
      {
        "product": "prod-20",
        "title": "Portronics 6-Socket Surge Protector Power Strip",
        "quantity": 2,
        "price": 499
      },
      {
        "product": "prod-112",
        "title": "Deluxe Pack: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 96
      }
    ],
    "totalAmount": 1190,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 303",
    "orderDate": "2026-03-18T04:09:00.000Z"
  },
  {
    "id": "ord-1074",
    "userId": "usr-75",
    "orderedProducts": [
      {
        "product": "prod-23",
        "title": "Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 168
      },
      {
        "product": "prod-119",
        "title": "Deluxe Pack: Wired Gaming Keyboard with RGB Backlight",
        "quantity": 3,
        "price": 1199
      }
    ],
    "totalAmount": 3765,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 404",
    "orderDate": "2026-04-19T05:12:00.000Z"
  },
  {
    "id": "ord-1075",
    "userId": "usr-76",
    "orderedProducts": [
      {
        "product": "prod-26",
        "title": "Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 2,
        "price": 120
      },
      {
        "product": "prod-126",
        "title": "Deluxe Pack: Lays Potato Chips Magic Masala 50g (Pack of 6)",
        "quantity": 1,
        "price": 144
      }
    ],
    "totalAmount": 384,
    "paymentStatus": "Failed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 105",
    "orderDate": "2026-05-20T06:15:00.000Z"
  },
  {
    "id": "ord-1076",
    "userId": "usr-77",
    "orderedProducts": [
      {
        "product": "prod-29",
        "title": "Dark Fantasy Choco Fills Biscuits (Pack of 3)",
        "quantity": 1,
        "price": 150
      },
      {
        "product": "prod-133",
        "title": "Deluxe Pack: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 2,
        "price": 299
      }
    ],
    "totalAmount": 748,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-1, Room 206",
    "orderDate": "2026-06-21T07:18:00.000Z"
  },
  {
    "id": "ord-1077",
    "userId": "usr-78",
    "orderedProducts": [
      {
        "product": "prod-32",
        "title": "Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 2,
        "price": 180
      },
      {
        "product": "prod-140",
        "title": "Deluxe Pack: Godrej Nav-Tal 7 Levers Brass Padlock",
        "quantity": 3,
        "price": 299
      }
    ],
    "totalAmount": 1257,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 307",
    "orderDate": "2026-07-22T08:21:00.000Z"
  },
  {
    "id": "ord-1078",
    "userId": "usr-79",
    "orderedProducts": [
      {
        "product": "prod-35",
        "title": "Gillette Mach3 Turbo Razor with 2 Blades",
        "quantity": 1,
        "price": 349
      },
      {
        "product": "prod-147",
        "title": "Deluxe Pack: Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 4199
      }
    ],
    "totalAmount": 4548,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 408",
    "orderDate": "2026-02-23T09:24:00.000Z"
  },
  {
    "id": "ord-1079",
    "userId": "usr-80",
    "orderedProducts": [
      {
        "product": "prod-38",
        "title": "100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 399
      },
      {
        "product": "prod-154",
        "title": "Campus Special: Faber-Castell Pastel Highlighters Set of 4",
        "quantity": 2,
        "price": 208
      }
    ],
    "totalAmount": 1214,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-4, Room 109",
    "orderDate": "2026-03-24T10:27:00.000Z"
  },
  {
    "id": "ord-1080",
    "userId": "usr-81",
    "orderedProducts": [
      {
        "product": "prod-41",
        "title": "Rechargeable LED Study Lamp with Touch Control",
        "quantity": 1,
        "price": 499
      },
      {
        "product": "prod-161",
        "title": "Campus Special: White Cotton Unisex Lab Coat (Size L)",
        "quantity": 3,
        "price": 455
      }
    ],
    "totalAmount": 1864,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-5, Room 201",
    "orderDate": "2026-04-25T10:30:00.000Z"
  },
  {
    "id": "ord-1081",
    "userId": "usr-82",
    "orderedProducts": [
      {
        "product": "prod-44",
        "title": "Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 2,
        "price": 499
      },
      {
        "product": "prod-168",
        "title": "Campus Special: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 1,
        "price": 1104
      }
    ],
    "totalAmount": 2102,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-6, Room 302",
    "orderDate": "2026-05-26T11:33:00.000Z"
  },
  {
    "id": "ord-1082",
    "userId": "usr-83",
    "orderedProducts": [
      {
        "product": "prod-47",
        "title": "Hero Sprint 21-Speed Mountain Bicycle",
        "quantity": 1,
        "price": 3499
      },
      {
        "product": "prod-175",
        "title": "Campus Special: Nescafe Classic Instant Coffee 200g Jar",
        "quantity": 2,
        "price": 454
      }
    ],
    "totalAmount": 4407,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 403",
    "orderDate": "2026-06-27T12:36:00.000Z"
  },
  {
    "id": "ord-1083",
    "userId": "usr-84",
    "orderedProducts": [
      {
        "product": "prod-50",
        "title": "Hostel Room Deep Sanitization & Cleaning",
        "quantity": 2,
        "price": 199
      },
      {
        "product": "prod-182",
        "title": "Campus Special: Nivea Men Dark Spot Reduction Face Wash 100g",
        "quantity": 3,
        "price": 234
      }
    ],
    "totalAmount": 1100,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 104",
    "orderDate": "2026-07-28T13:39:00.000Z"
  },
  {
    "id": "ord-1084",
    "userId": "usr-85",
    "orderedProducts": [
      {
        "product": "prod-53",
        "title": "Pro Edition: Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-189",
        "title": "Campus Special: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 259
      }
    ],
    "totalAmount": 588,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-1, Room 205",
    "orderDate": "2026-02-01T02:42:00.000Z"
  },
  {
    "id": "ord-1085",
    "userId": "usr-86",
    "orderedProducts": [
      {
        "product": "prod-56",
        "title": "Pro Edition: Post-it Super Sticky Notes Color Pack",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-196",
        "title": "Campus Special: Pre-owned Core i5 11th Gen Laptop (16GB/512GB)",
        "quantity": 2,
        "price": 32499
      }
    ],
    "totalAmount": 65436,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-2, Room 306",
    "orderDate": "2026-03-02T03:45:00.000Z"
  },
  {
    "id": "ord-1086",
    "userId": "usr-87",
    "orderedProducts": [
      {
        "product": "prod-59",
        "title": "Pro Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 1,
        "price": 384
      },
      {
        "product": "prod-3",
        "title": "Uniball Eye Micro 0.5 Blue Pens (Pack of 5)",
        "quantity": 3,
        "price": 299
      }
    ],
    "totalAmount": 1281,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 407",
    "orderDate": "2026-04-03T04:48:00.000Z"
  },
  {
    "id": "ord-1087",
    "userId": "usr-88",
    "orderedProducts": [
      {
        "product": "prod-62",
        "title": "Pro Edition: Graph Paper Pad A4 (100 Sheets)",
        "quantity": 2,
        "price": 88
      },
      {
        "product": "prod-10",
        "title": "Heavy Duty Document File Folder with 20 Pockets",
        "quantity": 1,
        "price": 180
      }
    ],
    "totalAmount": 356,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 108",
    "orderDate": "2026-05-04T05:51:00.000Z"
  },
  {
    "id": "ord-1088",
    "userId": "usr-89",
    "orderedProducts": [
      {
        "product": "prod-65",
        "title": "Pro Edition: Anker PowerCore 10000mAh Power Bank",
        "quantity": 1,
        "price": 1429
      },
      {
        "product": "prod-17",
        "title": "Type-C 7-in-1 USB Hub Adapter",
        "quantity": 2,
        "price": 1199
      }
    ],
    "totalAmount": 3827,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-2, Room 209",
    "orderDate": "2026-06-05T06:54:00.000Z"
  },
  {
    "id": "ord-1089",
    "userId": "usr-90",
    "orderedProducts": [
      {
        "product": "prod-68",
        "title": "Pro Edition: SanDisk 128GB Ultra Dual USB Drive",
        "quantity": 2,
        "price": 934
      },
      {
        "product": "prod-24",
        "title": "Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 3,
        "price": 199
      }
    ],
    "totalAmount": 2465,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-3, Room 301",
    "orderDate": "2026-07-06T07:57:00.000Z"
  },
  {
    "id": "ord-1090",
    "userId": "usr-91",
    "orderedProducts": [
      {
        "product": "prod-71",
        "title": "Pro Edition: Full HD 1080p Webcam with Built-in Mic",
        "quantity": 1,
        "price": 1595
      },
      {
        "product": "prod-31",
        "title": "Organic Lavender Hostel Aromatherapy Diffuser",
        "quantity": 1,
        "price": 499
      }
    ],
    "totalAmount": 2094,
    "paymentStatus": "Failed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-4, Room 402",
    "orderDate": "2026-02-07T09:00:00.000Z"
  },
  {
    "id": "ord-1091",
    "userId": "usr-92",
    "orderedProducts": [
      {
        "product": "prod-74",
        "title": "Pro Edition: Nissin Cup Noodles Peri Peri (Pack of 4)",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-38",
        "title": "100% Cotton Single Bedsheet with Pillow Cover",
        "quantity": 2,
        "price": 399
      }
    ],
    "totalAmount": 1236,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-5, Room 103",
    "orderDate": "2026-03-08T10:03:00.000Z"
  },
  {
    "id": "ord-1092",
    "userId": "usr-93",
    "orderedProducts": [
      {
        "product": "prod-77",
        "title": "Pro Edition: MyFitness Peanut Butter Smooth 500g",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-45",
        "title": "Embroidered Campus Baseball Cap",
        "quantity": 3,
        "price": 299
      }
    ],
    "totalAmount": 1226,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Block H-6, Room 204",
    "orderDate": "2026-04-09T11:06:00.000Z"
  },
  {
    "id": "ord-1093",
    "userId": "usr-94",
    "orderedProducts": [
      {
        "product": "prod-80",
        "title": "Pro Edition: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 506
      },
      {
        "product": "prod-52",
        "title": "Pro Edition: Classmate Pulse Notebooks (Pack of 6)",
        "quantity": 1,
        "price": 198
      }
    ],
    "totalAmount": 1210,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-7, Room 305",
    "orderDate": "2026-05-10T12:09:00.000Z"
  },
  {
    "id": "ord-1094",
    "userId": "usr-95",
    "orderedProducts": [
      {
        "product": "prod-83",
        "title": "Pro Edition: Wild Stone CODE Body Spray Deodorant 150ml",
        "quantity": 1,
        "price": 274
      },
      {
        "product": "prod-59",
        "title": "Pro Edition: Magnetic Dry-Erase Whiteboard (1.5x2 ft)",
        "quantity": 2,
        "price": 384
      }
    ],
    "totalAmount": 1042,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-8, Room 406",
    "orderDate": "2026-06-11T13:12:00.000Z"
  },
  {
    "id": "ord-1095",
    "userId": "usr-96",
    "orderedProducts": [
      {
        "product": "prod-86",
        "title": "Pro Edition: Dettol Instant Hand Sanitizer 500ml Pump",
        "quantity": 2,
        "price": 219
      },
      {
        "product": "prod-66",
        "title": "Pro Edition: Boat Rockerz 450 Bluetooth Headphones",
        "quantity": 3,
        "price": 1649
      }
    ],
    "totalAmount": 5385,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-1, Room 107",
    "orderDate": "2026-07-12T14:15:00.000Z"
  },
  {
    "id": "ord-1096",
    "userId": "usr-97",
    "orderedProducts": [
      {
        "product": "prod-89",
        "title": "Pro Edition: Foldable Laundry Mesh Basket",
        "quantity": 1,
        "price": 219
      },
      {
        "product": "prod-73",
        "title": "Pro Edition: Nestle Maggi Masala Noodles (Pack of 12)",
        "quantity": 1,
        "price": 185
      }
    ],
    "totalAmount": 404,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivering",
    "deliveryAddress": "Girls Hostel G-2, Room 208",
    "orderDate": "2026-02-13T03:18:00.000Z"
  },
  {
    "id": "ord-1097",
    "userId": "usr-98",
    "orderedProducts": [
      {
        "product": "prod-92",
        "title": "Pro Edition: Plastic Bathing Bucket 20L + Mug Set",
        "quantity": 2,
        "price": 242
      },
      {
        "product": "prod-80",
        "title": "Pro Edition: Red Bull Energy Drink 250ml (Pack of 4)",
        "quantity": 2,
        "price": 506
      }
    ],
    "totalAmount": 1496,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Girls Hostel G-3, Room 309",
    "orderDate": "2026-03-14T04:21:00.000Z"
  },
  {
    "id": "ord-1098",
    "userId": "usr-99",
    "orderedProducts": [
      {
        "product": "prod-95",
        "title": "Pro Edition: Embroidered Campus Baseball Cap",
        "quantity": 1,
        "price": 329
      },
      {
        "product": "prod-87",
        "title": "Pro Edition: Heavy Duty Metal Mesh Desk Organizer",
        "quantity": 3,
        "price": 329
      }
    ],
    "totalAmount": 1316,
    "paymentStatus": "Completed",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-1, Room 401",
    "orderDate": "2026-04-15T05:24:00.000Z"
  },
  {
    "id": "ord-1099",
    "userId": "usr-100",
    "orderedProducts": [
      {
        "product": "prod-98",
        "title": "Pro Edition: Ergonomic Mesh Office Chair for Study",
        "quantity": 2,
        "price": 1649
      },
      {
        "product": "prod-94",
        "title": "Pro Edition: Campus Edition Stainless Steel Insulated Flask 750ml",
        "quantity": 1,
        "price": 549
      }
    ],
    "totalAmount": 3847,
    "paymentStatus": "Pending",
    "deliveryStatus": "Delivered",
    "deliveryAddress": "Block H-2, Room 102",
    "orderDate": "2026-05-16T06:27:00.000Z"
  },
  {
    "id": "ord-1100",
    "userId": "usr-student-1",
    "orderedProducts": [
      {
        "product": "prod-101",
        "title": "Deluxe Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 1,
        "price": 1559
      },
      {
        "product": "prod-101",
        "title": "Deluxe Pack: Casio FX-991EX Scientific Calculator",
        "quantity": 2,
        "price": 1559
      }
    ],
    "totalAmount": 4677,
    "paymentStatus": "Completed",
    "deliveryStatus": "Ordered",
    "deliveryAddress": "Block H-4, Room 302",
    "orderDate": "2026-06-17T06:30:00.000Z"
  }
];
