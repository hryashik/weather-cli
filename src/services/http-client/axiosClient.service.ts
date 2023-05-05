import { ClientParams, HttpClient } from "./httpClient.interface";
import axios, { isAxiosError } from "axios";
import * as process from "process";
import { config } from "dotenv";

config()

class AxiosClient implements HttpClient {
   url: string

   constructor() {
      this.url = process.env.URL as string
   }

   async get(params: ClientParams) {
      try {
         const {data} = await axios.get(this.url, {
            params
         })
         return data
      } catch (e) {
         if (isAxiosError(e)) {
            throw new Error(e.response?.data.error.message)
         }
      }


   }
}

export default AxiosClient