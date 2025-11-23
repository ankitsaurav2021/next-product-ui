"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ProductCardProps {
  id?: number; // optional for safety
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
      data-testid="animated-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="
        w-full max-w-sm p-5 
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md 
        hover:scale-105 hover:shadow-lg 
        transition-all duration-300 
        border border-gray-200 dark:border-gray-700
      "
      aria-label="product-card"
    >
      {/* Use classic <img> to avoid Next.js Image SSR problems on Vercel */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
      />

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

      <button
        aria-label={`View details of ${title}`}
        className="
          mt-4 w-full bg-blue-600 
          hover:bg-blue-700 
          text-white py-2 rounded-lg 
          transition
        "
      >
        View Details
      </button>
    </motion.div>
  );
}
