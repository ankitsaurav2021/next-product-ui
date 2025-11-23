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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
