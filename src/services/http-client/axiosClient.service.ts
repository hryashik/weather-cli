import { ClientParams, HttpClient } from "./httpClient.interface";
import axios from "axios";
import * as process from "process";
import { config } from "dotenv";

config()

class AxiosClient implements HttpClient {
   url: string

   constructor() {
      this.url = process.env.URL as string
      console.log(this.url)
   }

   async get(params: ClientParams) {
      const {data} = await axios.get(this.url, {
         params
      })
      return data
   }
}

export default AxiosClient