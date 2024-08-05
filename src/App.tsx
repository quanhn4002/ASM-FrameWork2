import { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import ProductDetail from "./Components/ProductDetail";
import ProductList from "./Components/ProductList";
import { ICategory } from "./Interfaces/ICategory";
import { IProduct } from "./Interfaces/IProduct";
import CategoryId from "./Layout/CategoryId";
import SearchResults from "./Layout/SearchResults ";
import { GetAllCategories } from "./Service/Category";
import { GetAllProduct } from "./Service/Product";

import "./App.css";
import AddCategory from "./Components/Admin/AddCategory";
import AddProduct from "./Components/Admin/AddProduct";
import CategoryList from "./Components/Admin/CategoryList";
import Dashboard from "./Components/Admin/Dashboard";
import EditCategory from "./Components/Admin/EditCategory";
import EditProduct from "./Components/Admin/EditProduct";
import { FormCategory } from "./Interfaces/ICategory";
import { FormData } from "./Interfaces/IProduct";
import LayoutAdmin from "./Layout/Admin/LayoutAdmin";
import {
  AddCategory as AddCategoryService,
  DeleteCategory,
  EditCategory as EditCategoryService,
} from "./Service/Category";
import { Add, DeleteProduct, UpdateProduct } from "./Service/Product";
import Cart from "./Layout/Cart";
import Register from "./Components/Dangki";
import Login from "./Components/Dangnhap";
import Order from "./Layout/Order";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const productsData = await GetAllProduct();
        console.log("Products Data:", productsData);
        setProducts(productsData);

        const categoriesData = await GetAllCategories();
        console.log("Categories Data:", categoriesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    })();
  }, []);

  // DELETE PRODUCT
  const deleteProduct = async (id: string | number) => {
    if (confirm("Bạn có chắc chắn muốn xóa")) {
      try {
        await DeleteProduct(id);
        alert("Xóa thành công");
        setProducts(products.filter((product: IProduct) => product.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  // ADD PRODUCT
  const onAdd = async (data: FormData) => {
    try {
      const product = await Add(data);
      alert("Thêm mới thành công");
      setProducts([...products, product]);
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE PRODUCT
  const onUpdate = async (
    data: FormData,
    id: number | string,
    callback: () => void
  ) => {
    try {
      const updatedProduct = await UpdateProduct(data, id);
      alert("Cập nhật thành công");
      const updatedProducts = products.map((product) =>
        product.id === Number(id) ? updatedProduct : product
      );
      setProducts(updatedProducts);
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateSubmit = (data: FormData, id: string) => {
    const convertedData = {
      ...data,
      price: Number(data.price),
      categoryId: Number(data.categoryId),
    };
    onUpdate(convertedData, id, () => navigate("/admin"));
  };

  // ADD CATEGORY
  const onAddCategory = async (data: FormCategory) => {
    try {
      const newCategory = await AddCategoryService(data);
      alert("Thêm danh mục thành công");
      setCategories([...categories, newCategory]);
      navigate("/admin/category-list");
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE CATEGORY
  const onUpdateCategory = async (data: FormCategory, id: number | string) => {
    try {
      const updatedCategory = await EditCategoryService(id, data);
      alert("Cập nhật danh mục thành công");
      const updatedCategories = categories.map((category) =>
        category.id === Number(id) ? updatedCategory : category
      );
      setCategories(updatedCategories);
      navigate("/admin/category-list");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE CATEGORY
  const deleteCategory = async (id: number) => {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
      try {
        await DeleteCategory(id);
        alert("Xóa danh mục thành công");
        setCategories(
          categories.filter((category) => category.id !== Number(id))
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  //add to cart
  const addToCart = (product: IProduct) => {
    console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage products={products} categories={categories} />,
    },
    {
      path: "home",
      element: <HomePage products={products} categories={categories} />,
    },
    {
      path: "product-list",
      element: <ProductList products={products} categories={categories} />,
    },

    {
      path: "product-detail/:id",
      element: <ProductDetail products={products} />,
    },
    {
      path: "search",
      element: <SearchResults products={products} />,
    },
    {
      path: "category/:id",
      element: <CategoryId products={products} categories={categories} />,
    },
    { path: "register", Component: Register },
    { path: "login", Component: Login },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "order",
      element: <Order />,
    },
    {
      path: "admin",
      element: <LayoutAdmin />,
      children: [
        {
          path: "",
          element: (
            <Dashboard
              products={products}
              categories={categories}
              onDel={deleteProduct}
            />
          ),
        },
        {
          path: "product-add",
          element: <AddProduct onAdd={onAdd} categories={categories} />,
        },
        {
          path: "category-add",
          element: <AddCategory onAdd={onAddCategory} />,
        },
        {
          path: "product-edit/:id",
          element: (
            <EditProduct
              onUpdate={handleUpdateSubmit}
              categories={categories}
              products={products}
            />
          ),
        },
        {
          path: "category-edit/:id",
          element: (
            <EditCategory onUpdate={onUpdateCategory} categories={categories} />
          ),
        },
        {
          path: "category-list",
          element: (
            <CategoryList categories={categories} onDelete={deleteCategory} />
          ),
        },
      ],
    },
  ]);

  return routes;
}

export default App;
