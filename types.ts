
export type Language = 'en' | 'ar';

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  buttonText: string;
  buttonTextAr: string;
}

export interface Package {
  name: string;
  nameAr: string;
  subtitle?: string;
  subtitleAr?: string;
  price: string;
  priceAr: string;
  features: {
    label: string;
    labelAr: string;
    value: string;
    valueAr: string;
    included: boolean;
  }[];
  isBestValue?: boolean;
}

export interface Translation {
  home: string;
  services: string;
  packages: string;
  about: string;
  contact: string;
  learnMore: string;
  bookNow: string;
  viewDetails: string;
  legacyTitle: string;
  legacySubtitle: string;
  workshopTitle: string;
  smartBooking: string;
  bookingSubtitle: string;
  selectCar: string;
  selectYear: string;
  requestQuote: string;
  chatWhatsApp: string;
}
