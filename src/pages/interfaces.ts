export interface ICarHomepage {
  isShowCars: IShowCars[];
  notShowCars: INotShowCars[];
}

export interface IShowCars {
  mainImage: string;
  carId: string;
}

export interface INotShowCars {
  mainImage: string;
  carId: string;
}
