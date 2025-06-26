import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Package, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Analytics } from '../../types';

export default function SellerDashboard() {
  const { state, dispatch } = useApp();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);

  useEffect(() => {
    // Simulate analytics calculation
    const sellerProducts = state.products.filter(p => p.sellerId === state.user?.id);
    const sellerOrders = state.orders.filter(order => 
      order.items.some(item => sellerProducts.find(p => p.id === item.productId))
    );
    
    const totalRevenue = sellerOrders.reduce((sum, order) => sum + order.total, 0);
    const monthlyRevenue = sellerOrders
      .filter(order => {
        const orderDate = new Date(order.createdAt);
        const now = new Date();
        return orderDate.getMonth() === now.getMonth() && orderDate.getFullYear() === now.getFullYear();
      })
      .reduce((sum, order) => sum + order.total, 0);

    const mockAnalytics: Analytics = {
      totalOrders: sellerOrders.length,
      totalRevenue,
      monthlyRevenue,
      averageOrderValue: totalRevenue / (sellerOrders.length || 1),
      topProducts: sellerProducts.slice(0, 5).map(product => ({
        product,
        sales: Math.floor(Math.random() * 100) + 10
      })),
      recentOrders: sellerOrders.slice(0, 5)
    };

    setAnalytics(mockAnalytics);
    dispatch({ type: 'SET_ANALYTICS', payload: mockAnalytics });
  }, [state.products, state.orders, state.user?.id, dispatch]);

  if (state.user?.role !== 'seller') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">Only sellers can access this dashboard.</p>
        </div>
      </div>
    );
  }

  const sellerProducts = state.products.filter(p => p.sellerId === state.user?.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your products and track your business performance</p>
        </div>

        {/* Stats Cards */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${analytics.totalRevenue.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalOrders}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${analytics.monthlyRevenue.toFixed(2)}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Products Listed</p>
                  <p className="text-2xl font-bold text-gray-900">{sellerProducts.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Products Management */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Products</h2>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </button>
            </div>

            <div className="space-y-4">
              {sellerProducts.slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                    <p className="text-xs text-gray-500">{product.inStock} in stock</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Orders</h2>
            
            {analytics?.recentOrders.length ? (
              <div className="space-y-4">
                {analytics.recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">
                        {order.items.length} item(s) • ${order.total.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'delivered' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : order.status === 'processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No orders yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Top Products */}
        {analytics?.topProducts.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Selling Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analytics.topProducts.map(({ product, sales }) => (
                <div key={product.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                    <p className="text-xs text-green-600 font-medium">{sales} sold</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}