import styled from 'styled-components';
import { Facebook, Google } from '@mui/icons-material';

const List = styled.li`
  width: 150px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Card = () => {
  const facebook = () => {
    window.open('http://localhost:4000/auth/facebook', '_self');
  };
  const google = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };
  return (
    <>
      <List onClick={facebook} style={{ backgroundColor: '#4774ba' }}>
        <Facebook />
        Facebook
      </List>
      <List onClick={google} style={{ backgroundColor: ' #df4930' }}>
        <Google />
        Google
      </List>
    </>
  );
};
