import { FC } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data/data';
import { Product } from './Product';

const Conatainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
`;
export const Products: FC = () => {
  return (
    <>
      <Title>今年売れた商品</Title>
      <Conatainer>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Conatainer>
    </>
  );
};
