import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">

      {/* Image */}
      <img src={product.image} className="h-40 mx-auto" />

      {/* Title */}
      <h2 className="text-md mt-2 leading-tight h-10 overflow-hidden">
         {product.title}
      </h2>
      {/* Price */}
      <p className="text-lg md:text-xl font-semibold mb-1">
        ${product.price}
      </p>

      {/* View Button */}
      <Link to={`/product/${product.id}`}>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 text-sm md:text-base rounded hover:bg-blue-600 transition">
          View Details
        </button>
      </Link>

    </div>


  );
};

export default ProductCard;