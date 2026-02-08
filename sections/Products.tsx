import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 bg-white">
        
        <h2 className="text-2xl font-bold mb-10 text-center text-blue-900 uppercase">
          Our Clothing Items
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
