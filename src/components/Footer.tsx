import {
  Facebook,
  Instagram,
  MailOutlineOutlined,
  Phone,
  Room,
  Twitter,
} from '@mui/icons-material';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.div``;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
export const Footer: FC = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>ECShop</Logo>
          <Desc></Desc>
          <SocialContainer>
            <SocialIcon>
              <Twitter color='primary' />
            </SocialIcon>
            <SocialIcon>
              <Facebook color='primary' />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Link</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Item</ListItem>
            <ListItem>Ladies Item</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <MailOutlineOutlined style={{ marginRight: '10px' }} />
            <Phone style={{ marginRight: '10px' }} />
            <Room style={{ marginRight: '10px' }} />
          </ContactItem>
        </Right>
      </Container>
    </>
  );
};
