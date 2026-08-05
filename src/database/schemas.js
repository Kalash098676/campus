/**
 * CampusHub Database Collections Schemas & Specifications
 * 
 * Collections:
 * 1. Products Collection
 * 2. Categories Collection
 * 3. Users Collection
 * 4. Stores Collection
 * 5. Orders Collection
 */

export const SCHEMAS = {
  // 1. PRODUCTS COLLECTION
  Product: {
    title: { type: 'String', required: true },
    category: { type: 'String', required: true }, // e.g. "electronics", "study"
    categoryLabel: { type: 'String', required: true }, // e.g. "Electronics & Accessories"
    price: { type: 'Number', required: true },
    originalPrice: { type: 'Number', default: 0 },
    rating: { type: 'Number', default: 4.5 },
    reviewsCount: { type: 'Number', default: 0 },
    deliveryTime: { type: 'String', default: 'Delivery in 1 hr' },
    image: { type: 'String', required: true },
    stock: { type: 'Number', default: 10 },
    store: { type: 'String', ref: 'Store' }, // Store ID or store name
    createdAt: { type: 'Date', default: () => new Date().toISOString() }
  },

  // 2. CATEGORIES COLLECTION
  Category: {
    key: { type: 'String', required: true, unique: true },
    name: { type: 'String', required: true },
    icon: { type: 'String', required: true },
    isActive: { type: 'Boolean', default: true }
  },

  // 3. USERS COLLECTION
  User: {
    name: { type: 'String', required: true },
    email: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true }, // Encrypted
    phone: { type: 'String', default: '' },
    role: { type: 'String', enum: ['Student', 'Seller', 'Admin'], default: 'Student' },
    hostelBlock: { type: 'String', default: 'H-4' },
    roomNumber: { type: 'String', default: '302' },
    createdAt: { type: 'Date', default: () => new Date().toISOString() }
  },

  // 4. STORES COLLECTION
  Store: {
    storeName: { type: 'String', required: true },
    description: { type: 'String', default: '' },
    sellerId: { type: 'String', ref: 'User', required: true },
    logo: { type: 'String', default: '' },
    banner: { type: 'String', default: '' },
    rating: { type: 'Number', default: 4.8 },
    verificationStatus: { type: 'Boolean', default: true },
    status: { type: 'String', enum: ['Active', 'Pending', 'Suspended'], default: 'Active' }
  },

  // 5. ORDERS COLLECTION
  Order: {
    userId: { type: 'String', ref: 'User', required: true },
    orderedProducts: {
      type: 'Array',
      items: {
        product: { type: 'String', ref: 'Product', required: true },
        quantity: { type: 'Number', required: true },
        price: { type: 'Number', required: true }
      }
    },
    totalAmount: { type: 'Number', required: true },
    paymentStatus: { type: 'String', enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    deliveryStatus: { type: 'String', enum: ['Ordered', 'Delivering', 'Delivered'], default: 'Ordered' },
    deliveryAddress: { type: 'String', required: true },
    orderDate: { type: 'Date', default: () => new Date().toISOString() }
  }
};
