export interface ICategory {
  id: number;
  name: string;
  image: string
}

export type FormCategory = Pick<ICategory, "id" | "name" | "image">;
