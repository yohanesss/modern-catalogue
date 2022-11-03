import React from "react";
import { Product } from "../../types/products";
import {
  DiscountBadge,
  ProductBrand,
  ProductCardContainer,
  ProductImage,
  ProductImageContainer,
  ProductOriginalPrice,
  ProductPrice,
  ProductTitle,
} from "./productCard.styles";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardContainer>
      {product.discountPercentage !== 0 && (
        <DiscountBadge>
          {product.discountPercentage.toFixed(0)}%<br />
          OFF
        </DiscountBadge>
      )}
      <ProductImageContainer>
        <ProductImage src={product.images[0]} />
      </ProductImageContainer>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductBrand>{product.brand}</ProductBrand>
      {product.discountPercentage ? (
        <>
          <ProductOriginalPrice>
            {(
              product.price +
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}{" "}
            USD
          </ProductOriginalPrice>
          <ProductPrice>{product.price.toFixed(2)} USD</ProductPrice>
        </>
      ) : (
        <ProductPrice>{product.price.toFixed(2)}</ProductPrice>
      )}
    </ProductCardContainer>
  );
};

export default ProductCard;
