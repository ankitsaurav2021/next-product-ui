import ProductCard from "@/components/ProductCard";
import React from "react";

// 1️⃣ Define Product type
type Product = {
  id: number;
  title: string;
  imageUrl: string; // path in public/ folder or absolute URL
  description: string;
};
// 2️⃣ Internal function to get products (replace with API/DB if needed)
async function getProducts(): Promise<Product[]> {
  return [
    {
      id: 1,
      title: "Shoes",
      description: "Comfortable running shoes with perfect grip and style.",
      imageUrl: "/product.jpg",
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Track your fitness and stay connected on the go.",
      imageUrl: "/Smart Watch.jpg",
    },
    {
      id: 3,
      title: "Headphones",
      description: "High-quality sound with noise cancellation.",
      imageUrl: "/headphones.jpg",
    },
    {
      id: 4,
      title: "Laptop",
      description: "Powerful laptop for work and gaming.",
      imageUrl: "/laptop.jpg",
    },
  ];
}

// 3️⃣ Page component
export default async function HomePage() {
  const products: Product[] = await getProducts();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {products.map((product: Product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                width: "250px",
                textAlign: "center",
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                width={200}
                height={200}
                style={{ objectFit: "cover", borderRadius: "4px" }}
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
