import instance from "../API/axios";
import { FormCategory } from "../Interfaces/ICategory";

export const GetAllCategories = async () => {
  try {
    const { data } = await instance.get("categories");
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const AddCategory = async (categorydata: FormCategory) => {
  try {
    const { data } = await instance.post("categories", categorydata);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const DeleteCategory = async (id: number) => {
  try {
    await instance.delete(`categories/${id}`);
  } catch (error) {
    throw new Error("Lỗi");
  }
};

export const EditCategory = async (
  id: number | string,
  categorydata: FormCategory
) => {
  try {
    const { data } = await instance.put(`categories/${id}`, categorydata);
    return data;
  } catch (error) {
    throw new Error("Lỗi");
  }
};
