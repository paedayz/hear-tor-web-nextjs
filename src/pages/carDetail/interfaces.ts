export interface ICarDetail {
    isShowHomepage: boolean;
    color: string;
    mainImage: string;
    description: string;
    year: string;
    name: string;
    price: number;
    relatedWord: string[];
    carId: string;
    previewImages: string[];
    updatedAt: ITimestamp;
    createdAt: ITimestamp;
    installment: number;
}

export interface ITimestamp {
    _seconds: number;
    _nanoseconds: number;
}

export interface IStoreContact {
    socialMedias: ISocialMedias,
    tels: ITels
}

export interface ISocialMedias {
    instagram: string | null;
    facebook: string | null;
    tiktok: string | null;
    messenger: string | null;
    twitter: string | null;
    youtube: string | null;
    line: string | null;
}

export interface ITels {
    list: ITelsList[]
}

export interface ITelsList {
    name: string;
    tel: string;
}

export interface IRelatedCar {
        carId: string;
        mainImage: string;
        name: string;
        price: number;
        updatedAt: ITimestamp;
        year: string;
        createdAt: ITimestamp;
}