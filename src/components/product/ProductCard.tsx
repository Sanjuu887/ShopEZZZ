import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye, Zap } from 'lucide-react';
import { Product } from '../../types';
import { useApp } from '../../context/AppContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { dispatch } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity: 1 } });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {discountPercentage > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                >
                  {discountPercentage}% OFF
                </motion.div>
              )}
              {product.inStock < 10 && product.inStock > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                >
                  <Zap className="w-3 h-3" />
                  Only {product.inStock} left
                </motion.div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
              >
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-blue-50 transition-colors"
              >
                <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500" />
              </motion.button>
            </div>
            
            {/* Quick Add Button */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-3 right-3 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-xl"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="mb-3">
              <p className="text-sm text-blue-600 font-medium mb-1">{product.brand}</p>
              <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                {product.name}
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-lg">
                <Star className="w-3 h-3 text-green-600 fill-current mr-1" />
                <span className="text-xs font-semibold text-green-700">
                  {product.rating}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviewCount.toLocaleString('en-IN')} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xl font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between">
              {product.inStock > 0 ? (
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                  In Stock
                </span>
              ) : (
                <span className="text-xs text-red-600 font-medium bg-red-50 px-2 py-1 rounded-full">
                  Out of Stock
                </span>
              )}
              
              {/* Free Delivery Badge */}
              {product.price > 500 && (
                <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
                  Free Delivery
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}