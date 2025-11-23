"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ProductCardProps {
  id?: number; // <-- Make optional so Vercel doesn't fail
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
      className="w-full max-w-sm p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
      aria-label={`Product card for ${title}`}
    >
      {/* REPLACED Next.js Image to avoid Vercel test build issues */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 shadow-sm"
      />

      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>

      <button
        aria-label={`View details of ${title}`}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        View Details
      </button>
    </motion.div>
  );
}
