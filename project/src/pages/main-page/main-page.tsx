import { MainPageArticle } from './main-page-article';
import './main-page.css';
import { useState } from 'react';
import { MainPageMap } from './map';
import { CitiesList } from './cities';
import { useAppSelector } from '../../hooks';
import { sortPriceMinMax, sortPriceMaxMin, sortRatingMaxMin, sortPopular } from '../../store/action';
import { useAppDispatch} from '../../hooks';


type MainPageProps = {
  rentalOffers: number;
}

function MainPage(props: MainPageProps): JSX.Element {
  const { rentalOffers } = props;
  const [activeId, setActiveId] = useState(0);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [sortOption, setSortOption] = useState('Popular');
  const {offers} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const articleHoverHandler = (id: number) => {
    setActiveId(id);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{rentalOffers} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0} onClick = {() => setIsOpenForm(!isOpenForm)}>
                {sortOption}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              {isOpenForm ?
                <ul className="places__options places__options--custom places__options--opened" >
                  <li className="places__option places__option--active" tabIndex={0} onClick = {() => {
                    dispatch(sortPopular());
                    setSortOption('Popular');
                    setIsOpenForm(false);
                  }}
                  >Popular
                  </li>
                  <li className="places__option" tabIndex={0} onClick = {() => {
                    dispatch(sortPriceMinMax());
                    setSortOption('Price: low to high');
                    setIsOpenForm(false);
                  }}
                  >Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0} onClick = {() => {
                    dispatch(sortPriceMaxMin());
                    setSortOption('Price: high to low');
                    setIsOpenForm(false);
                  }}
                  >Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0} onClick = {() => {
                    dispatch(sortRatingMaxMin());
                    setSortOption('Top rated first');
                    setIsOpenForm(false);
                  }}
                  >Top rated first
                  </li>
                </ul> : null}
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


