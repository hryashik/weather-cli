import { ClientParams, HttpClient } from "../http-client/httpClient.interface";
import AxiosClient from "../http-client/axiosClient.service";

class ApiService {
   client: HttpClient

   constructor(client: HttpClient) {
      this.client = client
   }

   public getWeather(token: string, city: string) {
      const params: ClientParams = {
         key: token,
         q: city,
         lang: 'ru'
      }
      return this.client.get(params)
   }
}

const apiService = new ApiService(new AxiosClient())

export default apiService