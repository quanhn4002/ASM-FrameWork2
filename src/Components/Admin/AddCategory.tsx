import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormCategory } from "../../Interfaces/ICategory";

type Props = {
  onAdd: (data: FormCategory) => void;
};

const AddCategory = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormCategory>();
  const navigate = useNavigate();

  const onSubmit = (data: FormCategory) => {
    onAdd(data);
    reset();
  };

  return (
    <>
      <h2 className="text-center font-bold text-indigo-400 py-5">
        Thêm mới Danh Mục
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 flex flex-col bg-violet-300 p-9"
      >
        <input
          type="text"
          {...register("name", { required: true, minLength: 3 })}
          placeholder="Tên danh mục"
          className="p-3"
        />
        {errors.name && (
          <p className="text-red-600 text-[12px]">
            Tên danh mục không được để trống và nhỏ hơn 3 ký tự
          </p>
        )}

        <input
          type="text"
          {...register("image", { required: true, minLength: 10 })}
          placeholder="Ảnh danh mục"
          className="p-3"
        />
        {errors.image && (
          <p className="text-red-600 text-[12px]">
            Ảnh không được để trống và nhỏ hơn 10 ký tự
          </p>
        )}
        <button
          className="bg-violet-700 w-[25%] p-3 text-white font-bold ml-[40%]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddCategory;
