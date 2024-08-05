import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword.trim())}`);
    }
  };

  return (
    <header className="relative z-10 bg-lime-700 bg-gradient-to-r from-[rgba(19,83,8,0.39)] to-[rgba(197,201,189,0.79)] w-full ">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
        {/* Search  */}
        <form onSubmit={handleSearch} className="flex-1 mx-40 relative">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-2 pr-10 rounded text-xs"
            placeholder="Tìm kiếm theo sản phẩm, nhãn hiệu và hơn thế nữa"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        {/* EN, Account, and Cart */}
        <div className="flex space-x-4 items-center text-white gap-">
          <div className="flex items-center space-x-2">
            <a href="#">Ngôn Ngữ</a>
            <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
          </div>
          <ul className="group relative  ">
            <span className="w-28">
              Tài Khoản
              <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
            </span>
            <div className="absolute hidden group-hover:block bg-white text-black -mt-0.5 rounded shadow-lg ">
              <ul className="px-4 py-2 list-disc">
                <li className="mx-4  ">
                  <NavLink to="/order">Đơn Hàng Của Bạn</NavLink>
                </li>
                <li className="mx-4  ">
                  <NavLink to="/register">Đăng Kí</NavLink>
                </li>
                <li className="mx-4  ">
                  <NavLink to="/login">Đăng Nhập</NavLink>
                </li>
              </ul>
            </div>
          </ul>
          <a href="#" className="flex items-center">
            <i className="fa-solid fa-cart-shopping"></i>
            <NavLink to="/cart">Giỏ Hàng</NavLink>
          </a>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto" />
      <nav className=" ">
        <div className="max-w-7xl ml-[16%] gap-5 mx-au to ml-10 px-4 lg:px-10">
          <ul className="flex flex-wrap space-x-4 text-white py-2">
            <li className="group relative">
              <NavLink to="/">Trang Chủ</NavLink>
            </li>

            <li className="group relative">
              <a href="#">
                Hộp Trồng Trọt
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
              <div className="absolute hidden group-hover:block bg-white text-black -mt-0.5 rounded shadow-lg ">
                <ul className="px-4 py-2 list-disc">
                  <li className="mx-4  ">
                    <NavLink to="/product-list">LIST</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li className="group relative">
              <a href="#">
                Phân Bón
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Chất Nhầy
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Điều Hướng
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
              <div className="absolute hidden group-hover:block bg-white text-black -mt-0.5  rounded shadow-lg">
                <ul className="px-4 py-2 list-disc">
                  <li className="mx-4 py-1">
                    <a href="#">Trang Chủ</a>
                  </li>
                  <li className="mx-4 py-1">
                    <a href="#">Sản Phẩm</a>
                  </li>
                  <li className="mx-4 py-1">
                    <a href="#">Xem Thêm</a>
                  </li>
                  <li className="mx-4 py-1">
                    <a href="#">Chi Tiết SP</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="group relative">
              <a href="#">
                Đất Trồng
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Điêu Hòa
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>

            <li className="group relative">
              <a href="#">
                Công Cụ
                <i className="fa-solid fa-chevron-down text-xs ml-2"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
