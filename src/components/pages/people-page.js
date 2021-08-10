import React from 'react';

import ErrorBoundry from '../error-boundry';
import { PersonList, PersonDetails } from '../sw-components';
import { Field } from '../item-details';
import Row from '../row';

import { withRouter } from 'react-router-dom';

const PeoplePage = ({ match, history }) => {
  const personList = (
    <PersonList onItemSelected={(itemId) => history.push(itemId)} />
  );

  const personDetails = (
    <PersonDetails selectedItem={match.params.id}>
      <Field field="gender" label="Gender" />
      <Field field="birthYear" label="Birth Year" />
      <Field field="eyeColor" label="Eye Color" />
    </PersonDetails>
  );

  return (
    <ErrorBoundry>
      <Row left={personList} right={personDetails} />
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
