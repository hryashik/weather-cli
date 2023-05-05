import { config } from 'dotenv'
import {
   printError,
   printHelp,
   printSuccess
} from "./services/log/log.service";
import { getArgs } from "./helpers/args";
import { saveCity, saveToken } from "./services/commands/commands.service";
import * as process from "process";

config()

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
   }
   // Вывести погоду

}

initCli()