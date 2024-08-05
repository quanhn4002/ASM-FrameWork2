import React from "react";
import { ICategory } from "../../Interfaces/ICategory";
import { Link } from "react-router-dom";

type Props = {
  categories: ICategory[];
  onDelete: (id: number) => void;
};

const CategoryList = ({ categories, onDelete }: Props) => {
  return (
    <div>
      {/* <h2 className="text-center font-bold text-indigo-400 py-5">
        Danh sách danh mục
      </h2> */}
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              ID
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Tên danh mục
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Ảnh danh mục
            </th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-center">
          {categories.map((category) => (
            <tr key={category.id}>
              <td className="w-1/3 py-3 px-4">{category.id}</td>
              <td className="w-1/3 py-3 px-4">{category.name}</td>
              <td className="w-1/3 py-3 px-4">
                <img src={category.image} alt={category.name} width={100} />
              </td>

              <td className="w-1/3 py-3 px-4 flex flex-row">
                <Link
                  to={`/admin/category-edit/${category.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Sửa
                </Link>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onDelete(category.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
