import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, Shield, Headphones, RefreshCw, Star, Zap, Gift, Users } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  
  const featuredProducts = state.products.slice(0, 8);
  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=500',
      count: '2000+ products',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Fashion',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
      count: '1500+ products',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Home & Kitchen',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
      count: '3000+ products',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Books',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
      count: '800+ products',
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const offers = [
    {
      title: 'Electronics Sale',
      description: 'Up to 70% off on smartphones, laptops & more',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-600 to-purple-700',
      category: 'Electronics'
    },
    {
      title: 'Fashion Week',
      description: 'Trending styles at unbeatable prices',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-pink-600 to-rose-700',
      category: 'Fashion'
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: categoryName });
    navigate('/products');
  };

  const handleOfferClick = (category: string) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
    navigate('/products');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-white/5 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-2 text-yellow-400"
                >
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-sm font-medium">India's #1 E-commerce Platform</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Shop Smart,
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Save More
                  </span>
                  <span className="block">with ShopEZ</span>
                </h1>
                
                <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                  Discover millions of products at the best prices. From electronics to fashion, 
                  we've got everything you need with lightning-fast delivery across India.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 shadow-lg group"
                  >
                    Start Shopping
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                {!state.user && (
                  <Link to="/signup">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
                    >
                      Join as Seller
                    </motion.button>
                  </Link>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: '10M+', label: 'Happy Customers' },
                  { number: '50K+', label: 'Products' },
                  { number: '4.8★', label: 'App Rating' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotateY: [0, 10, 0],
                    rotateX: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative z-10"
                >
                  <img
                    src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Shopping"
                    className="rounded-3xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-yellow-500" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">Fast Delivery</div>
                      <div className="text-xs text-gray-600">Same day delivery</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2">
                    <Gift className="w-6 h-6 text-red-500" />
                    <div>
                      <div className="text-sm font-bold text-gray-900">Best Offers</div>
                      <div className="text-xs text-gray-600">Up to 70% off</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ShopEZ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best of online shopping with our premium features and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: 'Free Delivery',
                description: 'Free shipping on orders above ₹500',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Shield,
                title: '100% Secure',
                description: 'Your payments are safe with us',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Round-the-clock customer service',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: RefreshCw,
                title: 'Easy Returns',
                description: '7-day hassle-free returns',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-gray-600">Don't miss out on these amazing deals</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleOfferClick(offer.category)}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${offer.color} text-white cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative p-8 flex items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-lg opacity-90 mb-4">{offer.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Shop Now
                    </motion.button>
                  </div>
                  <div className="hidden md:block ml-8">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-32 h-32 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're looking for
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg block w-full"
                >
                  <div className="aspect-square relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600">Handpicked products just for you</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/products"
                className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium group"
              >
                View All Products
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
              >
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4"
              >
                <Users className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-white">
                Join the ShopEZ Community
              </h2>
            </div>
            <p className="text-blue-100 mb-8 text-lg">
              Get exclusive deals, early access to sales, and personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-blue-300 text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-xl font-semibold hover:bg-yellow-500 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}