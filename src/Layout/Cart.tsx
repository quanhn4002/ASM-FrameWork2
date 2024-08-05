import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../Interfaces/IProduct";
import { NavLink, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart");
        const itemsWithQuantity = response.data.map((item: IProduct) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(itemsWithQuantity);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }
          : item
      )
    );
  };

  const removeItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price) * (item.quantity || 1),
    0
  );

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const navigate = useNavigate();
  const handleConfirmCheckout = async () => {
    try {
      const order = {
        items: cartItems,
        total: totalPrice,
        date: new Date().toISOString(),
      };

      await axios.post("http://localhost:3000/orders", order);

      await Promise.all(
        cartItems.map((item) =>
          axios.delete(`http://localhost:3000/cart/${item.id}`)
        )
      );

      setCartItems([]);
      setIsCheckout(false);
      alert("Cảm ơn bạn! Đơn hàng của bạn đã được đặt thành công.");
      navigate("/order");
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Có lỗi xảy ra khi xử lý đơn hàng của bạn.");
    }
  };

  const handleCancelCheckout = () => {
    setIsCheckout(false);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-center text-2xl font-bold mb-4">
          Giỏ Hàng Của Bạn
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Quantity</th>
              <th className="border border-gray-300 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border border-gray-300 p-2">{item.title}</td>
                <td className="border border-gray-300 p-2">
                  {(item.price * (item.quantity || 1)).toFixed(2)} $
                </td>
                <td className="border border-gray-300 p-2 flex items-center justify-center h-full">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 py-1 rounded-l hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-300 text-black px-2 py-1 rounded-r hover:bg-gray-400"
                  >
                    +
                  </button>
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 gap-10">
          <NavLink to="/">
            <button className="text-white bg-green-600 h-12 w-40">
              Trang chủ
            </button>
          </NavLink>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 md:pl-8 mt-4 md:mt-0">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-lg items-center">
            Tổng Tiền:{" "}
            <span className="font-bold">{totalPrice.toFixed(2)} $</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-white bg-green-600 h-12 w-full mt-5 items-center"
          >
            Checkout
          </button>
        </div>
      </div>
      {isCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] h-auto rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Checkout Summary</h3>
            <p className="mb-2">Your order details:</p>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.title}</span>
                  <span>{item.quantity}</span>
                  <span>{(item.price * item.quantity).toFixed(2)} $</span>
                </li>
              ))}
            </ul>
            <p className="font-bold mt-2">Total: {totalPrice.toFixed(2)} $</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleConfirmCheckout}
                className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={handleCancelCheckout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
