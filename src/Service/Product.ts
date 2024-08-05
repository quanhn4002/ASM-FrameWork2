import instance from "../API/axios";
import { IProduct, FormData } from "../Interfaces/IProduct";

export const GetAllProduct = async () => {
  try {
    const { data } = await instance.get("products");
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy sản phẩm");
  }
};

export const GetProductId = async (id: number | string) => {
  try {
    const { data } = await instance.get(`products/${id}`);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi lấy sản phẩm theo ID");
  }
};

export const Add = async (productData: FormData) => {
  try {
    const { data } = await instance.post("products", productData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi thêm sản phẩm");
  }
};

export const UpdateProduct = async (
  productData: FormData,
  id: string | number
) => {
  try {
    const { data } = await instance.put(`products/${id}`, productData);
    return data;
  } catch (error) {
    throw new Error("Lỗi khi cập nhật sản phẩm");
  }
};

export const DeleteProduct = async (id: string | number) => {
  try {
    await instance.delete(`products/${id}`);
  } catch (error) {
    throw new Error("Lỗi khi xóa sản phẩm");
  }
};
