import dynamic from "next/dynamic";

const ProductList = dynamic(() => import("./components/ProductList"), {
  ssr: false, // ⬅ DISABLE SSR
});

export default function Home() {
  return <ProductList />;
}
