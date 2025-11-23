import ProductCard from "@/components/ProductCard";

const res = await fetch("http://localhost:3000/api/products");
const products = [
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

// src/app/page.tsx
export default async function HomePage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`);
  const products = await res.json();

  return (
    <main>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
