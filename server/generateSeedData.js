import fs from 'fs';
import path from 'path';

// Category Definitions
const CATEGORIES = [
  { key: 'study', name: '📚 Study Essentials', icon: '📚', isActive: true },
  { key: 'electronics', name: '💻 Electronics & Accessories', icon: '💻', isActive: true },
  { key: 'food', name: '🍜 Food & Snacks', icon: '🍜', isActive: true },
  { key: 'personal', name: '🧴 Personal Care', icon: '🧴', isActive: true },
  { key: 'hostel', name: '🛏 Hostel Essentials', icon: '🛏', isActive: true },
  { key: 'merchandise', name: '🎓 College Merchandise', icon: '🎓', isActive: true },
  { key: 'marketplace', name: '🔄 Second-Hand Market', icon: '🔄', isActive: true },
  { key: 'services', name: '🛠 Campus Services', icon: '🛠', isActive: true },
  { key: 'combos', name: '📦 Student Combo Packs', icon: '📦', isActive: true }
];

// Hostel Blocks & Rooms
const BLOCKS = ['Block H-1', 'Block H-2', 'Block H-3', 'Block H-4', 'Block H-5', 'Block H-6', 'Block H-7', 'Block H-8', 'Block H-9', 'Block H-10', 'Girls Hostel G-1', 'Girls Hostel G-2', 'Girls Hostel G-3', 'Girls Hostel G-4', 'Girls Hostel G-5'];
const FIRST_NAMES = ['Aarav', 'Ananya', 'Rohan', 'Priya', 'Aditya', 'Sneha', 'Rahul', 'Kavya', 'Vikram', 'Neha', 'Siddharth', 'Meera', 'Dev', 'Ishita', 'Arjun', 'Riya', 'Karan', 'Tanvi', 'Varun', 'Pooja', 'Yash', 'Shruti', 'Kabir', 'Simran', 'Nikhil', 'Diya', 'Amit', 'Divya', 'Gaurav', 'Anushka', 'Manish', 'Ritu', 'Sameer', 'Nisha', 'Tanya', 'Abhinav', 'Shweta', 'Pranav', 'Bhavna', 'Tarun'];
const LAST_NAMES = ['Sharma', 'Verma', 'Patel', 'Gupta', 'Singh', 'Kumar', 'Reddy', 'Nair', 'Joshi', 'Chopra', 'Malhotra', 'Rao', 'Bhat', 'Deshmukh', 'Mehta', 'Kulkarni', 'Sen', 'Dutta', 'Saxena', 'Agrawal', 'Choudhury', 'Kapoor', 'Bhasin', 'Trivedi', 'Rathore'];

// High Quality Real Unsplash Store Logos & Banners
const STORE_LOGOS = [
  'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200'
];

const STORE_BANNERS = [
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800'
];

// Comprehensive Product Data Templates with Real Product Images
const PRODUCT_TEMPLATES = [
  // Study Essentials
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Casio FX-991EX Scientific Calculator', price: 1299, original: 1599, img: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Classmate Pulse Notebooks (Pack of 6)', price: 180, original: 240, img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Uniball Eye Micro 0.5 Blue Pens (Pack of 5)', price: 299, original: 350, img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Faber-Castell Pastel Highlighters Set of 4', price: 160, original: 200, img: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Hardbound Grid-Line Engineering Journal', price: 120, original: 150, img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Post-it Super Sticky Notes Color Pack', price: 199, original: 250, img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Camlin Geometry Box with Metal Compass', price: 150, original: 180, img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'A3 Size Engineering Drawing Board', price: 499, original: 699, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Magnetic Dry-Erase Whiteboard (1.5x2 ft)', price: 349, original: 499, img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Heavy Duty Document File Folder with 20 Pockets', price: 180, original: 250, img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'White Cotton Unisex Lab Coat (Size L)', price: 350, original: 450, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600' },
  { category: 'study', categoryLabel: 'Study Essentials', name: 'Graph Paper Pad A4 (100 Sheets)', price: 80, original: 120, img: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?auto=format&fit=crop&q=80&w=600' },

  // Electronics & Accessories
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Logitech M220 Silent Wireless Mouse', price: 699, original: 999, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Ergonomic Aluminum Foldable Laptop Stand', price: 799, original: 999, img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Anker PowerCore 10000mAh Power Bank', price: 1299, original: 1799, img: 'https://images.unsplash.com/photo-1609592806453-69b1896ec37c?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Boat Rockerz 450 Bluetooth Headphones', price: 1499, original: 2990, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Type-C 7-in-1 USB Hub Adapter', price: 1199, original: 1699, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'SanDisk 128GB Ultra Dual USB Drive', price: 849, original: 1200, img: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Wired Gaming Keyboard with RGB Backlight', price: 999, original: 1499, img: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Portronics 6-Socket Surge Protector Power Strip', price: 499, original: 799, img: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Full HD 1080p Webcam with Built-in Mic', price: 1450, original: 2200, img: 'https://images.unsplash.com/photo-1602758153401-44754320f666?auto=format&fit=crop&q=80&w=600' },
  { category: 'electronics', categoryLabel: 'Electronics & Accessories', name: 'Laptop Cooling Pad with 4 Quiet LED Fans', price: 899, original: 1299, img: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=600' },

  // Food & Snacks
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Nestle Maggi Masala Noodles (Pack of 12)', price: 168, original: 180, img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Nissin Cup Noodles Peri Peri (Pack of 4)', price: 199, original: 240, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Nescafe Classic Instant Coffee 200g Jar', price: 349, original: 420, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Lays Potato Chips Magic Masala 50g (Pack of 6)', price: 120, original: 120, img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'MyFitness Peanut Butter Smooth 500g', price: 299, original: 399, img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Amul Butter 500g Pack', price: 275, original: 285, img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Dark Fantasy Choco Fills Biscuits (Pack of 3)', price: 150, original: 180, img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600' },
  { category: 'food', categoryLabel: 'Food & Snacks', name: 'Red Bull Energy Drink 250ml (Pack of 4)', price: 460, original: 500, img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&q=80&w=600' },

  // Personal Care
  { category: 'personal', categoryLabel: 'Personal Care', name: 'Organic Lavender Hostel Aromatherapy Diffuser', price: 499, original: 699, img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600' },
  { category: 'personal', categoryLabel: 'Personal Care', name: 'Nivea Men Dark Spot Reduction Face Wash 100g', price: 180, original: 220, img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600' },
  { category: 'personal', categoryLabel: 'Personal Care', name: 'Wild Stone CODE Body Spray Deodorant 150ml', price: 249, original: 299, img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600' },
  { category: 'personal', categoryLabel: 'Personal Care', name: 'Colgate MaxFresh Toothpaste (Pack of 2)', price: 175, original: 210, img: 'https://images.unsplash.com/photo-1559599141-3816a0843111?auto=format&fit=crop&q=80&w=600' },
  { category: 'personal', categoryLabel: 'Personal Care', name: 'Gillette Mach3 Turbo Razor with 2 Blades', price: 349, original: 425, img: 'https://images.unsplash.com/photo-1613679021487-22485458f2f6?auto=format&fit=crop&q=80&w=600' },
  { category: 'personal', categoryLabel: 'Personal Care', name: 'Dettol Instant Hand Sanitizer 500ml Pump', price: 199, original: 250, img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600' },

  // Hostel Essentials
  { category: 'hostel', categoryLabel: 'Hostel Essentials', name: 'Heavy Duty Metal Mesh Desk Organizer', price: 299, original: 399, img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600' },
  { category: 'hostel', categoryLabel: 'Hostel Essentials', name: '100% Cotton Single Bedsheet with Pillow Cover', price: 399, original: 599, img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600' },
  { category: 'hostel', categoryLabel: 'Hostel Essentials', name: 'Foldable Laundry Mesh Basket', price: 199, original: 299, img: 'https://images.unsplash.com/photo-1595341888016-a392efc50346?auto=format&fit=crop&q=80&w=600' },
  { category: 'hostel', categoryLabel: 'Hostel Essentials', name: 'Godrej Nav-Tal 7 Levers Brass Padlock', price: 249, original: 320, img: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=600' },
  { category: 'hostel', categoryLabel: 'Hostel Essentials', name: 'Rechargeable LED Study Lamp with Touch Control', price: 499, original: 799, img: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600' },
  { category: 'hostel', categoryLabel: 'Hostel Essentials', name: 'Plastic Bathing Bucket 20L + Mug Set', price: 220, original: 299, img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600' },

  // Merchandise
  { category: 'merchandise', categoryLabel: 'College Merchandise', name: 'Official CampusHub Fleece Varsity Hoodie', price: 1299, original: 1799, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600' },
  { category: 'merchandise', categoryLabel: 'College Merchandise', name: 'Campus Edition Stainless Steel Insulated Flask 750ml', price: 499, original: 699, img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600' },
  { category: 'merchandise', categoryLabel: 'College Merchandise', name: 'Embroidered Campus Baseball Cap', price: 299, original: 399, img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600' },

  // Second-Hand Market
  { category: 'marketplace', categoryLabel: 'Second-Hand Market', name: 'Pre-owned Core i5 11th Gen Laptop (16GB/512GB)', price: 24999, original: 55000, img: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?auto=format&fit=crop&q=80&w=600' },
  { category: 'marketplace', categoryLabel: 'Second-Hand Market', name: 'Hero Sprint 21-Speed Mountain Bicycle', price: 3499, original: 8500, img: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=600' },
  { category: 'marketplace', categoryLabel: 'Second-Hand Market', name: 'Ergonomic Mesh Office Chair for Study', price: 1499, original: 3500, img: 'https://images.unsplash.com/photo-1580481072645-022f9a6d1209?auto=format&fit=crop&q=80&w=600' },

  // Services
  { category: 'services', categoryLabel: 'Campus Services', name: 'Full Laptop Deep Cleaning & Thermal Paste Service', price: 299, original: 499, img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=600' },
  { category: 'services', categoryLabel: 'Campus Services', name: 'Hostel Room Deep Sanitization & Cleaning', price: 199, original: 349, img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600' }
];

function generateLargeSeedData() {
  console.log('Generating high-density dataset for CampusHub (50 Stores, 500 Products, 200 Users, 300 Orders)...');

  // 1. Categories
  const categories = CATEGORIES;

  // 2. Stores (50 Stores)
  const stores = [];
  const storePrefixes = ['Campus', 'Hostel', 'Student', 'Academic', 'Express', 'Elite', 'Metro', 'Prime', 'Central', 'Global'];
  const storeTypes = ['Mart', 'Store', 'Canteen', 'Tech Hub', 'Stationery', 'Boutique', 'Outlet', 'Supply Co.', 'Corner', 'Market'];

  for (let i = 1; i <= 50; i++) {
    const logoUrl = STORE_LOGOS[(i - 1) % STORE_LOGOS.length];
    const bannerUrl = STORE_BANNERS[(i - 1) % STORE_BANNERS.length];
    const catName = CATEGORIES[i % CATEGORIES.length].name.split(' ')[1];
    const prefix = storePrefixes[i % storePrefixes.length];
    const type = storeTypes[i % storeTypes.length];

    stores.push({
      id: `str-${i}`,
      storeName: i === 1 ? 'Campus Mart Express' : (i === 2 ? 'Hostel Night Canteen' : (i === 3 ? 'TechHub Accessories & Repairs' : `${prefix} ${type} #${i} - ${catName}`)),
      description: `Official verified campus store providing high quality ${catName.toLowerCase()} and express hostel room delivery.`,
      sellerId: `usr-seller-${(i % 25) + 1}`,
      logo: logoUrl,
      banner: bannerUrl,
      rating: +(4.1 + (i % 9) * 0.1).toFixed(1),
      verificationStatus: i % 5 !== 0,
      status: i % 15 === 0 ? 'Pending' : 'Active'
    });
  }

  // 3. Users (200 Users)
  const users = [
    { id: 'usr-student-1', name: 'Alex Johnson', email: 'alex.student@campushub.edu', password: '$2a$10$encryptedPasswordHashStudent123', phone: '+91 98765 43210', role: 'Student', hostelBlock: 'Block H-4', roomNumber: '302', createdAt: '2026-01-15T08:00:00.000Z' },
    { id: 'usr-seller-1', name: 'Campus Tech Supplies', email: 'seller.tech@campushub.edu', password: '$2a$10$encryptedPasswordHashSeller456', phone: '+91 98123 45678', role: 'Seller', hostelBlock: 'Market Complex', roomNumber: 'Shop #12', createdAt: '2026-01-10T10:00:00.000Z' },
    { id: 'usr-admin-1', name: 'Super Admin', email: 'admin@campushub.edu', password: '$2a$10$encryptedPasswordHashAdmin789', phone: '+91 90000 00000', role: 'Admin', hostelBlock: 'Admin Block', roomNumber: 'A-101', createdAt: '2026-01-01T00:00:00.000Z' }
  ];

  for (let i = 4; i <= 200; i++) {
    const fname = FIRST_NAMES[i % FIRST_NAMES.length];
    const lname = LAST_NAMES[(i * 3) % LAST_NAMES.length];
    const block = BLOCKS[i % BLOCKS.length];
    const room = `${(i % 5) + 1}0${(i % 9) + 1}`;
    const role = i <= 30 ? 'Seller' : (i <= 33 ? 'Admin' : 'Student');
    users.push({
      id: `usr-${i}`,
      name: `${fname} ${lname}`,
      email: `${fname.toLowerCase()}.${lname.toLowerCase()}${i}@campushub.edu`,
      password: `$2a$10$encryptedHashPasswordUser_${i}`,
      phone: `+91 ${9800000000 + i * 1234}`,
      role: role,
      hostelBlock: block,
      roomNumber: room,
      createdAt: new Date(2026, 0, (i % 28) + 1, 10, i % 60).toISOString()
    });
  }

  // 4. Products (500 Products)
  const products = [];
  let prodIdx = 1;
  const prefixes = ['', 'Pro Edition: ', 'Deluxe Pack: ', 'Campus Special: ', 'Premium Series: ', 'Student Pack: ', 'Ultra Edition: ', 'Bundle Pack: ', 'Special Edition: ', 'Mega Pack: '];

  for (let round = 0; round < 10; round++) {
    PRODUCT_TEMPLATES.forEach((tmpl) => {
      if (prodIdx > 500) return;
      const storeObj = stores[(prodIdx % stores.length)];
      const prefix = prefixes[round % prefixes.length];
      const priceVariation = Math.round(tmpl.price * (1 + (round * 0.05)));
      const originalVariation = Math.round(tmpl.original * (1 + (round * 0.05)));

      products.push({
        id: `prod-${prodIdx}`,
        title: `${prefix}${tmpl.name}`,
        category: tmpl.category,
        categoryLabel: tmpl.categoryLabel,
        price: priceVariation,
        originalPrice: originalVariation,
        rating: +(4.0 + ((prodIdx * 3) % 10) * 0.1).toFixed(1),
        reviewsCount: 10 + (prodIdx * 7) % 450,
        deliveryTime: prodIdx % 3 === 0 ? 'Delivery in 30 mins' : (prodIdx % 2 === 0 ? 'Delivery in 1 hr' : 'Delivery today'),
        image: tmpl.img,
        stock: 5 + (prodIdx * 13) % 100,
        store: storeObj.storeName,
        createdAt: new Date(2026, 1, (prodIdx % 25) + 1, (prodIdx % 12) + 8).toISOString()
      });
      prodIdx++;
    });
  }

  // 5. Orders (300 Orders)
  const orders = [];
  for (let i = 1; i <= 300; i++) {
    const userObj = users[i % users.length];
    const item1 = products[(i * 3) % products.length];
    const item2 = products[(i * 7) % products.length];
    const q1 = (i % 2) + 1;
    const q2 = (i % 3) + 1;
    const total = (item1.price * q1) + (item2.price * q2);
    
    orders.push({
      id: `ord-${1000 + i}`,
      userId: userObj.id,
      orderedProducts: [
        {
          product: item1.id,
          title: item1.title,
          quantity: q1,
          price: item1.price
        },
        {
          product: item2.id,
          title: item2.title,
          quantity: q2,
          price: item2.price
        }
      ],
      totalAmount: total,
      paymentStatus: i % 15 === 0 ? 'Failed' : (i % 3 === 0 ? 'Pending' : 'Completed'),
      deliveryStatus: i % 10 === 0 ? 'Ordered' : (i % 4 === 0 ? 'Delivering' : 'Delivered'),
      deliveryAddress: `${userObj.hostelBlock}, Room ${userObj.roomNumber}`,
      orderDate: new Date(2026, 1 + (i % 6), (i % 28) + 1, (i % 12) + 8, (i * 3) % 60).toISOString()
    });
  }

  console.log(`Generated Statistics:
- Categories: ${categories.length}
- Stores: ${stores.length}
- Users: ${users.length}
- Products: ${products.length}
- Orders: ${orders.length}
`);

  const seedFileContent = `/**
 * CampusHub Expanded Seed Data
 * Total Entries: ${products.length} Products, ${stores.length} Stores, ${users.length} Users, ${orders.length} Orders
 */

export const INITIAL_CATEGORIES = ${JSON.stringify(categories, null, 2)};

export const INITIAL_STORES = ${JSON.stringify(stores, null, 2)};

export const INITIAL_USERS = ${JSON.stringify(users, null, 2)};

export const INITIAL_PRODUCTS = ${JSON.stringify(products, null, 2)};

export const INITIAL_ORDERS = ${JSON.stringify(orders, null, 2)};
`;

  const outputPath = path.join(process.cwd(), 'src', 'database', 'seedData.js');
  fs.writeFileSync(outputPath, seedFileContent, 'utf-8');

  const lineCount = seedFileContent.split('\n').length;
  console.log(`Successfully written seed file to ${outputPath}. Total Lines: ${lineCount}`);
}

generateLargeSeedData();
