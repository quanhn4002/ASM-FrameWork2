import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FormData, IProduct } from "../../Interfaces/IProduct";
import { ICategory } from "../../Interfaces/ICategory";

type Props = {
  onUpdate: (data: FormData, id: string) => void;
  categories: ICategory[];
  products: IProduct[];
};

const EditProduct = ({ onUpdate, categories, products }: Props) => {
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const product = products.find((p) => p.id === Number(id));
    if (product) {
      reset({
        title: product.title,
        image: product.image,
        price: product.price,
        categoryId: product.categoryId,
      });
    }
  }, [id, products, reset]);

  const onSubmit = (data: FormData) => {
    const convertedData = {
      ...data,
      price: Number(data.price),
      categoryId: Number(data.categoryId),
    };
    onUpdate(convertedData, id!);
  };

  return (
    <>
      <h2 className="text-center font-bold text-indigo-400 py-5">
        Chỉnh sửa sản phẩm
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 flex flex-col bg-violet-300 p-9"
      >
        <input
          type="text"
          {...register("title", { required: true, minLength: 6 })}
          placeholder="Tên sản phẩm"
          className="p-3"
        />
        {errors.title && (
          <p className="text-red-600 text-[12px]">
            Tên không được để trống và nhỏ hơn 6 ký tự
          </p>
        )}
        <input
          type="text"
          {...register("image", { required: true, minLength: 10 })}
          placeholder="Ảnh sản phẩm"
          className="p-3"
        />
        {errors.image && (
          <p className="text-red-600 text-[12px]">
            Ảnh không được để trống và nhỏ hơn 10 ký tự
          </p>
        )}
        <input
          type="text"
          {...register("price", { required: true, pattern: /^\d*$/ })}
          placeholder="Giá sản phẩm"
          className="p-3"
        />
        {errors.price && (
          <p className="text-red-600 text-[12px]">Giá phải là số và không âm</p>
        )}
        <select className="p-3" {...register("categoryId", { required: true })}>
          <option value="">Chọn danh mục</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.categoryId && (
          <p className="text-red-600 text-[12px]">Bạn chưa chọn danh mục</p>
        )}
        <button
          className="bg-violet-700 w-[25%] p-3 text-white font-bold ml-[40%]"
          type="submit"
        >
          Cập nhật
        </button>
      </form>
    </>
  );
};

export default EditProduct;
