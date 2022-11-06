import React, { useEffect, useState } from "react";
import AboutUs from "../../components/aboutUs/aboutUs.component";
import FeaturedList from "../../components/featuredList/featuredList.component";
import HomeBanner from "../../components/homeBanner/homeBanner.component";
import Testimony from "../../components/testimony/testimony.component";
import { useCategoriesContext } from "../../contexts/categoriesContext";
import { Category, ProductListing } from "../../types/products";
import { getProductsByCategory } from "../../utils/products.utils";
import { HomeContainer, HomeMotto } from "./home.styles";

const Home = () => {
  const [productListings, setProductListings] = useState<
    ProductListing[] | null
  >();
  const categories = useCategoriesContext();

  const getFeaturedProductListing = async (categories: Category[]) => {
    const featuredCategories = categories.slice(0, 4);
    const productListings: ProductListing[] = [];

    for (const category of featuredCategories) {
      const productListing = await getProductsByCategory(category, 4);
      productListings.push(productListing);
    }
    return productListings;
  };

  useEffect(() => {
    const _getFeaturedProductListing = async () => {
      const productListings = await getFeaturedProductListing(categories);
      setProductListings(productListings);
    };
    _getFeaturedProductListing();
  }, [categories]);

  const renderFeaturedList = productListings?.map((productListing) => (
    <FeaturedList
      key={productListing.listing_title}
      productListing={productListing}
    />
  ));

  return (
    <HomeContainer>
      <HomeBanner />
      <HomeMotto>Hot Deals</HomeMotto>
      {renderFeaturedList}
      <HomeMotto>About Us</HomeMotto>
      <AboutUs />
      <HomeMotto>Customer Testimony</HomeMotto>
      <Testimony />
      {/* // TODO:Testimony */}
    </HomeContainer>
  );
};

export default Home;
