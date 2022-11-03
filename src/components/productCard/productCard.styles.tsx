import styled from "styled-components";

export const ProductCardContainer = styled.div`
  margin: 10px;
  box-shadow: 0px -1px 15px 0px gainsboro;
  padding: 10px;
  width: calc(25% - 40px);
  border-radius: 10px;
  position: relative;
`;

export const ProductImageContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
  background-color: #feda44;
  color: #e50010;
  padding: 5px;
  line-height: 1.2;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const ProductOriginalPrice = styled.div`
  text-decoration: line-through;
  color: #b5b5b5;
  display: block;
  margin-bottom: -3px;
  font-size: 0.9rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.2rem;
  color: #cb4645;
`;

export const ProductImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;
`;

export const ProductTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 1.2rem;
  line-height: 1.2;
`;

export const ProductBrand = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;
