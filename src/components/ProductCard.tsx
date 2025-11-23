"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type ProductCardProps = {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  price?: number;
  rating?: number;
};

export default function ProductCard({
  id,
  title,
  description,
  imageUrl,
}: ProductCardProps) {
  // Prevent runtime crashes
  const safeImage = imageUrl || "/placeholder.png";

  return (
    <div
      aria-label="product-card"
      className="w-full max-w-sm p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      <motion.div
        data-testid="animated-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center"
      >
        <Image
          src={safeImage}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover w-full h-48"
        />

        <h2
          className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100"
          aria-label="product-title"
        >
          {title}
        </h2>

        <p
          className="mt-2 text-sm text-gray-600 dark:text-gray-300"
          aria-label="product-description"
        >
          {description}
        </p>

        {/* CTA Button */}
        <button
          aria-label="view-more-button"
          className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View More
        </button>
      </motion.div>
    </div>
  );
}
