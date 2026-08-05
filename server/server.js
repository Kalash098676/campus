import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './config/db.js';

import Product from './models/Product.js';
import Category from './models/Category.js';
import User from './models/User.js';
import Store from './models/Store.js';
import Order from './models/Order.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION HEALTH CHECK API
app.get('/api/health', async (req, res) => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const dbState = mongoose.connection.readyState;
  
  if (dbState === 1) {
    const productCount = await Product.countDocuments();
    const userCount = await User.countDocuments();
    const storeCount = await Store.countDocuments();
    const categoryCount = await Category.countDocuments();
    const orderCount = await Order.countDocuments();

    return res.json({
      status: 'OK',
      database: mongoose.connection.name,
      host: mongoose.connection.host,
      connectionStatus: states[dbState],
      collections: {
        products: productCount,
        users: userCount,
        stores: storeCount,
        categories: categoryCount,
        orders: orderCount
      }
    });
  }

  res.status(500).json({
    status: 'ERROR',
    connectionStatus: states[dbState] || 'unknown'
  });
});

// API Routes

// 1. PRODUCTS COLLECTION API
app.get('/api/products', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter).populate('store', 'storeName rating status');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 2. CATEGORIES COLLECTION API
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/categories', async (req, res) => {
  try {
    const category = new Category(req.body);
    const saved = await category.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 3. USERS COLLECTION API
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/users/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json({
      _id: saved._id,
      name: saved.name,
      email: saved.email,
      role: saved.role,
      hostelBlock: saved.hostelBlock,
      roomNumber: saved.roomNumber
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 4. STORES COLLECTION API
app.get('/api/stores', async (req, res) => {
  try {
    const stores = await Store.find({ status: 'Active' }).populate('sellerId', 'name email phone');
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/stores', async (req, res) => {
  try {
    const store = new Store(req.body);
    const saved = await store.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 5. ORDERS COLLECTION API
app.get('/api/orders', async (req, res) => {
  try {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};
    const orders = await Order.find(filter)
      .populate('userId', 'name email hostelBlock roomNumber')
      .populate('orderedProducts.product', 'title price image');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`CampusHub Server running on port ${PORT}`));

