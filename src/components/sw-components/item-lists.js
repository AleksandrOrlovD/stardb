import React from 'react';

import ItemList from '../item-list';
import componentWithData from '../hoc-helpers/component-with-data';
import SwapiService from '../../services/swapi-service';

const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const withChildFunction = (Component, childFunction) => {
  return (props) => {
    return <Component {...props}>{childFunction}</Component>;
  };
};

let PersonList = withChildFunction(ItemList, ({ name, gender }) => (
  <React.Fragment>
    {name}
    <span>gender: {gender}</span>
  </React.Fragment>
));

let PlanetList = withChildFunction(ItemList, ({ name, diameter }) => (
  <React.Fragment>
    {name}
    <span>diameter: {diameter}</span>
  </React.Fragment>
));

let StarshipList = withChildFunction(ItemList, ({ name, model }) => (
  <React.Fragment>
    {name}
    <span>model: {model}</span>
  </React.Fragment>
));

PersonList = componentWithData(PersonList, getAllPeople);
PlanetList = componentWithData(PlanetList, getAllPlanets);
StarshipList = componentWithData(StarshipList, getAllStarships);

export { PersonList, PlanetList, StarshipList };
