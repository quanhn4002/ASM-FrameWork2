import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Layout/Header";
import BestSellers from "../Layout/BestSellers";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";
import { IProduct } from "../Interfaces/IProduct";
import { ICategory } from "../Interfaces/ICategory";

type Props = {
  products: IProduct[];
  categories: ICategory[];
};

const ProductList = ({ products, categories }: Props) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    categoryId ? parseInt(categoryId) : null
  );

  useEffect(() => {
    if (categoryId) {
      setSelectedCategoryId(parseInt(categoryId));
    }
  }, [categoryId]);

  const filteredProducts = selectedCategoryId
    ? products.filter((product) => product.categoryId === selectedCategoryId)
    : products;

  return (
    <>
      <Header />
      <div className="h-[200px] bg-lime-200 bg-gradient-to-r from-[rgba(168,238,196,0.6)] to-[rgb(236,239,229)]">
        <p className="text-[40px] pt-16 pl-40 font-semibold text-gray-700">
          Töpfe & Behälter
        </p>
      </div>

      <div className="flex w-full mt-10">
        <div className="flex flex-start w-[75%]">
          {filteredProducts.length ? (
            <BestSellers products={filteredProducts} categories={categories} />
          ) : (
            <p className="text-gray-700 text-center w-full mt-10">
              Không có sản phẩm
            </p>
          )}
        </div>

        <div className="w-[25%] p-4 mr-16">
          <div className="text-center text-lime-950 font-bold text-[25px] mb-4">
            Kategorien
          </div>
          <div className="flex flex-col space-y-2 ml-10">
            {categories.map((category) => (
              <label key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategoryId === category.id}
                  onChange={() => setSelectedCategoryId(category.id)}
                />
                {category.name}
              </label>
            ))}
          </div>
          <div className="grid-item mt-5 ml-10 relative ">
            <div className="absolute">
              <img src="Ảnh ASM1/anhmo.png" alt="" />
            </div>
            <img
              src="Ảnh ASM1/dayroi.png"
              alt="Product"
              className="w-[213px] h-[262px]"
            />
            <div className="product-content absolute w-[200px] top-5 text-white left-2">
              Trồng cây yêu thích của riêng bạn
            </div>
            <div className="product-content2 flex absolute w-[200px] bottom-2 text-white left-2">
              <button>Mua ngay</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 20 20"
                fill="none"
                className="ml-[5px]"
              >
                <path
                  d="M9.80917 16.9107C13.7036 16.9107 16.8607 13.7536 16.8607 9.85922C16.8607 5.9648 13.7036 2.80774 9.80917 2.80774C5.91475 2.80774 2.75769 5.9648 2.75769 9.85922C2.75769 13.7536 5.91475 16.9107 9.80917 16.9107Z"
                  stroke="white"
                  stroke-width="1.4103"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10.2543 12.3523L12.7473 9.85922L10.2543 7.36615"
                  stroke="white"
                  stroke-width="1.4103"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.87109 9.85925H12.7473"
                  stroke="white"
                  stroke-width="1.4103"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          '
        </div>
      </div>

      <Etwas />
      <Footer />
    </>
  );
};

export default ProductList;
