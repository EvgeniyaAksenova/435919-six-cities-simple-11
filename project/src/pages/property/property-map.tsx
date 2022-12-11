import { PropertyOffer } from '../../types/property-offer';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import React, {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT} from '../../const';

type MapPropertyProps = {
  points: PropertyOffer[];
}

export function PropertyMap(props: MapPropertyProps): JSX.Element {
  const mapRef = useRef<HTMLElement|null>(null);
  const map = useMap(mapRef, props.points[0]);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      props.points.forEach((point) => {
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
  }, [map, props.points]);

  return (
    <section className="property__map map"
      ref={mapRef}
    >
    </section>);
}

