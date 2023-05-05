import configService from '../config/config.service'
import { printError, printSuccess } from "../log/log.service";
import apiService from "../api/api.service";

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
      console.log(data)
   } catch (e) {
      if (e instanceof Error) {
         if (e.message === 'no info') printError('Не установлен токен или город')
         else /*printError('Произошла ошибка в получении погоды')*/ console.log(e)
      }
   }
}

export { saveToken, saveCity, printWeather }