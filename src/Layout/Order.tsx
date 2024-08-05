import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export interface IOrder {
  id: number;
  date: string;
  total: number;
  items: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

const Order = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/orders/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    } catch (error) {
      console.error("Error removing order:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-green-700">Orders</h2>
      <div className="flex justify-end mb-6">
        <NavLink to="/">
          <button className="text-white bg-green-700 h-12 w-40 rounded-lg hover:bg-green-800 transition duration-300">
            Trang chủ
          </button>
        </NavLink>
      </div>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders available.</p>
      ) : (
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="border border-green-700 p-4">Order ID</th>
              <th className="border border-green-700 p-4">Date</th>
              <th className="border border-green-700 p-4">Items</th>
              <th className="border border-green-700 p-4">Total</th>
              <th className="border border-green-700 p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 transition duration-300"
              >
                <td className="border border-gray-200 p-4">{order.id}</td>
                <td className="border border-gray-200 p-4">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="border border-gray-200 p-4">
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id} className="mb-2">
                        <span className="font-semibold">Tên Sản Phẩm:</span>{" "}
                        {item.title} <br />
                        <span className="font-semibold">Số Lượng:</span>{" "}
                        {item.quantity} x {item.price.toFixed(2)} $
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-200 p-4">
                  {order.total.toFixed(2)} $
                </td>
                <td className="border border-gray-200 p-4 text-center">
                  <button
                    className="text-white bg-red-600 h-10 w-24 rounded-lg hover:bg-red-700 transition duration-300"
                    onClick={() => handleDeleteOrder(order.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Order;
