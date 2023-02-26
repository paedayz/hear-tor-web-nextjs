import { ITimestamp } from "../carDetail/interfaces";

export interface ICarDetail {
    year:string;
    description: string;
    color: string;
    relatedWord: string[];
    isShowHomepage: boolean;
    createdAt: ITimestamp;
    previewImages: string[];
    name: string;
    price: number;
    carId: string;
    updatedAt: ITimestamp;
    mainImage: string;
    installment: number;
}