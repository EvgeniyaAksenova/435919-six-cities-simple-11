import { City } from '../../types/city';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeCityAction } from '../../store/action';
import { cities } from '../../mocks/cities';

type CityElementProps = {
  city: City;
}

export function Cities(props: CityElementProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state);
  return (
    <a className={`locations__item-link tabs__item ${city.name === props.city.name ? 'tabs__item--active' : ''}`}
      href="#"
      onClick={() => dispatch(changeCityAction(props.city))}
    >
      <span>{props.city.name}</span>
    </a>
  );
}

// type CityProps = {
//   cities: City[];
// }

export function CitiesList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        {cities.map((city) => (
          <Cities
            city={city}
            key = {city.name}
          />
        ))}
      </li>
    </ul>
  );
}
