"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ProductCardProps {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProductCard({
  id,
  title,
  description,
  imageUrl,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-sm p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="product-card"
      data-testid="animated-card"
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
      />

      {/* Title (Test expects aria-label="product-title") */}
      <h2
        aria-label="product-title"
        className="text-xl font-semibold text-gray-900 dark:text-white"
      >
        {title}
      </h2>

      {/* Description (Test expects aria-label="product-description") */}
      <p
        aria-label="product-description"
        className="text-gray-600 dark:text-gray-300 mt-2"
      >
        {description}
      </p>

      {/* Button (Test expects aria-label="view-more-button") */}
      <button
        aria-label="view-more-button"
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        View Details
      </button>
    </motion.div>
  );
}
