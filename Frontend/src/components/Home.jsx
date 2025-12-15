// src/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Packing Material",
    image:
      "https://via.placeholder.com/300x200?text=Packing+Material",
  },
  {
    id: 2,
    title: "Pet Products",
    image:
      "https://via.placeholder.com/300x200?text=Pet+Products",
  },
  {
    id: 3,
    title: "Beauty Items",
    image:
      "https://via.placeholder.com/300x200?text=Beauty+Items",
  },
  {
    id: 4,
    title: "Wooden Items",
    image:
      "https://via.placeholder.com/300x200?text=Wooden+Items",
  },
  {
    id: 5,
    title: "Custom Gift Items",
    image:
      "https://via.placeholder.com/300x200?text=Custom+Gifts",
  },
];

const products = [
  {
    id: 1,
    name: "3 Ply Brown Box 6x6x3",
    price: "₹12.00",
    image:
      "https://via.placeholder.com/400x300?text=Corrugated+Box",
  },
  {
    id: 2,
    name: "Polybag With Pod Jacket",
    price: "₹3.50",
    image:
      "https://via.placeholder.com/400x300?text=Polybag",
  },
  {
    id: 3,
    name: "Paper Bubble Wrap Roll",
    price: "₹299.00",
    image:
      "https://via.placeholder.com/400x300?text=Bubble+Wrap",
  },
  {
    id: 4,
    name: "Wooden Desk Organizer",
    price: "₹799.00",
    image:
      "https://via.placeholder.com/400x300?text=Wooden+Item",
  },
  {
    id: 5,
    name: "Custom Acrylic Gift Frame",
    price: "₹999.00",
    image:
      "https://via.placeholder.com/400x300?text=Custom+Gift",
  },
  {
    id: 6,
    name: "Pet Poop Scooper",
    price: "₹349.00",
    image:
      "https://via.placeholder.com/400x300?text=Pet+Product",
  },
];

const CategoryCard = ({ title, image }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition shadow-slate-200 hover:-translate-y-1 duration-200 p-4 flex flex-col items-center">
    <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl bg-slate-50">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-contain"
      />
    </div>
    <h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-800 text-center">
      {title}
    </h3>
  </div>
);

const ProductCard = ({ name, price, image }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200 shadow-slate-200 p-4 flex flex-col">
    <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 mb-4">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
        {name}
      </h3>
      {price && (
        <p className="mt-2 text-sm font-medium text-green-700">
          {price}
        </p>
      )}
      <button
        type="button"
        className="mt-4 inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Add to Cart
      </button>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Quality Packaging &amp; Custom Products
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Corrugated Boxes, Polybags, Wooden Items &amp; More for
              modern e‑commerce brands and gifting businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
            Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
