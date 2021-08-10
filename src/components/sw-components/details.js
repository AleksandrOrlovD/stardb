import componentItemDetails from '../hoc-helpers/component-item-details';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = new SwapiService();

const PersonDetails = componentItemDetails(getPerson, getPersonImage);
const PlanetDetails = componentItemDetails(getPlanet, getPlanetImage);
const StarshipDetails = componentItemDetails(getStarship, getStarshipImage);

export { PersonDetails, PlanetDetails, StarshipDetails };
