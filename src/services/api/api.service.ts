import axios from "axios";
import { HttpClient } from "../http/http.interface";
import AxiosClient from "../http/http.service";

class ApiService {
   client: HttpClient
   constructor(client: HttpClient) {
      this.client = client
   }
}

const apiService = new ApiService(new AxiosClient())

export default apiService