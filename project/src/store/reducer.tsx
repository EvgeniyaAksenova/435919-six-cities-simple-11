import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { PropertyOffer } from '../types/property-offer';
import { cities } from '../mocks/cities';
import { getOffersAction, changeCityAction } from './action';

type initialStateType = {
  city: City;
  offers: PropertyOffer[];
}

const initialState: initialStateType = {
  city: cities[4],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersAction, ((state, action) => {
      state.offers = action.payload;}))
    .addCase(changeCityAction, ((state, action) => {
      state.city = action.payload;
      state.offers = state.offers.filter((offer) => offer.city.name === action.payload.name);
    }));
});

export { reducer };
