import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IProduct } from "../../Interfaces/IProduct";
import { ICategory } from "../../Interfaces/ICategory";

type Props = {
  products: IProduct[];
  categories: ICategory[];
  onDel: (id: string | number) => void;
};

const Dashboard = ({ products, categories, onDel }: Props) => {
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Không xác định";
  };

  return (
    <>
      <table className="table-auto w-full divide-y divide-slate-200">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              STT
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Ảnh
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Tên{" "}
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Giá{" "}
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Danh mục
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Thao Tác{" "}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 text-center">
          {products.map((product, index: number) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td className="pl-[7%]">
                <img src={product.image} width={90} alt={product.title} />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{getCategoryName(product.categoryId)}</td>
              <td className="w-1/3 py-3 px-4 flex flex-row">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded mr-2"
                  to={`/admin/product-edit/${product.id}`}
                >
                  Sửa
                </Link>{" "}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white  py-1 px-2 rounded"
                  onClick={() => onDel(product.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

export default Dashboard;
