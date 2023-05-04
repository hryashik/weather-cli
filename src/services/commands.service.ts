import configService from './config.service'
import { printError } from "./log.service";

function saveToken(token: string) {
   try {
      configService.update('token', token)
   } catch (e) {
      if (e instanceof Error) {
         printError(e.message)
      }
   }
}

export { saveToken }