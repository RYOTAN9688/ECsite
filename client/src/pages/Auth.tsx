import { FC, useEffect, useState } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../components/Login';

export const Auth: FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:4000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error('認証に失敗しました');
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <>
      <Login />
    </>
  );
};
