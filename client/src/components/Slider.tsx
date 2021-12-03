import React, { FC, useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';

import { sliderItem } from '../data/data';

interface ArrowProps {
  direction: string;
}
interface WrapperProps {
  slideIndex: number;
}
interface SlideProps {
  bg: string;
}

const Contaier = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  left: ${(props: ArrowProps) => props.direction === 'left' && '10px'};
  right: ${(props: ArrowProps) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props: SlideProps) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const Slider: FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const handleClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Contaier>
        <Arrow direction='left' onClick={() => handleClick('left')}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItem.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
          <ArrowRightOutlined />
        </Arrow>
      </Contaier>
    </>
  );
};
