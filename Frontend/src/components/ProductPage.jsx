import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [pincode, setPincode] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600',
    'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Blue', 'Black', 'Red', 'White', 'Green'];

  const reviews = [
    { name: 'John Doe', rating: 5, comment: 'Excellent product! Highly recommended.', date: '2 days ago' },
    { name: 'Jane Smith', rating: 4, comment: 'Good quality, fast delivery.', date: '1 week ago' },
    { name: 'Mike Johnson', rating: 5, comment: 'Perfect fit and great material.', date: '2 weeks ago' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-white py-3 px-6 border-b">
        <div className="max-w-7xl mx-auto text-sm text-gray-600">
          <span className="hover:text-blue-600 cursor-pointer">Home</span> / 
          <span className="hover:text-blue-600 cursor-pointer"> Electronics</span> / 
          <span className="hover:text-blue-600 cursor-pointer"> Headphones</span> / 
          <span className="text-gray-900"> Premium Wireless Headphones</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <img 
                src={images[selectedImage]} 
                alt="Product" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
              <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                <Share2 className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Product ${idx + 1}`}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-full h-20 object-cover rounded cursor-pointer border-2 ${
                    selectedImage === idx ? 'border-blue-500' : 'border-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Premium Wireless Headphones
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">(4.8) 2,345 ratings</span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">₹2,499</span>
                <span className="text-xl text-gray-500 line-through">₹4,999</span>
                <span className="text-green-600 font-semibold">50% off</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color: <span className="font-normal">{selectedColor}</span>
              </label>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded ${
                      selectedColor === color
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Size: <span className="font-normal">{selectedSize}</span>
              </label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border-2 rounded ${
                      selectedSize === size
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity:</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-300 rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg">
                Add to Cart
              </button>
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg">
                Buy Now
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-6">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="text"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded"
                />
                <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold">
                  Check
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span>Free delivery on orders above ₹500</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <RotateCcw className="w-5 h-5 text-green-600" />
                  <span>7 days return & exchange available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>100% authentic products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <div className="text-gray-700 space-y-3">
            <p>Experience premium sound quality with these wireless headphones featuring advanced noise cancellation technology.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Premium audio drivers for superior sound quality</li>
              <li>Active noise cancellation technology</li>
              <li>Up to 30 hours of battery life</li>
              <li>Comfortable over-ear design with memory foam cushions</li>
              <li>Bluetooth 5.0 connectivity</li>
              <li>Built-in microphone for hands-free calls</li>
            </ul>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border-b pb-6 last:border-b-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
