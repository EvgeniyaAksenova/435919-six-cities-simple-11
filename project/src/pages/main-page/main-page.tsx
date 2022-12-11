import { MainPageArticle } from './main-page-article';
import './main-page.css';
import { useState } from 'react';
import { MainPageMap } from './map';
import { City } from '../../types/city';
import { CitiesList } from './cities';
import { useAppSelector } from '../../hooks';
//import {getOffersAction} from '../../store/action';


type MainPageProps = {
  rentalOffers: number;
  cities: City[];
}

function MainPage(props: MainPageProps): JSX.Element {
  const { rentalOffers, cities } = props;
  const [activeId, setActiveId] = useState(0);
  const {offers} = useAppSelector((state) => state);
  const articleHoverHandler = (id: number) => {
    setActiveId(id);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={cities} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{rentalOffers} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <MainPageArticle
                  key={offer.id}
                  offer={offer}
                  onHover={articleHoverHandler}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <MainPageMap points={offers} activeId={activeId} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;


