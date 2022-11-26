import { PropertyOffer } from '../../types/property-offer';

type MainPageProps = {
  offers: PropertyOffer[];
}

export function MainPageMap(props: MainPageProps): JSX.Element {
  return (
    <section className="cities__map map"></section>);
}

