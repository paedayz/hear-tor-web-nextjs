import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: 'https://distinct-pig-wig.cyclic.app/',
});

interface IDecodeToken {
  email: string;
  exp: number;
  name: string;
}

export const getToken = async (): Promise<string | null> => {
  const token: string | null = localStorage.getItem("here-tor-accessToken");
  if (token) {
    const decode: IDecodeToken = jwt_decode(token);
    const isExpire = decode.exp * 1000 < Date.now();
    if (isExpire) {
      const rft = localStorage.getItem("here-tor-refreshToken");
      const res = await instance.post(
        `https://securetoken.googleapis.com/v1/token?key=${rft}`
      );
      if (!res.data) return null;
      localStorage.setItem("here-tor-accessToken", res.data.refresh_token);
      return res.data.access_token;
    } else {
      return token;
    }
  } else {
    return null;
  }
};

export default instance;
