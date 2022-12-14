import styled from "styled-components";

export const ProductCardContainer = styled.div`
  margin: 10px;
  box-shadow: 0px -1px 15px 0px gainsboro;
  padding: 10px;
  width: calc(25% - 40px);
  border-radius: 10px;
  position: relative;

  @media (max-width: 480px) {
    width: calc(50% - 40px);
  }

  a {
    color: #343a46;
    text-decoration: none;
  }
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
  font-weight: bold;
`;

export const ProductImage = styled.img`
  max-width: 200px;
  max-height: 200px;
  width: auto;
  height: auto;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ProductTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ProductBrand = styled.div`
  font-size: 0.8rem;
  margin-bottom: 10px;
`;
