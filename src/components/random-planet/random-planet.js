import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  static defaultProps = {
    updateInterval: 4000,
  };

  static propTypes = {
    updateInterval: PropTypes.number,
  };

  swapi = new SwapiService();

  componentDidMount = () => {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = () => {
    this.setState(({ error }) => {
      return {
        error: !error,
      };
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 15) + 2;
    this.swapi.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    let content = loading ? <Spinner /> : <PlanetView planet={planet} />;
    if (error) content = <ErrorIndicator />;

    return <div className="random-planet jumbotron rounded">{content}</div>;
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt=""
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
