/*import { PropertyOffer } from '../../types/property-offer';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import React, {useRef} from 'react';

import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';


type MapProps = {
  points: PropertyOffer[],
}

export function MainPageMap(props: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offer);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section className="cities__map map"
    ref={mapRef}
    >
    </section>);
}

*/
