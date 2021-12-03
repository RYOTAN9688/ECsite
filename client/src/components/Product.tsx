import { FC, useState } from 'react';
import styled from 'styled-components';
import { Favorite, ShoppingBagOutlined } from '@mui/icons-material';
import { ProductsProps } from '../data/data';
import { IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export const Product: FC<{ item: ProductsProps }> = ({ item }) => {
  const [favo, setFavo] = useState<boolean>(false);

  const favoriteHandleClick = () => {
    setFavo(!favo);
  };
  return (
    <Container>
      <Circle />
      <Img src={item.img} />
      <Info>
        <Icon>
          <ShoppingBagOutlined />
        </Icon>
        <Icon>
          <IconButton onClick={() => favoriteHandleClick()}>
            {favo ? <Favorite sx={{ color: red[400] }} /> : <Favorite />}
          </IconButton>
        </Icon>
      </Info>
    </Container>
  );
};
