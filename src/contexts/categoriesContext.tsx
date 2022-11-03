import { createContext, useContext, useEffect, useState } from "react";
import { Category } from "../types/products";
import { getCategories } from "../utils/products.utils";

type CategoriesContextProps = {
  categories: Category[];
};

export const CategoriesContext = createContext<CategoriesContextProps>({
  categories: [],
});

type CategoriesProviderProps = {
  children: React.ReactNode;
};

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesContext = () => {
  const { categories } = useContext(CategoriesContext);
  return categories;
};
