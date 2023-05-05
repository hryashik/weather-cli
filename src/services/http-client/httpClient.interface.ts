import { ResponseEntity } from "../../entities/response.entity";

export type ClientParams = {
   // token
   key: string,
   // city
   q: string,
   lang: string
}

export interface HttpClient {
   get: (params: ClientParams) => Promise<ResponseEntity>
}