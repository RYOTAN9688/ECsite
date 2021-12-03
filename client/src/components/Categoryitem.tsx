import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoriesProps } from '../data/data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div``;

const Title = styled.h1``;

export const CategoryItem: FC<{ item: categoriesProps }> = ({ item }) => {
  return (
    <>
      <Container>
        <Title>{item.title}</Title>
        <Link to={`/categories/${item.cat}}`}>
          <Info>
            <Image src={item.img} />
          </Info>
        </Link>
      </Container>
    </>
  );
};
