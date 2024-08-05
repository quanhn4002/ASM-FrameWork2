import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { IProduct } from "../Interfaces/IProduct";
import Header from "./Header";
import Etwas from "./Etwas";
import Footer from "./Footer";

type Props = {
  products: IProduct[];
};

const SearchResults = ({ products }: Props) => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    if (keyword) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(result);
    } else {
      setFilteredProducts([]);
    }
  }, [keyword, products]);

  return (
    <>
      <Header />
      <div className="w-full p-4 bg-white">
        <h2 className="text-center text-lg mb-4">
          Kết quả tìm kiếm theo từ khóa:{" "}
          <span className="font-normal">
            <b>{keyword}</b>
          </span>
        </h2>
        {filteredProducts.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            Không có sản phẩm phù hợp với tìm kiếm của bạn.
          </div>
        ) : (
          <div className="flex flex-wrap justify-between ml-20 mr-20">
            {filteredProducts.map((product) => (
              <div key={product.id} className="w-[23%] p-2 relative">
                <Link to={`/product-detail/${product.id}`}>
                  <div className="h-[250px] overflow-hidden flex items-center justify-center">
                    <img
                      className="h-full w-full object-cover hover:scale-110 duration-500"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <h3 className="w-full py-2 text-[#665345] font-semibold text-[14px] px-4 my-4">
                    {product.title}
                  </h3>
                  <div className="flex justify-between px-4 pb-2">
                    <span className="text-[13px]">${product.price}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Etwas />
      <Footer />
    </>
  );
};

export default SearchResults;
