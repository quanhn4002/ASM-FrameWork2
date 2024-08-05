import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { FormCategory, ICategory } from "../../Interfaces/ICategory";

type Props = {
  onUpdate: (data: FormCategory, id: number | string) => void;
  categories: ICategory[];
};

const EditCategory = ({ onUpdate, categories }: Props) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormCategory>();

  useEffect(() => {
    const category = categories.find((c) => c.id === Number(id));
    console.log("Edit Category:", category); // Log để kiểm tra dữ liệu category
    if (category) {
      reset({
        name: category.name,
        image: category.image,
      });
    }
  }, [id, categories, reset]);

  const onSubmit = (data: FormCategory) => {
    onUpdate(data, id!);
    navigate("/admin/category-list"); // Chuyển hướng về trang danh sách danh mục sau khi cập nhật
  };

  return (
    <>
      <h2 className="text-center font-bold text-indigo-400 py-5">
        Chỉnh sửa danh mục
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-4 flex flex-col bg-violet-300 p-9 w-2/3 mx-auto"
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
          className="bg-violet-700 p-3 text-white font-bold mx-auto"
          type="submit"
        >
          Cập nhật
        </button>
      </form>
    </>
  );
};

export default EditCategory;
