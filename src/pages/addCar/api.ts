import axios, { getToken } from "@/common/axiosInstance";

export const addCar = async (formData: FormData): Promise<string | null> => {
    try {
        const accessToken = await getToken()
        
        if(!accessToken) window.location.href = '/'

        const res = await axios.post('car/secure/addCar', formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        return res.data.carId
    } catch (error) {
        return null
    }
}