import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";
import Toast from "../components/Toast";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <div className="grid md:grid-cols-2 gap-6">

        {/* Product Image */}
        <img src={product.image} className="h-80 mx-auto" />

        {/* Product Details */}
        <div>
          <h1 className="text-xl font-bold mb-2">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-lg font-semibold mb-4">
            ${product.price}
          </p>

          <button
            onClick={() => {
              addToCart(product);
              setShowToast(true);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add to Cart
          </button>
        </div>

      </div>

      {/* Toast Popup */}
      <Toast
        message="Added to cart successfully"
        show={showToast}
        setShow={setShowToast}
      />
    </div>
  );
};

export default ProductDetails;