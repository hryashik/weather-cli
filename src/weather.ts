import {
   printHelp,
} from "./services/log/log.service";
import { getArgs } from "./helpers/args";
import {
   printWeather,
   saveCity,
   saveToken
} from "./services/commands/commands.service";
import * as process from "process";


function initCli() {
   const args = getArgs(process.argv)
   if (args.h) {
      printHelp()
   } else {
      if (args.c) {
         saveCity(args.c)
      }
      if (args.t) {
         saveToken(args.t)
      }
      printWeather()
   }

   // Вывести погоду

}

initCli()