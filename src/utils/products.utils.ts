import { Category, Product, ProductListing } from "../types/products";
import { convertSlugIntoSentenceCase } from "./formatter.utils";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products");
  return await response.json();
};

export const getProductsByCategory = async (
  categoryKeyword: string,
  limit?: number
): Promise<ProductListing> => {
  const response = await fetch(
    `https://dummyjson.com/products/category/${categoryKeyword}${
      limit ? "?limit=" + limit : ""
    }`
  );
  const categoryTitle = convertSlugIntoSentenceCase(categoryKeyword);
  const listing = await response.json();

  return {
    ...listing,
    listing_title: categoryTitle,
  };
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch("https://dummyjson.com/products/categories");
  return await response.json();
};
