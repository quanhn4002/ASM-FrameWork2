export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  categoryId: number;
  motadai: string;
  motangan: string;
  about: string;
  quantity: number;
}

export type FormData = Pick<
  IProduct,
  "title" | "price" | "image" | "categoryId"
>;
