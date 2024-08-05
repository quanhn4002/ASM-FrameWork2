import React from "react";
import { NavLink, Outlet } from "react-router-dom";

type Props = {};

const LayoutAdmin = (props: Props) => {
  return (
    <>
      <div>
        <header className="h-[50px] bg-black  text-white ">
          <h1 className="pl-2 pt-2">Hello Admin</h1>
        </header>

        <div className="flex flex-wrap">
          <ul className="w-[20%] h-[2000px] bg-slate-100">
            <li className="p-3 font-bold hover:bg-gray-300 hover: m-3 hover: rounded-md ">
              <NavLink to={"/admin"}>
                <i className="fa-solid fa-house"></i> Dashboard
              </NavLink>
            </li>
            <li className="p-3 font-bold hover:bg-gray-300 hover: m-3 hover: rounded-md ">
              <NavLink to={"/admin/product-add"}>
                <i className="fa-solid fa-plus"></i> Add new Product
              </NavLink>
            </li>
            <li className="p-3 font-bold hover:bg-gray-300 hover: m-3 hover: rounded-md ">
              <NavLink to={"/admin/category-add"}>
                <i className="fa-solid fa-plus"></i> Add new Category
              </NavLink>
            </li>
            <li className="p-3 font-bold hover:bg-gray-300 hover: m-3 hover: rounded-md ">
              <NavLink to={"/admin/category-list"}>
                <i className="fa-solid fa-list"></i> Category List
              </NavLink>
            </li>
          </ul>
          <div className="col-9 w-[80%] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
