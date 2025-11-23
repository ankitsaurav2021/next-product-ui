import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "Shoes",
      imageUrl: "/product.jpg",
      description: "Comfortable running shoes with perfect grip and style.",
    },
    {
       id: 2,
    title: "Smart Watch",
    description: "Track your fitness and stay connected on the go.",
    imageUrl: "/Smart Watch.jpg"
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
    }
  ]);
}
