import { PropertyOffer } from '../types/property-offer';

export const offers: PropertyOffer[] = [
  {
    id: 12,
    galleryUrl: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',],
    isPremium: true,
    title: 'luxurious studio at great location',
    rating: 4.8,
    features: {
      type: 'Apartment',
      bedrooms: 3,
      maxAdults: 4,
    },
    price: 120,
    inside: {
      isWiFi: true,
      isWasingMachine: true,
      isTowels: true,
      isHeating: true,
      isCoffeeMachine: true,
      isBabySeat: true,
      isKitchen: true,
      isDishWasher: true,
      isCabelTV: true,
      isFridge: true,
    },
    host: {
      avatarUrl: ['img/avatar-angelina.jpg'],
      name: 'Angelina',
      isPro: true,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
      text: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    }
  }
];

