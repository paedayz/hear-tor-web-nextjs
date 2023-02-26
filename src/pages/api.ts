import { ICarHomepage } from "./interfaces";
import axios from '@/common/axiosInstance'

export const getHomepageNewCar = async (): Promise<ICarHomepage> => {
    try {
        const carHomepage:ICarHomepage = await axios.get('/car/getHomepageCar').then(res => res.data)
        return carHomepage
    } catch (error) {
        window.alert(error)
        return {
            isShowCars: [],
            notShowCars: []
        }
    }
}