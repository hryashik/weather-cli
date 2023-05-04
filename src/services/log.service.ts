import { bgCyan, bgGreen, bgRed } from "chalk";


export function printError(error: any) {
   console.log(bgRed(' ERROR '), error)
}

export function printSuccess(message: string) {
   console.log(bgGreen(' SUCCESS '), message)
}

export function printHelp() {
   console.log(
`${bgCyan(' HELP ')}
  Без параметров - вывод погоды
  -c [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] ля сохранения токена
 `
   )
}