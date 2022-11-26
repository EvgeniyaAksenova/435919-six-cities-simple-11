import { PropertyOffer } from '../../types/property-offer';
import 'leaflet/dist/leaflet.css';

type MainPageProps = {
  offers: PropertyOffer[];
}

export function MainPageMap(props: MainPageProps): JSX.Element {
  return (
    <section className="cities__map map"></section>);
}

