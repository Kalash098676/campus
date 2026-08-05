import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import Category from './models/Category.js';
import User from './models/User.js';
import Store from './models/Store.js';
import Product from './models/Product.js';
import Order from './models/Order.js';

import {
  INITIAL_CATEGORIES,
  INITIAL_STORES,
  INITIAL_USERS,
  INITIAL_PRODUCTS,
  INITIAL_ORDERS
} from '../src/database/seedData.js';

dotenv.config();

const seedMongoDB = async () => {
  try {
    await connectDB();

    console.log('Clearing existing collections...');
    await Category.deleteMany({});
    await User.deleteMany({});
    await Store.deleteMany({});
    await Product.deleteMany({});
    await Order.deleteMany({});

    console.log(`1. Seeding ${INITIAL_CATEGORIES.length} Categories...`);
    await Category.insertMany(INITIAL_CATEGORIES);

    console.log(`2. Seeding ${INITIAL_USERS.length} Users...`);
    const userDocs = await User.insertMany(INITIAL_USERS.map(u => ({
      name: u.name,
      email: u.email,
      password: u.password,
      phone: u.phone,
      role: u.role,
      hostelBlock: u.hostelBlock,
      roomNumber: u.roomNumber,
      createdAt: u.createdAt
    })));

    const sellerDoc = userDocs.find(u => u.role === 'Seller') || userDocs[0];
    const studentDoc = userDocs.find(u => u.role === 'Student') || userDocs[0];

    console.log(`3. Seeding ${INITIAL_STORES.length} Stores...`);
    const storeDocs = await Store.insertMany(INITIAL_STORES.map(s => ({
      storeName: s.storeName,
      description: s.description,
      sellerId: sellerDoc._id,
      logo: s.logo,
      banner: s.banner,
      rating: s.rating,
      verificationStatus: s.verificationStatus,
      status: s.status
    })));

    const defaultStore = storeDocs[0];

    console.log(`4. Seeding ${INITIAL_PRODUCTS.length} Products...`);
    const productDocs = await Product.insertMany(INITIAL_PRODUCTS.map(p => ({
      title: p.title,
      category: p.category,
      categoryLabel: p.categoryLabel,
      price: p.price,
      originalPrice: p.originalPrice,
      rating: p.rating,
      reviewsCount: p.reviewsCount,
      deliveryTime: p.deliveryTime,
      image: p.image,
      stock: p.stock,
      store: defaultStore._id,
      createdAt: p.createdAt
    })));

    console.log(`5. Seeding ${INITIAL_ORDERS.length} Orders...`);
    const orderDocs = await Order.insertMany(INITIAL_ORDERS.map(o => ({
      userId: studentDoc._id,
      orderedProducts: o.orderedProducts.map(item => ({
        product: productDocs[0]._id,
        quantity: item.quantity,
        price: item.price
      })),
      totalAmount: o.totalAmount,
      paymentStatus: o.paymentStatus,
      deliveryStatus: o.deliveryStatus,
      deliveryAddress: o.deliveryAddress,
      orderDate: o.orderDate
    })));

    console.log(`\n✅ MongoDB successfully populated with ${productDocs.length} Products, ${storeDocs.length} Stores, ${userDocs.length} Users, ${orderDocs.length} Orders!`);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding MongoDB:', error);
    process.exit(1);
  }
};

seedMongoDB();
