import React from 'react';
import { Redirect } from 'react-router';

const SecretPage = ({isLoggedIn}) => {

  if (isLoggedIn) {
    return <h3>It's a secret page!</h3>;
  }

  return <Redirect to="/login" />;
}

export default SecretPage;