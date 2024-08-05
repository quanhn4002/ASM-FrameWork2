import React from "react";
import { ICategory } from "../Interfaces/ICategory";
import { IProduct } from "../Interfaces/IProduct";
import { useNavigate } from "react-router-dom";

type Props = {
  categories: ICategory[];
  products: IProduct[];
};

const Kategorien = ({ categories, products }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      <div className="flex flex-wrap justify-between ml-20 mr-20">
        {categories.map((category) => {
          const itemCount = products.filter(
            (product) => product.categoryId === category.id
          ).length;

          return (
            <div
              key={category.id}
              className="w-1/4 p-2 relative cursor-pointer"
              onClick={() => navigate(`/category/${category.id}`)} // Chuyển hướng đến trang ProductList với ID danh mục
            >
              <div className="h-[400px] overflow-hidden border-1 border-gray-50 rounded-lg relative">
                <img
                  className="h-full w-full object-cover"
                  src={category.image}
                  alt={category.name}
                />
                <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                <div className="absolute ml-32 inset-0 flex flex-col justify-between p-4">
                  <div className="flex flex-col justify-end">
                    <p className="text-[#ffffff] font-semibold text-[14px] mt-1">
                      {category.name}
                    </p>
                    <p className="text-[#ffffff] font-semibold text-[12px] mt-1">
                      {itemCount} items
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kategorien;
