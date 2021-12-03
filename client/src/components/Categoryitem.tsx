import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { categoriesProps } from '../data';

const Container = styled.div`
  position: relative;
  flex: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
`;

const Title = styled.h1`
  position: absolute;
  color: black;
  top: 0;
  left: 0;
`;

export const CategoryItem: FC<{ item: categoriesProps }> = ({ item }) => {
  return (
    <Container>
      <Info>
        <Link to={`/categories/${item.cat}}`}>
          <Image src={item.img} />
          <Title>{item.title}</Title>
        </Link>
      </Info>
    </Container>
  );
};
