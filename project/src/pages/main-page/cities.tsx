import { City } from '../../types/city';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCityAction} from '../../store/action';

type CityProps = {
  cities: City[];
}

export function CitiesList(props: CityProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state);
  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <a className={`locations__item-link tabs__item ${city.name === props.cities[0].name ? 'tabs__item--active' : ''}`}
          href="#"
          onClick = {() => dispatch(changeCityAction(props.cities[0]))}
        >
          <span>{props.cities[0].name}</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick = {() => dispatch(changeCityAction(props.cities[1]))}>
          <span>{props.cities[1].name}</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick = {() => dispatch(changeCityAction(props.cities[2]))}>
          <span>{props.cities[2].name}</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" onClick = {() => dispatch(changeCityAction(props.cities[3]))}>
          <span>{props.cities[3].name}</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick = {() => dispatch(changeCityAction(props.cities[4]))}>
          <span>{props.cities[4].name}</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick = {() => dispatch(changeCityAction(props.cities[5]))}>
          <span>{props.cities[5].name}</span>
        </a>
      </li>
    </ul>
  );
}
