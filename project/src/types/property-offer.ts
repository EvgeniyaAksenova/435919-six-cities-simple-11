export type PropertyOffer= {
    id: number;
    galleryUrl: [string, string, string, string, string, string];
    isPremium: boolean;
    title: string;
    rating: number;
    features: {
      type: string;
      bedrooms: number;
      maxAdults: number;
    };
    price: number;
    inside: {
      isWiFi: boolean;
      isWasingMachine: boolean;
      isTowels: boolean;
      isHeating: boolean;
      isCoffeeMachine: boolean;
      isBabySeat: boolean;
      isKitchen: boolean;
      isDishWasher: boolean;
      isCabelTV: boolean;
      isFridge: boolean;
    };
    host: {
      avatarUrl: [string];
      name: string;
      isPro: boolean;
      description: string;
      text: string;
      };
  }
