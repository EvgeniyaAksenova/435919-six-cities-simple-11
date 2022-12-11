import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { cities } from './mocks/cities';
import { store } from './store';
import { Provider } from 'react-redux';
import { getOffersAction } from './store/action';

const Setting = {
  RentalOffers: 312,
} as const;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
store.dispatch(getOffersAction());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        rentalOffers={Setting.RentalOffers}
        offers={offers}
        reviews={reviews}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
);
