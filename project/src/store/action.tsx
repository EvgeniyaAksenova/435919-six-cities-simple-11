import {createAction} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { City } from '../types/city';

export const getOffersAction = createAction ('offers/getOffers', () => ({payload: offers}));

export const changeCityAction = createAction ('offers/changeCityAction', (city: City) => ({payload: city}));
