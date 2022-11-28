import './main-page.css';
import { PropertyOffer } from '../../types/property-offer';
import {Link} from 'react-router-dom';

export type MainPageAerticleProps = {
  offer:PropertyOffer;
  onHover: (id: number) => void;
}

export function MainPageArticle(props: MainPageAerticleProps): JSX.Element {
  const {offer, onHover} = props;
  const {galleryUrl, title, price, features} = offer;
  return (
    <article className="cities__card place-card" onMouseOver={() => onHover(offer.id)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/Room/${offer.id}`}>
          <img className="place-card__image" src={galleryUrl} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span> Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{features.type}</p>
      </div>
    </article>);
}
