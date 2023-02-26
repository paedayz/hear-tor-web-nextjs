import axios, { getToken } from "@/common/axiosInstance";
import { ICarDetail, IRelatedCar, IStoreContact } from "./interfaces";

export const getCarById = async (carId: string): Promise<ICarDetail | null> => {
  try {
    const res = await axios.get(`car/getCarById/${carId}`);
    if (!res.data) return null;
    const carDetail: ICarDetail = res.data;
    return carDetail;
  } catch (error) {
    return null;
  }
};

export const getStoreContact = async (): Promise<IStoreContact | null> => {
  try {
    const res = await axios.get("store-detail/getStoreDetail");
    if (!res.data) return null;
    const storeContact: IStoreContact = res.data;
    return storeContact;
  } catch (error) {
    return null;
  }
};

export const getCarByKeywords = async (
  keywords: string[]
): Promise<IRelatedCar[]> => {
  try {
    const res = await axios.post("car/getCarByKeywords", { keywords });
    if (!res.data) return [];
    const storeContact: IRelatedCar[] = res.data;
    return storeContact;
  } catch (error) {
    return [];
  }
};

export const deleteCar = async (carId: string): Promise<void> => {
  try {
    const accessToken = await getToken();

    if (!accessToken) window.location.href = "/";
    await axios.post(
      "car/secure/deleteCar",
      {
        ids: [carId],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
  }
};

export const editCarDetail = async (formData: FormData): Promise<string | null> => {
  try {
    const accessToken = await getToken();

    if (!accessToken) window.location.href = "/";
    const res = await axios.put('car/secure/editCar', formData ,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return res.data.carId
  } catch (error) {
    return null
  }
}