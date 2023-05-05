import configService from '../config/config.service'
import { printError, printSuccess } from "../log/log.service";

function saveToken(token: string) {
   try {
      configService.update('token', token)
      printSuccess('Токен обновлен')
} catch (e) {
      if (e instanceof Error) printError(e.message)
   }
}

function saveCity(city: string) {
   try {
      configService.update('city', city)
      printSuccess('Город обновлен')
   } catch (e) {
      if (e instanceof Error) printError(e.message)
   }
}

function printWeather() {
   try {

   } catch (e) {

   }
}
export { saveToken, saveCity }