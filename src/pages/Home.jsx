import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../services/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
    getCategories().then(res => setCategories(res.data));
  }, []);

  if (!products.length) return <Loader />;

  // Filter logic
  const filteredProducts = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory ? p.category === selectedCategory : true)
    );
  });

  return (
    <div className="p-4">

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-full mb-4 rounded"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select
        className="border p-2 mb-4 rounded"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-4">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Empty State */}
      {!filteredProducts.length && (
        <p className="text-center mt-6 text-gray-500">
          No products found
        </p>
      )}
    </div>
  );
};

export default Home;