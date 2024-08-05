import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import axios from "axios";
import { IUser } from "./Dangki";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();
  const navigate = useNavigate();
  const onSubmit = async (registerdata: IUser) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        registerdata
      );
      alert("Đăng nhập thành công");
      sessionStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
  };
  return (
    <body className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Đăng ký tài khoản
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^\S+@(\S+\.)+\S{2,6}$/,
              })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Sai định dạng email</span>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Mật khẩu"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                Mật khẩu lớn hơn 6 kí tự
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-700"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Login;
