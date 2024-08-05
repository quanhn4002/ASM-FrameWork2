import React from "react";
import Header from "../Layout/Header";
import Banner from "../Layout/Banner";
import BestSellers from "../Layout/BestSellers";
import Kategorien from "../Layout/Kategorien";
import Etwas from "../Layout/Etwas";
import Footer from "../Layout/Footer";
import { IProduct } from "../Interfaces/IProduct";
import { ICategory } from "../Interfaces/ICategory";
import ImageLayout from "../Layout/ImageLayout ";
import { Link } from "react-router-dom";

type Props = {
  products: IProduct[];
  categories: ICategory[];
};

const HomePage = ({ products, categories }: Props) => {
  const bestSellerProducts = products.slice(0, 3);

  return (
    <div className="bg-orange-50">
      <Header />
      <Banner />
      <h2 className="text-2xl font-bold ml-20 mt-4 mb-2">
        <Link to={"/product-list"}>Sản Phẩm Bán Chạy</Link>
      </h2>
      <hr className="bg-orange-900 mb-2" />
      <BestSellers products={bestSellerProducts} categories={categories} />
      <ImageLayout />
      <h2 className="text-2xl font-bold ml-20 mt-4 mb-2">Danh Mục</h2>
      <hr className="bg-orange-900 mb-2" />
      <Kategorien products={products} categories={categories} />
      <Etwas />
      <Footer />
    </div>
  );
};

export default HomePage;
