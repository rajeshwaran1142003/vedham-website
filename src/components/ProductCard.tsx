import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Leaf } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../utils/cart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show a brief success animation or toast (simplified)
    const button = e.currentTarget as HTMLButtonElement;
    button.textContent = 'Added!';
    button.classList.add('bg-green-600');
    setTimeout(() => {
      button.innerHTML = '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"></path></svg>Add to Cart';
      button.classList.remove('bg-green-600');
    }, 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        {/* Product Image */}
        <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
              {product.category}
            </span>
          </div>

          {/* Natural Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm p-1 rounded-full">
              <Leaf className="h-4 w-4 text-green-600" />
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-6">
          {/* Product Name & Rating */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-200 mb-1">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-500 ml-1">(4.8)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Key Benefits */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <span
                  key={index}
                  className="bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {benefit.split(' ').slice(0, 2).join(' ')}
                </span>
              ))}
            </div>
          </div>

          {/* Price & Weight */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-green-800">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
              </div>
              <span className="text-sm text-gray-500">{product.weight}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;