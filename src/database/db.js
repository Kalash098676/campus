/**
 * CampusHub Database Manager (Client-side DB Engine)
 * Manages the 5 CampusHub Collections with persistent state & clean API.
 */

import {
  INITIAL_PRODUCTS,
  INITIAL_CATEGORIES,
  INITIAL_USERS,
  INITIAL_STORES,
  INITIAL_ORDERS
} from './seedData.js';

class CampusHubDB {
  constructor() {
    this.STORAGE_KEYS = {
      PRODUCTS: 'campushub_db_products',
      CATEGORIES: 'campushub_db_categories',
      USERS: 'campushub_db_users',
      STORES: 'campushub_db_stores',
      ORDERS: 'campushub_db_orders'
    };
    this.initDatabase();
  }

  /**
   * Initializes collections from LocalStorage or loads default seed data
   */
  initDatabase() {
    if (!localStorage.getItem(this.STORAGE_KEYS.CATEGORIES)) {
      localStorage.setItem(this.STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    }
    if (!localStorage.getItem(this.STORAGE_KEYS.PRODUCTS)) {
      localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    }
    if (!localStorage.getItem(this.STORAGE_KEYS.USERS)) {
      localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
    }
    if (!localStorage.getItem(this.STORAGE_KEYS.STORES)) {
      localStorage.setItem(this.STORAGE_KEYS.STORES, JSON.stringify(INITIAL_STORES));
    }
    if (!localStorage.getItem(this.STORAGE_KEYS.ORDERS)) {
      localStorage.setItem(this.STORAGE_KEYS.ORDERS, JSON.stringify(INITIAL_ORDERS));
    }
  }

  // --- COLLECTION GETTERS & SETTERS ---
  _getCollection(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
      console.error(`Error loading collection ${key}:`, e);
      return [];
    }
  }

  _saveCollection(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error saving collection ${key}:`, e);
    }
  }

  // -------------------------------------------------------------
  // 1. PRODUCTS COLLECTION API
  // -------------------------------------------------------------
  products = {
    getAll: () => this._getCollection(this.STORAGE_KEYS.PRODUCTS),
    getById: (id) => this._getCollection(this.STORAGE_KEYS.PRODUCTS).find(p => p.id === id || p._id === id),
    getByCategory: (categoryKey) => {
      const all = this._getCollection(this.STORAGE_KEYS.PRODUCTS);
      if (!categoryKey || categoryKey === 'all') return all;
      return all.filter(p => p.category === categoryKey);
    },
    create: (productData) => {
      const products = this._getCollection(this.STORAGE_KEYS.PRODUCTS);
      const newProduct = {
        id: `prod-${Date.now()}`,
        rating: 4.5,
        reviewsCount: 0,
        deliveryTime: 'Delivery in 1 hr',
        stock: 10,
        createdAt: new Date().toISOString(),
        ...productData
      };
      products.unshift(newProduct);
      this._saveCollection(this.STORAGE_KEYS.PRODUCTS, products);
      return newProduct;
    },
    update: (id, updates) => {
      const products = this._getCollection(this.STORAGE_KEYS.PRODUCTS);
      const index = products.findIndex(p => p.id === id || p._id === id);
      if (index !== -1) {
        products[index] = { ...products[index], ...updates };
        this._saveCollection(this.STORAGE_KEYS.PRODUCTS, products);
        return products[index];
      }
      return null;
    },
    delete: (id) => {
      const products = this._getCollection(this.STORAGE_KEYS.PRODUCTS);
      const filtered = products.filter(p => p.id !== id && p._id !== id);
      this._saveCollection(this.STORAGE_KEYS.PRODUCTS, filtered);
      return true;
    }
  };

  // -------------------------------------------------------------
  // 2. CATEGORIES COLLECTION API
  // -------------------------------------------------------------
  categories = {
    getAll: () => this._getCollection(this.STORAGE_KEYS.CATEGORIES),
    getActive: () => this._getCollection(this.STORAGE_KEYS.CATEGORIES).filter(c => c.isActive),
    create: (categoryData) => {
      const categories = this._getCollection(this.STORAGE_KEYS.CATEGORIES);
      const newCategory = {
        id: `cat-${Date.now()}`,
        isActive: true,
        ...categoryData
      };
      categories.push(newCategory);
      this._saveCollection(this.STORAGE_KEYS.CATEGORIES, categories);
      return newCategory;
    }
  };

  // -------------------------------------------------------------
  // 3. USERS COLLECTION API
  // -------------------------------------------------------------
  users = {
    getAll: () => this._getCollection(this.STORAGE_KEYS.USERS),
    getById: (id) => this._getCollection(this.STORAGE_KEYS.USERS).find(u => u.id === id || u._id === id),
    getByEmail: (email) => this._getCollection(this.STORAGE_KEYS.USERS).find(u => u.email.toLowerCase() === email.toLowerCase()),
    register: (userData) => {
      const users = this._getCollection(this.STORAGE_KEYS.USERS);
      const existing = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
      if (existing) {
        throw new Error('User with this email already exists.');
      }
      const newUser = {
        id: `usr-${Date.now()}`,
        role: 'Student',
        hostelBlock: 'Block H-4',
        roomNumber: '302',
        createdAt: new Date().toISOString(),
        ...userData
      };
      users.push(newUser);
      this._saveCollection(this.STORAGE_KEYS.USERS, users);
      return newUser;
    },
    authenticate: (email, password) => {
      const users = this._getCollection(this.STORAGE_KEYS.USERS);
      return users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    }
  };

  // -------------------------------------------------------------
  // 4. STORES COLLECTION API
  // -------------------------------------------------------------
  stores = {
    getAll: () => this._getCollection(this.STORAGE_KEYS.STORES),
    getActive: () => this._getCollection(this.STORAGE_KEYS.STORES).filter(s => s.status === 'Active'),
    create: (storeData) => {
      const stores = this._getCollection(this.STORAGE_KEYS.STORES);
      const newStore = {
        id: `str-${Date.now()}`,
        rating: 4.8,
        verificationStatus: true,
        status: 'Active',
        ...storeData
      };
      stores.push(newStore);
      this._saveCollection(this.STORAGE_KEYS.STORES, stores);
      return newStore;
    }
  };

  // -------------------------------------------------------------
  // 5. ORDERS COLLECTION API
  // -------------------------------------------------------------
  orders = {
    getAll: () => this._getCollection(this.STORAGE_KEYS.ORDERS),
    getByUserId: (userId) => this._getCollection(this.STORAGE_KEYS.ORDERS).filter(o => o.userId === userId),
    create: (orderData) => {
      const orders = this._getCollection(this.STORAGE_KEYS.ORDERS);
      const newOrder = {
        id: `ord-${Date.now()}`,
        paymentStatus: 'Pending',
        deliveryStatus: 'Ordered',
        orderDate: new Date().toISOString(),
        ...orderData
      };
      orders.unshift(newOrder);
      this._saveCollection(this.STORAGE_KEYS.ORDERS, orders);
      return newOrder;
    },
    updateDeliveryStatus: (id, status) => {
      const orders = this._getCollection(this.STORAGE_KEYS.ORDERS);
      const index = orders.findIndex(o => o.id === id || o._id === id);
      if (index !== -1) {
        orders[index].deliveryStatus = status;
        this._saveCollection(this.STORAGE_KEYS.ORDERS, orders);
        return orders[index];
      }
      return null;
    }
  };

  /**
   * Resets database to default seed state
   */
  resetDatabase() {
    localStorage.setItem(this.STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    localStorage.setItem(this.STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
    localStorage.setItem(this.STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
    localStorage.setItem(this.STORAGE_KEYS.STORES, JSON.stringify(INITIAL_STORES));
    localStorage.setItem(this.STORAGE_KEYS.ORDERS, JSON.stringify(INITIAL_ORDERS));
    console.log('Database reset to initial seed state.');
  }
}

export const db = new CampusHubDB();
export default db;
