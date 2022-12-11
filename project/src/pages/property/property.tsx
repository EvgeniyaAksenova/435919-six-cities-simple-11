import './property.css';
import { PropertyCard } from './property-card';
import { PropertyOffer } from '../../types/property-offer';
import { PropertyReview }from '../../types/property-review';
import { PropertyArticle } from './property-article';
import { useParams } from 'react-router-dom';


type PropertyOfferProps = {
  offers: PropertyOffer[];
  reviews: PropertyReview[];
};

export function PropertyPage(props: PropertyOfferProps): JSX.Element {
  const params = useParams <{id:string}>();

  const offer = props.offers.find((element) => element.id === Number(params.id));
  return (
    <main className="page__main page__main--property">
      {offer ? <PropertyCard offer={offer} reviews={props.reviews}/> : null}
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {props.offers.map((property) => (
              <PropertyArticle
                key={property.id}
                offer = {property}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
