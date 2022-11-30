import './property.css';
import { PropertyCard } from './property-card';
import { PropertyOffer } from '../../types/property-offer';
import { PropertyReview }from '../../types/property-review';
import { PropertyArticle } from './property-article';


type PropertyOfferProps = {
  offer: PropertyOffer;
  offers:  PropertyOffer[];
  reviews: PropertyReview[];
};

export function PropertyPage(props: PropertyOfferProps): JSX.Element {

  return (
    <main className="page__main page__main--property">
      <PropertyCard offer={props.offer} reviews={props.reviews}/>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
          {props.offers.map((offer) => {
                return (
                  <PropertyArticle
                    key={offer.id}
                    galleryUrl={offer.galleryUrl}
                    title={offer.title}
                    price={offer.price}
                    rating={offer.rating}
                    features = {offer.price}
                    />
                )
              });
             }
          </div>
        </section>
      </div>
    </main>
  );
}
