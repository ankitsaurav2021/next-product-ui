import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";

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

describe("Products List", () => {
  it("contains 4 products", () => {
    expect(products.length).toBe(4);
  });

  it("each product has required fields", () => {
    products.forEach((prod) => {
      expect(prod.id).toBeDefined();
      expect(prod.title).toBeDefined();
      expect(prod.description).toBeDefined();
      expect(prod.imageUrl).toBeDefined();
    });
  });
});

describe("ProductCard Component", () => {
  const mockProduct = {
    id: 1,
    title: "Test Product",
    description: "Best product ever",
    imageUrl: "/product.jpg",
  };

  it("renders product title", () => {
    render(<ProductCard {...mockProduct} />);
    expect(screen.getByLabelText("product-title")).toHaveTextContent(
      "Test Product"
    );
  });

  it("renders product description", () => {
    render(<ProductCard {...mockProduct} />);
    expect(screen.getByLabelText("product-description")).toHaveTextContent(
      "Best product ever"
    );
  });

  it("renders image", () => {
    render(<ProductCard {...mockProduct} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/product.jpg");
  });

  it("renders CTA button", () => {
    render(<ProductCard {...mockProduct} />);
    expect(screen.getByLabelText("view-more-button")).toBeInTheDocument();
  });

  it("includes animation wrapper", () => {
    render(<ProductCard {...mockProduct} />);
    expect(screen.getByTestId("animated-card")).toBeInTheDocument();
  });
});
