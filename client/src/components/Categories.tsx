import { FC } from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { CategoryItem } from './Categoryitem';

const Container = styled.div`
  display: flex;
`;

const Title = styled.h1``;

export const Categories: FC = () => {
  return (
    <>
      <Title>カテゴリー</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};
