import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { PropertyOffer } from '../../types/property-offer';
import { PropertyReview } from '../../types/property-review';
import { City } from '../../types/city';


import LoginPage from '../../pages/login/login';
import MainPage from '../../pages/main-page/main-page';
import {PropertyPage} from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-element';


type AppProps = {
  rentalOffers: number;
  offers: PropertyOffer[];
  reviews: PropertyReview[];
  cities: City[];
}

function App({ rentalOffers, offers, reviews, cities }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage rentalOffers={rentalOffers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage offers = {offers} reviews = {reviews}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
