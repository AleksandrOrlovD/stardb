import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import {
  PlanetList,
  PlanetDetails,
} from '../sw-components';
import { Field } from '../item-details';
import Row from '../row';

import SwapiService from '../../services/swapi-service';

export default class PlanetPage extends Component {
  state = {
    selectedItem: null,
  };

  swapi = new SwapiService();

  selectItem = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { selectedItem } = this.state;

    const planetList = <PlanetList onItemSelected={this.selectItem} />;

    const planetDetails = (
      <PlanetDetails selectedItem={selectedItem}>
        <Field field="population" label="Population" />
        <Field field="rotationPeriod" label="Rotation Period" />
        <Field field="diameter" label="Diameter" />
      </PlanetDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={planetList} right={planetDetails} />
      </ErrorBoundry>
    );
  }
}
