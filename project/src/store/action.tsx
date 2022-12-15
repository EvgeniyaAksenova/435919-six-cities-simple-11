import {createAction} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { City } from '../types/city';

export const getOffersAction = createAction ('offers/getOffers', () => ({payload: offers}));

export const changeCityAction = createAction ('offers/changeCityAction', (city: City) => ({payload: city}));

export const sortPopular = createAction ('offers/sortPopular');

export const sortPriceMinMax = createAction ('offers/sortPriceMinMax');

export const sortPriceMaxMin = createAction ('offers/sortPriceMaxMin');

export const sortRatingMaxMin = createAction ('offers/sortRatingMaxMin');
