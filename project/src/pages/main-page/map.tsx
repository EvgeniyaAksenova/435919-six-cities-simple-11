import { PropertyOffer } from '../../types/property-offer';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import React, {useRef} from 'react';

type MapProps = {
  offers: PropertyOffer[];
}

export function MainPageMap(props: MapProps): JSX.Element {
  const mapRef = useRef(null);
  return (
    <section className="cities__map map"
    style={{height: '500px'}}
    ref={mapRef}
    >
    </section>);
}

