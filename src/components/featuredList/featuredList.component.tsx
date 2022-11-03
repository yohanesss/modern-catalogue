import React from "react";
import Slick, { Settings } from "react-slick";
import { ProductListing } from "../../types/products";
import ProductCard from "../productCard/productCard.component";
import {
  FeaturedCollectionTitle,
  FeaturedListContainer,
  FeaturedProductListingContainer,
} from "./featuredList.styles";

type FeaturedListProps = {
  productListing: ProductListing;
};

const slickSettings: Settings = {
  slidesToShow: 4,
};

const renderSlick = (products: ProductListing) => {
  return (
    <Slick {...slickSettings}>
      {products.products.map((product) => (
        <div>{product.title}</div>
      ))}
    </Slick>
  );
};

const FeaturedList = ({ productListing }: FeaturedListProps) => {
  return (
    <FeaturedListContainer>
      <FeaturedCollectionTitle>
        Our pick on {productListing.listing_title}
      </FeaturedCollectionTitle>
      <FeaturedProductListingContainer>
        {productListing.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </FeaturedProductListingContainer>
    </FeaturedListContainer>
  );
};

export default FeaturedList;
