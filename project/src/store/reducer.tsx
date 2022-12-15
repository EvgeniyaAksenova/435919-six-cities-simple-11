import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { PropertyOffer } from '../types/property-offer';
import { cities } from '../mocks/cities';
import { getOffersAction, changeCityAction, sortPriceMinMax, sortPriceMaxMin, sortRatingMaxMin, sortPopular } from './action';

type initialStateType = {
  city: City;
  offers: PropertyOffer[];
  popularOffers: PropertyOffer[];
}

const initialState: initialStateType = {
  city: cities[4],
  offers: [],
  popularOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, ((state, action) => {
      state.offers = action.payload;
      state.popularOffers = action.payload;
    }))
    .addCase(changeCityAction, ((state, action) => {
      state.city = action.payload;
      state.offers = state.offers.filter((offer) => offer.city.name === action.payload.name);
    }))
    .addCase(sortPriceMinMax, ((state) => {
      state.offers = state.offers.sort((a,b) => a.price - b.price);
    }))
    .addCase(sortPriceMaxMin, ((state) => {
      state.offers = state.offers.sort((a,b) => b.price - a.price);
    }))
    .addCase(sortRatingMaxMin, ((state) => {
      state.offers = state.offers.sort((a,b) => a.rating - b.rating);
    }))
    .addCase(sortPopular, ((state) => {
      state.offers = state.popularOffers.filter((offer) => offer.city.name === state.city.name);
    }));
});
export { reducer };
