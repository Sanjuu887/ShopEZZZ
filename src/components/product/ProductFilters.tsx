import React from 'react';
import { Filter, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { categories } from '../../data/mockData';

interface ProductFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductFilters({ isOpen, onClose }: ProductFiltersProps) {
  const { state, dispatch } = useApp();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={onClose} />
      
      {/* Filter Panel */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl lg:relative lg:w-full lg:h-auto lg:shadow-none lg:bg-transparent overflow-y-auto">
        <div className="p-6 lg:p-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={category === 'All Categories' ? '' : category}
                    checked={
                      category === 'All Categories' 
                        ? state.selectedCategory === '' 
                        : state.selectedCategory === category
                    }
                    onChange={(e) => dispatch({ type: 'SET_CATEGORY', payload: e.target.value })}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 hover:text-gray-900">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Price Range (₹)</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={state.priceRange[0] || ''}
                  onChange={(e) => 
                    dispatch({ 
                      type: 'SET_PRICE_RANGE', 
                      payload: [Number(e.target.value) || 0, state.priceRange[1]] 
                    })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={state.priceRange[1] || ''}
                  onChange={(e) => 
                    dispatch({ 
                      type: 'SET_PRICE_RANGE', 
                      payload: [state.priceRange[0], Number(e.target.value) || 200000] 
                    })
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Quick price filters */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Under ₹1,000', range: [0, 1000] },
                  { label: '₹1,000 - ₹5,000', range: [1000, 5000] },
                  { label: '₹5,000 - ₹25,000', range: [5000, 25000] },
                  { label: '₹25,000+', range: [25000, 200000] },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => dispatch({ type: 'SET_PRICE_RANGE', payload: option.range as [number, number] })}
                    className="px-3 py-2 text-xs border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Popular Brands</h3>
            <div className="space-y-2">
              {['Apple', 'Samsung', 'OnePlus', 'Sony', 'Nike', 'Adidas', 'Levi\'s', 'Zara'].map((brand) => (
                <label key={brand} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 hover:text-gray-900">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Customer Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 hover:text-gray-900">
                    {rating}★ & above
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
            <select
              value={state.sortBy}
              onChange={(e) => dispatch({ type: 'SET_SORT_BY', payload: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              dispatch({ type: 'SET_CATEGORY', payload: '' });
              dispatch({ type: 'SET_PRICE_RANGE', payload: [0, 200000] });
              dispatch({ type: 'SET_SORT_BY', payload: 'newest' });
              dispatch({ type: 'SET_SEARCH_QUERY', payload: '' });
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </div>
  );
}