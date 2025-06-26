import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Clock, Download } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function OrderConfirmation() {
  const { orderId } = useParams();
  const { state } = useApp();

  const order = state.orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Order not found</h2>
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Order Details</h2>
            <span className="text-lg font-medium text-gray-900">#{order.id}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Order Date</h3>
              <p className="text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Total Amount</h3>
              <p className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Payment Method</h3>
              <p className="text-gray-600 capitalize">{order.paymentMethod.replace('-', ' ')}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Status</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="border-t pt-6">
            <h3 className="font-medium text-gray-900 mb-2">Shipping Address</h3>
            <div className="text-gray-600">
              <p>{order.shippingAddress.fullName}</p>
              <p>{order.shippingAddress.street}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
              <p>{order.shippingAddress.country}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">{item.product.brand}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    ${item.product.price} each
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Order Confirmed</p>
                <p className="text-sm text-gray-600">{new Date(order.createdAt).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Processing</p>
                <p className="text-sm text-gray-600">Your order is being prepared</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 opacity-50">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Shipped</p>
                <p className="text-sm text-gray-600">Estimated 2-3 business days</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 opacity-50">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Delivered</p>
                <p className="text-sm text-gray-600">Package delivered to your address</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Download Receipt
          </button>
          <Link
            to="/products"
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Help Section */}
        <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl">
          <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            If you have any questions about your order, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Contact Support
            </Link>
            <Link
              to="/orders"
              className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Track Your Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}