import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IProduct } from "../Interfaces/IProduct";
import { ICategory } from "../Interfaces/ICategory";

type Props = {
  products: IProduct[];
  categories: ICategory[];
};

const BestSellers = ({ products, categories }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Không rõ danh mục";
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = async (product: IProduct) => {
    try {
      await axios.post("http://localhost:3000/cart", product);
      alert(`${product.title} đã được thêm vào giỏ hàng!`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="w-full p-4 bg-white">
      <div className="flex flex-wrap justify-between ml-20 mr-20 ">
        {currentProducts.map((product, index) => (
          <div
            key={product.id}
            className={`w-[30%] p-2 relative group ${
              index % 4 !== 3 ? "mr-4" : ""
            }`}
          >
            <Link to={`/product-detail/${product.id}`}>
              <div className="h-[250px] overflow-hidden flex items-center justify-center">
                <img
                  className="h-full w-full object-cover hover:scale-110 duration-500"
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </Link>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-700 p-2 m-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="black" stroke-width="1.9">
                    <path d="M3.864 16.455c-.858-3.432-1.287-5.147-.386-6.301C4.378 9 6.148 9 9.685 9h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z" />
                    <path d="m19.5 9.5l-.71-2.605c-.274-1.005-.411-1.507-.692-1.886A2.5 2.5 0 0 0 17 4.172C16.56 4 16.04 4 15 4M4.5 9.5l.71-2.605c.274-1.005.411-1.507.692-1.886A2.5 2.5 0 0 1 7 4.172C7.44 4 7.96 4 9 4" />
                    <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z" />
                  </g>
                </svg>
              </button>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-white p-2 m-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="black"
                    d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"
                  />
                </svg>
              </button>
            </div>

            <h3 className="w-full py-2 text-[#665345] font-semibold text-[14px] px-4 my-4">
              {product.title}
            </h3>
            <div className="flex justify-between px-4 pb-2">
              <span className="text-[#777777] text-[12px]">
                {getCategoryName(product.categoryId)}
              </span>
              <span className="text-[13px]">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 border ${
              currentPage === index + 1 ? "bg-gray-300" : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
