import { bgBlueBright, bgCyan, bgGreen, bgRed } from "chalk";
import configService from "../config/config.service";


export function printError(error: any) {
   console.log(bgRed(' ERROR '), error)
}

export function printSuccess(message: string) {
   console.log(bgGreen(' SUCCESS '), message)
}

export function printHelp() {
   const settings = configService.getSettings()
   console.log(
      ` ${bgCyan(' HELP ')}
  Без параметров - вывод погоды
  -c [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] ля сохранения токена
  
  Текущие параметры конфига: 
 `, settings
   )
}

export type PrintWeatherData = {
   country: string
   city: string
   temp: number
   feelsLike: number
   condition: string
   icon: string
   wind: number
}

export function printData(data: PrintWeatherData) {
   console.log(
           `${bgBlueBright('  ПОГОДА  ')}
      Страна: ${data.country}
      Город: ${data.city}
      Температура: ${data.temp}
      Ощущается как: ${data.feelsLike}
      Погода: ${data.condition} ${data.icon}
      Ветер: ${data.wind} КМ/Ч
      `)
}