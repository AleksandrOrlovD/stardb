import React from 'react';
import { withRouter } from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import { StarshipList } from '../sw-components';

const StarshipPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelected={(itemId) => history.push(itemId)} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipPage);
