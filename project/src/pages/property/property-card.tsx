import { PropertyForm } from './property-form';
import {PropertyOffer} from '../../types/property-offer';
import {PropertyReview} from '../../types/property-review';


export function PropertyImage(): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src="img/room.jpg" alt="Photo studio" />
    </div>
  );
}

type PropertyOfferProps = {
    offer:PropertyOffer;
};

export function PropertyCard(props: PropertyOfferProps): JSX.Element {
  const {offer} = props;
  const {galleryUrl, isPremium, title, rating, features, price, inside, host} = offer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          <PropertyImage />
          <PropertyImage />
          <PropertyImage />
          <PropertyImage />
        </div>
      </div>

      <div className="property__container container">

        <div className="property__wrapper">
          <div className="property__mark">
            <span>{isPremium}</span>
          </div>
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title} &amp; luxurious studio at great location
            </h1>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>

          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {features.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {features.bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {features.maxAdults} adults
            </li>
          </ul>

          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              <li className="property__inside-item">
                {inside.isWiFi}
              </li>
              <li className="property__inside-item">
                {inside.isWasingMachine}
              </li>
              <li className="property__inside-item">
                {inside.isTowels}
              </li>
              <li className="property__inside-item">
                {inside.isHeating}
              </li>
              <li className="property__inside-item">
                {inside.isCoffeeMachine}
              </li>
              <li className="property__inside-item">
                {inside.isBabySeat}
              </li>
              <li className="property__inside-item">
                {inside.isKitchen}
              </li>
              <li className="property__inside-item">
                {inside.isDishWasher}
              </li>
              <li className="property__inside-item">
                {inside.isCabelTV}
              </li>
              <li className="property__inside-item">
                {inside.isFridge}
              </li>
            </ul>
          </div>

          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
              <span className="property__user-status">
                {host.isPro}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {host.description}
              </p>
              <p className="property__text">
                {host.text}
              </p>
            </div>
          </div>

          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                  </div>
                  <span className="reviews__user-name">
                    Max
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{ width: '80%' }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <time className="reviews__time" dateTime={'2019-04-24'}>April 2019</time>
                </div>
              </li>
            </ul>
            <PropertyForm />
          </section>
        </div>
      </div>
      <section className="property__map map"></section>
    </section>
  );
}
