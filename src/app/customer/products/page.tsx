'use client';

import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export default function FitnessEquipmentCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Sample product data
  const products = [
    { id: 1, name: 'Cast Iron Kettlebell - 20kg', price: 70.00, category: 'Gym Equipment', image: '/images/product-card1.png' },
    { id: 2, name: 'Multi-Functional Home Gym Station', price: 199.95, category: 'Gym Equipment', image: '/images/product-card2.png' },
    { id: 3, name: 'Barbell and Weight Plates Set-15kg', price: 54.95, category: 'Gym Equipment', image: '/images/product-card3.png' },
    { id: 4, name: 'Hex Dumbbell Set', price: 19.99, category: 'Gym Equipment', image: '/images/product-card4.png' },
    { id: 5, name: 'Barbell and Weight Plates Set-25kg', price: 69.95, category: 'Gym Equipment', image: '/images/product-card5.png' },
    { id: 6, name: 'Barbell and Weight Plates Set-15kg', price: 60.00, category: 'Gym Equipment', image: '/images/product-card6.png' }
  ];

  const recommendedProducts = products.slice(0, 3);

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="border border-[#B7D2E6] bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow w-full">
      <div className="relative bg-gray-200 aspect-square">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <span className="text-xs text-[#0E171E] bg-[#B4DEFC] px-2 py-1 rounded">{product.category}</span>
        <h3 className="mt-2 text-sm font-medium text-[#0E171E] line-clamp-2">{product.name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-[#0063C4]">Rs. {product.price.toFixed(2)}</span>
          <button className="bg-[#0360D9] hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded flex items-center gap-1">
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-[#1C398E] mb-4">Fitness Equipment Catalog</h1>
          <p className="text-sm text-black mb-6 font-medium">
            Browse our wide range of gym equipment and accessories
          </p>

          {/* SEARCH, CATEGORY, SORT — ONE LINE WITH FIXED WIDTHS */}
          <div className="mb-8 flex flex-col sm:flex-row gap-12 items-stretch">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-80 bg-[#E9F3FB] rounded-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black" size={20} />
              <input
                type="text"
                placeholder="Search products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-4 bg-transparent focus:outline-none placeholder:text-gray-600 text-sm font-medium"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full sm:w-48 px-4 py-4 bg-[#E9F3FB] rounded-lg focus:outline-none text-sm font-medium text-gray-700 pr-10"
              >
                <option>All Categories</option>
                <option>Gym Equipment</option>
                <option>Cardio</option>
                <option>Accessories</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" size={16} />
            </div>

            {/* Sort Button (Name A-Z) */}
            <div className="relative">
              <button className="w-full sm:w-48 px-4 py-4 bg-[#E9F3FB] rounded-lg hover:bg-[#d0e4f5] text-sm font-medium text-gray-700 flex items-center justify-between">
                <span>Name (A-Z)</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Products Grid – 3 columns on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Recommended Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#163172] mb-6 mt-16">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}