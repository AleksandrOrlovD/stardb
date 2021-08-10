import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <button className="btn btn-primary" onClick={onLogin}>
      Log in to see secret page!
    </button>
  );
};

export default LoginPage;