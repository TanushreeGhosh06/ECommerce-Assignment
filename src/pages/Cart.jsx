import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (!cart.length) {
    return (
      <h1 className="p-6 text-center text-lg font-medium">
        Cart is empty
      </h1>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">

      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        Your Cart
      </h1>

      {/* Cart Items */}
      <div className="space-y-4">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border p-4 rounded-lg shadow-sm"
          >

            {/* Title */}
            <p className="sm:w-1/3 font-medium text-gray-700">
              {item.title}
            </p>

            {/* Middle Section (Qty + Price) */}
            <div className="flex items-center justify-between sm:justify-center gap-4 sm:gap-8">

              {/* Quantity */}
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) =>
                  updateQty(item.id, Number(e.target.value))
                }
                className="border rounded w-16 text-center py-1"
              />

              {/* Price */}
              <p className="font-semibold text-gray-800">
                ${(item.price * item.qty).toFixed(2)}
              </p>

            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition w-full sm:w-auto"
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      {/* Total Section */}
      <div className="mt-6 border-t pt-4 flex justify-between items-center">

        <h2 className="text-lg sm:text-xl font-semibold">
          Total:
        </h2>

        <h2 className="text-lg sm:text-xl font-bold text-blue-600">
          ${total.toFixed(2)}
        </h2>

      </div>

    </div>
  );
};

export default Cart;