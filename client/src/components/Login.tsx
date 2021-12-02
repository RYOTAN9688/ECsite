import { FC } from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  height: 80%;
  -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  box-shadow: 0px 5px 40px -21px rgba(66, 68, 90, 1);
  display: flex;
  align-items: center;
  border-radius: 20px;
`;

const Title = styled.h1`
  position: absolute;
  top: 10vh;
  color: #323232;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  color: #646464;
  font-weight: normal;
`;

const SNSContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Line = styled.div`
  width: 0.5px;
  height: 70%;
  background-color: lightgray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
`;

const Or = styled.div`
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 10px;
  color: gray;
  background-color: white;
  font-weight: bold;
`;
const LocalContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  padding: 15px 20px;
  margin-bottom: 20px;
  outline: none;
`;

const Button = styled.button`
  width: 100%;
  background-color: #d62825;
  outline: none;
  text-decoration: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const Login: FC = () => {
  return (
    <>
      <Container>
        <Title>ログイン</Title>
        <Wrapper>
          <SNSContainer>
            <SubTitle>SNSでログイン</SubTitle>
            <Card />
          </SNSContainer>
          <Center>
            <Line />
            <Or>OR</Or>
          </Center>
          <LocalContainer>
            <SubTitle>メールアドレスでログイン</SubTitle>
            <Form>
              <Input placeholder='メールアドレス'></Input>
              <Input placeholder='パスワード'></Input>
              <Button>ログイン</Button>
            </Form>
          </LocalContainer>
        </Wrapper>
      </Container>
    </>
  );
};
