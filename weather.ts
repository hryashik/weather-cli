import {getArgs} from "./helpers/args";
import * as http from "http";
import {config} from 'dotenv'

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
}

initCli()