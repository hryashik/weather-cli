import configService from '../config/config.service'
import { printData, printError, printSuccess } from "../log/log.service";
import apiService from "../api/api.service";
import { conversion } from "../../helpers/conversion";

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

async function printWeather() {
   try {
      const {token, city} = configService.getSettings()
      if (!token || !city) {
         throw new Error('no info')
      }
      const data = await apiService.getWeather(token, city)
      printData(conversion(data))
   } catch (e) {
      if (e instanceof Error) {
         if (e.message === 'no info') printError('Не установлен токен или город \n -h для просмотра команд')
         else printError(e.message)
      }
   }
}

export { saveToken, saveCity, printWeather }