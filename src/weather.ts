import { config } from 'dotenv'
import { printError, printHelp } from "./services/log.service";
import { getArgs } from "./helpers/args";
import { saveToken } from "./services/commands.service";
import * as process from "process";

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
      Promise.resolve(saveToken(args.t))
   }
   // Вывести погоду
}

initCli()