import './property.css';
import { PropertyCard } from './property-card';
import { PropertyArticle } from './property-article';

export function PropertyPage(): JSX.Element {
  return (
    <main className="page__main page__main--property">
      <PropertyCard />
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <PropertyArticle />
            <PropertyArticle />
            <PropertyArticle />
          </div>
        </section>
      </div>
    </main>
  );
}
