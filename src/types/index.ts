export interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'seller' | 'admin';
  avatar?: string;
  createdAt: string;
  phone?: string;
  address?: Address;
  businessName?: string;
  wishlist?: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: number;
  sellerId: string;
  tags: string[];
  createdAt: string;
  specifications?: Record<string, string>;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: number;
  attributes: Record<string, string>;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: Product;
  selectedVariant?: ProductVariant;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export interface Address {
  fullName: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpful?: number;
  images?: string[];
}

export interface Analytics {
  totalOrders: number;
  totalRevenue: number;
  monthlyRevenue: number;
  averageOrderValue: number;
  topProducts: Array<{
    product: Product;
    sales: number;
  }>;
  recentOrders: Order[];
  customerGrowth?: number;
  conversionRate?: number;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'order' | 'promotion' | 'system';
  read: boolean;
  createdAt: string;
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  validFrom: string;
  validTo: string;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
}