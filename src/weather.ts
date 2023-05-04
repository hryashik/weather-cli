import { config } from 'dotenv'
import { printError, printHelp } from "./services/log.service";
import { getArgs } from "./helpers/args";

config()

function initCli() {
   const args = getArgs(process.argv)
   if (args.h) {
      printHelp()
   }
   if (args.c) {
      // Сохранить город
   }
   if (args.t) {
      // Сохранить токен
   }
   // Вывести погоду

   console.log(args)
}

initCli()