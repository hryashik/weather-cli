export type Data = {}

export type ClientParams = {
   // token
   key: string,
   // city
   q: string,
   lang: string
}

export interface HttpClient {
   get: (params: ClientParams) => Promise<Data>
}