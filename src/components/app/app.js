import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { Field } from '../item-details';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  SecretPage,
  LoginPage,
} from '../pages';
import ErrorIndicator from '../error-indicator';

import './app.css';
import SwapiService from '../../services/swapi-service';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  state = {
    error: false,
    loggedIn: false,
  };

  swapi = new SwapiService();

  componentDidCatch = () => {
    this.setState({ error: true });
  };

  render() {
    const { loggedIn, error } = this.state;

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet />

            <Switch>
              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => (
                  <StarshipDetails selectedItem={match.params.id}>
                    <Field field="model" label="Model" />
                    <Field field="manufacturer" label="Manufacturer" />
                    <Field field="costInCredits" label="Cost In Credits" />
                    <Field field="length" label="Length" />
                    <Field field="crew" label="Crew" />
                    <Field field="passengers" label="Passengers" />
                    <Field field="cargoCapacity" label="Cargo Capacity" />
                  </StarshipDetails>
                )}
              />
              <Route
                path="/secret"
                render={() => <SecretPage isLoggedIn={loggedIn} />}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={loggedIn}
                    onLogin={() => this.setState({ loggedIn: true })}
                  />
                )}
              />

              <Route
                render={() => (
                  <div>
                    <h1>404</h1>
                    <h3>Page not found</h3>
                  </div>
                )}
              />
            </Switch>
          </div>
        </Router>
      </ErrorBoundry>
    );
  }
}
