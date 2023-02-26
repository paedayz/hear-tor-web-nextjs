import axios from '@/common/axiosInstance'
import { ICarDetail } from './interfaces'
export const getAllCars = async (): Promise<ICarDetail[]> => {
    try {
        const res = await axios.get('car/getAllCars')
        if(!res.data) return [];
        const allCars:ICarDetail[] = res.data
        return allCars
    } catch (error) {
        return []
    }
}