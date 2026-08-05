import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  logo: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=200'
  },
  banner: {
    type: String,
    default: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800'
  },
  rating: {
    type: Number,
    default: 4.8,
    min: 0,
    max: 5
  },
  verificationStatus: {
    type: Boolean,
    default: true
  },
  status: {
    type: String,
    enum: ['Active', 'Pending', 'Suspended'],
    default: 'Active'
  }
}, {
  timestamps: true
});

const Store = mongoose.models.Store || mongoose.model('Store', storeSchema);
export default Store;
