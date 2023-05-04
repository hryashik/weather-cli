import {getArgs} from "./helpers/args";
import {config} from 'dotenv'
import {printError} from "./services/log.service";

config()

function initCli() {
   const args = getArgs(process.argv)
   if (args.h) {
      // Вывести помощь
   }
   if (args.s) {
      // Сохранить город
   }
   if (args.t) {
      // Сохранить токен
   }
   // Вывести погоду

   console.log(args)
   printError('Ошибка')
}

initCli()